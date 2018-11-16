(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.filter"), require("core-js/modules/es6.array.for-each"), require("core-js/modules/es6.array.index-of"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.map"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.date.to-string"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("minimatch"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.filter", "core-js/modules/es6.array.for-each", "core-js/modules/es6.array.index-of", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.map", "core-js/modules/es6.array.sort", "core-js/modules/es6.date.to-string", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.replace", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.iterator", "core-js/modules/web.dom.iterable", "fs", "lodash", "minimatch", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.filter"), require("core-js/modules/es6.array.for-each"), require("core-js/modules/es6.array.index-of"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.map"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.date.to-string"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("minimatch"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.filter"], root["core-js/modules/es6.array.for-each"], root["core-js/modules/es6.array.index-of"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.map"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.date.to-string"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.replace"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/web.dom.iterable"], root["fs"], root["lodash"], root["minimatch"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_filter__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_for_each__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_index_of__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_date_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_replace__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_minimatch__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.array.filter */ "core-js/modules/es6.array.filter");

__webpack_require__(/*! core-js/modules/es6.array.map */ "core-js/modules/es6.array.map");

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "name": "tinybabymen",
    "short_name": "tinybabymen",
    "start_url": "/",
    "background_color": "#c71014",
    "theme_color": "#c71014",
    "display": "minimal-ui",
    "icon": "src/images/logo.png"
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-google-analytics/gatsby-ssr */ "./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "trackingId": "UA-128989413-1",
    "head": true
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const Helmet = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {object} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {string} $0.pathname Path of page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/Layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {object} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-jsx","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-404-jsx","jsonName":"404-html-516","path":"/404.html"},{"componentChunkName":"component---src-pages-404-jsx","jsonName":"404-22d","path":"/404/"},{"componentChunkName":"component---node-modules-gatsby-plugin-offline-app-shell-js","jsonName":"offline-plugin-app-shell-fallback-a30","path":"/offline-plugin-app-shell-fallback/"}],"dataPaths":{"404-22d":"44/path---404-22-d-bce-NZuapzHg3X9TaN1iIixfv1W23E","404-html-516":"164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E","dev-404-page-5f9":"920/path---dev-404-page-5-f-9-fab-NZuapzHg3X9TaN1iIixfv1W23E","index":"173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E","offline-plugin-app-shell-fallback-a30":"520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E","sq--src-components-album-image-jsx":1083837059,"sq--src-components-layout-jsx":755544856}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var HTML =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(HTML, _React$Component);

  function HTML() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HTML.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", this.props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      charSet: "utf-8"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }), this.props.headComponents), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", this.props.bodyAttributes, this.props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "body",
      id: "___gatsby",
      dangerouslySetInnerHTML: {
        __html: this.props.body
      }
    }), this.props.postBodyComponents));
  };

  return HTML;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse-path */ "./.cache/parse-path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_4__["default"]; });






var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/parse-path.js":
/*!******************************!*\
  !*** ./.cache/parse-path.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parsePath; });
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "core-js/modules/es6.array.index-of");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__);

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "core-js/modules/es6.array.map");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "core-js/modules/es6.array.filter");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "core-js/modules/es6.date.to-string");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_15__);

















var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [React.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(components);
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(components);
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(components);
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = components;
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = components;
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = components;
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = "../public/" + dataPaths[page.jsonName];

    try {
      dataAndContext = JSON.parse(fs.readFileSync(process.cwd() + "/public/static/d/" + dataPaths[page.jsonName] + ".json"));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_6___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: ""
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      rel: "preload",
      key: dataPath,
      href: dataPath,
      as: "fetch",
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: ""
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// prefer default export if available
var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(__webpack_require__(/*! ./node_modules/gatsby-plugin-offline/app-shell.js */ "./node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-pages-404-jsx": preferDefault(__webpack_require__(/*! ./src/pages/404.jsx */ "./src/pages/404.jsx")),
  "component---src-pages-index-jsx": preferDefault(__webpack_require__(/*! ./src/pages/index.jsx */ "./src/pages/index.jsx"))
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

// Handle legacy names for image queries.
var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends2.default)({}, props);

  if (convertedProps.resolutions) {
    convertedProps.fixed = convertedProps.resolutions;
    delete convertedProps.resolutions;
  }

  if (convertedProps.sizes) {
    convertedProps.fluid = convertedProps.sizes;
    delete convertedProps.sizes;
  }

  return convertedProps;
}; // Cache if we've seen an image before so we don't both with
// lazy-loading & fading in on subsequent mounts.


var imageCache = {};

var inImageCache = function inImageCache(props) {
  var convertedProps = convertProps(props); // Find src

  var src = convertedProps.fluid ? convertedProps.fluid.src : convertedProps.fixed.src;

  if (imageCache[src]) {
    return true;
  } else {
    imageCache[src] = true;
    return false;
  }
};

var io;
var listeners = [];

function getIO() {
  if (typeof io === "undefined" && typeof window !== "undefined" && window.IntersectionObserver) {
    io = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        listeners.forEach(function (l) {
          if (l[0] === entry.target) {
            // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              io.unobserve(l[0]);
              l[1]();
            }
          }
        });
      });
    }, {
      rootMargin: "200px"
    });
  }

  return io;
}

