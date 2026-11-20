/**
 * MuleSoft Hub - Shared Diagram Engine
 * Handles Hotspots, Step Player, Full-Screen Overlay, and Deep Links.
 */
(function() {
  'use strict';

  var activeStep = null;
  var playingInterval = null;
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initDiagrams() {
    var figures = document.querySelectorAll('.hub-diagram, .diagram-container');
    figures.forEach(function(fig, figIndex) {
      var svg = fig.querySelector('svg');
      if (!svg) return;

      var steps = Array.from(svg.querySelectorAll('g[data-step]'));
      if (steps.length === 0) return;

      // Ensure stable id on figure
      if (!fig.id) {
        var modSection = fig.closest('section');
        var modId = modSection ? modSection.id : 'diagram-' + figIndex;
        fig.id = modId + '-diagram';
      }

      // Hotspots setup
      steps.sort(function(a, b) {
        return parseInt(a.getAttribute('data-step') || '0', 10) - parseInt(b.getAttribute('data-step') || '0', 10);
      });

      steps.forEach(function(step) {
        step.setAttribute('tabindex', '0');
        step.setAttribute('role', 'button');
        var title = step.getAttribute('data-title') || 'Step';
        step.setAttribute('aria-label', title);
      });

      // Create Tooltip container
      var tooltip = fig.querySelector('.diagram-tooltip');
      if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'diagram-tooltip';
        tooltip.innerHTML = '<div class="diagram-tooltip-title"></div><div class="diagram-tooltip-note"></div>';
        fig.appendChild(tooltip);
      }

      // Create Step Controls if > 1 step
      if (steps.length > 1 && !fig.querySelector('.diagram-controls')) {
        var controls = document.createElement('div');
        controls.className = 'diagram-controls';
        controls.setAttribute('role', 'region');
        controls.setAttribute('aria-label', 'Diagram step controls');

        var dotsHtml = steps.map(function(s, idx) {
          return '<span class="diagram-dot' + (idx === 0 ? ' active' : '') + '" data-step-idx="' + idx + '" title="Step ' + (idx + 1) + '"></span>';
        }).join('');

        controls.innerHTML = [
          '<div class="diagram-btn-group">',
          '  <button type="button" class="diagram-ctrl-btn btn-prev" aria-label="Previous step">◀ Prev</button>',
          '  <button type="button" class="diagram-ctrl-btn btn-play" aria-label="Play step walkthrough">▶ Play</button>',
          '  <button type="button" class="diagram-ctrl-btn btn-next" aria-label="Next step">Next ▶</button>',
          '</div>',
          '<div class="diagram-dots">' + dotsHtml + '</div>',
          '<div class="diagram-step-counter">Step 1 of ' + steps.length + '</div>'
        ].join('');

        fig.appendChild(controls);
        wireControls(fig, svg, steps, tooltip, controls);
      }
    });

    handleDeepLink();
  }

  function wireControls(fig, svg, steps, tooltip, controls) {
    var currentIndex = 0;
    var timer = null;
    var btnPlay = controls.querySelector('.btn-play');
    var btnPrev = controls.querySelector('.btn-prev');
    var btnNext = controls.querySelector('.btn-next');
    var counter = controls.querySelector('.diagram-step-counter');
    var dots = Array.from(controls.querySelectorAll('.diagram-dot'));

    function highlight(idx, showTip) {
      if (idx < 0) idx = 0;
      if (idx >= steps.length) idx = steps.length - 1;
      currentIndex = idx;

      fig.classList.add('diagram-active');
      steps.forEach(function(s, i) {
        if (i === idx) {
          s.classList.add('step-highlight');
        } else {
          s.classList.remove('step-highlight');
        }
      });

      dots.forEach(function(d, i) {
        d.classList.toggle('active', i === idx);
      });

      if (counter) {
        counter.textContent = 'Step ' + (idx + 1) + ' of ' + steps.length;
      }

      var activeEl = steps[idx];
      var title = activeEl.getAttribute('data-title') || '';
      var note = activeEl.getAttribute('data-note') || '';

      if (showTip && title) {
        tooltip.querySelector('.diagram-tooltip-title').textContent = title;
        tooltip.querySelector('.diagram-tooltip-note').textContent = note;
        tooltip.classList.add('visible');

        if (window.innerWidth > 768) {
          var bbox = activeEl.getBoundingClientRect();
          var figBox = fig.getBoundingClientRect();
          var top = bbox.bottom - figBox.top + 8;
          var left = Math.max(10, Math.min(bbox.left - figBox.left, figBox.width - 320));
          tooltip.style.top = top + 'px';
          tooltip.style.left = left + 'px';
        }
      } else {
        tooltip.classList.remove('visible');
      }
    }

    function stopPlay() {
      if (timer) {
        clearInterval(timer);
        timer = null;
        if (btnPlay) btnPlay.textContent = '▶ Play';
      }
    }

    function startPlay() {
      if (prefersReducedMotion) return;
      if (timer) {
        stopPlay();
        return;
      }
      btnPlay.textContent = '⏸ Pause';
      timer = setInterval(function() {
        var nextIdx = (currentIndex + 1) % steps.length;
        highlight(nextIdx, true);
      }, 1800);
    }

    btnPlay.addEventListener('click', function() {
      if (timer) stopPlay(); else startPlay();
    });

    btnPrev.addEventListener('click', function() {
      stopPlay();
      highlight(currentIndex - 1, true);
    });

    btnNext.addEventListener('click', function() {
      stopPlay();
      highlight(currentIndex + 1, true);
    });

    dots.forEach(function(dot) {
      dot.addEventListener('click', function() {
        stopPlay();
        var targetIdx = parseInt(dot.getAttribute('data-step-idx') || '0', 10);
        highlight(targetIdx, true);
      });
    });

    // Tap/Click on steps directly
    steps.forEach(function(step, idx) {
      step.addEventListener('click', function(e) {
        e.stopPropagation();
        stopPlay();
        highlight(idx, true);
      });
      step.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          stopPlay();
          highlight(idx, true);
        }
      });
    });
  }

  // Delegated clear on outside click / escape
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.hub-diagram, .diagram-container')) {
      document.querySelectorAll('.hub-diagram.diagram-active').forEach(function(f) {
        f.classList.remove('diagram-active');
        f.querySelectorAll('.step-highlight').forEach(function(s) { s.classList.remove('step-highlight'); });
        var tip = f.querySelector('.diagram-tooltip');
        if (tip) tip.classList.remove('visible');
      });
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.hub-diagram.diagram-active').forEach(function(f) {
        f.classList.remove('diagram-active');
        f.querySelectorAll('.step-highlight').forEach(function(s) { s.classList.remove('step-highlight'); });
        var tip = f.querySelector('.diagram-tooltip');
        if (tip) tip.classList.remove('visible');
      });
    }
  });

  // Deep Link support: #mod-x-diagram-step-y
  function handleDeepLink() {
    var hash = window.location.hash;
    if (!hash) return;
    var match = hash.match(/^#(mod-[a-z0-9]+)-diagram(?:-step-([0-9]+))?$/);
    if (match) {
      var modId = match[1];
      var stepNum = match[2] ? parseInt(match[2], 10) : 1;
      var fig = document.getElementById(modId + '-diagram') || document.querySelector('#' + modId + ' .hub-diagram');
      if (fig) {
        fig.scrollIntoView({ behavior: 'smooth', block: 'center' });
        var stepEl = fig.querySelector('g[data-step="' + stepNum + '"]');
        if (stepEl) {
          setTimeout(function() {
            stepEl.dispatchEvent(new MouseEvent('click', { bubbles: true }));
          }, 400);
        }
      }
    }
  }

  window.addEventListener('hashchange', handleDeepLink);

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDiagrams);
  } else {
    initDiagrams();
  }
})();
