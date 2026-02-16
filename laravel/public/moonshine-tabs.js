// Persist MoonShine tabs to URL ?tab=... and restore on load
(function () {
  var PARAM = 'ms_tab';
  function updateQueryParam(key, value) {
    try {
      var url = new URL(window.location.href);
      var params = url.searchParams;
      if (value == null || value === '') {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      var newUrl = url.pathname + (params.toString() ? '?' + params.toString() : '') + url.hash;
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, '', newUrl);
      }
    } catch (e) {
      // no-op
    }
  }

  function getQueryParam(key) {
    try {
      var url = new URL(window.location.href);
      return url.searchParams.get(key);
    } catch (e) {
      return null;
    }
  }

  function normalize(str) {
    return (str || '')
      .toString()
      .trim()
      .replace(/\s+/g, ' ');
  }

  function getTabLabel(el) {
    if (!el) return '';
    // Prefer data attributes if present
    var dataVal = el.getAttribute('data-value') || el.getAttribute('data-tab') || el.getAttribute('data-id');
    if (dataVal) return normalize(dataVal);
    // Fallback to text
    return normalize(el.textContent || el.innerText || '');
  }

  function extractTabIdFromButton(el) {
    if (!el) return null;
    var ds = el.dataset || {};
    if (ds.tabId) return normalize(ds.tabId);
    if (ds.value) return normalize(ds.value);
    if (ds.id) return normalize(ds.id);

    var attrCandidates = [
      '@click',
      'x-on:click',
      'x-on:click.prevent',
      '@click.prevent',
      'onclick',
    ];
    for (var i = 0; i < attrCandidates.length; i++) {
      var name = attrCandidates[i];
      var val = el.getAttribute(name);
      if (!val) continue;
      var m = val.match(/setActiveTab\s*\(\s*([`'\"]?)([^)`'\"\\]+)\1\s*\)/);
      if (m && m[2]) {
        return normalize(m[2]);
      }
    }
    return null;
  }

  function isButtonActive(btn) {
    return !!btn && btn.classList && btn.classList.contains('_is-active');
  }

  function activateTabFromParam() {
    var desired = getQueryParam(PARAM);
    if (!desired) return;
    desired = normalize(desired);

    var matched = false;

    // MoonShine tabs: .tabs-list .tabs-button with setActiveTab(...)
    var msButtons = document.querySelectorAll('.tabs-list .tabs-button');
    msButtons.forEach(function (btn) {
      if (matched) return;
      var id = extractTabIdFromButton(btn);
      if (id && normalize(id) === desired) {
        if (!isButtonActive(btn)) {
          btn.click();
        }
        matched = true;
      }
    });
    if (matched) return;

    // ARIA tabs fallback
    var ariaButtons = document.querySelectorAll('[role="tablist"] [role="tab"]');
    ariaButtons.forEach(function (btn) {
      if (matched) return;
      if (normalize(getTabLabel(btn)) === desired) {
        if (!isButtonActive(btn)) {
          btn.click();
        }
        matched = true;
      }
    });
    if (matched) return;

    // Fallback by label or data-attrs
    var anyButtons = document.querySelectorAll('.tabs-list .tabs-button, [data-tab], [data-value], [data-id]');
    anyButtons.forEach(function (btn) {
      if (matched) return;
      if (normalize(getTabLabel(btn)) === desired) {
        if (!isButtonActive(btn)) {
          btn.click();
        }
        matched = true;
      }
    });
    return matched;
  }

  function bindTabClicks() {
    var clickHandler = function (ev) {
      var target = ev.currentTarget;
      var id = extractTabIdFromButton(target);
      if (id) {
        updateQueryParam(PARAM, id);
        return;
      }
      var label = getTabLabel(target);
      if (label) updateQueryParam(PARAM, label);
    };

    // MoonShine buttons
    document.querySelectorAll('.tabs-list .tabs-button').forEach(function (btn) {
      btn.removeEventListener('click', clickHandler);
      btn.addEventListener('click', clickHandler, { passive: true });
    });

    // ARIA tabs
    document.querySelectorAll('[role="tablist"] [role="tab"]').forEach(function (btn) {
      btn.removeEventListener('click', clickHandler);
      btn.addEventListener('click', clickHandler, { passive: true });
    });

    // Fallbacks: elements that look like tabs by data-attrs
    document.querySelectorAll('[data-tab], [data-value], [data-id]').forEach(function (btn) {
      if (btn.getAttribute('role') === 'tab') return;
      if (btn.classList && btn.classList.contains('tabs-button')) return;
      btn.removeEventListener('click', clickHandler);
      btn.addEventListener('click', clickHandler, { passive: true });
    });
  }

  function init() {
    bindTabClicks();

    var activated = false;
    var attempts = 0;
    var maxAttempts = 200; // ~10s @ 100ms
    var interval = setInterval(function () {
      if (!activated) {
        activated = !!activateTabFromParam();
      }
      if (activated || ++attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100);

    var observer = new MutationObserver(function () {
      bindTabClicks();
      if (!activated) {
        activated = !!activateTabFromParam();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