var listenToIntersections = function listenToIntersections(el, cb) {
  getIO().observe(el);
  listeners.push([el, cb]);
};

var noscriptImg = function noscriptImg(props) {
  // Check if prop exists before adding each attribute to the string output below to prevent
  // HTML validation issues caused by empty values like width="" and height=""
  var src = props.src ? "src=\"" + props.src + "\" " : "src=\"\" "; // required attribute

  var sizes = props.sizes ? "sizes=\"" + props.sizes + "\" " : "";
  var srcSetWebp = props.srcSetWebp ? "<source type='image/webp' srcSet=\"" + props.srcSetWebp + "\" " + sizes + "/>" : "";
  var srcSet = props.srcSet ? "<source srcSet=\"" + props.srcSet + "\" " + sizes + "/>" : "";
  var title = props.title ? "title=\"" + props.title + "\" " : "";
  var alt = props.alt ? "alt=\"" + props.alt + "\" " : "alt=\"\" "; // required attribute

  var width = props.width ? "width=\"" + props.width + "\" " : "";
  var height = props.height ? "height=\"" + props.height + "\" " : "";
  var opacity = props.opacity ? props.opacity : "1";
  var transitionDelay = props.transitionDelay ? props.transitionDelay : "0.5s";
  return "<picture>" + srcSetWebp + srcSet + "<img " + width + height + src + alt + title + "style=\"position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:" + transitionDelay + ";opacity:" + opacity + ";width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";
};

var Img = _react.default.forwardRef(function (props, ref) {
  var style = props.style,
      onLoad = props.onLoad,
      onError = props.onError,
      otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["style", "onLoad", "onError"]);
  return _react.default.createElement("img", (0, _extends2.default)({}, otherProps, {
    onLoad: onLoad,
    onError: onError,
    ref: ref,
    style: (0, _extends2.default)({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }, style)
  }));
});

Img.propTypes = {
  style: _propTypes.default.object,
  onError: _propTypes.default.func,
  onLoad: _propTypes.default.func
};

