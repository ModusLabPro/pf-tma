// Автообновление страницы MoonShine после успешной сортировки файлов
// Поддерживает fetch и XMLHttpRequest (axios тоже использует XHR)
(function () {
  var MATCHES = ['/file/sort/reorder-images', '/file/sort/reorder-videos'];
  var RELOAD_DELAY = 150; // мс — даём бэкенду завершить транзакцию

  function shouldHandle(url) {
    if (!url) return false;
    return MATCHES.some(function (part) {
      return url.indexOf(part) !== -1;
    });
  }

  function scheduleReload() {
    clearTimeout(scheduleReload._t);
    scheduleReload._t = setTimeout(function () {
      window.location.reload();
    }, RELOAD_DELAY);
  }

  // Patch fetch
  if (typeof window.fetch === 'function') {
    var _fetch = window.fetch;
    window.fetch = function (input, init) {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      var method =
        (init && init.method) ||
        (input && input.method) ||
        (input && input.headers && input.headers.get && input.headers.get('X-HTTP-Method-Override')) ||
        'GET';

      var promise = _fetch.apply(this, arguments);
      if (shouldHandle(url) && (method || '').toUpperCase() === 'POST') {
        promise
          .then(function (resp) {
            if (resp && resp.ok) {
              scheduleReload();
            }
            return resp;
          })
          .catch(function () {});
      }
      return promise;
    };
  }

  // Patch XMLHttpRequest (для axios)
  if (typeof window.XMLHttpRequest !== 'undefined') {
    var origOpen = XMLHttpRequest.prototype.open;
    var origSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function (method, url) {
      this._ms_reorder = {
        method: (method || '').toUpperCase(),
        url: url || '',
      };
      return origOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function () {
      if (this._ms_reorder && shouldHandle(this._ms_reorder.url) && this._ms_reorder.method === 'POST') {
        var xhr = this;
        xhr.addEventListener('load', function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            scheduleReload();
          }
        });
      }
      return origSend.apply(this, arguments);
    };
  }
})();

