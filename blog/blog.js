// MuleSoft Hub Blog: copy-to-clipboard buttons for code blocks
(function () {
  function addCopy(pre) {
    if (pre.querySelector('.copy-btn')) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy code to clipboard');
    btn.addEventListener('click', function () {
      var code = pre.querySelector('code');
      var text = (code || pre).innerText;
      var done = function () { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = 'Copy'; }, 1800); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {});
      }
    });
    pre.appendChild(btn);
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.post-body pre').forEach(addCopy);
  });
})();