var Image =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Image, _React$Component);

  function Image(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // If this browser doesn't support the IntersectionObserver API
    // we default to start downloading the image right away.

    var isVisible = true;
    var imgLoaded = true;
    var IOSupported = false;
    var fadeIn = props.fadeIn; // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.

    var seenBefore = inImageCache(props);

    if (!seenBefore && typeof window !== "undefined" && window.IntersectionObserver) {
      isVisible = false;
      imgLoaded = false;
      IOSupported = true;
    } // Always don't render image while server rendering


    if (typeof window === "undefined") {
      isVisible = false;
      imgLoaded = false;
    }

    if (props.critical) {
      isVisible = true;
      imgLoaded = false;
      IOSupported = false;
    }

    var hasNoScript = !(_this.props.critical && !_this.props.fadeIn);
    _this.state = {
      isVisible: isVisible,
      imgLoaded: imgLoaded,
      IOSupported: IOSupported,
      fadeIn: fadeIn,
      hasNoScript: hasNoScript,
      seenBefore: seenBefore
    };
    _this.imageRef = _react.default.createRef();
    _this.handleImageLoaded = _this.handleImageLoaded.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = Image.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.critical) {
      var img = this.imageRef.current;

      if (img && img.complete) {
        this.handleImageLoaded();
      }
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.state.IOSupported && ref) {
      listenToIntersections(ref, function () {
        _this2.setState({
          isVisible: true
        });
      });
    }
  };

  _proto.handleImageLoaded = function handleImageLoaded() {
    this.setState({
      imgLoaded: true
    });

    if (this.state.seenBefore) {
      this.setState({
        fadeIn: false
      });
    }

    this.props.onLoad && this.props.onLoad();
  };

  _proto.render = function render() {
    var _convertProps = convertProps(this.props),
        title = _convertProps.title,
        alt = _convertProps.alt,
        className = _convertProps.className,
        _convertProps$style = _convertProps.style,
        style = _convertProps$style === void 0 ? {} : _convertProps$style,
        _convertProps$imgStyl = _convertProps.imgStyle,
        imgStyle = _convertProps$imgStyl === void 0 ? {} : _convertProps$imgStyl,
        _convertProps$placeho = _convertProps.placeholderStyle,
        placeholderStyle = _convertProps$placeho === void 0 ? {} : _convertProps$placeho,
        placeholderClassName = _convertProps.placeholderClassName,
        fluid = _convertProps.fluid,
        fixed = _convertProps.fixed,
        backgroundColor = _convertProps.backgroundColor,
        Tag = _convertProps.Tag;

    var bgColor = typeof backgroundColor === "boolean" ? "lightgray" : backgroundColor;
    var imagePlaceholderStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded ? 0 : 1,
      transition: "opacity 0.5s",
      transitionDelay: this.state.imgLoaded ? "0.5s" : "0.25s"
    }, imgStyle, placeholderStyle);
    var imageStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded || this.state.fadeIn === false ? 1 : 0,
      transition: this.state.fadeIn === true ? "opacity 0.5s" : "none"
    }, imgStyle);
    var placeholderImageProps = {
      title: title,
      alt: !this.state.isVisible ? alt : "",
      style: imagePlaceholderStyle,
      className: placeholderClassName
    };

    if (fluid) {
      var image = fluid;
      return _react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: (0, _extends2.default)({
          position: "relative",
          overflow: "hidden"
        }, style),
        ref: this.handleRef,
        key: "fluid-" + JSON.stringify(image.srcSet)
      }, _react.default.createElement(Tag, {
        style: {
          width: "100%",
          paddingBottom: 100 / image.aspectRatio + "%"
        }
      }), image.base64 && _react.default.createElement(Img, (0, _extends2.default)({
        src: image.base64
      }, placeholderImageProps)), image.tracedSVG && _react.default.createElement(Img, (0, _extends2.default)({
        src: image.tracedSVG
      }, placeholderImageProps)), bgColor && _react.default.createElement(Tag, {
        title: title,
        style: {
          backgroundColor: bgColor,
          position: "absolute",
          top: 0,
          bottom: 0,
          opacity: !this.state.imgLoaded ? 1 : 0,
          transitionDelay: "0.35s",
          right: 0,
          left: 0
        }
      }), this.state.isVisible && _react.default.createElement("picture", null, image.srcSetWebp && _react.default.createElement("source", {
        type: "image/webp",
        srcSet: image.srcSetWebp,
        sizes: image.sizes
      }), _react.default.createElement("source", {
        srcSet: image.srcSet,
        sizes: image.sizes
      }), _react.default.createElement(Img, {
        alt: alt,
        title: title,
        src: image.src,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError
      })), this.state.hasNoScript && _react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title
          }, image))
        }
      }));
    }

    if (fixed) {
      var _image = fixed;
      var divStyle = (0, _extends2.default)({
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        width: _image.width,
        height: _image.height
      }, style);

      if (style.display === "inherit") {
        delete divStyle.display;
      }

      return _react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: divStyle,
        ref: this.handleRef,
        key: "fixed-" + JSON.stringify(_image.srcSet)
      }, _image.base64 && _react.default.createElement(Img, (0, _extends2.default)({
        src: _image.base64
      }, placeholderImageProps)), _image.tracedSVG && _react.default.createElement(Img, (0, _extends2.default)({
        src: _image.tracedSVG
      }, placeholderImageProps)), bgColor && _react.default.createElement(Tag, {
        title: title,
        style: {
          backgroundColor: bgColor,
          width: _image.width,
          opacity: !this.state.imgLoaded ? 1 : 0,
          transitionDelay: "0.25s",
          height: _image.height
        }
      }), this.state.isVisible && _react.default.createElement("picture", null, _image.srcSetWebp && _react.default.createElement("source", {
        type: "image/webp",
        srcSet: _image.srcSetWebp,
        sizes: _image.sizes
      }), _react.default.createElement("source", {
        srcSet: _image.srcSet,
        sizes: _image.sizes
      }), _react.default.createElement(Img, {
        alt: alt,
        title: title,
        width: _image.width,
        height: _image.height,
        src: _image.src,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError
      })), this.state.hasNoScript && _react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title,
            width: _image.width,
            height: _image.height
          }, _image))
        }
      }));
    }

    return null;
  };

  return Image;
}(_react.default.Component);

Image.defaultProps = {
  critical: false,
  fadeIn: true,
  alt: "",
  Tag: "div"
};

var fixedObject = _propTypes.default.shape({
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string
});

var fluidObject = _propTypes.default.shape({
  aspectRatio: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  sizes: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string
});

