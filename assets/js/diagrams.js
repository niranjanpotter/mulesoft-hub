/**
 * MuleSoft Hub - Shared Diagram Engine
 * Handles Hotspots, Step Player, Full-Screen Overlay, and Deep Links.
 * Uses lazy IntersectionObserver initialization so off-screen SVGs add zero startup overhead.
 */
(function() {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var enhancedCounter = 0;

  function enhanceDiagram(fig, figIndex) {
    if (!fig || fig.dataset.diagramEnhanced) return;
    var svg = fig.querySelector('svg');
    if (!svg) return;

    var steps = Array.from(svg.querySelectorAll('g[data-step]'));
    if (steps.length === 0) {
      fig.dataset.diagramEnhanced = '1';
      return;
    }
    fig.dataset.diagramEnhanced = '1';

    if (!fig.id) {
      var modSection = fig.closest('section');
      var modId = modSection ? modSection.id : 'diagram-' + figIndex;
      fig.id = modId + '-diagram';
    }

    steps.sort(function(a, b) {
      return parseInt(a.getAttribute('data-step') || '0', 10) - parseInt(b.getAttribute('data-step') || '0', 10);
    });

    steps.forEach(function(step) {
      step.setAttribute('tabindex', '0');
      step.setAttribute('role', 'button');
      var title = step.getAttribute('data-title') || 'Step';
      step.setAttribute('aria-label', title);
    });

    var tooltip = fig.querySelector('.diagram-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.className = 'diagram-tooltip';
      tooltip.innerHTML = '<div class="diagram-tooltip-title"></div><div class="diagram-tooltip-note"></div>';
      fig.appendChild(tooltip);
    }

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
  }

  var diagramObserver = null;
  if ('IntersectionObserver' in window) {
    diagramObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        diagramObserver.unobserve(entry.target);
        enhanceDiagram(entry.target, enhancedCounter++);
      });
    }, { rootMargin: '300px 0px' });
  }

  window.observeHubDiagrams = function(rootEl) {
    var scope = (rootEl && typeof rootEl.querySelectorAll === 'function') ? rootEl : document;
    var figures = scope.querySelectorAll('.hub-diagram, .diagram-container');
    figures.forEach(function(fig) {
      if (fig.dataset.diagramEnhanced || fig.dataset.diagramObserved) return;
      fig.dataset.diagramObserved = '1';
      if (diagramObserver) {
        diagramObserver.observe(fig);
      } else {
        enhanceDiagram(fig, enhancedCounter++);
      }
    });
  };

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

  function handleDeepLink() {
    var hash = window.location.hash;
    if (!hash) return;
    var match = hash.match(/^#(mod-[a-z0-9]+)-diagram(?:-step-([0-9]+))?$/);
    if (match) {
      var modId = match[1];
      var stepNum = match[2] ? parseInt(match[2], 10) : 1;
      var locateAndTrigger = function() {
        var fig = document.getElementById(modId + '-diagram') || document.querySelector('#' + modId + ' .hub-diagram');
        if (fig) {
          enhanceDiagram(fig, enhancedCounter++);
          fig.scrollIntoView({ behavior: 'smooth', block: 'center' });
          var stepEl = fig.querySelector('g[data-step="' + stepNum + '"]');
          if (stepEl) {
            setTimeout(function() {
              stepEl.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            }, 400);
          }
        }
      };
      if (document.getElementById(modId)) {
        locateAndTrigger();
      } else if (typeof window.ensureModulesLoaded === 'function') {
        window.ensureModulesLoaded({ sliced: false }).then(locateAndTrigger);
      }
    }
  }

  window.addEventListener('hashchange', handleDeepLink);

  function bootDiagrams() {
    window.observeHubDiagrams(document);
    handleDeepLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootDiagrams);
  } else {
    bootDiagrams();
  }
})();
