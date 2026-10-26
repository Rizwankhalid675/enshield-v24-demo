(function () {
  var key = 'enshield.theme.v1';
  var mode = 'light';
  try {
    var saved = window.localStorage.getItem(key);
    if (saved === 'dark' || saved === 'light' || saved === 'system') mode = saved;
  } catch (_) {
    // Storage is optional; the deterministic first-run default remains light.
  }
  var resolved = mode === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : mode;
  var root = document.documentElement;
  root.dataset.themeMode = mode;
  root.dataset.theme = resolved;
  root.style.colorScheme = resolved;
})();