Image.propTypes = {
  resolutions: fixedObject,
  sizes: fluidObject,
  fixed: fixedObject,
  fluid: fluidObject,
  fadeIn: _propTypes.default.bool,
  title: _propTypes.default.string,
  alt: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  // Support Glamor's css prop.
  critical: _propTypes.default.bool,
  style: _propTypes.default.object,
  imgStyle: _propTypes.default.object,
  placeholderStyle: _propTypes.default.object,
  placeholderClassName: _propTypes.default.string,
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func,
  Tag: _propTypes.default.string
};
var _default = Image;
exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isCurrent = _ref.isCurrent;

      if (isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    this.props.innerRef && this.props.innerRef(ref);

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _gatsby.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $ref = _this$props.ref,
        $innerRef = _this$props.innerRef,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "ref", "innerRef", "state", "replace"]);
    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        // eslint-disable-line
        _onMouseEnter && _onMouseEnter(e);

        ___loader.hovering((0, _gatsby.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        // eslint-disable-line
        _onClick && _onClick(e);

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  innerRef: _propTypes.default.func,
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});
var _default = GatsbyLink;
exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var knownOptions = {
  clientId: "string",
  sampleRate: "number",
  siteSpeedSampleRate: "number",
  alwaysSendReferrer: "boolean",
  allowAnchor: "boolean",
  cookieName: "string",
  cookieExpires: "number",
  storeGac: "boolean",
  legacyCookieDomain: "string",
  legacyHistoryImport: "boolean",
  allowLinker: "boolean"
};

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPostBodyComponents = _ref.setPostBodyComponents;

  if (true) {
    var excludeGAPaths = [];

    if (typeof pluginOptions.exclude !== "undefined") {
      var Minimatch = __webpack_require__(/*! minimatch */ "minimatch").Minimatch;

      pluginOptions.exclude.map(function (exclude) {
        var mm = new Minimatch(exclude);
        excludeGAPaths.push(mm.makeRe());
      });
    }

    var gaCreateOptions = {};

    for (var option in knownOptions) {
      if (typeof pluginOptions[option] === knownOptions[option]) {
        gaCreateOptions[option] = pluginOptions[option];
      }
    }

    var setComponents = pluginOptions.head ? setHeadComponents : setPostBodyComponents;
    return setComponents([_react.default.createElement("script", {
      key: "gatsby-plugin-google-analytics",
      dangerouslySetInnerHTML: {
        __html: "\n  " + (excludeGAPaths.length ? "window.excludeGAPaths=[" + excludeGAPaths.join(",") + "];" : "") + "\n  " + (typeof pluginOptions.anonymize !== "undefined" && pluginOptions.anonymize === true ? "function gaOptout(){document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/',window[disableStr]=!0}var gaProperty='" + pluginOptions.trackingId + "',disableStr='ga-disable-'+gaProperty;document.cookie.indexOf(disableStr+'=true')>-1&&(window[disableStr]=!0);" : "") + "\n  if(" + (typeof pluginOptions.respectDNT !== "undefined" && pluginOptions.respectDNT == true ? "!(navigator.doNotTrack == \"1\" || window.doNotTrack == \"1\")" : "true") + ") {\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n  }\n  if (typeof ga === \"function\") {\n    ga('create', '" + pluginOptions.trackingId + "', '" + (typeof pluginOptions.cookieDomain === "string" ? pluginOptions.cookieDomain : "auto") + "', " + (typeof pluginOptions.name === "string" ? "'" + pluginOptions.name + "', " : "") + JSON.stringify(gaCreateOptions) + ");\n      " + (typeof pluginOptions.anonymize !== "undefined" && pluginOptions.anonymize === true ? "ga('set', 'anonymizeIp', true);" : "") + "\n      " + (typeof pluginOptions.optimizeId !== "undefined" ? "ga('require', '" + pluginOptions.optimizeId + "');" : "") + "}\n      "
      }
    })]);
  }

  return null;
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  // If icons were generated, also add a favicon link.
  if (pluginOptions.icon) {
    var favicon = "/icons/icon-48x48.png"; // The icon path could be different in hybrid mode
    // this takes the first one of the possible icons

    if (pluginOptions.icons && pluginOptions.icons.length) {
      favicon = pluginOptions.icons[0].src;
    }

    setHeadComponents([_react.default.createElement("link", {
      key: "gatsby-plugin-manifest-icon-link",
      rel: "shortcut icon",
      href: (0, _gatsby.withPrefix)(favicon)
    })]);
  }

  setHeadComponents([_react.default.createElement("link", {
    key: "gatsby-plugin-manifest-link",
    rel: "manifest",
    href: (0, _gatsby.withPrefix)("/manifest.webmanifest")
  }), _react.default.createElement("meta", {
    key: "gatsby-plugin-manifest-meta",
    name: "theme-color",
    content: pluginOptions.theme_color
  })]);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-offline/app-shell.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-offline/app-shell.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var AppShell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AppShell, _React$Component);

  function AppShell() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AppShell.prototype;

  _proto.render = function render() {
    return _react.default.createElement(_react.default.Fragment, null);
  };

  return AppShell;
}(_react.default.Component);

