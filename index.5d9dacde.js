// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fQFrJ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ee62429a5d9dacde";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1Z4Rq":[function(require,module,exports) {
// On first page load
var _elementsJs = require("./elements.js");
var _eventHandlersJs = require("./event-handlers.js");
var _focusoutJs = require("./focusout.js");
var _storageJs = require("./storage.js");
var _resetJs = require("./reset.js");
var _scrollJs = require("./scroll.js");
var _validationJs = require("./validation.js");
document.addEventListener("DOMContentLoaded", (ev)=>{
    (0, _storageJs.populateLocaleStorageData)([
        (0, _elementsJs.formMain)
    ]);
    (0, _eventHandlersJs.onSubmit_initialLoad)(ev);
});
// -- Button-to-top listeners
window.addEventListener("scroll", (0, _scrollJs.onScreenScroll));
(0, _elementsJs.btnToTop).addEventListener("click", (0, _scrollJs.goToScreenTop));
// -- Buttons - global
(0, _elementsJs.btnGlobalReset).addEventListener("click", (0, _resetJs.onGlobalReset));
(0, _elementsJs.btnGlobalSave).addEventListener("click", (0, _eventHandlersJs.onGlobalSave));
// Listeners
(0, _focusoutJs.attachFocusoutValidation)();
(0, _validationJs.attachOnFocusoutDecimalPointValidation)();
// -- Buttons listeners
document.addEventListener("click", (ev)=>{
    if (ev.target.tagName !== "BUTTON") return;
    const btnsGroupClassName = ev.target.parentElement.className;
    const btnClassName = ev.target.className;
    if (btnsGroupClassName.includes("-main")) {
        // console.log('MAIN');
        if (btnClassName === "btn-submit") (0, _eventHandlersJs.onSubmit_fMain)(ev);
        else if (btnClassName === "btn-reset") (0, _resetJs.onReset_fMain)(true);
        else if (btnClassName === "btn-save") (0, _eventHandlersJs.onSave_fMain)(ev);
    }
});

},{"./elements.js":"auzFE","./event-handlers.js":"3jR1U","./focusout.js":"3WGYK","./storage.js":"j1l1C","./reset.js":"50Kuz","./scroll.js":"ox3Ut","./validation.js":"68QtQ"}],"auzFE":[function(require,module,exports) {
// -- Forms
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formMain", ()=>formMain);
parcelHelpers.export(exports, "resultElementsArr_fMain", ()=>resultElementsArr_fMain);
parcelHelpers.export(exports, "resultElementsObj_fMain", ()=>resultElementsObj_fMain);
parcelHelpers.export(exports, "btnsGlobal", ()=>btnsGlobal);
parcelHelpers.export(exports, "btnToTop", ()=>btnToTop);
parcelHelpers.export(exports, "btnGlobalReset", ()=>btnGlobalReset);
parcelHelpers.export(exports, "btnGlobalSave", ()=>btnGlobalSave);
const formMain = document.querySelector("#form-main");
const resultElementsArr_fMain = getFormOutputsArray(formMain);
const resultElementsObj_fMain = getFormOutputsObject(formMain);
const btnsGlobal = document.querySelector(".btns-global");
const btnToTop = document.querySelector("#btn-to-top");
const btnGlobalReset = document.querySelector("#btn-reset-global ");
const btnGlobalSave = document.querySelector("#btn-save-global");
// -- Functions
function getFormOutputsArray(formElem) {
    return Array.from(formElem.elements).filter((el)=>el.tagName === "OUTPUT");
}
function getFormOutputsObject(formElem) {
    const obj = {};
    const arr = Array.from(formElem.elements).filter((el)=>el.tagName === "OUTPUT");
    const x = arr.forEach((el)=>{
        obj[el.name] = el;
    });
    return obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3jR1U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onSubmit_initialLoad", ()=>onSubmit_initialLoad);
parcelHelpers.export(exports, "onSubmit_fMain", ()=>onSubmit_fMain);
parcelHelpers.export(exports, "onSave_fMain", ()=>onSave_fMain);
// Basic
parcelHelpers.export(exports, "onGlobalSave", ()=>onGlobalSave);
var _printJs = require("./print.js");
var _elementsJs = require("./elements.js");
var _genericJs = require("./generic.js");
var _storageJs = require("./storage.js");
var _resetJs = require("./reset.js");
var _alertsJs = require("./alerts.js");
var _mathJs = require("./math.js");
function onSubmit_initialLoad(ev) {
    onSubmit(ev, (0, _elementsJs.formMain), {
        isFirstPageLoad: true
    }, (0, _printJs.printResult_formMain));
}
function onSubmit_fMain(ev) {
    onSubmit(ev, (0, _elementsJs.formMain), {
        isFirstPageLoad: false
    }, (0, _printJs.printResult_formMain), (0, _resetJs.resetResults_fMain), "#results-fMain");
}
function onSave_fMain(ev) {
    onSave(ev, (0, _elementsJs.formMain), true);
}
function onGlobalSave(ev) {
    const allForms = document.querySelectorAll("form");
    for (const form of allForms)onSave(ev, form, false);
    (0, _alertsJs.checkmarkAlertGreen)(true);
}
function onSave(ev, formElem, hasCheckmark) {
    const currFormData = (0, _genericJs.getFormDataToObject)(formElem);
    const currFormName = formElem.name;
    (0, _storageJs.setLocalStorage)(currFormData, currFormName);
    (0, _alertsJs.checkmarkAlertGreen)(hasCheckmark);
}
function onSubmit(ev, formElem, loadingConfig, printFunc, resetFormResultsFunc, href) {
    if (loadingConfig.isFirstPageLoad !== true) ev.preventDefault();
    const data = (0, _genericJs.getData)(formElem, loadingConfig, resetFormResultsFunc);
    if (data === false) return;
    (0, _storageJs.setLocalStorage)(data, formElem.name);
    const resultsData = (0, _mathJs.calculate_fMain)(data);
    printFunc(resultsData);
    if (loadingConfig.isFirstPageLoad !== true) {
        (0, _alertsJs.checkmarkAlertGreen)(true);
        const screenWidth = window.screen.width;
        const screenAvailWidth = window.screen.availWidth;
        if (href) {
            if (screenWidth <= 680 || screenAvailWidth <= 680) location.href = href;
        }
    }
}

},{"./print.js":"6GrPv","./elements.js":"auzFE","./generic.js":"7kBVm","./storage.js":"j1l1C","./reset.js":"50Kuz","./alerts.js":"g7ava","./math.js":"dL7n2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6GrPv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "printResult_formMain", ()=>printResult_formMain);
// IMPORTS
var _elementsJs = require("./elements.js");
function printResult_formMain(resultsData) {
    const d = resultsData;
    const el = (0, _elementsJs.resultElementsObj_fMain);
    printResult(d.doughWeight, el.doughWeight, 0);
    printResult(d.flourWeight, el.flourWeight, 0);
    printResult(d.saltWeight, el.saltWeight, 0);
    printResult(d.liquidIngredsWeight, el.liquidIngredsWeight, 0, {
        prefix: "",
        postfix: " g"
    });
    printResult(d.waterWeight, el.waterWeight, 0);
    printResult(d.vinegarWeight, el.vinegarWeight, 0);
    printResult(d.oilWeight, el.oilWeight, 0);
}
function printResult(value, resultElem, toFixedIndex, additionalTextObj) {
    // additionalTextObj = {prefix: '', postfix: ''};
    let result;
    if (value) {
        if (additionalTextObj) result = `${additionalTextObj.prefix}${value.toFixed(toFixedIndex)}${additionalTextObj.postfix}`;
        else result = `${value.toFixed(toFixedIndex)}`;
    } else result = "";
    resultElem.style.fontWeight = "bold";
    resultElem.textContent = result;
}

},{"./elements.js":"auzFE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kBVm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFormDataToObject", ()=>getFormDataToObject);
parcelHelpers.export(exports, "getData", ()=>getData);
// -- Form disable
parcelHelpers.export(exports, "inactivateAllFormsAndLinks", ()=>inactivateAllFormsAndLinks);
var _elementsJs = require("./elements.js");
var _validationJs = require("./validation.js");
function getFormDataToObject(formElem) {
    return Object.fromEntries(new FormData(formElem));
}
function getData(formElem, pageLoadingObj, resetFormResultsFunc) {
    if ((0, _validationJs.validationEmptyFields)(formElem.elements, pageLoadingObj, resetFormResultsFunc) === false) return false;
    if ((0, _validationJs.validationOutOfRangeFields)(formElem.elements, pageLoadingObj, resetFormResultsFunc) === false) return false;
    const dataObj = getFormDataToObject(formElem);
    return dataObj;
}
function inactivateAllFormsAndLinks(bool, [linkElems, inactivateFunc]) {
    const allFieldsets = document.querySelectorAll("fieldset");
    const allLinks = document.querySelectorAll("a");
    const inactivateLink = (ev)=>ev.preventDefault();
    if (bool) {
        (0, _elementsJs.btnsGlobal).style.pointerEvents = "none";
        allFieldsets.forEach((el)=>el.disabled = true);
        allLinks.forEach((el)=>el.addEventListener("click", inactivateLink));
        return [
            allLinks,
            inactivateLink
        ];
    } else {
        (0, _elementsJs.btnsGlobal).style.pointerEvents = "initial";
        allFieldsets.forEach((el)=>el.disabled = false);
        linkElems.forEach((el)=>el.removeEventListener("click", inactivateFunc));
    }
}

},{"./elements.js":"auzFE","./validation.js":"68QtQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"68QtQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validationOutOfRangeFields", ()=>validationOutOfRangeFields);
parcelHelpers.export(exports, "validationEmptyFields", ()=>validationEmptyFields);
// Decimal point inputs validation
parcelHelpers.export(exports, "attachOnFocusoutDecimalPointValidation", ()=>attachOnFocusoutDecimalPointValidation);
var _alertsJs = require("./alerts.js");
var _genericJs = require("./generic.js");
function validationOutOfRangeFields(formFieldsArr, pageLoadingObj, resetFormResultsFunc) {
    for (const item of formFieldsArr){
        if (item.type !== "number") continue;
        const num = Number(item.value);
        const minLimit = Number(item.min);
        let maxLimit = Number(item.max);
        if (maxLimit === 0) maxLimit = Number.MAX_SAFE_INTEGER;
        if (num < minLimit || num > maxLimit) {
            if (pageLoadingObj.isFirstPageLoad !== true) {
                resetFormResultsFunc();
                const configArr = (0, _genericJs.inactivateAllFormsAndLinks)(true, []);
                (0, _alertsJs.alertOutOfRangeBox).msgText2 = `[ ${minLimit} - ${maxLimit} ]`;
                (0, _alertsJs.alertOutOfRangeBox).open().then((msg)=>{}).catch((err)=>console.log(err)).finally(()=>{
                    (0, _genericJs.inactivateAllFormsAndLinks)(false, configArr);
                    item.focus();
                });
            }
            return false;
        }
    }
    return true;
}
function validationEmptyFields(formFieldsArr, pageLoadingObj, resetFormResultsFunc) {
    for (const item of formFieldsArr){
        if (item.tagName !== "INPUT" || item.required === false) continue;
        if (item.value === "") {
            if (pageLoadingObj.isFirstPageLoad !== true) {
                resetFormResultsFunc();
                const configArr = (0, _genericJs.inactivateAllFormsAndLinks)(true, []);
                (0, _alertsJs.alertEmptyFieldBox).open().then((msg)=>{}).catch((err)=>console.log(err)).finally(()=>{
                    (0, _genericJs.inactivateAllFormsAndLinks)(false, configArr);
                    item.focus();
                });
            }
            return false;
        }
    }
    return true;
}
function attachOnFocusoutDecimalPointValidation() {
    document.querySelectorAll('input[step="0.1"]').forEach((el)=>{
        el.addEventListener("focusout", (ev)=>validationForDecimalPoint(ev, el));
        el.addEventListener("keydown", (ev)=>{
            if (ev.code === "Enter") validationForDecimalPoint(ev, el);
        });
    });
}
function validationForDecimalPoint(ev, numField) {
    const numValue = numField.value;
    if (numValue !== "" && numValue.includes(".") === false) numField.value = numValue + ".0";
}

},{"./alerts.js":"g7ava","./generic.js":"7kBVm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7ava":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkmarkAlertGreen", ()=>checkmarkAlertGreen);
parcelHelpers.export(exports, "globalResetConfirmDialog", ()=>globalResetConfirmDialog);
parcelHelpers.export(exports, "alertEmptyFieldBox", ()=>alertEmptyFieldBox);
parcelHelpers.export(exports, "alertOutOfRangeBox", ()=>alertOutOfRangeBox);
// IMPORTS
var _modalClassJs = require("./modalClass.js");
function checkmarkAlertGreen(bool) {
    if (bool) temporaryOnClickAlert("&check;", 400, "green");
}
function temporaryOnClickAlert(msg, duration, bgColor) {
    const containerEl = document.createElement("div");
    containerEl.setAttribute("class", "temp-alert");
    containerEl.style.backgroundColor = bgColor;
    containerEl.style.outline = `2px solid ${bgColor}`;
    const spanEl = document.createElement("span");
    spanEl.setAttribute("class", "check-mark");
    spanEl.innerHTML = msg;
    containerEl.appendChild(spanEl);
    setTimeout(function() {
        containerEl.parentNode.removeChild(containerEl);
    }, duration);
    document.body.appendChild(containerEl);
}
const globalResetConfirmDialog = new (0, _modalClassJs.ConfirmModal)({
    titleText: "",
    msgText: "\u0416\u0435\u043B\u0430\u0435\u0442\u0435 \u043B\u0438 \u0432\u0441\u0438\u0447\u043A\u0438 \u0437\u0430\u043F\u0430\u043C\u0435\u0442\u0435\u043D\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0438, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u0442\u0440\u0430\u0439\u043D\u043E \u043E\u0442 \u043F\u0430\u043C\u0435\u0442\u0442\u0430?",
    confirmText: "\u0414\u0430",
    cancelText: "\u041D\u0435"
});
const alertEmptyFieldBox = new (0, _modalClassJs.ConfirmModal)({
    titleText: "",
    msgText: "\u041C\u043E\u043B\u044F, \u043F\u043E\u043F\u044A\u043B\u043D\u0435\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u0438 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u0438 \u043F\u043E\u043B\u0435\u0442\u0430 ...",
    confirmText: "OK",
    cancelText: "",
    msgText2: ""
});
const alertOutOfRangeBox = new (0, _modalClassJs.ConfirmModal)({
    titleText: "",
    msgText: `\u{41C}\u{43E}\u{43B}\u{44F}, \u{432}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{442}\u{435} \u{441}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442} \u{432} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{430}: `,
    confirmText: "OK",
    cancelText: "",
    msgText2: ""
});

},{"./modalClass.js":"jGLwq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jGLwq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConfirmModal", ()=>ConfirmModal);
class ConfirmModal {
    constructor({ titleText, msgText, confirmText, cancelText, msgText2 }){
        this.titleText = titleText;
        this.msgText = msgText;
        this.confirmText = confirmText;
        this.cancelText = cancelText;
        this.msgText2 = msgText2;
    }
    createAndOpen(onConfirm, onCancel) {
        this.modalElem = document.createElement("div");
        this.modalElem.classList.add("modal");
        setTimeout(()=>{
            this.modalElem.classList.add("open");
        }, 400);
        const contentElem = document.createElement("div");
        contentElem.classList.add("content");
        this.modalElem.appendChild(contentElem);
        // Heading
        const titleElem = document.createElement("p");
        titleElem.classList.add("title-text");
        titleElem.textContent = this.titleText;
        contentElem.appendChild(titleElem);
        // Message
        const msgElem = document.createElement("p");
        msgElem.classList.add("msg-text");
        if (this.msgText2 !== undefined) msgElem.innerHTML = this.msgText + "<br/>" + this.msgText2;
        else msgElem.textContent = this.msgText;
        contentElem.appendChild(msgElem);
        // Cancel Button
        if (this.cancelText) {
            const cancelBtnElem = document.createElement("button");
            cancelBtnElem.classList.add("btn-cancel");
            cancelBtnElem.textContent = this.cancelText;
            cancelBtnElem.addEventListener("click", ()=>{
                onCancel("Cancelled");
                this.close();
            });
            contentElem.appendChild(cancelBtnElem);
        // cancelBtnElem.focus();
        }
        // Confirm Button
        if (this.confirmText) {
            const confirmBtnElem = document.createElement("button");
            confirmBtnElem.classList.add("btn-confirm");
            confirmBtnElem.textContent = this.confirmText;
            confirmBtnElem.addEventListener("click", ()=>{
                onConfirm("Confirmed");
                this.close();
            });
            contentElem.appendChild(confirmBtnElem);
        }
        document.body.appendChild(this.modalElem);
        const cancelBtn = document.querySelector(".btn-cancel");
        if (cancelBtn) cancelBtn.focus();
        else document.querySelector(".btn-confirm").focus();
    }
    open() {
        return new Promise((resolve, reject)=>{
            this.createAndOpen(resolve, reject);
        });
    }
    close() {
        this.modalElem.classList.remove("open");
        setTimeout(()=>{
            document.body.removeChild(this.modalElem);
        }, 400);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j1l1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setLocalStorage", ()=>setLocalStorage);
parcelHelpers.export(exports, "getLocalStorage", ()=>getLocalStorage);
parcelHelpers.export(exports, "clearLocalStorageGlobal", ()=>clearLocalStorageGlobal);
parcelHelpers.export(exports, "populateLocaleStorageData", ()=>populateLocaleStorageData);
function setLocalStorage(obj, formName) {
    const jsonData = JSON.stringify(obj);
    localStorage.setItem(formName, jsonData);
}
function getLocalStorage(formName) {
    const obj = JSON.parse(localStorage.getItem(formName));
    return obj;
}
function clearLocalStorageGlobal() {
    localStorage.clear();
}
function populateLocaleStorageData(formsArr) {
    for (const formElem of formsArr){
        const localStorageObj = getLocalStorage(formElem.name);
        if (localStorageObj === null) {
            console.info("No localStorage for this form ...");
            return null;
        }
        for(const key in localStorageObj){
            const target = formElem[key];
            // const target = formElem.querySelector(`input[name=${key}]`);
            target.value = localStorageObj[key];
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50Kuz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onReset_fMain", ()=>onReset_fMain);
parcelHelpers.export(exports, "resetResults_fMain", ()=>resetResults_fMain);
// Basic
parcelHelpers.export(exports, "onGlobalReset", ()=>onGlobalReset);
var _storageJs = require("./storage.js");
var _elementsJs = require("./elements.js");
var _alertsJs = require("./alerts.js");
var _genericJs = require("./generic.js");
function onReset_fMain(hasCheckmark) {
    onReset(null, (0, _elementsJs.formMain), resetResults_fMain, hasCheckmark);
}
function resetResults_fMain() {
    resetResults((0, _elementsJs.resultElementsArr_fMain));
}
function onGlobalReset() {
    resetAllForms();
    const configArr = (0, _genericJs.inactivateAllFormsAndLinks)(true, []);
    (0, _alertsJs.globalResetConfirmDialog).open().then((msg)=>{
        (0, _storageJs.clearLocalStorageGlobal)();
        (0, _elementsJs.formMain).reset();
        (0, _alertsJs.checkmarkAlertGreen)(true);
        location.reload();
    }).catch((msg)=>{}).finally(()=>(0, _genericJs.inactivateAllFormsAndLinks)(false, configArr));
}
function resetAllForms() {
    onReset_fMain(false);
}
function resetResults(resultElementsCollection) {
    resultElementsCollection.forEach((el)=>{
        el.style.fontWeight = "initial";
        if (el.className.includes("-secondary") === false) el.textContent = "####";
        else el.textContent = "###";
    });
}
function onReset(ev, formElem, resetResultHandler, hasCheckmark) {
    formElem.reset();
    resetFieldsOutline(formElem);
    resetResultHandler();
    (0, _alertsJs.checkmarkAlertGreen)(hasCheckmark);
}
function resetFieldsOutline(formElem) {
    const formInputsCollection = formElem.querySelectorAll("input");
    for (const field of formInputsCollection)field.style.outline = "none";
}

},{"./storage.js":"j1l1C","./elements.js":"auzFE","./alerts.js":"g7ava","./generic.js":"7kBVm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dL7n2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculate_fMain", ()=>calculate_fMain);
function calculate_fMain(data) {
    const doughWeight = getTotalDoughWeight(data.crustsCount, data.crustWeight);
    const flourWeight = getTotalFlour(doughWeight, data.hydrationPercent, data.saltPercent);
    const saltWeight = getTotalIngredientWeight(flourWeight, data.saltPercent);
    const liquidIngredsWeight = getTotalIngredientWeight(flourWeight, data.hydrationPercent);
    const vinegarWeight = getTotalIngredientWeight(flourWeight, data.vinegarPercent);
    const oilWeight = getTotalIngredientWeight(flourWeight, data.oilPercent);
    const waterWeight = getTotalWaterWeight(liquidIngredsWeight, vinegarWeight, oilWeight);
    return {
        doughWeight,
        flourWeight,
        saltWeight,
        liquidIngredsWeight,
        vinegarWeight,
        oilWeight,
        waterWeight
    };
}
function getTotalDoughWeight(crustsCount, crustWeight) {
    return Number(crustsCount) * Number(crustWeight);
}
function getTotalFlour(totalDoughWeight, hydrationPercentValue, saltPercent) {
    return totalDoughWeight / (1 + Number(hydrationPercentValue / 100) + Number(saltPercent / 100));
}
function getTotalWaterWeight(liquidIngredientsWeight, vinegarWeight, oilWeight) {
    return liquidIngredientsWeight - (vinegarWeight + oilWeight);
}
function getTotalIngredientWeight(totalFlour, ingredientPercentValue) {
    return totalFlour * (Number(ingredientPercentValue) / 100);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3WGYK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attachFocusoutValidation", ()=>attachFocusoutValidation);
function attachFocusoutValidation() {
    const formInputsCollection = document.querySelectorAll("input");
    for (const field of formInputsCollection){
        field.addEventListener("focusout", ()=>focusoutEmptyFieldValidation(field));
        field.addEventListener("focusout", ()=>focusoutOutOfRangeValidation(field));
    }
}
function focusoutOutOfRangeValidation(currentField) {
    if (currentField.type === "number" && currentField.value !== "") {
        const num = Number(currentField.value);
        const minLimit = Number(currentField.min);
        let maxLimit = Number(currentField.max);
        if (maxLimit === 0) maxLimit = Number.MAX_SAFE_INTEGER;
        if (num < minLimit || num > maxLimit) {
            currentField.style.outline = "2px solid red";
            return false;
        } else {
            currentField.style.outline = "none";
            return true;
        }
    }
}
function focusoutEmptyFieldValidation(currentField) {
    if (currentField.required === false) return;
    if (currentField.value === "") currentField.style.outline = "2px solid green";
    else currentField.style.outline = "none";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ox3Ut":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onScreenScroll", ()=>onScreenScroll);
parcelHelpers.export(exports, "goToScreenTop", ()=>goToScreenTop);
var _elementsJs = require("./elements.js");
function onScreenScroll() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) (0, _elementsJs.btnToTop).style.display = "block";
    else (0, _elementsJs.btnToTop).style.display = "none";
}
function goToScreenTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const path = `${window.location.pathname}` || "";
    const newURL = window.location.protocol + "//" + window.location.host + path;
    history.replaceState(null, "", newURL);
}

},{"./elements.js":"auzFE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fQFrJ","1Z4Rq"], "1Z4Rq", "parcelRequire3990")

//# sourceMappingURL=index.5d9dacde.js.map