var _default = AppShell;
exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.default.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: name, description, version, author, bin, bugs, dependencies, devDependencies, engines, files, homepage, keywords, license, main, module, peerDependencies, repository, resolutions, scripts, types, yargs, gitHead, default */
/***/ (function(module) {

module.exports = {"name":"gatsby","description":"Blazing fast modern site generator for React","version":"2.0.45","author":"Kyle Mathews <mathews.kyle@gmail.com>","bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@reach/router":"^1.1.1","autoprefixer":"^8.6.5","babel-core":"7.0.0-bridge.0","babel-eslint":"^8.2.2","babel-loader":"8.0.0-beta.4","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.5.1","babel-preset-gatsby":"^0.1.3","better-queue":"^3.8.6","bluebird":"^3.5.0","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"^2.0.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","domready":"^1.0.8","dotenv":"^4.0.0","eslint":"^4.19.1","eslint-config-react-app":"3.0.0-next.66cc7a90","eslint-loader":"^2.0.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","friendly-errors-webpack-plugin":"^1.6.1","fs-extra":"^5.0.0","gatsby-cli":"^2.4.5","gatsby-link":"^2.0.6","gatsby-plugin-page-creator":"^2.0.4","gatsby-react-router-scroll":"^2.0.1","glob":"^7.1.1","graphql":"^0.13.2","graphql-relay":"^0.5.5","graphql-skip-limit":"^2.0.1","graphql-tools":"^3.0.4","graphql-type-json":"^0.2.1","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stream-stringify":"^2.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","opn":"^5.3.0","optimize-css-assets-webpack-plugin":"^5.0.1","parse-filepath":"^1.0.1","physical-cpu-count":"^2.0.0","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.1.0","redux":"^3.6.0","relay-compiler":"1.5.0","request":"^2.85.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.0.2","type-of":"^2.0.1","url-loader":"^1.0.1","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"^4.12.0","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.1","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","yaml-loader":"^0.5.0"},"devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.2","cross-env":"^5.1.4","lerna":"^2.9.0","nyc":"^7.0.0","rimraf":"^2.6.1"},"engines":{"node":">6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^0.13.2"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","test-coverage":"node_modules/.bin/nyc --reporter=lcov --reporter=text npm test","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","yargs":{"boolean-negation":false},"gitHead":"69e13d3ecdb5e19ffa1e67beee07458ce786e8a0"};

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./public/static/d/1083837059.json":
/*!*****************************************!*\
  !*** ./public/static/d/1083837059.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAYAQACAwAAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAABvflzhs2SViAQD//EABoQAQEAAgMAAAAAAAAAAAAAAAECAAMQEiH/2gAIAQEAAQUCkFmShy3qGz3lz//EABYRAQEBAAAAAAAAAAAAAAAAAAEgUf/aAAgBAwEBPwFHY//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAICAwAAAAAAAAAAAAAAAAERACEQIDH/2gAIAQEABj8CsqFHmBKQ1//EABwQAAMAAgMBAAAAAAAAAAAAAAABEVFhMUFxkf/aAAgBAQABPyGbUmRs0e/RRUNxeUXsBjScqpFhfDkf/9oADAMBAAIAAwAAABDEP7//xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhMf/aAAgBAwEBPxB2piHlhHl//8QAFhEAAwAAAAAAAAAAAAAAAAAAESBh/9oACAECAQE/EDE//8QAHRABAAICAwEBAAAAAAAAAAAAAQARITFBUWFxof/aAAgBAQABPxApRQ2Q59lt0NAG+D8mQqtG4IuiFp7R5R0cm+JigmglAAYwl9zOcYOnsX4J/9k=","aspectRatio":1,"src":"/static/b21af2ec82c5e80a6d60bf8c1d7efeca/2f09b/album.jpg","srcSet":"/static/b21af2ec82c5e80a6d60bf8c1d7efeca/a1f01/album.jpg 100w,\n/static/b21af2ec82c5e80a6d60bf8c1d7efeca/39446/album.jpg 200w,\n/static/b21af2ec82c5e80a6d60bf8c1d7efeca/2f09b/album.jpg 400w,\n/static/b21af2ec82c5e80a6d60bf8c1d7efeca/723c1/album.jpg 600w,\n/static/b21af2ec82c5e80a6d60bf8c1d7efeca/07d05/album.jpg 800w,\n/static/b21af2ec82c5e80a6d60bf8c1d7efeca/52fb7/album.jpg 1200w,\n/static/b21af2ec82c5e80a6d60bf8c1d7efeca/8457d/album.jpg 1500w","sizes":"(max-width: 400px) 100vw, 400px"}}}}};

/***/ }),

/***/ "./public/static/d/755544856.json":
/*!****************************************!*\
  !*** ./public/static/d/755544856.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"tiny baby men — the podcast nobody asked for"}}}};

/***/ }),

/***/ "./src/components/AlbumImage.jsx":
/*!***************************************!*\
  !*** ./src/components/AlbumImage.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1083837059_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/1083837059.json */ "./public/static/d/1083837059.json");
var _public_static_d_1083837059_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/1083837059.json */ "./public/static/d/1083837059.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

var AlbumImage = function AlbumImage() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tpm-album"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "1083837059",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fluid: data.placeholderImage.childImageSharp.fluid
      });
    },
    data: _public_static_d_1083837059_json__WEBPACK_IMPORTED_MODULE_0__
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "tpm-album-twinkle",
    width: "100",
    height: "100",
    viewBox: "0 0 100 100"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("symbol", {
    id: "twinkle",
    viewBox: "0 0 100 100"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: "group",
    opacity: "0.8"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: "large"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "path",
    id: "large",
    d: "M41.25,40 L42.5,10 L43.75,40 L45, 41.25 L75,42.5 L45,43.75 L43.75,45 L42.5,75 L41.25,45 L40,43.75 L10,42.5 L40,41.25z ",
    fill: "white"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: "large-2",
    transform: "rotate(45)"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    xlinkHref: "#large"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: "small"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "path",
    id: "small",
    d: "M41.25,40 L42.5,25 L43.75,40 L45,41.25 L60,42.5 L45,43.75 L43.75,45 L42.5,60 L41.25,45 L40,43.75 L25,42.5 L40,41.25z",
    fill: "white"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    xlinkHref: "#twinkle",
    x: "0",
    y: "0",
    width: "50",
    height: "50"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AlbumImage);

/***/ }),

/***/ "./src/components/Button.jsx":
/*!***********************************!*\
  !*** ./src/components/Button.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_atob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/atob */ "./src/utils/atob.js");






var Button = function Button(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["icon", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", Object.assign({
    className: "tbm-button"
  }, props, {
    target: "_blank"
  }), icon && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "tbm-button-icon",
    dangerouslySetInnerHTML: {
      __html: Object(_utils_atob__WEBPACK_IMPORTED_MODULE_4__["default"])(icon.replace(/data:image\/svg\+xml;base64,/, ''))
    }
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "tbm-button-text"
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/Container.jsx":
/*!**************************************!*\
  !*** ./src/components/Container.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var Grid = function Grid(_ref) {
  var item = _ref.item,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["item"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({
    className: "tbm-container"
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ "./src/components/Grid.jsx");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./src/components/Container.jsx");




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "tbm-footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xA9 ", new Date().getFullYear(), " tiny baby men."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "tbm-love"
  }, "From Los Angeles, New York and Toronto with", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "heart"
  }, "\u2764\uFE0F"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    item: true
  }, "tinybabymen on", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/tinybabymen",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Tweeter"), ' ', "and", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.youtube.com/channel/UCgP5NxFBsIGZSIyw_LLVQ_A",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "YouTube")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Grid.jsx":
/*!*********************************!*\
  !*** ./src/components/Grid.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var Grid = function Grid(_ref) {
  var item = _ref.item,
      alignVertical = _ref.alignVertical,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["item", "alignVertical"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({
    className: (item ? 'tbm-grid-item' : 'tbm-grid') + (alignVertical ? ' align-vertical' : '')
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.jsx");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./src/components/Container.jsx");




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "tbm-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Hero.jsx":
/*!*********************************!*\
  !*** ./src/components/Hero.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container */ "./src/components/Container.jsx");





var Hero = function Hero(_ref) {
  var children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", Object.assign({
    className: "tbm-hero"
  }, props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "tbm-hero-backdrop"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "tbm-hero-content"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Layout.jsx":
/*!***********************************!*\
  !*** ./src/components/Layout.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/755544856.json */ "./public/static/d/755544856.json");
var _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/755544856.json */ "./public/static/d/755544856.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ "./src/components/Header.jsx");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Main */ "./src/components/Main.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.jsx");










var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["StaticQuery"], {
    query: "755544856",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
        title: data.site.siteMetadata.title,
        meta: [{
          name: 'description',
          content: 'Sample'
        }, {
          name: 'keywords',
          content: 'sample, something'
        }]
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", {
        lang: "en"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Abel|Bungee+Shade|Dancing+Script",
        rel: "stylesheet"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tbm-backdrop"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: children
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null));
    },
    data: _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Logo.jsx":
/*!*********************************!*\
  !*** ./src/components/Logo.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tbm-logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tbm-logo-tiny"
  }, "tiny"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tbm-logo-baby"
  }, "baby"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tbm-logo-men"
  }, "men"));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/Main.jsx":
/*!*********************************!*\
  !*** ./src/components/Main.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Main = function Main(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", Object.assign({
    className: "tbm-main"
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/Profile.jsx":
/*!************************************!*\
  !*** ./src/components/Profile.jsx ***!
  \************************************/
/*! exports provided: Profiles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiles", function() { return Profiles; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_atob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/atob */ "./src/utils/atob.js");
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/twitter.svg */ "./src/images/twitter.svg");
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_twitter_svg__WEBPACK_IMPORTED_MODULE_5__);







var Profile = function Profile(_ref) {
  var name = _ref.name,
      photo = _ref.photo,
      twitter = _ref.twitter;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "tbm-profile"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "https://twitter.com/" + twitter,
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: "tbm-profile-photo",
    src: photo,
    alt: name
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("name", {
    className: "tbm-profile-name"
  }, name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "https://twitter.com/" + twitter,
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "tbm-profile-icon",
    dangerouslySetInnerHTML: {
      __html: Object(_utils_atob__WEBPACK_IMPORTED_MODULE_4__["default"])(_images_twitter_svg__WEBPACK_IMPORTED_MODULE_5___default.a.replace(/data:image\/svg\+xml;base64,/, ''))
    }
  }), ' ', "@", twitter));
};

var Profiles = function Profiles(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object.assign({
    className: "tbm-profiles"
  }, props));
};


/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/images/soundcloud.svg":
/*!***********************************!*\
  !*** ./src/images/soundcloud.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+U291bmRDbG91ZCBpY29uPC90aXRsZT48cGF0aCBkPSJNMS4xNzUgMTIuMjI1Yy0uMDUxIDAtLjA5NC4wNDYtLjEwMS4xbC0uMjMzIDIuMTU0LjIzMyAyLjEwNWMuMDA3LjA1OC4wNS4wOTguMTAxLjA5OC4wNSAwIC4wOS0uMDQuMDk5LS4wOThsLjI1NS0yLjEwNS0uMjctMi4xNTRjMC0uMDU3LS4wNDUtLjEtLjA5LS4xbS0uODk5LjgyOGMtLjA2IDAtLjA5MS4wMzctLjEwNC4wOTRMMCAxNC40NzlsLjE2NSAxLjMwOGMwIC4wNTUuMDQ1LjA5NC4wOS4wOTRzLjA4OS0uMDQ1LjEwNC0uMTA0bC4yMS0xLjMxOS0uMjEtMS4zMzRjMC0uMDYxLS4wNDQtLjA5LS4wOS0uMDltMS44My0xLjIyOWMtLjA2MSAwLS4xMi4wNDUtLjEyLjEwNGwtLjIxIDIuNTYzLjIyNSAyLjQ1OGMwIC4wNi4wNDUuMTIuMTE5LjEyLjA2MSAwIC4xMDUtLjA2MS4xMjEtLjEybC4yNTQtMi40NzQtLjI1NC0yLjU0OGMtLjAxNi0uMDYtLjA2MS0uMTItLjEyMS0uMTJtLjk0NS0uMDg5Yy0uMDc1IDAtLjEzNS4wNi0uMTUuMTM1bC0uMTkzIDIuNjQuMjEgMi41NDRjLjAxNi4wNzcuMDc1LjEzOC4xNDkuMTM4LjA3NSAwIC4xMzUtLjA2MS4xNS0uMTVsLjI0LTIuNTMyLS4yNC0yLjYyM2MwLS4wNzUtLjA2LS4xMzUtLjEzNS0uMTM1bC0uMDMxLS4wMTd6bTEuMTU1LjM2Yy0uMDA1LS4wOS0uMDc1LS4xNDktLjE1OS0uMTQ5LS4wOSAwLS4xNTguMDYtLjE2NC4xNDlsLS4yMTcgMi40My4yIDIuNTYzYzAgLjA5LjA3NS4xNTcuMTU5LjE1Ny4wNzQgMCAuMTQ4LS4wNjguMTQ4LS4xNThsLjIyNy0yLjU2My0uMjI3LTIuNDQ0LjAzMy4wMTV6bS44MDktMS43MDljLS4xMDEgMC0uMTguMDktLjE4LjE4MWwtLjIxIDMuOTU3LjE4NyAyLjU2M2MwIC4wOS4wOC4xNjQuMTguMTY0LjA5NCAwIC4xNzQtLjA5LjE4LS4xOGwuMjA5LTIuNTYzLS4yMDktMy45NzJjLS4wMDgtLjEwNC0uMDg4LS4xOC0uMTgtLjE4bS45NTktLjkxNGMtLjEwNSAwLS4xOTUuMDktLjIwMy4xOTRsLS4xOCA0Ljg3Mi4xNjUgMi41NDhjMCAuMTIuMDkuMjA5LjE5NS4yMDkuMTA0IDAgLjE5NC0uMDg5LjIxLS4yMDlsLjE5My0yLjU0OC0uMTkyLTQuODU2Yy0uMDE2LS4xMi0uMTA1LS4yMS0uMjEtLjIxbS45ODktLjQ0OWMtLjEyMSAwLS4yMTEuMDg5LS4yMjUuMjA5bC0uMTY1IDUuMjc1LjE2NSAyLjUyYy4wMTQuMTE5LjEwNC4yMjUuMjI1LjIyNS4xMTkgMCAuMjI1LS4xMDUuMjI1LS4yMjVsLjE5NS0yLjUyLS4xOTYtNS4yNzVjMC0uMTItLjEwNS0uMjI1LS4yMjUtLjIyNW0xLjI0NS4wNDVjMC0uMTM1LS4xMDUtLjI0LS4yNC0uMjQtLjExOSAwLS4yNC4xMDUtLjI0LjI0bC0uMTQ5IDUuNDQxLjE0OSAyLjUwM2MuMDE2LjEzNS4xMjEuMjQuMjU2LjI0cy4yNC0uMTA1LjI0LS4yNGwuMTY0LTIuNTAzLS4xNjQtNS40NTYtLjAxNi4wMTV6bS43NDktLjEzNGMtLjEzNSAwLS4yNTUuMTE5LS4yNTUuMjU0bC0uMTUgNS4zMjIuMTUgMi40NzNjMCAuMTUuMTIuMjU1LjI1NS4yNTVzLjI1NS0uMTIuMjU1LS4yN2wuMTUtMi40NzQtLjE2NS01LjMwN2MwLS4xNDgtLjEyLS4yNy0uMjcxLS4yN20xLjAwNS4xNjZjLS4xNjQgMC0uMjg0LjEzNS0uMjg0LjI4NWwtLjEwMyA1LjE0My4xMzUgMi40NzRjMCAuMTQ5LjExOS4yNzcuMjg0LjI3Ny4xNDkgMCAuMjcxLS4xMi4yODQtLjI4NWwuMTIxLTIuNDQzLS4xMzUtNS4xMTJjLS4wMTItLjE2NC0uMTM1LS4yODUtLjI4NS0uMjg1bTEuMTg0LS45NDVjLS4wNDUtLjAyOS0uMTA1LS4wNDQtLjE2NS0uMDQ0cy0uMTE5LjAxNS0uMTY1LjA0NGMtLjA5LjA1NC0uMTQ5LjE1LS4xNDkuMjU1di4wNjFsLS4xMDQgNi4wNDguMTE1IDIuNDQ5di4wMDhjLjAwOC4wNi4wMy4xMzUuMDc0LjE4LjA1OC4wNjEuMTQyLjEwNC4yMzQuMTA0LjA4IDAgLjE1OC0uMDQ0LjIwOS0uMDkuMDU4LS4wNi4wOTEtLjEzNS4wOTEtLjIyNWwuMDE1LS4yNC4xMTctMi4yMDMtLjEzNS02LjA4NmMwLS4xMDQtLjA2MS0uMTkzLS4xMzUtLjIzOWwtLjAwMi0uMDIyem0xLjAwNi0uNTQ3Yy0uMDQ1LS4wNDUtLjA5LS4wNjEtLjE1LS4wNjEtLjA3NCAwLS4xNDkuMDE2LS4yMDkuMDYxLS4wNzUuMDYxLS4xMTkuMTUtLjExOS4yNHYuMDI5bC0uMTM3IDYuNjA5LjA3NiAxLjIxNS4wNjEgMS4xODVjMCAuMTY0LjE0OC4zMTQuMzI4LjMxNC4xODEgMCAuMzMtLjE1LjMzLS4zMjlsLjE1LTIuNDE0LS4xNS02LjYzN2MwLS4xMi0uMDc0LS4yMjEtLjE2NS0uMjc3bTguOTM0IDMuNzc3Yy0uNDA1IDAtLjc5NS4wODYtMS4xMzkuMjMyLS4yNC0yLjY1NC0yLjQ2LTQuNzM2LTUuMTg4LTQuNzM2LS42NTkgMC0xLjMwNS4xMzUtMS44ODkuMzU5LS4yMjUuMDktLjI3LjE4LS4yODUuMzU5djkuMzY4Yy4wMTYuMTguMTUuMzMuMzMuMzQ1aDguMTg1QzIyLjY4MSAxNy4yMTggMjQgMTUuOTE0IDI0IDE0LjI4cy0xLjMxOS0yLjk1Mi0yLjkzOC0yLjk1MiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/images/twitter.svg":
/*!********************************!*\
  !*** ./src/images/twitter.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/pages/404.jsx":
/*!***************************!*\
  !*** ./src/pages/404.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.jsx");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.jsx");




var NotFoundPage = function NotFoundPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tbm-404"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "NOT FOUND"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You just hit up a page that doesn't exist... the sadness."))));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "core-js/modules/es6.array.map");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.jsx");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero.jsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Grid */ "./src/components/Grid.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.jsx");
/* harmony import */ var _components_AlbumImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AlbumImage */ "./src/components/AlbumImage.jsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.jsx");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.jsx");
/* harmony import */ var _images_soundcloud_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/soundcloud.svg */ "./src/images/soundcloud.svg");
/* harmony import */ var _images_soundcloud_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_soundcloud_svg__WEBPACK_IMPORTED_MODULE_9__);










var people = [{
  name: 'Zain',
  photo: 'https://pbs.twimg.com/profile_images/1046652324096040960/WeXIhP6h.jpg',
  twitter: 'sweatyhairy'
}, {
  name: 'Jim',
  photo: 'https://pbs.twimg.com/profile_images/1061495649940598784/CNkP3fzq_400x400.jpg',
  twitter: 'urvillageidiot'
}, {
  name: 'Mag',
  photo: 'https://pbs.twimg.com/profile_images/1061484111213166592/-4aIPTWt_400x400.jpg',
  twitter: 'neverhitpuberty'
}];

var IndexPage = function IndexPage() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AlbumImage__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    alignVertical: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "3 dudes inna house bored inna house recording a podcast"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "tbm-hero-actions"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: AppleIcon,
    href: "https://itunes.apple.com/ca/podcast/tiny-baby-men/id1433856483"
  }, "iTunes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: _images_soundcloud_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    href: "https://soundcloud.com/tinybabymen"
  }, "SoundCloud"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Profile__WEBPACK_IMPORTED_MODULE_7__["Profiles"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      justifyContent: 'space-evenly'
    }
  }, people.map(function (person) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Profile__WEBPACK_IMPORTED_MODULE_7__["default"], person));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/utils/atob.js":
/*!***************************!*\
  !*** ./src/utils/atob.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "core-js/modules/es6.date.to-string");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1__);



var nodeAtob = function nodeAtob(raw) {
  return Buffer.from(raw, 'base64').toString();
};

var atob = atob || nodeAtob;
/* harmony default export */ __webpack_exports__["default"] = (atob);

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.filter":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.array.filter" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_filter__;

/***/ }),

/***/ "core-js/modules/es6.array.for-each":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.for-each" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_for_each__;

/***/ }),

/***/ "core-js/modules/es6.array.index-of":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.index-of" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_index_of__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.map":
/*!************************************************!*\
  !*** external "core-js/modules/es6.array.map" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_map__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.date.to-string":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.date.to-string" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_date_to_string__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.replace":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.regexp.replace" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_replace__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "minimatch":
/*!****************************!*\
  !*** external "minimatch" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_minimatch__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map