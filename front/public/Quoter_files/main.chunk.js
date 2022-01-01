(this["webpackJsonpfront"] = this["webpackJsonpfront"] || []).push([
  ["main"],
  {
    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
      /*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
            true
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          "/* Define theme colors */\n:root {\n  --orange: #ff6f69;\n  --pink: #d06dab;\n  --brown: #663e3d;\n  --purple: #9173b4;\n  --primary: #6b5b95;\n  --darkPurple: #6b5b95;\n  --darkGrey: #40434e;\n  --darkRed: #a03d50;\n  --darkBlue: #193478;\n  --lightGrey: #DADADC;\n  --lightPurple: #E1DDED;\n}\n\nmain {\n  margin: 1% 3%;\n}\n\n.none-style {\n  text-decoration: none;\n  color: #000000;\n}\n\n.non-link {\n  text-decoration: none;\n  color: #000000;\n}\n\n.content-page {\n  margin: 2% 0;\n  /*padding: 10px;*/\n}\n\n.left {\n  float: left;\n}\n\n.right {\n  float: right;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n/* User navbar */\n\n.user-navbar .nav-link {\n  font-size: 24px;\n  color: #000;\n}\n\n.nav-item {\n  border-radius: 25px;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px 15px;\n  /*  paddng-left: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 8px;*/\n}\n\n.nav-link:hover > .nav-item {\n  color: #fff;\n  background-color: var(--purple);\n}\n\n.nav-item.active {\n  background-color: var(--lightPurple);\n  /*color: #FFF;*/\n  font-weight: bold;\n}\n\n.user-dashboard {\n  margin-bottom: 0;\n  position: relative;\n  align-items: stretch;\n  flex-direction: column;\n  flex-shrink: 0;\n}\n\n.fixed-position{\n  position: absolute;\n}\n\n/* Progress bar */\n.progress-bar {\n  height: 5px;\n  background: var(--primary);\n  margin-top: 10px;\n}\n\n/* Book cover */\n.img-book-cover{\n  width: 50%;\n}\n\nimg.card-img{\n  width: 100%;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://src/App.css"],
            names: [],
            mappings:
              "AAAA,wBAAwB;AACxB;EACE,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA,gBAAgB;;AAEhB;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,uBAAkB;EAAlB,kBAAkB;EAClB,kBAAkB;EAClB;;;sBAGoB;AACtB;;AAEA;EACE,WAAW;EACX,+BAA+B;AACjC;;AAEA;EACE,oCAAoC;EACpC,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,WAAW;EACX,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA,eAAe;AACf;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb",
            sourcesContent: [
              "/* Define theme colors */\n:root {\n  --orange: #ff6f69;\n  --pink: #d06dab;\n  --brown: #663e3d;\n  --purple: #9173b4;\n  --primary: #6b5b95;\n  --darkPurple: #6b5b95;\n  --darkGrey: #40434e;\n  --darkRed: #a03d50;\n  --darkBlue: #193478;\n  --lightGrey: #DADADC;\n  --lightPurple: #E1DDED;\n}\n\nmain {\n  margin: 1% 3%;\n}\n\n.none-style {\n  text-decoration: none;\n  color: #000000;\n}\n\n.non-link {\n  text-decoration: none;\n  color: #000000;\n}\n\n.content-page {\n  margin: 2% 0;\n  /*padding: 10px;*/\n}\n\n.left {\n  float: left;\n}\n\n.right {\n  float: right;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n/* User navbar */\n\n.user-navbar .nav-link {\n  font-size: 24px;\n  color: #000;\n}\n\n.nav-item {\n  border-radius: 25px;\n  width: fit-content;\n  padding: 10px 15px;\n  /*  paddng-left: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 8px;*/\n}\n\n.nav-link:hover > .nav-item {\n  color: #fff;\n  background-color: var(--purple);\n}\n\n.nav-item.active {\n  background-color: var(--lightPurple);\n  /*color: #FFF;*/\n  font-weight: bold;\n}\n\n.user-dashboard {\n  margin-bottom: 0;\n  position: relative;\n  align-items: stretch;\n  flex-direction: column;\n  flex-shrink: 0;\n}\n\n.fixed-position{\n  position: absolute;\n}\n\n/* Progress bar */\n.progress-bar {\n  height: 5px;\n  background: var(--primary);\n  margin-top: 10px;\n}\n\n/* Book cover */\n.img-book-cover{\n  width: 50%;\n}\n\nimg.card-img{\n  width: 100%;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__["default"] =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
      /*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
            true
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://src/index.css"],
            names: [],
            mappings:
              "AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb",
            sourcesContent: [
              "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__["default"] =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/authorDetail.css":
      /*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/styles/authorDetail.css ***!
  \****************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
            true
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          "#intro-input{\n  height: 200px;\n}\n\n.book-card {\n  font-size: 18px;\n}\n\n.book-card-title{\n  font-size: 22px;\n  font-weight: bold;\n  color: var(--pink);\n}\n\n.book-card .card-body {\n  margin: 3%;\n  padding: 5%;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://src/styles/authorDetail.css"],
            names: [],
            mappings:
              "AAAA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,WAAW;AACb",
            sourcesContent: [
              "#intro-input{\n  height: 200px;\n}\n\n.book-card {\n  font-size: 18px;\n}\n\n.book-card-title{\n  font-size: 22px;\n  font-weight: bold;\n  color: var(--pink);\n}\n\n.book-card .card-body {\n  margin: 3%;\n  padding: 5%;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__["default"] =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/authors.css":
      /*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/styles/authors.css ***!
  \***********************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
            true
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          ".author-link{\n  font-size: 20px;\n  color: var(--purple);\n}\n\n.author-category-link {\n  height: 35px;\n  color: #FFF;\n  border-radius: 5px;\n  padding: 5px;\n  background-color: var(--purple);\n}\n\n.author-category-link:hover{\n  color: #FFF;\n  background-color: var(--darkPurple);\n}\n\n.form-create-author{\n  /*max-width: 600px;*/\n  border-radius: 20px;\n  padding: 15px;\n}\n\n.form-create-author h2{\n  font-size: 20px;\n  color: var(--purple);\n  font-weight: bold;\n}\n\n/* Book card */\n\n.book-image-card{\n  border: none;\n  border-radius: 20px;\n  font-size: 20px;\n  background: none;\n}\n\n.book-card{\n  border-radius: 40px;\n  padding: 0.5rem;\n}\n\n.book-card:hover{\n  background-color: var(--lightGrey);\n}\n\n.book-card-intro{\n  color: #000;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://src/styles/authors.css"],
            names: [],
            mappings:
              "AAAA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,WAAW;EACX,mCAAmC;AACrC;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA,cAAc;;AAEd;EACE,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,WAAW;AACb",
            sourcesContent: [
              ".author-link{\n  font-size: 20px;\n  color: var(--purple);\n}\n\n.author-category-link {\n  height: 35px;\n  color: #FFF;\n  border-radius: 5px;\n  padding: 5px;\n  background-color: var(--purple);\n}\n\n.author-category-link:hover{\n  color: #FFF;\n  background-color: var(--darkPurple);\n}\n\n.form-create-author{\n  /*max-width: 600px;*/\n  border-radius: 20px;\n  padding: 15px;\n}\n\n.form-create-author h2{\n  font-size: 20px;\n  color: var(--purple);\n  font-weight: bold;\n}\n\n/* Book card */\n\n.book-image-card{\n  border: none;\n  border-radius: 20px;\n  font-size: 20px;\n  background: none;\n}\n\n.book-card{\n  border-radius: 40px;\n  padding: 0.5rem;\n}\n\n.book-card:hover{\n  background-color: var(--lightGrey);\n}\n\n.book-card-intro{\n  color: #000;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__["default"] =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/books.css":
      /*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/styles/books.css ***!
  \*********************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
            true
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          ".book-introduction{\n  white-space: pre-line;\n}\n\n#text-input{\n  height: 150px;\n}\n\n.inline-edit {\n  background-color: transparent;\n  border: 0;\n  padding: 8px;\n}\n\n.inline-edit:hover {\n  background-color: var(--lightPurple);\n  cursor: pointer;\n}\n\n/* Book list */\n.book-list-section{\n  width: 250px;\n}\n\n.book-list{\n  height: 81vh;\n  overflow-y: auto;\n}\n\n.quote-list-section {\n  /*height: 87vh;*/\n  /*overflow-y: auto;*/\n}\n\n/* Book quote card */\n.book-quote-button{\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  border-bottom: 0.6px dashed var(--lightPurple);\n  background: none;\n  width: 100%;\n  padding: 0.6rem;\n}\n\n.book-quote-button:hover {\n  background-color: var(--lightPurple);\n}\n\n.book-quote-button.active {\n  background-color: var(--lightPurple);\n}\n\n.book-quote-img{\n  width: 50%;\n}\n\n.book-quote-button h3{\n  font-size: 18px;\n  color: var(--pink);\n  font-weight: bold;\n}\n\n.book-quote-button .subtitle{\n  color: var(--darkGrey);\n}\n\n/* Create new book */\n.dropdown-book-create{\n  width: 300px;\n  padding: 1rem;\n  border-radius: 25px;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://src/styles/books.css"],
            names: [],
            mappings:
              "AAAA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,SAAS;EACT,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA,cAAc;AACd;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA,oBAAoB;AACpB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,8CAA8C;EAC9C,gBAAgB;EAChB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA,oBAAoB;AACpB;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB",
            sourcesContent: [
              ".book-introduction{\n  white-space: pre-line;\n}\n\n#text-input{\n  height: 150px;\n}\n\n.inline-edit {\n  background-color: transparent;\n  border: 0;\n  padding: 8px;\n}\n\n.inline-edit:hover {\n  background-color: var(--lightPurple);\n  cursor: pointer;\n}\n\n/* Book list */\n.book-list-section{\n  width: 250px;\n}\n\n.book-list{\n  height: 81vh;\n  overflow-y: auto;\n}\n\n.quote-list-section {\n  /*height: 87vh;*/\n  /*overflow-y: auto;*/\n}\n\n/* Book quote card */\n.book-quote-button{\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  border-bottom: 0.6px dashed var(--lightPurple);\n  background: none;\n  width: 100%;\n  padding: 0.6rem;\n}\n\n.book-quote-button:hover {\n  background-color: var(--lightPurple);\n}\n\n.book-quote-button.active {\n  background-color: var(--lightPurple);\n}\n\n.book-quote-img{\n  width: 50%;\n}\n\n.book-quote-button h3{\n  font-size: 18px;\n  color: var(--pink);\n  font-weight: bold;\n}\n\n.book-quote-button .subtitle{\n  color: var(--darkGrey);\n}\n\n/* Create new book */\n.dropdown-book-create{\n  width: 300px;\n  padding: 1rem;\n  border-radius: 25px;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__["default"] =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/comments.css":
      /*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/styles/comments.css ***!
  \************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
            true
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          ".comments {\n  margin-top: 20px;\n}\n\n.comments-title {\n  font-size: 30px;\n  margin-bottom: 20px;\n}\n\n.comments-container {\n  margin-top: 40px;\n}\n\n.comment-form-title {\n  font-size: 22px;\n}\n\n.comment-form-textarea {\n  width: 100%;\n  height: 80px;\n  margin-bottom: 8px;\n  margin-top: 8px;\n  border: 1px solid rgb(107, 114, 12);\n}\n\n.comment-form-button {\n  font-size: 16px;\n  padding: 8px 16px;\n  background: rgb(59, 130, 246);\n  border-radius: 8px;\n  color: white;\n}\n\n.comment-form-button:hover:enabled {\n  cursor: pointer;\n  background: rgb(37, 99, 235);\n}\n\n.comment-form-button:disabled {\n  opacity: 0.7;\n  cursor: default;\n}\n\n.comment-form-cancel-button {\n  margin-left: 10px;\n}\n\n.comment {\n  display: flex;\n  margin-bottom: 28px;\n}\n\n.comment-image-container {\n  margin-right: 12px;\n}\n\n.comment-image-container img {\n  border-radius: 50px;\n}\n\n.comment-right-part {\n  width: 100%;\n}\n\n.comment-content {\n  display: flex;\n}\n\n.comment-author {\n  margin-right: 8px;\n  font-size: 20px;\n  color: rgb(59, 130, 246);\n}\n\n.comment-text {\n  font-size: 18px;\n}\n\n.comment-actions {\n  display: flex;\n  font-size: 12px;\n  color: rgb(51, 51, 51);\n  cursor: pointer;\n  margin-top: 8px;\n}\n\n.comment-action {\n  margin-right: 8px;\n}\n\n.comment-action:hover {\n  text-decoration: underline;\n}\n\n.replies {\n  margin-top: 20px;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://src/styles/comments.css"],
            names: [],
            mappings:
              "AAAA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;AAClB",
            sourcesContent: [
              ".comments {\n  margin-top: 20px;\n}\n\n.comments-title {\n  font-size: 30px;\n  margin-bottom: 20px;\n}\n\n.comments-container {\n  margin-top: 40px;\n}\n\n.comment-form-title {\n  font-size: 22px;\n}\n\n.comment-form-textarea {\n  width: 100%;\n  height: 80px;\n  margin-bottom: 8px;\n  margin-top: 8px;\n  border: 1px solid rgb(107, 114, 12);\n}\n\n.comment-form-button {\n  font-size: 16px;\n  padding: 8px 16px;\n  background: rgb(59, 130, 246);\n  border-radius: 8px;\n  color: white;\n}\n\n.comment-form-button:hover:enabled {\n  cursor: pointer;\n  background: rgb(37, 99, 235);\n}\n\n.comment-form-button:disabled {\n  opacity: 0.7;\n  cursor: default;\n}\n\n.comment-form-cancel-button {\n  margin-left: 10px;\n}\n\n.comment {\n  display: flex;\n  margin-bottom: 28px;\n}\n\n.comment-image-container {\n  margin-right: 12px;\n}\n\n.comment-image-container img {\n  border-radius: 50px;\n}\n\n.comment-right-part {\n  width: 100%;\n}\n\n.comment-content {\n  display: flex;\n}\n\n.comment-author {\n  margin-right: 8px;\n  font-size: 20px;\n  color: rgb(59, 130, 246);\n}\n\n.comment-text {\n  font-size: 18px;\n}\n\n.comment-actions {\n  display: flex;\n  font-size: 12px;\n  color: rgb(51, 51, 51);\n  cursor: pointer;\n  margin-top: 8px;\n}\n\n.comment-action {\n  margin-right: 8px;\n}\n\n.comment-action:hover {\n  text-decoration: underline;\n}\n\n.replies {\n  margin-top: 20px;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__["default"] =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/newUser.css":
      /*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/styles/newUser.css ***!
  \***********************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
            true
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          ".newUser {\n  height: 100vh;\n  display: flex;\n  color: white;\n}\n\n.appAside {\n  width: 50%;\n  background-color: var(--darkPurple);\n}\n\n.appForm {\n  width: 50%;\n  background-color: #12130f;\n  padding: 25px 40px;\n  overflow: auto;\n}\n\n.pageSwitcher {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 10%;\n}\n\n.pageSwitcherItem {\n  background-color: var(--darkGrey);\n  color: #9da6b1;\n  padding: 10px 25px;\n  cursor: pointer;\n  font-size: 0.9em;\n  border: none;\n  outline: none;\n  display: inline-block;\n  text-decoration: none;\n}\n\n.pageSwitcherItem-active {\n  background-color: var(--darkPurple);\n  color: white;\n}\n\n.pageSwitcherItem:first-child {\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n}\n.pageSwitcherItem:last-child {\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n\n.formCenter {\n  margin-bottom: 100px;\n}\n\n.formTitle {\n  color: #707c8b;\n  font-weight: 300;\n  margin-bottom: 50px;\n}\n\n.formTitleLink {\n  color: #707c8b;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 1.7em;\n  margin: 0 10px;\n  padding-bottom: 5px;\n  background: none;\n  border: none;\n}\n\n.formTitleLink:first-child {\n  margin-left: 0;\n}\n\n.formTitleLink-active {\n  color: white;\n  border-bottom: 1px solid var(--darkPurple);\n}\n\n.formField {\n  margin-bottom: 40px;\n}\n\n.formFieldLabel {\n  display: block;\n  text-transform: uppercase;\n  font-size: 0.9em;\n  color: white;\n}\n.formFieldInput {\n  width: 85%;\n  background-color: transparent;\n  border: none;\n  color: white;\n  outline: none;\n  border-bottom: 1px solid #445366;\n  font-size: 1em;\n  font-weight: 300;\n  padding-bottom: 10px;\n  margin-top: 10px;\n}\n\n.formFieldInput::placeholder {\n  color: #616e7f;\n}\n\n.formFieldButton {\n  background-color: var(--darkPurple);\n  color: white;\n  border: none;\n  outline: none;\n  border-radius: 25px;\n  padding: 15px 70px;\n  font-size: 0.8em;\n  font-weight: 500;\n}\n\n.formFieldLink {\n  color: #66707d;\n  text-decoration: none;\n  display: inline-block;\n  border-bottom: 1.5px solid var(--darkPurple);\n  padding-bottom: 5px;\n}\n\n.formFieldCheckboxLabel {\n  color: #646f7d;\n  font-size: 0.9em;\n}\n\n.formFieldCheckbox {\n  position: relative;\n  top: 1.5px;\n}\n\n.formFieldTermsLink {\n  color: white;\n  border-bottom: 1px solid var(--darkPurple);\n  text-decoration: none;\n  display: inline-block;\n  padding-bottom: 2px;\n  margin-left: 5px;\n}\n\n.socialMediaButtons {\n  padding: 10px 100px 10px 0px;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://src/styles/newUser.css"],
            names: [],
            mappings:
              "AAAA;EACE,aAAa;EACb,aAAa;EACb,YAAY;AACd;;AAEA;EACE,UAAU;EACV,mCAAmC;AACrC;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,mCAAmC;EACnC,YAAY;AACd;;AAEA;EACE,4BAA4B;EAC5B,+BAA+B;AACjC;AACA;EACE,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,qBAAqB;EACrB,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,0CAA0C;AAC5C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,UAAU;EACV,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,gCAAgC;EAChC,cAAc;EACd,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,qBAAqB;EACrB,4CAA4C;EAC5C,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,0CAA0C;EAC1C,qBAAqB;EACrB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;AAC9B",
            sourcesContent: [
              ".newUser {\n  height: 100vh;\n  display: flex;\n  color: white;\n}\n\n.appAside {\n  width: 50%;\n  background-color: var(--darkPurple);\n}\n\n.appForm {\n  width: 50%;\n  background-color: #12130f;\n  padding: 25px 40px;\n  overflow: auto;\n}\n\n.pageSwitcher {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 10%;\n}\n\n.pageSwitcherItem {\n  background-color: var(--darkGrey);\n  color: #9da6b1;\n  padding: 10px 25px;\n  cursor: pointer;\n  font-size: 0.9em;\n  border: none;\n  outline: none;\n  display: inline-block;\n  text-decoration: none;\n}\n\n.pageSwitcherItem-active {\n  background-color: var(--darkPurple);\n  color: white;\n}\n\n.pageSwitcherItem:first-child {\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n}\n.pageSwitcherItem:last-child {\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n\n.formCenter {\n  margin-bottom: 100px;\n}\n\n.formTitle {\n  color: #707c8b;\n  font-weight: 300;\n  margin-bottom: 50px;\n}\n\n.formTitleLink {\n  color: #707c8b;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 1.7em;\n  margin: 0 10px;\n  padding-bottom: 5px;\n  background: none;\n  border: none;\n}\n\n.formTitleLink:first-child {\n  margin-left: 0;\n}\n\n.formTitleLink-active {\n  color: white;\n  border-bottom: 1px solid var(--darkPurple);\n}\n\n.formField {\n  margin-bottom: 40px;\n}\n\n.formFieldLabel {\n  display: block;\n  text-transform: uppercase;\n  font-size: 0.9em;\n  color: white;\n}\n.formFieldInput {\n  width: 85%;\n  background-color: transparent;\n  border: none;\n  color: white;\n  outline: none;\n  border-bottom: 1px solid #445366;\n  font-size: 1em;\n  font-weight: 300;\n  padding-bottom: 10px;\n  margin-top: 10px;\n}\n\n.formFieldInput::placeholder {\n  color: #616e7f;\n}\n\n.formFieldButton {\n  background-color: var(--darkPurple);\n  color: white;\n  border: none;\n  outline: none;\n  border-radius: 25px;\n  padding: 15px 70px;\n  font-size: 0.8em;\n  font-weight: 500;\n}\n\n.formFieldLink {\n  color: #66707d;\n  text-decoration: none;\n  display: inline-block;\n  border-bottom: 1.5px solid var(--darkPurple);\n  padding-bottom: 5px;\n}\n\n.formFieldCheckboxLabel {\n  color: #646f7d;\n  font-size: 0.9em;\n}\n\n.formFieldCheckbox {\n  position: relative;\n  top: 1.5px;\n}\n\n.formFieldTermsLink {\n  color: white;\n  border-bottom: 1px solid var(--darkPurple);\n  text-decoration: none;\n  display: inline-block;\n  padding-bottom: 2px;\n  margin-left: 5px;\n}\n\n.socialMediaButtons {\n  padding: 10px 100px 10px 0px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__["default"] =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/quotes.css":
      /*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/styles/quotes.css ***!
  \**********************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
            true
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          '/* Quote scroll */\n.quotes-scroll{\n  /*height: 90vh;\n  overflow-y: auto;*/\n}\n\n/* Quote Card */ \n\n.dropdown-toggle{\n  background-color: #FFF;\n}\n\n.quote-dropdown .danger:hover{\n  background-color: #C14242;\n  color: #FFF;\n}\n\n.quote-dropdown{\n  display: none;\n}\n\n.quote-card:hover .quote-dropdown{\n  display: block;\n}\n\n.quote-card{\n  border-radius: 35px;\n  font-family: "Georgia";\n}\n\n.quote-card .card-header{\n  border-top-left-radius: 35px;\n  border-top-right-radius: 35px;\n  font-weight: bold;\n  font-size: 20px;\n  padding-left: 2rem;\n}\n\n.quote-card-body {\n  margin: 0px 0px;\n  padding: 2% 2% 0% 2%;\n}\n\n.indented-text {\n  font-size: 22px;\n  /*white-space: pre-line;*/\n  /*line-height: 1.6;*/\n}\n\n/* Edit more */\n.quote-card-body{\n  padding-bottom: 1rem;\n}\n\n.smallText,\ninput.smallText {\n  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;\n  font-size: 11px;\n  line-height: 14px;\n}\n\n.blockquote-footer a{\n  color: var(--darkPurple);\n  font-weight: bold;\n}\n\n.greyText {\n  color: grey;\n}\n\n.greenText {\n  color: #26724c;\n}\n\n/* Search */\n.search{\n  border-radius: 15px;\n}\n\n/* Dashboard */\n\n.dashboard-card {\n  padding: 4%;\n  border-radius: 30px;\n}\n\n.dashboard-card  ul{\n  border-radius: 20px;\n}\n\n.dashboard-card h2 {\n  font-size: 22px;\n}\n\n.dashboard-card .list-item-title{\n  font-size: 18px;\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://src/styles/quotes.css"],
            names: [],
            mappings:
              "AAAA,iBAAiB;AACjB;EACE;oBACkB;AACpB;;AAEA,eAAe;;AAEf;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;EAC5B,6BAA6B;EAC7B,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA,cAAc;AACd;EACE,oBAAoB;AACtB;;AAEA;;EAEE,8DAA8D;EAC9D,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA,WAAW;AACX;EACE,mBAAmB;AACrB;;AAEA,cAAc;;AAEd;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB",
            sourcesContent: [
              '/* Quote scroll */\n.quotes-scroll{\n  /*height: 90vh;\n  overflow-y: auto;*/\n}\n\n/* Quote Card */ \n\n.dropdown-toggle{\n  background-color: #FFF;\n}\n\n.quote-dropdown .danger:hover{\n  background-color: #C14242;\n  color: #FFF;\n}\n\n.quote-dropdown{\n  display: none;\n}\n\n.quote-card:hover .quote-dropdown{\n  display: block;\n}\n\n.quote-card{\n  border-radius: 35px;\n  font-family: "Georgia";\n}\n\n.quote-card .card-header{\n  border-top-left-radius: 35px;\n  border-top-right-radius: 35px;\n  font-weight: bold;\n  font-size: 20px;\n  padding-left: 2rem;\n}\n\n.quote-card-body {\n  margin: 0px 0px;\n  padding: 2% 2% 0% 2%;\n}\n\n.indented-text {\n  font-size: 22px;\n  /*white-space: pre-line;*/\n  /*line-height: 1.6;*/\n}\n\n/* Edit more */\n.quote-card-body{\n  padding-bottom: 1rem;\n}\n\n.smallText,\ninput.smallText {\n  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;\n  font-size: 11px;\n  line-height: 14px;\n}\n\n.blockquote-footer a{\n  color: var(--darkPurple);\n  font-weight: bold;\n}\n\n.greyText {\n  color: grey;\n}\n\n.greenText {\n  color: #26724c;\n}\n\n/* Search */\n.search{\n  border-radius: 15px;\n}\n\n/* Dashboard */\n\n.dashboard-card {\n  padding: 4%;\n  border-radius: 30px;\n}\n\n.dashboard-card  ul{\n  border-radius: 20px;\n}\n\n.dashboard-card h2 {\n  font-size: 22px;\n}\n\n.dashboard-card .list-item-title{\n  font-size: 18px;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__["default"] =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./src/App.css":
      /*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
              function () {
                content = __webpack_require__(
                  /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/App.js":
      /*!********************!*\
  !*** ./src/App.js ***!
  \********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! ./App.css */ "./src/App.css");
          /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _App_css__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! bootstrap/dist/css/bootstrap.min.css */ "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
            );
          /* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! bootstrap/dist/js/bootstrap.bundle.min.js */ "../../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            );
          /* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_2__
            );
          /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react-router-dom */ "./node_modules/react-router-dom/index.js"
            );
          /* harmony import */ var _pages_account_NewUser__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ./pages/account/NewUser */ "./src/pages/account/NewUser.js"
            );
          /* harmony import */ var _pages_MyQuotes__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ./pages/MyQuotes */ "./src/pages/MyQuotes.js"
            );
          /* harmony import */ var _pages_CommentPage__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ./pages/CommentPage */ "./src/pages/CommentPage.js"
            );
          /* harmony import */ var _pages_Authors__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ./pages/Authors */ "./src/pages/Authors.js"
            );
          /* harmony import */ var _pages_Books__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! ./pages/Books */ "./src/pages/Books.js");
          /* harmony import */ var _pages_AuthorDetail__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ./pages/AuthorDetail */ "./src/pages/AuthorDetail.js"
            );
          /* harmony import */ var _pages_BookDetail__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ./pages/BookDetail */ "./src/pages/BookDetail.js"
            );
          /* harmony import */ var _pages_QuoteDetail__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! ./pages/QuoteDetail */ "./src/pages/QuoteDetail.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/App.js";

          function App() {
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"]
            )(
              "div",
              {
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                      "jsxDEV"
                    ]
                  )(
                    "div",
                    {
                      className: "App",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 19,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                      "jsxDEV"
                    ]
                  )(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Routes"],
                    {
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                            "jsxDEV"
                          ]
                        )(
                          react_router_dom__WEBPACK_IMPORTED_MODULE_3__[
                            "Route"
                          ],
                          {
                            path: "/my-quotes",
                            element: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                                "jsxDEV"
                              ]
                            )(
                              _pages_MyQuotes__WEBPACK_IMPORTED_MODULE_5__[
                                "default"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 21,
                                columnNumber: 43,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 21,
                            columnNumber: 9,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                            "jsxDEV"
                          ]
                        )(
                          react_router_dom__WEBPACK_IMPORTED_MODULE_3__[
                            "Route"
                          ],
                          {
                            path: "/comments",
                            element: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                                "jsxDEV"
                              ]
                            )(
                              _pages_CommentPage__WEBPACK_IMPORTED_MODULE_6__[
                                "default"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 22,
                                columnNumber: 42,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 22,
                            columnNumber: 9,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                            "jsxDEV"
                          ]
                        )(
                          react_router_dom__WEBPACK_IMPORTED_MODULE_3__[
                            "Route"
                          ],
                          {
                            path: "/authors",
                            element: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                                "jsxDEV"
                              ]
                            )(
                              _pages_Authors__WEBPACK_IMPORTED_MODULE_7__[
                                "default"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 23,
                                columnNumber: 41,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 23,
                            columnNumber: 9,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                            "jsxDEV"
                          ]
                        )(
                          react_router_dom__WEBPACK_IMPORTED_MODULE_3__[
                            "Route"
                          ],
                          {
                            path: "/",
                            element: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                                "jsxDEV"
                              ]
                            )(
                              _pages_account_NewUser__WEBPACK_IMPORTED_MODULE_4__[
                                "default"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 24,
                                columnNumber: 34,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 24,
                            columnNumber: 9,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                            "jsxDEV"
                          ]
                        )(
                          react_router_dom__WEBPACK_IMPORTED_MODULE_3__[
                            "Route"
                          ],
                          {
                            path: "/author",
                            element: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                                "jsxDEV"
                              ]
                            )(
                              _pages_AuthorDetail__WEBPACK_IMPORTED_MODULE_9__[
                                "default"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 25,
                                columnNumber: 40,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 25,
                            columnNumber: 9,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                            "jsxDEV"
                          ]
                        )(
                          react_router_dom__WEBPACK_IMPORTED_MODULE_3__[
                            "Route"
                          ],
                          {
                            path: "/book",
                            element: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                                "jsxDEV"
                              ]
                            )(
                              _pages_BookDetail__WEBPACK_IMPORTED_MODULE_10__[
                                "default"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 26,
                                columnNumber: 38,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 26,
                            columnNumber: 9,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                            "jsxDEV"
                          ]
                        )(
                          react_router_dom__WEBPACK_IMPORTED_MODULE_3__[
                            "Route"
                          ],
                          {
                            path: "/quote-detail",
                            element: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                                "jsxDEV"
                              ]
                            )(
                              _pages_QuoteDetail__WEBPACK_IMPORTED_MODULE_11__[
                                "default"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 27,
                                columnNumber: 46,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 27,
                            columnNumber: 9,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                            "jsxDEV"
                          ]
                        )(
                          react_router_dom__WEBPACK_IMPORTED_MODULE_3__[
                            "Route"
                          ],
                          {
                            path: "/books",
                            element: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__[
                                "jsxDEV"
                              ]
                            )(
                              _pages_Books__WEBPACK_IMPORTED_MODULE_8__[
                                "default"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 28,
                                columnNumber: 39,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 28,
                            columnNumber: 9,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 20,
                      columnNumber: 7,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 5,
              },
              this
            );
          }

          _c = App;
          /* harmony default export */ __webpack_exports__["default"] = App;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "App");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/api/api.js":
      /*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
      /*! exports provided: getComments, createComment, updateComment, deleteComment */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "getComments",
            function () {
              return getComments;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "createComment",
            function () {
              return createComment;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "updateComment",
            function () {
              return updateComment;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "deleteComment",
            function () {
              return deleteComment;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const getComments = async () => {
            return [
              {
                id: "1",
                body: "First comment",
                username: "Jack",
                userId: "1",
                parentId: null,
                createdAt: "2021-08-16T23:00:33.010+02:00",
              },
              {
                id: "2",
                body: "Second comment",
                username: "John",
                userId: "2",
                parentId: null,
                createdAt: "2021-08-16T23:00:33.010+02:00",
              },
              {
                id: "3",
                body: "First comment first child",
                username: "John",
                userId: "2",
                parentId: "1",
                createdAt: "2021-08-16T23:00:33.010+02:00",
              },
              {
                id: "4",
                body: "Second comment second child",
                username: "John",
                userId: "2",
                parentId: "2",
                createdAt: "2021-08-16T23:00:33.010+02:00",
              },
            ];
          };
          const createComment = async (text, parentId = null) => {
            return {
              id: Math.random().toString(36).substr(2, 9),
              body: text,
              parentId,
              userId: "1",
              username: "John",
              createdAt: new Date().toISOString(),
            };
          };
          const updateComment = async (text) => {
            return {
              text,
            };
          };
          const deleteComment = async () => {
            return {};
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/api/authAPI.js":
      /*!****************************!*\
  !*** ./src/api/authAPI.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const FRONTEND = false ? undefined : "";

          function myAuth() {
            const auth = {};

            auth.verifyAuth = async () => {
              const resRaw = await fetch(FRONTEND + "/auth/user", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "x-auth-token": localStorage.getItem("token"),
                },
                mode: "cors",
              });
              const res = await resRaw.json(); // console.log(resRaw);

              if (resRaw.ok) {
                localStorage.setItem("user", JSON.stringify(res.user));
              } else {
                console.log("[authStatus]auth.verifyAuth: token not valid");
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                document.location.replace("/");
              }

              return res;
            };

            auth.logout = () => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              console.log("cleared token and user");
            };

            auth.register = async (user) => {
              const resRaw = await fetch(FRONTEND + "/auth/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify(user),
              });
              const res = await resRaw.json();

              if (!resRaw.ok) {
                return {
                  msg: res.msg,
                  ok: false,
                };
              } else {
                console.log("Got token:", res.token);
                localStorage.setItem("token", res.token);
                localStorage.setItem("user", JSON.stringify(res.user));
                return {
                  ok: true,
                };
              }
            };

            auth.login = async (credentials) => {
              // FRONTEND +
              const resRaw = await fetch("/auth/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify(credentials),
              });
              console.log("Got resRaw", resRaw);
              const res = await resRaw.json();

              if (!resRaw.ok) {
                return {
                  ok: false,
                  msg: res.msg,
                };
              } else if (res) {
                console.log("[Login] handleSubmit: Got res", res);
                console.log(
                  "[Login] handleSubmit: Got user name:",
                  res.user.name
                );
                console.log("[Login] handleSubmit: Got token:", res.token);
                localStorage.setItem("token", res.token);
                localStorage.setItem("user", JSON.stringify(res.user));
                return {
                  ok: true,
                };
              }
            };

            return auth;
          }

          /* harmony default export */ __webpack_exports__["default"] =
            myAuth();

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/api/authorsAPI.js":
      /*!*******************************!*\
  !*** ./src/api/authorsAPI.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const FRONTEND = false ? undefined : ".";

          function authorsAPI() {
            const Authors = {};

            Authors.getAuthors = async () => {
              const resRaw = await fetch(FRONTEND + "/authors", {
                method: "GET",
                headers: {
                  "x-auth-token": localStorage.getItem("token"),
                },
                mode: "cors",
              });
              console.log("resRaw", resRaw);
              const res = await resRaw.json();

              if (!resRaw.ok) {
                console.log("FAILED", res.msg);
                return {
                  ok: false,
                  authors: [],
                  msg: res.msg,
                };
              } else {
                console.log("SUCCESS", res.authors.length);
                res.ok = true;
                return res;
              }
            };

            Authors.getAuthorById = async (author_id) => {
              const resRaw = await fetch(FRONTEND + "/authors/" + author_id, {
                method: "GET",
                headers: {
                  "x-auth-token": localStorage.getItem("token"),
                },
                mode: "cors",
              });
              console.log("resRaw", resRaw);
              const res = await resRaw.json();

              if (!resRaw.ok) {
                console.log("FAILED", res.msg);
                return {
                  ok: false,
                  author: {},
                  msg: res.msg,
                };
              } else {
                console.log("SUCCESS", res);
                res.ok = true;
                return res;
              }
            };

            Authors.getRecentAuthors = async () => {
              ///quotes/recent-authors
              const resRaw = await fetch(FRONTEND + "/quotes/recent-authors", {
                method: "GET",
                headers: {
                  "x-auth-token": localStorage.getItem("token"),
                },
                mode: "cors",
              });
              console.log("resRaw", resRaw);
              const res = await resRaw.json();

              if (!resRaw.ok) {
                console.log("FAILED", res.msg);
                return {
                  ok: false,
                  authors: [],
                  msg: res.msg,
                };
              } else {
                console.log("SUCCESS", res.authors.length);
                res.ok = true;
                return res;
              }
            };

            Authors.updateAuthor = async (author) => {
              const resRaw = await fetch(FRONTEND + "/authors/update", {
                method: "POST",
                headers: {
                  "x-auth-token": localStorage.getItem("token"),
                  "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify(author),
              });
              console.log("resRaw", resRaw);
              const res = await resRaw.json();

              if (!resRaw.ok) {
                console.log("FAILED", res.msg);
                return {
                  ok: false,
                  msg: res.msg,
                };
              } else {
                console.log("SUCCESS", res);
                res.ok = true;
                return res;
              }
            };

            Authors.deleteAuthor = async (author) => {
              const resRaw = await fetch(FRONTEND + "/authors/delete", {
                method: "POST",
                headers: {
                  "x-auth-token": localStorage.getItem("token"),
                  "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify(author),
              });
              console.log("resRaw", resRaw);
              const res = await resRaw.json();

              if (!resRaw.ok) {
                console.log("FAILED", res.msg);
                return {
                  ok: false,
                  authors: [],
                  msg: res.msg,
                };
              } else {
                console.log("SUCCESS", res.author);
                res.ok = true;
                return res;
              }
            };

            return Authors;
          }

          /* harmony default export */ __webpack_exports__["default"] =
            authorsAPI();

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/api/booksAPI.js":
      /*!*****************************!*\
  !*** ./src/api/booksAPI.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const FRONTEND = false ? undefined : ".";

          function booksAPI() {
            const Books = {};

            Books.getBookById = async (book_id) => {
              const resRaw = await fetch(FRONTEND + "/books/" + book_id, {
                method: "GET",
                headers: {
                  "x-auth-token": localStorage.getItem("token"),
                },
                mode: "cors",
              });
              console.log("resRaw", resRaw);
              const res = await resRaw.json();

              if (!resRaw.ok) {
                console.log("FAILED", res.msg);
                return {
                  ok: false,
                  book: {},
                  msg: res.msg,
                };
              } else {
                console.log("SUCCESS", res);
                res.ok = true;
                return res;
              }
            }; // Books.createBook = async (book) => {
            //   console.log("ready to call backend with", book);
            //   const resRaw = await fetch(FRONTEND + "/books/create", {
            //     method: "POST",
            //     headers: {
            //       "x-auth-token": localStorage.getItem("token"),
            //       "Content-Type": "application/json"
            //     },
            //     mode: "cors",
            //     body: JSON.stringify(book),
            //   });
            //   console.log("resRaw", resRaw);
            //   const res = await resRaw.json();
            //   if (!resRaw.ok) {
            //     console.log("FAILED", res.msg);
            //     return { ok: false, book: {}, msg: res.msg };
            //   } else {
            //     console.log("createBook SUCCESS", res);
            //     res.ok = true;
            //     return res;
            //   }
            // }

            Books.updateBook = async (book) => {
              console.log("ready to call backend with", book);
              const resRaw = await fetch(FRONTEND + "/books/update", {
                method: "POST",
                headers: {
                  "x-auth-token": localStorage.getItem("token"),
                  "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify(book),
              });
              console.log("resRaw", resRaw);
              const res = await resRaw.json();

              if (!resRaw.ok) {
                console.log("FAILED", res.msg);
                return {
                  ok: false,
                  msg: res.msg,
                };
              } else {
                res.ok = true;
                return res;
              }
            };

            Books.deleteBook = async (book) => {
              console.log("ready to call backend with", book);
              const resRaw = await fetch(FRONTEND + "/books/delete", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-auth-token": localStorage.getItem("token"),
                },
                mode: "cors",
                body: JSON.stringify(book),
              });
              console.log("resRaw", resRaw);
              const res = await resRaw.json();

              if (!resRaw.ok) {
                console.log("FAILED", res.msg);
                return {
                  ok: false,
                  book: {},
                  msg: res.msg,
                };
              } else {
                console.log("SUCCESS", res);
                res.ok = true;
                return res;
              }
            };

            return Books;
          }

          /* harmony default export */ __webpack_exports__["default"] =
            booksAPI();

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/api/quotesAPI.js":
      /*!******************************!*\
  !*** ./src/api/quotesAPI.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const FRONTEND = false ? undefined : ".";

          function quotesAPI() {
            const Quotes = {};

            Quotes.getAll = async (pageSize, page, sortorder, bookid) => {
              console.log("ready to fetch quotes", pageSize, page, sortorder);
              const resRaw = await fetch(
                FRONTEND +
                  "/quotes?pagesize=" +
                  pageSize +
                  "&page=" +
                  page +
                  "&bookid=" +
                  bookid +
                  "&sortorder=" +
                  sortorder,
                {
                  method: "GET",
                  headers: {
                    "x-auth-token": localStorage.getItem("token"),
                  },
                  mode: "cors",
                }
              ); // console.log("resRaw", resRaw);

              const res = await resRaw.json();

              if (!resRaw.ok) {
                console.log("FAILED", res.msg);
                return {
                  ok: false,
                  quotes: [],
                  msg: res.msg,
                };
              } else {
                res.ok = true;
                return res;
              }
            };

            Quotes.getQuoteById = async (quoteId) => {
              console.log("quotesAPI.getQuoteById", quoteId);
              const resRaw = await fetch(FRONTEND + "/quotes/" + quoteId, {
                method: "GET",
                headers: {
                  "x-auth-token": localStorage.getItem("token"),
                },
                mode: "cors",
              }); // console.log("resRaw", resRaw);

              const res = await resRaw.json();

              if (!resRaw.ok) {
                alert(res.msg);
              } else {
                return res.quote;
              }
            };

            Quotes.updateQuote = async (quote) => {
              // console.log("quotesAPI.updateQuote", quote);
              const resRaw = await fetch(FRONTEND + "/quotes/update", {
                method: "post",
                headers: {
                  "x-auth-token": localStorage.getItem("token"),
                  "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify(quote),
              }); // console.log("resRaw", resRaw);

              const res = await resRaw.json();

              if (!resRaw.ok) {
                alert(res.msg);
              } else {
                return res.quote;
              }
            };

            Quotes.getBooksDashboard = async (
              sortOrder,
              limit,
              getDetails = false
            ) => {
              const resRaw = await fetch(
                FRONTEND +
                  "/quotes/books?sortorder=" +
                  sortOrder +
                  "&limit=" +
                  limit +
                  "&getdetails=" +
                  getDetails,
                {
                  method: "GET",
                  headers: {
                    "x-auth-token": localStorage.getItem("token"),
                  },
                  mode: "cors",
                }
              ); // console.log("resRaw", resRaw);

              const res = await resRaw.json();

              if (!resRaw.ok) {
                console.log("FAILED", res.msg);
                return {
                  ok: false,
                  books: [],
                  msg: res.msg,
                };
              } else {
                res.ok = true; // console.log("Got res", res);

                return res;
              }
            };

            Quotes.getAuthorsDashboard = async (sortOrder, limit) => {
              console.log("ready to fetch authors", sortOrder, limit);
              const resRaw = await fetch(
                FRONTEND +
                  "/quotes/authors?sortorder=" +
                  sortOrder +
                  "&limit=" +
                  limit,
                {
                  method: "GET",
                  headers: {
                    "x-auth-token": localStorage.getItem("token"),
                  },
                  mode: "cors",
                }
              ); // console.log("resRaw", resRaw);

              const res = await resRaw.json();

              if (!resRaw.ok) {
                console.log("FAILED", res.msg);
                return {
                  ok: false,
                  authors: [],
                  msg: res.msg,
                };
              } else {
                // console.log("SUCCESS", res.authors);
                res.ok = true;
                return res;
              }
            };

            Quotes.createQuote = async (post) => {
              const resRaw = await fetch(FRONTEND + "/quotes/create", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-auth-token": localStorage.getItem("token"),
                },
                mode: "cors",
                body: JSON.stringify(post),
              });
              const res = await resRaw.json();

              if (!resRaw.ok) {
                return {
                  ok: false,
                  msg: res.msg,
                };
              } else {
                return {
                  ok: true,
                };
              }
            };

            Quotes.deleteQuoteById = async (quoteId) => {
              return fetch(FRONTEND + "/quotes/delete/" + quoteId, {
                method: "POST",
                headers: {
                  "x-auth-token": localStorage.getItem("token"),
                },
                mode: "cors",
              });
            };

            return Quotes;
          }

          /* harmony default export */ __webpack_exports__["default"] =
            quotesAPI();

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/api/utilsAPI.js":
      /*!*****************************!*\
  !*** ./src/api/utilsAPI.js ***!
  \*****************************/
      /*! exports provided: getTimeDistance, getRelativeTime, getTagsArray, isoDateWithoutTimezone */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "getTimeDistance",
            function () {
              return getTimeDistance;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "getRelativeTime",
            function () {
              return getRelativeTime;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "getTagsArray",
            function () {
              return getTagsArray;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "isoDateWithoutTimezone",
            function () {
              return isoDateWithoutTimezone;
            }
          );
          /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! date-fns */ "./node_modules/date-fns/esm/index.js"
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          function getTimeDistance(date) {
            return Object(
              date_fns__WEBPACK_IMPORTED_MODULE_0__["formatDistance"]
            )(
              Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["subDays"])(
                new Date(date),
                0
              ),
              new Date(),
              {
                addSuffix: true,
              }
            );
          }
          function getRelativeTime(date) {
            // return formatRelative(new Date(date), new Date());
            return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(
              new Date(date),
              "yyyy年MM月dd日 HH:mm"
            );
          }
          function getTagsArray(tags) {
            let arr = tags.split(" ");
            return arr.filter((i) => i !== "");
          }
          /* Return ISO String in local time */

          function isoDateWithoutTimezone(rawDate) {
            if (rawDate == null) return rawDate;
            const date = new Date(rawDate);
            let timestamp = date.getTime() - date.getTimezoneOffset() * 60000;
            let correctDate = new Date(timestamp);
            return correctDate.toISOString().slice(0, -8);
          }

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/comments/Comment.js":
      /*!*********************************!*\
  !*** ./src/comments/Comment.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./CommentForm */ "./src/comments/CommentForm.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/comments/Comment.js";
          // import PropTypes from "prop-types";

          const Comment = (props) => {
            const {
              comment,
              replies,
              currentUserId,
              deleteComment,
              activeComment,
              setActiveComment,
              parentId = null,
              addComment,
              updateComment,
            } = props;
            const fiveMinutes = 300000;
            const timePassed =
              new Date() - new Date(comment.createdAt) > fiveMinutes;
            const canReply = Boolean(currentUserId);
            const canEdit = currentUserId === comment.userId && !timePassed;
            const canDelete = currentUserId === comment.userId && !timePassed;
            const createdAt = new Date(comment.createdAt).toLocaleString();
            const isReplying =
              activeComment &&
              activeComment.type === "replying" &&
              activeComment.id === comment.id;
            const isEditing =
              activeComment &&
              activeComment.type === "editing" &&
              activeComment.id === comment.id;
            const replyId = parentId ? parentId : comment.id;
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "div",
              {
                className: "comment",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "comment-image-container",
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                          "jsxDEV"
                        ]
                      )(
                        "img",
                        {
                          src: "/user-icon.png",
                          alt: "user icon",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 39,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "comment-right-part",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "comment-content",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                  "jsxDEV"
                                ]
                              )(
                                "div",
                                {
                                  className: "comment-author",
                                  children: comment.username,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 43,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                  "jsxDEV"
                                ]
                              )(
                                "div",
                                {
                                  children: createdAt,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 44,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 42,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        !isEditing &&
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "comment-text",
                              children: comment.body,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 46,
                              columnNumber: 24,
                            },
                            undefined
                          ),
                        isEditing &&
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            _CommentForm__WEBPACK_IMPORTED_MODULE_1__[
                              "default"
                            ],
                            {
                              submitLabel: "Update",
                              hasCancelButton: true,
                              InitialText: comment.body,
                              handleSubmit: (text) =>
                                updateComment(text, comment.id),
                              handleCancel: () => setActiveComment(null),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 48,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "comment-actions",
                            children: [
                              canReply &&
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: "comment-action",
                                    onClick: () =>
                                      setActiveComment({
                                        id: comment.id,
                                        type: "replying",
                                      }),
                                    children: "Reply",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 58,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              canEdit &&
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: "comment-action",
                                    onClick: () =>
                                      setActiveComment({
                                        id: comment.id,
                                        type: "editing",
                                      }),
                                    children: "Edit",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 68,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              canDelete &&
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: "comment-action",
                                    onClick: () => deleteComment(comment.id),
                                    children: "Delete",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 78,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 56,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        isReplying &&
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            _CommentForm__WEBPACK_IMPORTED_MODULE_1__[
                              "default"
                            ],
                            {
                              submitLabel: "Reply",
                              handleSubmit: (text) => addComment(text, replyId),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 87,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        replies.length > 0 &&
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "replies",
                              children: replies.map((reply) =>
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                    "jsxDEV"
                                  ]
                                )(
                                  Comment,
                                  {
                                    comment: reply,
                                    replies: [],
                                    currentUserId: currentUserId,
                                    deleteComment: deleteComment,
                                    parentId: comment.id,
                                    addComment: addComment,
                                    activeComment: activeComment,
                                    setActiveComment: setActiveComment,
                                    updateComment: updateComment,
                                  },
                                  reply.id,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 96,
                                    columnNumber: 15,
                                  },
                                  undefined
                                )
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 94,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = Comment;
          Comment.propTypes = {};
          /* harmony default export */ __webpack_exports__["default"] = Comment;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Comment");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/comments/CommentForm.js":
      /*!*************************************!*\
  !*** ./src/comments/CommentForm.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/comments/CommentForm.js",
            _s = __webpack_require__.$Refresh$.signature();

          // import PropTypes from "prop-types";

          const CommentForm = (props) => {
            _s();

            const {
              submitLabel,
              handleSubmit,
              hasCancelButton = false,
              InitialText = "",
              handleCancel,
            } = props;
            const [text, setText] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(InitialText);
            const isTextareDisabled = text.length === 0;

            const onSubmit = (evt) => {
              evt.preventDefault();
              handleSubmit(text);
              setText("");
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"]
            )(
              "form",
              {
                onSubmit: onSubmit,
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"]
                  )(
                    "textarea",
                    {
                      className: "comment-form-textarea",
                      value: text,
                      onChange: (e) => setText(e.target.value),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"]
                  )(
                    "button",
                    {
                      className: "comment-form-button",
                      disabled: isTextareDisabled,
                      children: submitLabel,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  hasCancelButton &&
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[
                        "jsxDEV"
                      ]
                    )(
                      "button",
                      {
                        type: "button",
                        className:
                          "comment-form-button comment-form-cancel-button",
                        onClick: handleCancel,
                        children: "Cancel",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(CommentForm, "zvnxFOCGeIwVGZl0Tyha7pIGEV0=");

          _c = CommentForm;
          CommentForm.propTypes = {};
          /* harmony default export */ __webpack_exports__["default"] =
            CommentForm;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "CommentForm");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/comments/Comments.js":
      /*!**********************************!*\
  !*** ./src/comments/Comments.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! ./Comment */ "./src/comments/Comment.js");
          /* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./CommentForm */ "./src/comments/CommentForm.js"
            );
          /* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! ../api/api */ "./src/api/api.js");
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/comments/Comments.js",
            _s = __webpack_require__.$Refresh$.signature();

          // import PropTypes from "prop-types";

          const Comments = (props) => {
            _s();

            const { currentUserId } = props;
            const [comments, setComments] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )([]);
            const [activeComment, setActiveComment] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(null); // {type: "editing", id: "1"};

            const rootComments = comments.filter(
              (comments) => comments.parentId === null
            );

            const getReplies = (commentId) => {
              return comments
                .filter((comments) => comments.parentId === commentId)
                .sort(
                  (a, b) =>
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
                );
            };

            const addComment = (text, parentId) => {
              console.log("addComment", text, parentId);
              Object(_api_api__WEBPACK_IMPORTED_MODULE_3__["createComment"])(
                text,
                parentId
              ).then((comment) => {
                setComments([comment, ...comments]);
                setActiveComment(null);
              });
            };

            const deleteComment = (commentId) => {
              if (
                window.confirm("Are you sure that you want to remove comment")
              ) {
                Object(_api_api__WEBPACK_IMPORTED_MODULE_3__["deleteComment"])(
                  commentId
                ).then(() => {
                  const updatedComments = comments.filter(
                    (comment) => comment.id !== commentId
                  );
                  setComments(updatedComments);
                });
              }
            };

            const updateComment = (text, commentId) => {
              Object(_api_api__WEBPACK_IMPORTED_MODULE_3__["updateComment"])(
                text,
                commentId
              ).then(() => {
                const updatedComments = comments.map((comment) => {
                  if (comment.id === commentId) {
                    return { ...comment, body: text };
                  }

                  return comment;
                });
                setComments(updatedComments);
                setActiveComment(null);
              });
            };

            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              Object(
                _api_api__WEBPACK_IMPORTED_MODULE_3__["getComments"]
              )().then((data) => {
                setComments(data);
              });
            }, []);
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
            )(
              "div",
              {
                className: "comments",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "h3",
                    {
                      className: "comments-title",
                      children: "Comments",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "comment-form-title",
                      children: "Write comment",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    _CommentForm__WEBPACK_IMPORTED_MODULE_2__["default"],
                    {
                      submitLabel: "Write",
                      handleSubmit: addComment,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "comments-container",
                      children: rootComments.map((rootComment) =>
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                            "jsxDEV"
                          ]
                        )(
                          _Comment__WEBPACK_IMPORTED_MODULE_1__["default"],
                          {
                            comment: rootComment,
                            replies: getReplies(rootComment.id),
                            currentUserId: currentUserId,
                            deleteComment: deleteComment,
                            activeComment: activeComment,
                            setActiveComment: setActiveComment,
                            addComment: addComment,
                            updateComment: updateComment,
                          },
                          rootComment.id,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 75,
                            columnNumber: 11,
                          },
                          undefined
                        )
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(Comments, "DUkVKfIaBLnlGaWibBc1oMlbWzI=");

          _c = Comments;
          Comments.propTypes = {};
          /* harmony default export */ __webpack_exports__["default"] =
            Comments;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Comments");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/DashboardAuthors.js":
      /*!********************************************!*\
  !*** ./src/components/DashboardAuthors.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _FilterBar__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./FilterBar */ "./src/components/FilterBar.js"
            );
          /* harmony import */ var _authors_FormCreateAuthor__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./authors/FormCreateAuthor */ "./src/components/authors/FormCreateAuthor.js"
            );
          /* harmony import */ var _api_quotesAPI__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../api/quotesAPI */ "./src/api/quotesAPI.js"
            );
          /* harmony import */ var _api_utilsAPI__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! ../api/utilsAPI */ "./src/api/utilsAPI.js");
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/DashboardAuthors.js",
            _s = __webpack_require__.$Refresh$.signature();

          // Element

          // API

          async function drawAuthors(setAuthors, sortOrder, limit) {
            const result = await _api_quotesAPI__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ].getAuthorsDashboard(sortOrder, limit);

            if (result.ok) {
              setAuthors(result.authors);
            } else {
              alert(result.msg);
            }
          }

          const DashBoardAuthors = () => {
            _s();

            const [authors, setAuthors] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )([]);
            const [sortOrder, setSortOrder] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("latest");
            const [limit, setLimit] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(5);
            const [mode, setMode] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("viewing");
            const limit_options = [5, 10, 15];
            const sort_options = [
              {
                value: "latest",
                name: "Latest",
              },
              {
                value: "most",
                name: "Most",
              },
              {
                value: "recent",
                name: "Recent",
              },
            ];
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              console.log("### DashBoardAuthors EFFECT ###");
              drawAuthors(setAuthors, sortOrder, limit);
            }, [sortOrder, limit]);
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
            )(
              "div",
              {
                className: "dashboard-card card mb-3",
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                )(
                  "div",
                  {
                    className: "card-body",
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "row mb-2",
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                "jsxDEV"
                              ]
                            )(
                              "h2",
                              {
                                className: "card-title bold col-auto",
                                children: "Authors",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 42,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                "jsxDEV"
                              ]
                            )(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-outline-secondary col-auto",
                                onClick: () => {
                                  if (mode === "viewing") {
                                    setMode("editing");
                                  } else {
                                    setMode("viewing");
                                  }
                                },
                                children: "Add",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 43,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 41,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                          "jsxDEV"
                        ]
                      )(
                        _FilterBar__WEBPACK_IMPORTED_MODULE_1__["default"],
                        {
                          sortOrder: sortOrder,
                          sort_options: sort_options,
                          setSortOrder: setSortOrder,
                          limit: limit,
                          limit_options: limit_options,
                          setLimit: setLimit,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 58,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      mode === "viewing" &&
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "ul",
                          {
                            className: "list-group",
                            children: authors.map((a, i) =>
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "li",
                                {
                                  className: "list-group-item",
                                  children: /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "a",
                                    {
                                      href: `/author?id=${a._id}`,
                                      className: "non-link",
                                      children: [
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "div",
                                          {
                                            className: "greyText",
                                            children: Object(
                                              _api_utilsAPI__WEBPACK_IMPORTED_MODULE_4__[
                                                "getTimeDistance"
                                              ]
                                            )(a.date),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 71,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "div",
                                          {
                                            className: "bold list-item-title",
                                            children: [
                                              a.name,
                                              " ",
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "span",
                                                {
                                                  className:
                                                    "badge rounded-pill bg-secondary",
                                                  children: a.count,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 74,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 72,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 70,
                                      columnNumber: 17,
                                    },
                                    undefined
                                  ),
                                },
                                i,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 69,
                                  columnNumber: 15,
                                },
                                undefined
                              )
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 67,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      mode === "editing" &&
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          _authors_FormCreateAuthor__WEBPACK_IMPORTED_MODULE_2__[
                            "default"
                          ],
                          {},
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 83,
                            columnNumber: 32,
                          },
                          undefined
                        ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(DashBoardAuthors, "358cL5o98JBup/CIaNEQ3Ieao0M=");

          _c = DashBoardAuthors;
          /* harmony default export */ __webpack_exports__["default"] =
            DashBoardAuthors;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "DashBoardAuthors");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/DashboardBooks.js":
      /*!******************************************!*\
  !*** ./src/components/DashboardBooks.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _FilterBar__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./FilterBar */ "./src/components/FilterBar.js"
            );
          /* harmony import */ var _books_FormCreateBook__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./books/FormCreateBook */ "./src/components/books/FormCreateBook.js"
            );
          /* harmony import */ var _api_quotesAPI__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../api/quotesAPI */ "./src/api/quotesAPI.js"
            );
          /* harmony import */ var _api_utilsAPI__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! ../api/utilsAPI */ "./src/api/utilsAPI.js");
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/DashboardBooks.js",
            _s = __webpack_require__.$Refresh$.signature();

          // Element

          // API

          async function drawBooks(setBooks, sortOrder, limit) {
            const result = await _api_quotesAPI__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ].getBooksDashboard(sortOrder, limit);

            if (result.ok) {
              setBooks(result.books);
            } else {
              alert(result.msg);
            }
          }

          const DashboardBooks = () => {
            _s();

            const [books, setBooks] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )([]);
            const [sortOrder, setSortOrder] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("latest");
            const [limit, setLimit] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(5);
            const [mode, setMode] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("viewing");
            const limit_options = [5, 10, 15];
            const sort_options = [
              {
                value: "latest",
                name: "Latest",
              },
              {
                value: "most",
                name: "Most",
              },
              {
                value: "recent",
                name: "Recent",
              },
            ];
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              console.log("### DashboardBooks EFFECT ###");
              drawBooks(setBooks, sortOrder, limit);
            }, [sortOrder, limit]);

            const createBook = async (book) => {
              console.log("ready to create book", book);
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
            )(
              "div",
              {
                className: "dashboard-card card mb-3",
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                )(
                  "div",
                  {
                    className: "card-body",
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "row mb-2",
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                "jsxDEV"
                              ]
                            )(
                              "h2",
                              {
                                className: "card-title bold col-auto",
                                children: "Books",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 46,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                "jsxDEV"
                              ]
                            )(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-outline-secondary col-auto",
                                onClick: () => {
                                  if (mode === "viewing") {
                                    console.log("set to editing");
                                    setMode("editing");
                                  } else {
                                    setMode("viewing");
                                  }
                                },
                                children: "Add",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 47,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 45,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                          "jsxDEV"
                        ]
                      )(
                        _FilterBar__WEBPACK_IMPORTED_MODULE_1__["default"],
                        {
                          sortOrder: sortOrder,
                          sort_options: sort_options,
                          setSortOrder: setSortOrder,
                          limit: limit,
                          limit_options: limit_options,
                          setLimit: setLimit,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 63,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      mode === "viewing" &&
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "ul",
                          {
                            className: "list-group",
                            children: books.map((b, i) =>
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "li",
                                {
                                  className: "list-group-item",
                                  children: /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "a",
                                    {
                                      href: `/book?id=${b._id}`,
                                      className: "non-link",
                                      children: [
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "div",
                                          {
                                            className: "greyText",
                                            children: Object(
                                              _api_utilsAPI__WEBPACK_IMPORTED_MODULE_4__[
                                                "getTimeDistance"
                                              ]
                                            )(b.date),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 76,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "div",
                                          {
                                            className: "bold list-item-title",
                                            children: [
                                              b.title,
                                              " ",
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "span",
                                                {
                                                  className:
                                                    "badge rounded-pill bg-secondary",
                                                  children: b.count,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 79,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 77,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 75,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                i,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 74,
                                  columnNumber: 13,
                                },
                                undefined
                              )
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 72,
                            columnNumber: 32,
                          },
                          undefined
                        ),
                      mode === "editing" &&
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          _books_FormCreateBook__WEBPACK_IMPORTED_MODULE_2__[
                            "default"
                          ],
                          {
                            createBook: createBook,
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 87,
                            columnNumber: 32,
                          },
                          undefined
                        ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(DashboardBooks, "yqrR28FhQZ05fGc6Ku16dfz1m5M=");

          _c = DashboardBooks;
          /* harmony default export */ __webpack_exports__["default"] =
            DashboardBooks;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "DashboardBooks");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/FilterBar.js":
      /*!*************************************!*\
  !*** ./src/components/FilterBar.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/FilterBar.js";

          const FilterBar = (props) => {
            const {
              setPage,
              setRefresh,
              sortOrder,
              sort_options,
              setSortOrder,
              limit,
              limit_options,
              setLimit,
            } = props;
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "div",
              {
                className: "btn-group mb-2",
                role: "group",
                children: [
                  sort_options.map((option) =>
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      "button",
                      {
                        type: "button",
                        className: `btn btn-outline-secondary ${
                          sortOrder === option.value ? "active" : ""
                        }`,
                        onClick: () => {
                          setSortOrder(option.value);
                          if (setRefresh) setRefresh(true);
                          if (setPage) setPage(1);
                        },
                        children: option.name,
                      },
                      option.value,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 19,
                        columnNumber: 9,
                      },
                      undefined
                    )
                  ),
                  limit &&
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      "button",
                      {
                        className: "btn btn-outline-secondary dropdown-toggle",
                        type: "button",
                        id: "dropdownMenuButton1",
                        "data-bs-toggle": "dropdown",
                        "aria-expanded": "false",
                        children: limit,
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 36,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  limit &&
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      "ul",
                      {
                        className: "dropdown-menu",
                        "aria-labelledby": "dropdownMenuButton1",
                        children: limit_options.map((option) =>
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "li",
                            {
                              children: /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                  "jsxDEV"
                                ]
                              )(
                                "button",
                                {
                                  value: option,
                                  className: "dropdown-item",
                                  onClick: (evt) => {
                                    setLimit(evt.target.value);
                                    if (setRefresh) setRefresh(true);
                                    if (setPage) setPage(1);
                                  },
                                  children: option,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 51,
                                  columnNumber: 15,
                                },
                                undefined
                              ),
                            },
                            option,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 50,
                              columnNumber: 13,
                            },
                            undefined
                          )
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = FilterBar;
          FilterBar.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              setPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              setRefresh:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              sortOrder:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              sort_options:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
              setSortOrder:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              limit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
              limit_options:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
              setLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            FilterBar;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "FilterBar");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/Footer.js":
      /*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/Footer.js";

          const Footer = () => {
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
            )(
              "footer",
              {
                className: "container",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                  )(
                    "br",
                    {},
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 4,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                  )(
                    "p",
                    {
                      children: "Copyright \xA9 2021 Shushu Chen \uD83D\uDC21",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 5,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 3,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = Footer;
          /* harmony default export */ __webpack_exports__["default"] = Footer;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Footer");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/Layout.js":
      /*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
          /* harmony import */ var _UserNavBar__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./UserNavBar */ "./src/components/UserNavBar.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/Layout.js";

          const Layout = ({ children }) => {
            // border-end
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              "div",
              {
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "main",
                    {
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "row",
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "div",
                              {
                                className: "col-2",
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "h1",
                                    {
                                      children: /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "div",
                                        {
                                          children: "Quoter",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 15,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 15,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    _UserNavBar__WEBPACK_IMPORTED_MODULE_2__[
                                      "default"
                                    ],
                                    {},
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 16,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 14,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "div",
                              {
                                className: "col-10",
                                children: children,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 19,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 12,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 11,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    _Footer__WEBPACK_IMPORTED_MODULE_1__["default"],
                    {},
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 10,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = Layout;
          /* harmony default export */ __webpack_exports__["default"] = Layout;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Layout");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/Search.js":
      /*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/Search.js";
          // import PropTypes from "prop-types";

          const Search = (props) => {
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"]
            )(
              "div",
              {
                className: "mb-3",
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"]
                )(
                  "form",
                  {
                    action: "",
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[
                        "jsxDEV"
                      ]
                    )(
                      "input",
                      {
                        className: "form-control search",
                        type: "text",
                        placeholder: "Search quotes",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 8,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 7,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 6,
                columnNumber: 5,
              },
              undefined
            );
          }; // Search.propTypes = {};

          _c = Search;
          /* harmony default export */ __webpack_exports__["default"] = Search;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Search");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/UserNavBar.js":
      /*!**************************************!*\
  !*** ./src/components/UserNavBar.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _api_authAPI__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! ../api/authAPI */ "./src/api/authAPI.js");
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/UserNavBar.js",
            _s = __webpack_require__.$Refresh$.signature();

          const UserNavBar = () => {
            _s();

            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              _api_authAPI__WEBPACK_IMPORTED_MODULE_1__["default"].verifyAuth();
            }, []);
            const user = JSON.parse(localStorage.getItem("user"));

            const logoutClick = () => {
              _api_authAPI__WEBPACK_IMPORTED_MODULE_1__["default"].logout();
              document.location.href = "/";
            };

            const url = new URL(window.location);
            const currPage = url.pathname; // console.log("currPage", currPage);

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "div",
              {
                className: "flex-column",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    "nav",
                    {
                      className: "flex-column nav user-navbar",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                            "jsxDEV"
                          ]
                        )(
                          "a",
                          {
                            href: "/my-quotes",
                            className: `nav-link ${
                              currPage === "/my-quotes" ? "active" : ""
                            }`,
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                "jsxDEV"
                              ]
                            )(
                              "div",
                              {
                                className: `nav-item ${
                                  currPage === "/my-quotes" ? "active" : ""
                                }`,
                                children: "Home",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 28,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 24,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                            "jsxDEV"
                          ]
                        )(
                          "a",
                          {
                            href: "/authors",
                            className: "nav-link",
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                "jsxDEV"
                              ]
                            )(
                              "div",
                              {
                                className: `nav-item ${
                                  currPage === "/authors" ? "active" : ""
                                }`,
                                children: "Authors",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 35,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 34,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                            "jsxDEV"
                          ]
                        )(
                          "a",
                          {
                            href: "/books",
                            className: "nav-link",
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                "jsxDEV"
                              ]
                            )(
                              "div",
                              {
                                className: `nav-item ${
                                  currPage === "/books" ? "active" : ""
                                }`,
                                children: "Books",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 42,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 41,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                            "jsxDEV"
                          ]
                        )(
                          "a",
                          {
                            href: "/comments",
                            className: "nav-link",
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                "jsxDEV"
                              ]
                            )(
                              "div",
                              {
                                className: `nav-item ${
                                  currPage === "/comments" ? "active" : ""
                                }`,
                                children: "Comments",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 47,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 46,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  user &&
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "user-dashboard",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              children: user.name,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 54,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "button",
                            {
                              className: "me-2 btn btn-outline-primary",
                              onClick: logoutClick,
                              children: "Sign Out",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 55,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(UserNavBar, "OD7bBpZva5O2jO+Puf00hKivP7c=");

          _c = UserNavBar;
          /* harmony default export */ __webpack_exports__["default"] =
            UserNavBar;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "UserNavBar");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/authors/AuthorsList.js":
      /*!***********************************************!*\
  !*** ./src/components/authors/AuthorsList.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! react-router-dom */ "./node_modules/react-router-dom/index.js"
            );
          /* harmony import */ var _books_BookCard__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../books/BookCard */ "./src/components/books/BookCard.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/authors/AuthorsList.js",
            _s = __webpack_require__.$Refresh$.signature();

          // Element

          const AuthorsList = (props) => {
            _s();

            const { authors } = props;
            const [showImage, setShowImage] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false);

            const handleDisplay = () => {
              setShowImage(!showImage);
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              "div",
              {
                className: "authors",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "authors-options",
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        "button",
                        {
                          className: "btn btn-outline-secondary",
                          onClick: handleDisplay,
                          children: showImage ? "Image" : "Text",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 19,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "authors-container",
                      children: authors.map((a, i) =>
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                  "jsxDEV"
                                ]
                              )(
                                "div",
                                {
                                  className: "author-row row",
                                  children: [
                                    /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      react_router_dom__WEBPACK_IMPORTED_MODULE_1__[
                                        "Link"
                                      ],
                                      {
                                        to: {
                                          pathname: "/author",
                                          search: "id=" + a._id,
                                        },
                                        className:
                                          "col-2 non-link bold author-link",
                                        children: a.name,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 27,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      "div",
                                      {
                                        className:
                                          "col-2 row author-categories",
                                        children:
                                          a.category &&
                                          a.category.map((c, i) =>
                                            /*#__PURE__*/ Object(
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                                "jsxDEV"
                                              ]
                                            )(
                                              "a",
                                              {
                                                href: "/",
                                                className:
                                                  "col-auto author-category-link non-link me-1",
                                                children: c,
                                              },
                                              i,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 37,
                                                columnNumber: 21,
                                              },
                                              undefined
                                            )
                                          ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 34,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      "div",
                                      {
                                        className: "col-8 row author-books",
                                        children: showImage
                                          ? a.books.map((b, i) =>
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "div",
                                                {
                                                  className: "col-3",
                                                  children:
                                                    /*#__PURE__*/ Object(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                                        "jsxDEV"
                                                      ]
                                                    )(
                                                      _books_BookCard__WEBPACK_IMPORTED_MODULE_2__[
                                                        "default"
                                                      ],
                                                      {
                                                        showImage: true,
                                                        book: b,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 50,
                                                        columnNumber: 25,
                                                      },
                                                      undefined
                                                    ),
                                                },
                                                i,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 49,
                                                  columnNumber: 23,
                                                },
                                                undefined
                                              )
                                            )
                                          : a.books.map((b, i) =>
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "div",
                                                {
                                                  className: "col-6",
                                                  children:
                                                    /*#__PURE__*/ Object(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                                        "jsxDEV"
                                                      ]
                                                    )(
                                                      _books_BookCard__WEBPACK_IMPORTED_MODULE_2__[
                                                        "default"
                                                      ],
                                                      {
                                                        showImage: false,
                                                        book: b,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 55,
                                                        columnNumber: 25,
                                                      },
                                                      undefined
                                                    ),
                                                },
                                                i,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 54,
                                                  columnNumber: 23,
                                                },
                                                undefined
                                              )
                                            ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 46,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 26,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                  "jsxDEV"
                                ]
                              )(
                                "hr",
                                {},
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 60,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            ],
                          },
                          i,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 25,
                            columnNumber: 11,
                          },
                          undefined
                        )
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(AuthorsList, "FlGggdNFzzQ6Wp4AMLNEn7uI3j8=");

          _c = AuthorsList;
          /* harmony default export */ __webpack_exports__["default"] =
            AuthorsList;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "AuthorsList");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/authors/FormCreateAuthor.js":
      /*!****************************************************!*\
  !*** ./src/components/authors/FormCreateAuthor.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react-router-dom */ "./node_modules/react-router-dom/index.js"
            );
          /* harmony import */ var _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../utils/InlineEdit */ "./src/components/utils/InlineEdit.js"
            );
          /* harmony import */ var _api_authorsAPI__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../../api/authorsAPI */ "./src/api/authorsAPI.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/authors/FormCreateAuthor.js",
            _s = __webpack_require__.$Refresh$.signature();

          // API

          const FormCreateAuthor = (props) => {
            _s();

            const { author, createAuthor } = props;
            const navigate = Object(
              react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"]
            )();
            const [name, setName] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(author ? author.name : "");
            const [category, setCategory] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(author && author.category ? author.category.join(" ") : "");
            const [url, setUrl] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(author ? author.url : "");
            const [edited, setEdited] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(author ? false : true);

            const updateAuthor = async (evt) => {
              evt.preventDefault();
              const newAuthor = {
                url: url,
                category: category,
                name: name,
              };

              if (author) {
                newAuthor._id = author._id;
              }

              console.log("newAuthor", newAuthor);
              const result = await _api_authorsAPI__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ].updateAuthor(newAuthor);

              if (!result.ok) {
                navigate(0);
              } else {
                const url = new URL(document.location);

                if (url.pathname === "/author") {
                  // already in author's page
                  navigate(0);
                } else {
                  navigate("/author?id=" + result._id); // creating new author
                }
              }
            };

            const handleDelete = async (evt) => {
              evt.preventDefault();
              await _api_authorsAPI__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ].deleteAuthor(author);
              navigate("/authors");
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
            )(
              "div",
              {
                className: "form-create-author",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "row",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "h2",
                          {
                            className: "col-auto",
                            children: author ? name : "Create Author",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 61,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        edited &&
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "col-auto right row",
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "button",
                                  {
                                    className:
                                      "col-auto mb-2 me-2 btn btn-outline-primary",
                                    onClick: (evt) => {
                                      if (createAuthor) {
                                        createAuthor(name, category, url);
                                      } else {
                                        updateAuthor(evt);
                                      }
                                    },
                                    children: author
                                      ? "Save changes"
                                      : "Create",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 65,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                author &&
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "button",
                                    {
                                      className:
                                        "col-auto mb-2 me-2 btn btn-outline-danger",
                                      onClick: handleDelete,
                                      children: "Delete",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 78,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 64,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "row",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "col-auto",
                            children: "Name",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 90,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "col-auto",
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                "jsxDEV"
                              ]
                            )(
                              _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_3__[
                                "InlineEditText"
                              ],
                              {
                                setEdited: setEdited,
                                value: name,
                                setValue: setName,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 92,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 91,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "row",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "col-auto",
                            children: "Category",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 101,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "col-auto",
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                "jsxDEV"
                              ]
                            )(
                              _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_3__[
                                "InlineEditText"
                              ],
                              {
                                setEdited: setEdited,
                                value: category,
                                setValue: setCategory,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 103,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 102,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "row",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "col-auto",
                            children: "URL",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 112,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "col-auto",
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                "jsxDEV"
                              ]
                            )(
                              _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_3__[
                                "InlineEditText"
                              ],
                              {
                                setEdited: setEdited,
                                value: url,
                                setValue: setUrl,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 114,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 113,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(
            FormCreateAuthor,
            "CLIKCmqC950pTjR+PNQKXP5wBiU=",
            false,
            function () {
              return [
                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"],
              ];
            }
          );

          _c = FormCreateAuthor;
          FormCreateAuthor.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              author:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
                  .isRequired,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            FormCreateAuthor;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "FormCreateAuthor");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/books/BookCard.js":
      /*!******************************************!*\
  !*** ./src/components/books/BookCard.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/books/BookCard.js";

          // import TextPreview from "../utils/TextPreview";

          const BookCard = (props) => {
            const { showImage, book } = props;

            if (showImage) {
              return /*#__PURE__*/ Object(
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
              )(
                "a",
                {
                  className: "non-link",
                  href: `/book?id=${book._id}`,
                  children: /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "book-image-card card mb-2 me-2 text-center",
                      children: [
                        book.coverUrl &&
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "img",
                            {
                              className: "card-img img-fluid rounded-start",
                              src: book.coverUrl,
                              alt: "book cover",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 15,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "book-image-card-title",
                            children: book.title,
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 17,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 13,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 7,
                },
                undefined
              );
            }

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "a",
              {
                className: "non-link",
                href: `/book?id=${book._id}`,
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                )(
                  "div",
                  {
                    className: "book-card card mb-3 me-2",
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "card-body",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "h3",
                            {
                              className: "book-card-title",
                              children: book.title,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 27,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "text-truncate",
                              children: book.introduction,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 28,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 26,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = BookCard;
          BookCard.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              showImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
              book: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
                .isRequired,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            BookCard;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "BookCard");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/books/BookCardQuotes.js":
      /*!************************************************!*\
  !*** ./src/components/books/BookCardQuotes.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _api_quotesAPI__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../api/quotesAPI */ "./src/api/quotesAPI.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/books/BookCardQuotes.js";
          // API

          async function drawQuotes(book, setQuotes) {
            const result = await _api_quotesAPI__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ].getAll(0, 1, "latest", book._id);

            if (result.ok) {
              setQuotes(result.quotes);
            } else {
              alert(result.msg);
            }
          }

          const BookCardQuotes = (props) => {
            const { showImage, book, setSelected, selected, setQuotes } = props;

            const handleClick = (evt) => {
              evt.preventDefault();
              setSelected(book);
              drawQuotes(book, setQuotes);
            };

            if (showImage) {
              return /*#__PURE__*/ Object(
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
              )(
                "button",
                {
                  className: `book-quote-button ${
                    selected && selected.title === book.title ? "active" : ""
                  }`,
                  onClick: handleClick,
                  children: /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "mb-2 me-2 text-center",
                      children: [
                        book.book_details &&
                          book.book_details.coverUrl &&
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "img",
                            {
                              className:
                                "book-quote-img img-fluid rounded-start mb-2",
                              src: book.book_details.coverUrl,
                              alt: "book cover",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 32,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                  "jsxDEV"
                                ]
                              )(
                                "h3",
                                {
                                  children: book.title,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 39,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                                  "jsxDEV"
                                ]
                              )(
                                "p",
                                {
                                  className: "subtitle",
                                  children: book.book_details.author.name,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 40,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              " ",
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 38,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 30,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 7,
                },
                undefined
              );
            }
          };

          _c = BookCardQuotes;
          BookCardQuotes.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
              showImage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
              book: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
                .isRequired,
              setSelected:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
                  .isRequired,
              selected:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
                  .isRequired,
              setQuotes:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
                  .isRequired,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            BookCardQuotes;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "BookCardQuotes");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/books/BooksList.js":
      /*!*******************************************!*\
  !*** ./src/components/books/BooksList.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _BookCard__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./BookCard */ "./src/components/books/BookCard.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/books/BooksList.js";

          const BooksList = (props) => {
            const { books } = props;
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              "div",
              {
                className: "row books",
                children: books.map((b, i) =>
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "col-4",
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        _BookCard__WEBPACK_IMPORTED_MODULE_2__["default"],
                        {
                          book: b,
                        },
                        i,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 14,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    },
                    i,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 13,
                      columnNumber: 9,
                    },
                    undefined
                  )
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = BooksList;
          BooksList.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              books:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
                  .isRequired,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            BooksList;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "BooksList");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/books/FormCreateBook.js":
      /*!************************************************!*\
  !*** ./src/components/books/FormCreateBook.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../utils/InlineEdit */ "./src/components/utils/InlineEdit.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/books/FormCreateBook.js",
            _s = __webpack_require__.$Refresh$.signature();

          const FormCreateBook = (props) => {
            _s();

            const { author, createBook } = props;
            const [authorName, setAuthorName] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(author ? author.name : "");
            const authorId = author ? author._id : "";
            const [title, setTitle] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [url, setUrl] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [keywords, setKeywords] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [introduction, setIntroduction] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");

            const packageBook = () => {
              return {
                author: {
                  name: authorName,
                  _id: authorId,
                },
                title: title,
                url: url,
                keywords: keywords.split(" "),
                introduction: introduction,
              };
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "form",
              {
                className: "form-create-book",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_1__[
                      "InlineLabelEditText"
                    ],
                    {
                      label: "Author Name",
                      value: authorName,
                      setValue: setAuthorName,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_1__[
                      "InlineLabelEditText"
                    ],
                    {
                      label: "Title",
                      value: title,
                      setValue: setTitle,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_1__[
                      "InlineLabelEditText"
                    ],
                    {
                      label: "URL",
                      value: url,
                      setValue: setUrl,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_1__[
                      "InlineLabelEditText"
                    ],
                    {
                      label: "Keywords",
                      value: keywords,
                      setValue: setKeywords,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_1__[
                      "InlineLabelEditTextarea"
                    ],
                    {
                      label: "Introduction",
                      value: introduction,
                      setValue: setIntroduction,
                      height: "20px",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    "button",
                    {
                      className: "btn btn-primary",
                      onClick: (evt) => {
                        evt.preventDefault();
                        console.log("ready to submit");
                        createBook(packageBook());
                      },
                      children: "Create Book",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(FormCreateBook, "evKnICaylKblVY0RYwayl3RuZDo=");

          _c = FormCreateBook;
          /* harmony default export */ __webpack_exports__["default"] =
            FormCreateBook;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "FormCreateBook");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/books/FormCreateBookInAuthor.js":
      /*!********************************************************!*\
  !*** ./src/components/books/FormCreateBookInAuthor.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/books/FormCreateBookInAuthor.js",
            _s = __webpack_require__.$Refresh$.signature();

          const FormCreateBookInAuthor = (props) => {
            _s();

            const { author, handleSubmit } = props;
            const [title, setTitle] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [url, setUrl] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [keywords, setKeywords] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [introduction, setIntroduction] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");

            if (author) {
              return /*#__PURE__*/ Object(
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
              )(
                "form",
                {
                  className: "form-create-book",
                  children: [
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "form-floating mb-2",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "input",
                            {
                              readOnly: true,
                              disabled: true,
                              type: "text",
                              className: "form-control",
                              id: "author-input",
                              value: author.name,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 15,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "label",
                            {
                              htmlFor: "author-input",
                              children: "Author",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 23,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 14,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "form-floating mb-2",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "input",
                            {
                              required: true,
                              type: "text",
                              className: "form-control",
                              id: "title-input",
                              value: title,
                              onChange: (e) => {
                                setTitle(e.target.value);
                              },
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 27,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "label",
                            {
                              htmlFor: "url-input",
                              children: "Title",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 37,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 26,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "form-floating mb-2",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "input",
                            {
                              type: "text",
                              className: "form-control",
                              id: "url-input",
                              value: url,
                              onChange: (e) => {
                                setUrl(e.target.value);
                              },
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 41,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "label",
                            {
                              htmlFor: "url-input",
                              children: "URL",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 50,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 40,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "form-floating mb-2",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "input",
                            {
                              type: "text",
                              className: "form-control",
                              id: "keywords-input",
                              value: keywords,
                              onChange: (e) => {
                                setKeywords(e.target.value);
                              },
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 54,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "label",
                            {
                              htmlFor: "keywords-input",
                              children: "Keywords",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 63,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "form-floating mb-2",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "textarea",
                            {
                              type: "text",
                              className: "form-control",
                              id: "intro-input",
                              value: introduction,
                              onChange: (e) => {
                                setIntroduction(e.target.value);
                              },
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 67,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "label",
                            {
                              htmlFor: "intro-input",
                              children: "Introduction",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 76,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      "button",
                      {
                        className: "btn btn-primary",
                        onClick: (evt) => {
                          evt.preventDefault();
                          console.log("ready to submit");
                          handleSubmit(title, url, keywords, introduction);
                        },
                        children: "Create Book",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 7,
                },
                undefined
              );
            }

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "div",
              {
                children: "Loading books",
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 10,
              },
              undefined
            );
          };

          _s(FormCreateBookInAuthor, "IRjTwLubMCetzRfYLS6upgesu7o=");

          _c = FormCreateBookInAuthor;
          FormCreateBookInAuthor.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            FormCreateBookInAuthor;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "FormCreateBookInAuthor");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/books/FormEditBook.js":
      /*!**********************************************!*\
  !*** ./src/components/books/FormEditBook.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! react-router-dom */ "./node_modules/react-router-dom/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_2__
            );
          /* harmony import */ var _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../utils/InlineEdit */ "./src/components/utils/InlineEdit.js"
            );
          /* harmony import */ var _utils_UploadImageForm__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../utils/UploadImageForm */ "./src/components/utils/UploadImageForm.js"
            );
          /* harmony import */ var _api_booksAPI__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../../api/booksAPI */ "./src/api/booksAPI.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/books/FormEditBook.js",
            _s = __webpack_require__.$Refresh$.signature();

          // Elements

          // API

          const FormEditBook = (props) => {
            _s();

            const { book } = props;
            const [title, setTitle] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [introduction, setIntroduction] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [keywords, setKeywords] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [edited, setEdited] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false);
            const [url, setUrl] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [coverUrl, setCoverUrl] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              // set values according to book
              if (book) setTitle(book.title);
              if (book.introduction) setIntroduction(book.introduction);
              if (book.keywords) setKeywords(book.keywords.join(" "));
              if (book.url) setUrl(book.url);
              if (book.cover) setUrl(book.cover);
              if (book.coverUrl) setCoverUrl(book.coverUrl);
            }, [book]);
            const navigate = Object(
              react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"]
            )();

            const handleUpdate = async (evt) => {
              evt.preventDefault();
              const newBook = {
                _id: book._id,
                title: title,
                author: book.author,
                url: url,
                keywords: keywords,
                introduction: introduction,
                coverUrl: coverUrl,
              };
              const result = await _api_booksAPI__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ].updateBook(newBook);
              console.log("FormCreateEditBook", result);

              if (!result.ok) {
                navigate(0);
              } else {
                navigate(0); // navigate("/book?id=" + result._id);
              }
            };

            const handleDelete = async (evt) => {
              evt.preventDefault();
              await _api_booksAPI__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ].deleteBook(book);
              navigate("/author?id=" + book.author._id);
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
            )(
              "div",
              {
                children:
                  book &&
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
                  )(
                    "div",
                    {
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "row",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                  "jsxDEV"
                                ]
                              )(
                                "div",
                                {
                                  className: "col-6",
                                  children: /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "h2",
                                    {
                                      children: title,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 70,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 69,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              edited &&
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: "col-auto row right",
                                    children: [
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "button",
                                        {
                                          className:
                                            "col-auto mb-2 me-2 btn btn-outline-primary",
                                          onClick: handleUpdate,
                                          children: "Save changes",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 74,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "button",
                                        {
                                          className:
                                            "col-auto mb-2 me-2 btn btn-outline-danger",
                                          onClick: handleDelete,
                                          children: "Delete",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 80,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 73,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 68,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "bookStaticInfo",
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                "jsxDEV"
                              ]
                            )(
                              "div",
                              {
                                className: "row",
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "div",
                                    {
                                      className: "col-8",
                                      children: [
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "div",
                                          {
                                            className: "row",
                                            children: [
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "div",
                                                {
                                                  className: "col-2",
                                                  children: "Title",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 94,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "div",
                                                {
                                                  className: "col-10",
                                                  children:
                                                    /*#__PURE__*/ Object(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                        "jsxDEV"
                                                      ]
                                                    )(
                                                      _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_3__[
                                                        "InlineEditText"
                                                      ],
                                                      {
                                                        setEdited: setEdited,
                                                        value: title,
                                                        setValue: setTitle,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 96,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 95,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 93,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "div",
                                          {
                                            className: "row",
                                            children: [
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "div",
                                                {
                                                  className: "col-2",
                                                  children: "Author",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 104,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "div",
                                                {
                                                  className: "col-10",
                                                  children:
                                                    /*#__PURE__*/ Object(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                        "jsxDEV"
                                                      ]
                                                    )(
                                                      "a",
                                                      {
                                                        className:
                                                          "non-link bold",
                                                        href: `/author?id=${book.author._id}`,
                                                        children:
                                                          book.author.name,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 106,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 105,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 103,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "div",
                                          {
                                            className: "row",
                                            children: [
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "div",
                                                {
                                                  className: "col-2",
                                                  children:
                                                    /*#__PURE__*/ Object(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                        "jsxDEV"
                                                      ]
                                                    )(
                                                      "a",
                                                      {
                                                        className: "non-link",
                                                        href: book.url,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: "URL",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 116,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 115,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "div",
                                                {
                                                  className: "col-10",
                                                  children:
                                                    /*#__PURE__*/ Object(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                        "jsxDEV"
                                                      ]
                                                    )(
                                                      _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_3__[
                                                        "InlineEditText"
                                                      ],
                                                      {
                                                        setEdited: setEdited,
                                                        value: url,
                                                        setValue: setUrl,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 126,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 125,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 114,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "div",
                                          {
                                            className: "row",
                                            children: [
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "div",
                                                {
                                                  className: "col-2",
                                                  children: "Keywords",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 135,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "div",
                                                {
                                                  className: "col-10",
                                                  children:
                                                    /*#__PURE__*/ Object(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                        "jsxDEV"
                                                      ]
                                                    )(
                                                      _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_3__[
                                                        "InlineEditText"
                                                      ],
                                                      {
                                                        setEdited: setEdited,
                                                        value: keywords,
                                                        setValue: setKeywords,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 137,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 136,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 134,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "div",
                                          {
                                            className: "row",
                                            children: [
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "div",
                                                {
                                                  className: "col-2",
                                                  children: "Introduction",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 146,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "div",
                                                {
                                                  className: "col-10",
                                                  children:
                                                    /*#__PURE__*/ Object(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                        "jsxDEV"
                                                      ]
                                                    )(
                                                      _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_3__[
                                                        "InlineEditTextarea"
                                                      ],
                                                      {
                                                        setEdited: setEdited,
                                                        value: introduction,
                                                        setValue:
                                                          setIntroduction,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 148,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 147,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 145,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 92,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "div",
                                    {
                                      className: "col-4 right",
                                      children: coverUrl
                                        ? /*#__PURE__*/ Object(
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                              "jsxDEV"
                                            ]
                                          )(
                                            "div",
                                            {
                                              children: [
                                                /*#__PURE__*/ Object(
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                    "jsxDEV"
                                                  ]
                                                )(
                                                  "img",
                                                  {
                                                    src: coverUrl,
                                                    alt: "book",
                                                    className: "img-book-cover",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 159,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ Object(
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                    "jsxDEV"
                                                  ]
                                                )(
                                                  _utils_UploadImageForm__WEBPACK_IMPORTED_MODULE_4__[
                                                    "default"
                                                  ],
                                                  {
                                                    setEdited: setEdited,
                                                    url: coverUrl,
                                                    setUrl: setCoverUrl,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 160,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 158,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          )
                                        : /*#__PURE__*/ Object(
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                              "jsxDEV"
                                            ]
                                          )(
                                            "div",
                                            {
                                              children: /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                _utils_UploadImageForm__WEBPACK_IMPORTED_MODULE_4__[
                                                  "default"
                                                ],
                                                {
                                                  setEdited: setEdited,
                                                  url: coverUrl,
                                                  setUrl: setCoverUrl,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 168,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 167,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 156,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 91,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 90,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 9,
                    },
                    undefined
                  ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(FormEditBook, "ffqa09JVrRr1bKk2KG1nnMxie5Y=", false, function () {
            return [
              react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"],
            ];
          });

          _c = FormEditBook;
          FormEditBook.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
              book: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
                .isRequired,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            FormEditBook;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "FormEditBook");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/quotes/FormCreateQuoteInBook.js":
      /*!********************************************************!*\
  !*** ./src/components/quotes/FormCreateQuoteInBook.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react-router-dom */ "./node_modules/react-router-dom/index.js"
            );
          /* harmony import */ var _api_utilsAPI__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../../api/utilsAPI */ "./src/api/utilsAPI.js"
            );
          /* harmony import */ var _api_quotesAPI__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../../api/quotesAPI */ "./src/api/quotesAPI.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/quotes/FormCreateQuoteInBook.js",
            _s = __webpack_require__.$Refresh$.signature();

          const FormCreateQuoteInBook = (props) => {
            _s();

            const { book, author, quotes, setQuotes } = props;
            const navigate = Object(
              react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"]
            )();
            const [title, setTitle] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [text, setText] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [tags, setTags] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [date, setDate] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(
              Object(
                _api_utilsAPI__WEBPACK_IMPORTED_MODULE_3__[
                  "isoDateWithoutTimezone"
                ]
              )(new Date())
            );
            const [memo, setMemo] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [privacy, setPrivacy] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(1);
            const user = JSON.parse(localStorage.getItem("user"));

            const handleSubmit = async (evt) => {
              evt.preventDefault();
              const quote = {
                author: {
                  _id: author._id,
                  name: author.name,
                },
                book: {
                  _id: book._id,
                  title: book.title,
                },
                user: {
                  _id: user._id,
                  name: user.name,
                },
                title: title,
                text: text,
                date: date,
                tags: Object(
                  _api_utilsAPI__WEBPACK_IMPORTED_MODULE_3__["getTagsArray"]
                )(tags),
                privacy_level: privacy,
              };

              if (memo !== "") {
                quote.memo = [
                  {
                    userID: user._id,
                    username: user.name,
                    text: memo,
                    date: Object(
                      _api_utilsAPI__WEBPACK_IMPORTED_MODULE_3__[
                        "isoDateWithoutTimezone"
                      ]
                    )(new Date()),
                  },
                ];
              }

              console.log("trying to submit", quote);
              const result = await _api_quotesAPI__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ].createQuote(quote);

              if (result.ok) {
                quote._id = result._id;
                setQuotes([...quotes, quote]);
              } else {
                alert(result.msg);
              }
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
            )(
              "div",
              {
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                  )(
                    "h3",
                    {
                      className: "center",
                      children: "Create Quote",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                  )(
                    "form",
                    {
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "input",
                                {
                                  readOnly: true,
                                  disabled: true,
                                  type: "text",
                                  className: "form-control",
                                  id: "author-input",
                                  value: author.name,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 64,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "author-input",
                                  children: "Author",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 72,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 63,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "input",
                                {
                                  readOnly: true,
                                  disabled: true,
                                  type: "text",
                                  className: "form-control",
                                  id: "book-input",
                                  value: book.title,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 76,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "book-input",
                                  children: "Source",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 84,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 75,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "textarea",
                                {
                                  id: "title-input",
                                  type: "text",
                                  className: "form-control",
                                  name: "title",
                                  value: title,
                                  onChange: (e) => {
                                    setTitle(e.target.value);
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 88,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "memo-input",
                                  children: "Title",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 98,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 87,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "textarea",
                                {
                                  id: "text-input",
                                  className: "form-control",
                                  rows: "5",
                                  required: true,
                                  name: "text",
                                  value: text,
                                  onChange: (e) => {
                                    setText(e.target.value);
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 102,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "text-input",
                                  children: "Quote Text",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 113,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 101,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "input",
                                {
                                  className: "form-control",
                                  type: "datetime-local",
                                  id: "date-input",
                                  name: "date",
                                  value: date,
                                  min: "1990-01-01T00:00",
                                  max: "2099-12-31T23:55",
                                  onChange: (e) => {
                                    setDate(e.target.value);
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 117,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "date-input",
                                  children: "Date",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 129,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 116,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "input",
                                {
                                  type: "text",
                                  className: "form-control",
                                  id: "tags-input",
                                  value: tags,
                                  onChange: (e) => {
                                    setTags(e.target.value);
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 133,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "tags-input",
                                  children: "Tags",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 142,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 132,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "select",
                                {
                                  name: "privacy_level",
                                  className: "form-control",
                                  id: "privacySelect",
                                  value: privacy,
                                  onChange: (e) => {
                                    setPrivacy(e.target.value);
                                  },
                                  children: [
                                    /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      "option",
                                      {
                                        value: "1",
                                        children: "Private",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 155,
                                        columnNumber: 13,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      "option",
                                      {
                                        value: "0",
                                        children: "Public",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 156,
                                        columnNumber: 13,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 146,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "privacy-input",
                                  children: "Privacy Level",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 158,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 145,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "textarea",
                                {
                                  id: "memo-input",
                                  type: "text",
                                  className: "form-control",
                                  name: "memo",
                                  value: memo,
                                  onChange: (e) => {
                                    setMemo(e.target.value);
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 162,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "memo-input",
                                  children: "Memo",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 172,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 161,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "br",
                          {},
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 175,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-group row mb-2",
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                "jsxDEV"
                              ]
                            )(
                              "button",
                              {
                                id: "btnCreateQuote",
                                type: "submit",
                                className: "btn btn-info",
                                onClick: handleSubmit,
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "svg",
                                    {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      children: /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "path",
                                        {
                                          d: "M13.473 7.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.204.456.456.456.114 0 .229-.042.317-.128l.749-.729-.633-.654-.75.728zm6.33-8.425l-2.564 2.485c-1.378 1.336-2.081 2.63-2.73 4.437l1.132 1.169c1.825-.593 3.14-1.255 4.518-2.591l2.563-2.486-2.919-3.014zm7.477-7.659l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.469.728-1.093.728-1.718 0-2.088-2.53-3.196-4.054-1.718zm-1.946 11.333v7.534h-16v-12h8.013l2.058-2h-12.071v16h20v-11.473l-2 1.939z",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 189,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 183,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                  "Post Quote",
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 177,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 176,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(
            FormCreateQuoteInBook,
            "Wh8nLBw5tJFmhOp43V7uXpJDtyI=",
            false,
            function () {
              return [
                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"],
              ];
            }
          );

          _c = FormCreateQuoteInBook;
          FormCreateQuoteInBook.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              book: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
                .isRequired,
              author:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
                  .isRequired,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            FormCreateQuoteInBook;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "FormCreateQuoteInBook");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/quotes/FormEditQuote.js":
      /*!************************************************!*\
  !*** ./src/components/quotes/FormEditQuote.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react-router-dom */ "./node_modules/react-router-dom/index.js"
            );
          /* harmony import */ var _api_utilsAPI__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../../api/utilsAPI */ "./src/api/utilsAPI.js"
            );
          /* harmony import */ var _api_quotesAPI__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../../api/quotesAPI */ "./src/api/quotesAPI.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/quotes/FormEditQuote.js",
            _s = __webpack_require__.$Refresh$.signature();

          // Element
          // import { InlineEditText } from "../utils/InlineEdit";

          const FormCreateQuoteInBook = (props) => {
            _s();

            const { quote } = props;
            const navigate = Object(
              react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"]
            )();
            const [title, setTitle] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(quote.title);
            const [text, setText] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(quote.text);
            const [tags, setTags] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(
              typeof quote.tags !== "string" ? quote.tags.join(" ") : quote.tags
            );
            const [date, setDate] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(
              Object(
                _api_utilsAPI__WEBPACK_IMPORTED_MODULE_3__[
                  "isoDateWithoutTimezone"
                ]
              )(quote.date)
            );
            const [memo, setMemo] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(quote.memo && quote.memo[0].text ? quote.memo[0].text : "");
            const [privacy, setPrivacy] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(quote.privacy_level);
            const user = JSON.parse(localStorage.getItem("user"));
            console.log("date", date);

            const handleSubmit = async (evt) => {
              evt.preventDefault();
              const newQuote = {
                // author: { _id: author._id, name: author.name },
                // book: { _id: book._id, title: book.title },
                // user: { _id: user.id, name: user.name },
                title: title,
                _id: quote._id,
                text: text,
                date: date,
                tags: Object(
                  _api_utilsAPI__WEBPACK_IMPORTED_MODULE_3__["getTagsArray"]
                )(tags),
                privacy_level: privacy,
              };

              if (memo !== "") {
                newQuote.memo = [
                  {
                    userID: user.id,
                    username: user.name,
                    text: memo,
                    date: Object(
                      _api_utilsAPI__WEBPACK_IMPORTED_MODULE_3__[
                        "isoDateWithoutTimezone"
                      ]
                    )(new Date()).slice(0, -8),
                  },
                ];
              } else {
                newQuote.memo = null;
              }

              console.log("trying to submit", newQuote);
              await _api_quotesAPI__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ].updateQuote(newQuote);
              navigate(0);
            };

            const handleDelete = async (evt) => {
              evt.preventDefault();
              console.log("delete clicked");
              await _api_quotesAPI__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ].deleteQuote(quote);
              navigate(-1);
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
            )(
              "div",
              {
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                  )(
                    "h3",
                    {
                      className: "center",
                      children: "Edit Quote",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                  )(
                    "form",
                    {
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "input",
                                {
                                  readOnly: true,
                                  disabled: true,
                                  type: "text",
                                  className: "form-control",
                                  id: "author-input",
                                  value: quote.author.name,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 78,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "author-input",
                                  children: "Author",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 86,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 77,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "input",
                                {
                                  readOnly: true,
                                  disabled: true,
                                  type: "text",
                                  className: "form-control",
                                  id: "book-input",
                                  value: quote.book.title,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 90,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "book-input",
                                  children: "Source",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 98,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 89,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "input",
                                {
                                  id: "title-input",
                                  className: "form-control",
                                  type: "text",
                                  value: title,
                                  onChange: (e) => {
                                    setTitle(e.target.value);
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 102,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "title-input",
                                  children: "Title",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 111,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 101,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "textarea",
                                {
                                  id: "text-input",
                                  className: "form-control",
                                  rows: "5",
                                  required: true,
                                  name: "text",
                                  value: text,
                                  onChange: (e) => {
                                    setText(e.target.value);
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 115,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "text-input",
                                  children: "Quote Text",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 126,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 114,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "input",
                                {
                                  className: "form-control",
                                  type: "datetime-local",
                                  id: "date-input",
                                  name: "date",
                                  value: date,
                                  min: "1990-01-01T00:00",
                                  max: "2099-12-31T23:55",
                                  onChange: (e) => {
                                    setDate(e.target.value);
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 130,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "date-input",
                                  children: "Date",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 142,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 129,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "input",
                                {
                                  type: "text",
                                  className: "form-control",
                                  id: "tags-input",
                                  value: tags,
                                  onChange: (e) => {
                                    setTags(e.target.value);
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 146,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "tags-input",
                                  children: "Tags",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 155,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 145,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "select",
                                {
                                  name: "privacy_level",
                                  className: "form-control",
                                  id: "privacySelect",
                                  value: privacy,
                                  onChange: (e) => {
                                    setPrivacy(e.target.value);
                                  },
                                  children: [
                                    /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      "option",
                                      {
                                        value: "1",
                                        children: "Private",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 168,
                                        columnNumber: 13,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      "option",
                                      {
                                        value: "0",
                                        children: "Public",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 169,
                                        columnNumber: 13,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 159,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "privacy-input",
                                  children: "Privacy Level",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 171,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 158,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-floating mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "textarea",
                                {
                                  id: "memo-input",
                                  type: "text",
                                  className: "form-control",
                                  name: "memo",
                                  value: memo,
                                  onChange: (e) => {
                                    setMemo(e.target.value);
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 175,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "label",
                                {
                                  htmlFor: "memo-input",
                                  children: "Memo",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 185,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 174,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "br",
                          {},
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 188,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "form-group row mb-2",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "button",
                                {
                                  id: "btnCreateQuote",
                                  type: "submit",
                                  className: "col-auto me-2 btn btn-info",
                                  onClick: handleSubmit,
                                  children: [
                                    /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      "svg",
                                      {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "path",
                                          {
                                            d: "M13.473 7.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.204.456.456.456.114 0 .229-.042.317-.128l.749-.729-.633-.654-.75.728zm6.33-8.425l-2.564 2.485c-1.378 1.336-2.081 2.63-2.73 4.437l1.132 1.169c1.825-.593 3.14-1.255 4.518-2.591l2.563-2.486-2.919-3.014zm7.477-7.659l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.469.728-1.093.728-1.718 0-2.088-2.53-3.196-4.054-1.718zm-1.946 11.333v7.534h-16v-12h8.013l2.058-2h-12.071v16h20v-11.473l-2 1.939z",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 202,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 196,
                                        columnNumber: 13,
                                      },
                                      undefined
                                    ),
                                    "Update Quote",
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 190,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "button",
                                {
                                  className: "col-auto btn btn-danger",
                                  onClick: handleDelete,
                                  children: "Delete",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 206,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 189,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(
            FormCreateQuoteInBook,
            "RNJ49z9x3ZKY7P8fpPhu4B31dGA=",
            false,
            function () {
              return [
                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"],
              ];
            }
          );

          _c = FormCreateQuoteInBook;
          FormCreateQuoteInBook.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              quote:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
                  .isRequired,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            FormCreateQuoteInBook;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "FormCreateQuoteInBook");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/quotes/QuoteCard.js":
      /*!********************************************!*\
  !*** ./src/components/quotes/QuoteCard.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js"
            );
          /* harmony import */ var _utils_TextIndentation__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../utils/TextIndentation */ "./src/components/utils/TextIndentation.js"
            );
          /* harmony import */ var _QuoteEditCard__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./QuoteEditCard */ "./src/components/quotes/QuoteEditCard.js"
            );
          /* harmony import */ var _utils_ModalDeleteConfirmation__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../utils/ModalDeleteConfirmation */ "./src/components/utils/ModalDeleteConfirmation.js"
            );
          /* harmony import */ var _api_utilsAPI__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../../api/utilsAPI */ "./src/api/utilsAPI.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/quotes/QuoteCard.js";

          // Elements

          // API

          const QuoteCard = (props) => {
            const {
              quote,
              book,
              author,
              showDate,
              showTag,
              showMemo,
              handleDelete,
              handleUpdate,
              activeQuote,
              setActiveQuote,
            } = props; // const isReplying =
            //   activeComment &&
            //   activeComment.type === "replying" &&
            //   activeComment.id === comment.id;

            const isEditing =
              activeQuote &&
              activeQuote.type === "editing" &&
              activeQuote.id === quote._id;
            if (isEditing)
              return /*#__PURE__*/ Object(
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
              )(
                _QuoteEditCard__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                  quote: quote,
                  book: book,
                  author: author,
                  handleDelete: handleDelete,
                  handleCancel: () => setActiveQuote(null),
                  handleUpdate: handleUpdate,
                  setActiveQuote: setActiveQuote,
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 7,
                },
                undefined
              );
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
            )(
              "div",
              {
                className: "quote-card card mb-3",
                children: [
                  quote.title &&
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "card-header",
                        children: quote.title,
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 23,
                      },
                      undefined
                    ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "quote-card-body card-body row",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "col-11 quoteDetails",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                  "jsxDEV"
                                ]
                              )(
                                "blockquote",
                                {
                                  className: "blockquote",
                                  children: [
                                    /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      _utils_TextIndentation__WEBPACK_IMPORTED_MODULE_2__[
                                        "default"
                                      ],
                                      {
                                        rawText: quote.text,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 57,
                                        columnNumber: 13,
                                      },
                                      undefined
                                    ),
                                    (!author || !book) &&
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "footer",
                                        {
                                          className:
                                            "blockquote-footer text-end",
                                          children: [
                                            !author &&
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "span",
                                                {
                                                  children: [
                                                    /*#__PURE__*/ Object(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                        "jsxDEV"
                                                      ]
                                                    )(
                                                      "a",
                                                      {
                                                        className: "non-link",
                                                        href: `/author?id=${quote.author._id}`,
                                                        children:
                                                          quote.author.name,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 63,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    ",",
                                                    " ",
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 62,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            !book &&
                                              /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                  "jsxDEV"
                                                ]
                                              )(
                                                "cite",
                                                {
                                                  title: "Source Title",
                                                  children:
                                                    /*#__PURE__*/ Object(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                        "jsxDEV"
                                                      ]
                                                    )(
                                                      "a",
                                                      {
                                                        className: "non-link",
                                                        href: `/book?id=${quote.book._id}`,
                                                        children:
                                                          quote.book.title,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 74,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 73,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 60,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 53,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              (showDate || showTag) &&
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: "quoteFooter",
                                    children: [
                                      showTag &&
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "div",
                                          {
                                            children:
                                              typeof quote.tags !== "string"
                                                ? quote.tags.map((t, i) =>
                                                    /*#__PURE__*/ Object(
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                        "jsxDEV"
                                                      ]
                                                    )(
                                                      "a",
                                                      {
                                                        className:
                                                          "col-auto non-link greyText smallText tags",
                                                        href: "/",
                                                        children: t,
                                                      },
                                                      i,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 89,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    )
                                                  )
                                                : /*#__PURE__*/ Object(
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                                      "jsxDEV"
                                                    ]
                                                  )(
                                                    "div",
                                                    {
                                                      className:
                                                        "col-auto non-link greyText smallText tags",
                                                      children: quote.tags,
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 98,
                                                      columnNumber: 21,
                                                    },
                                                    undefined
                                                  ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 86,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      showDate &&
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "small",
                                          {
                                            className: "text-muted right",
                                            children: Object(
                                              _api_utilsAPI__WEBPACK_IMPORTED_MODULE_5__[
                                                "getRelativeTime"
                                              ]
                                            )(quote.date),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 106,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 84,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              showMemo &&
                                quote.memo &&
                                quote.memo.map((m, i) =>
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "div",
                                    {
                                      children: [
                                        "- ",
                                        m.text,
                                        " (",
                                        Object(
                                          _api_utilsAPI__WEBPACK_IMPORTED_MODULE_5__[
                                            "getRelativeTime"
                                          ]
                                        )(m.date),
                                        ")",
                                      ],
                                    },
                                    i,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 116,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  )
                                ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 52,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "col-1",
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                "jsxDEV"
                              ]
                            )(
                              react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[
                                "Dropdown"
                              ],
                              {
                                className: "quote-dropdown",
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[
                                      "Dropdown"
                                    ].Toggle,
                                    {
                                      className: "dropdown-toggle",
                                      variant: "outline-secondary",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 124,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[
                                      "Dropdown"
                                    ].Menu,
                                    {
                                      className: "dropdown-menu",
                                      children: [
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[
                                            "Dropdown"
                                          ].Item,
                                          {
                                            as: "button",
                                            onClick: () =>
                                              setActiveQuote({
                                                id: quote._id,
                                                type: "editing",
                                              }),
                                            children: "Edit",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 130,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[
                                            "Dropdown"
                                          ].Item,
                                          {
                                            as: "button",
                                            onClick: () =>
                                              setActiveQuote({
                                                id: quote._id,
                                                type: "commenting",
                                              }),
                                            children: "Comment",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 138,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[
                                            "Dropdown"
                                          ].Item,
                                          {
                                            className: "danger",
                                            as: "button",
                                            onClick: () => handleDelete(quote), // data-bs-toggle="modal"
                                            // data-bs-target={`#deleteModal-${quote._id}`}
                                            children: "Delete",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 146,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 129,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 123,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 122,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
                  )(
                    _utils_ModalDeleteConfirmation__WEBPACK_IMPORTED_MODULE_4__[
                      "default"
                    ],
                    {
                      id: quote._id,
                      handleDelete: handleDelete,
                      message: "Are you sure you want to delete this quote?",
                      previewText: quote.text,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = QuoteCard;
          QuoteCard.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
              quote:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
                  .isRequired,
              book: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
              author: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
              showDate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
              showTag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
              showMemo: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
              activeQuote:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
              setActiveQuote:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
              handleDelete:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
                  .isRequired,
              handleUpdate:
                prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
                  .isRequired,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            QuoteCard;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "QuoteCard");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/quotes/QuoteEditCard.js":
      /*!************************************************!*\
  !*** ./src/components/quotes/QuoteEditCard.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../utils/InlineEdit */ "./src/components/utils/InlineEdit.js"
            );
          /* harmony import */ var _api_utilsAPI__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../../api/utilsAPI */ "./src/api/utilsAPI.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/quotes/QuoteEditCard.js",
            _s = __webpack_require__.$Refresh$.signature();

          // Element

          // import ModalDeleteConfirmation from "../utils/ModalDeleteConfirmation";
          // API

          const QuoteEditCard = (props) => {
            _s();

            const {
              quote,
              book,
              author,
              handleDelete,
              handleUpdate,
              handleCancel,
            } = props;
            const [newQuote, setNewQuote] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )({
              _id: "",
              title: "",
              text: "",
              tags: "",
              date: Object(
                _api_utilsAPI__WEBPACK_IMPORTED_MODULE_3__[
                  "isoDateWithoutTimezone"
                ]
              )(new Date()),
              memo: "",
              privacy_level: 1,
            });
            const [authorName, setAuthorName] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [bookTitle, setBookTitle] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              if (quote) {
                setNewQuote({
                  ...newQuote,
                  _id: quote._id,
                  title: quote.title,
                  text: quote.text,
                  tags:
                    typeof quote.tags !== "string"
                      ? quote.tags.join(" ")
                      : quote.tags,
                  date: Object(
                    _api_utilsAPI__WEBPACK_IMPORTED_MODULE_3__[
                      "isoDateWithoutTimezone"
                    ]
                  )(quote.date),
                  memo:
                    quote.memo && quote.memo[0].text ? quote.memo[0].text : "",
                  privacy_level: 1,
                  user: quote.user,
                });
                setAuthorName(quote.author.name);
                setBookTitle(quote.book.title);
              }
            }, [quote, book, author]);
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
            )(
              "div",
              {
                className: "quote-card card mb-3",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "card-header",
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                          "jsxDEV"
                        ]
                      )(
                        _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_2__[
                          "InlineEditText"
                        ],
                        {
                          value: newQuote.title,
                          onChange: (event) => {
                            setNewQuote({
                              ...newQuote,
                              title: event.target.value,
                            });
                          },
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 62,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "quote-card-body edit card-body",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "quoteDetails",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                  "jsxDEV"
                                ]
                              )(
                                _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_2__[
                                  "InlineEditTextarea"
                                ],
                                {
                                  height: "160px",
                                  fontSize: "20px",
                                  value: newQuote.text,
                                  onChange: (event) => {
                                    setNewQuote({
                                      ...newQuote,
                                      text: event.target.value,
                                    });
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 71,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                  "jsxDEV"
                                ]
                              )(
                                "div",
                                {
                                  className: "input-group",
                                  children: [
                                    /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_2__[
                                        "InlineEditText"
                                      ],
                                      {
                                        value: authorName,
                                        placeholder: "Author name",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 82,
                                        columnNumber: 13,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_2__[
                                        "InlineEditText"
                                      ],
                                      {
                                        value: bookTitle,
                                        placeholder: "Book title",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 83,
                                        columnNumber: 13,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 80,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                  "jsxDEV"
                                ]
                              )(
                                _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_2__[
                                  "InlineLabelEditText"
                                ],
                                {
                                  label: "Tags",
                                  value: newQuote.tags,
                                  onChange: (event) => {
                                    setNewQuote({
                                      ...newQuote,
                                      tags: event.target.value,
                                    });
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 86,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                  "jsxDEV"
                                ]
                              )(
                                _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_2__[
                                  "InlineLabelEditDate"
                                ],
                                {
                                  label: "Date",
                                  value: newQuote.date,
                                  onChange: (event) => {
                                    setNewQuote({
                                      ...newQuote,
                                      date: event.target.value,
                                    });
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 94,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                  "jsxDEV"
                                ]
                              )(
                                _utils_InlineEdit__WEBPACK_IMPORTED_MODULE_2__[
                                  "InlineLabelEditTextarea"
                                ],
                                {
                                  showBorder: true,
                                  label: "Memo",
                                  value: newQuote.memo,
                                  onChange: (event) => {
                                    setNewQuote({
                                      ...newQuote,
                                      memo: event.target.value,
                                    });
                                  },
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 102,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 70,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "button-group right",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                  "jsxDEV"
                                ]
                              )(
                                "button",
                                {
                                  className: "me-2 btn btn-outline-primary",
                                  onClick: () =>
                                    handleUpdate(newQuote, setNewQuote),
                                  children: "Save",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 112,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              quote &&
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "button",
                                  {
                                    className:
                                      "me-2 col-auto btn btn-outline-danger",
                                    onClick: () => handleDelete(quote), // data-bs-toggle="modal"
                                    // data-bs-target={`#deleteModal-${quote._id}`}
                                    children: "Delete",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 119,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              quote &&
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "button",
                                  {
                                    id: "btnCreateQuote",
                                    className: "me-2 btn btn-outline-secondary",
                                    onClick: handleCancel,
                                    children: "Cancel",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 135,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 111,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(QuoteEditCard, "tu32b2ovZzHnTQmSUdArCv/Sct0=");

          _c = QuoteEditCard;
          QuoteEditCard.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              quote:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
                  .isRequired,
              book: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
              author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
              handleDelete:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
                  .isRequired,
              handleUpdate:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
                  .isRequired,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            QuoteEditCard;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "QuoteEditCard");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/quotes/QuotesList.js":
      /*!*********************************************!*\
  !*** ./src/components/quotes/QuotesList.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _QuoteCard__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./QuoteCard */ "./src/components/quotes/QuoteCard.js"
            );
          /* harmony import */ var _api_utilsAPI__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../api/utilsAPI */ "./src/api/utilsAPI.js"
            );
          /* harmony import */ var _api_quotesAPI__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../../api/quotesAPI */ "./src/api/quotesAPI.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/quotes/QuotesList.js",
            _s = __webpack_require__.$Refresh$.signature();

          // Element

          // API

          const QuotesList = (props) => {
            _s();

            const { quotes, setQuotes, author, book, lastElementRef } = props;
            const [showDate, setShowDate] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(true);
            const [showTag, setShowTag] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false);
            const [showMemo, setShowMemo] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false);
            const [activeQuote, setActiveQuote] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(null);
            const user = JSON.parse(localStorage.getItem("user"));

            const handleDelete = async (quote) => {
              const quoteId = quote._id;
              console.log("deleting quoteId", quoteId);

              if (
                window.confirm(
                  "Are you sure that you want to delete quote?\n" +
                    quote.text.substring(0, 50)
                )
              ) {
                _api_quotesAPI__WEBPACK_IMPORTED_MODULE_3__["default"]
                  .deleteQuoteById(quote._id)
                  .then(() => {
                    const updatedQuotes = quotes.filter(
                      (quote) => quote._id !== quoteId
                    );
                    setQuotes(updatedQuotes);
                    setActiveQuote(null);
                  });
              }
            };

            const handleUpdate = async (newQuote, setNewQuote) => {
              // process output
              setNewQuote({
                ...newQuote,
                tags: Object(
                  _api_utilsAPI__WEBPACK_IMPORTED_MODULE_2__["getTagsArray"]
                )(newQuote.tags),
              });

              if (newQuote.memo !== "") {
                newQuote.memo = [
                  {
                    userID: user._id,
                    username: user.name,
                    text: newQuote.memo,
                    date: Object(
                      _api_utilsAPI__WEBPACK_IMPORTED_MODULE_2__[
                        "isoDateWithoutTimezone"
                      ]
                    )(new Date()),
                  },
                ];
              } else {
                newQuote.memo = null;
              }

              console.log("trying to submit", newQuote);
              _api_quotesAPI__WEBPACK_IMPORTED_MODULE_3__["default"]
                .updateQuote(newQuote)
                .then(() => {
                  const updatedQuotes = quotes.map((quote) => {
                    if (quote._id === newQuote._id) {
                      console.log("found new quote");
                      console.log("target newQuote", newQuote);
                      const updatedQuote = {
                        ...quote,
                        text: newQuote.text,
                        title: newQuote.title,
                        memo: newQuote.memo,
                        date: newQuote.date,
                        tags: newQuote.tags,
                      };
                      console.log("updatedQuote", updatedQuote);
                      return updatedQuote;
                    }

                    return quote;
                  });
                  setQuotes(updatedQuotes);
                  setActiveQuote(null);
                });
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
            )(
              "div",
              {
                children: [
                  quotes &&
                    quotes[0] &&
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "greyText",
                              children: [
                                "Last quoted ",
                                Object(
                                  _api_utilsAPI__WEBPACK_IMPORTED_MODULE_2__[
                                    "getTimeDistance"
                                  ]
                                )(quotes[0].date),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 86,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                              "jsxDEV"
                            ]
                          )(
                            "h4",
                            {
                              children: [quotes.length, " quotes"],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 89,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                              "jsxDEV"
                            ]
                          )(
                            "hr",
                            {},
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 90,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 85,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "button-group mb-2",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                            "jsxDEV"
                          ]
                        )(
                          "button",
                          {
                            className: `btn btn-outline-secondary me-2${
                              showDate ? " active" : ""
                            }`,
                            onClick: () => {
                              setShowDate(!showDate);
                            },
                            children: showDate ? "Hide Date" : "Show Date",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 94,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                            "jsxDEV"
                          ]
                        )(
                          "button",
                          {
                            className: `btn btn-outline-secondary me-2${
                              showTag ? " active" : ""
                            }`,
                            onClick: () => {
                              setShowTag(!showTag);
                            },
                            children: showTag ? "Hide Tag" : "Show Tag",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 104,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                            "jsxDEV"
                          ]
                        )(
                          "button",
                          {
                            className: `btn btn-outline-secondary me-2${
                              showMemo ? " active" : ""
                            }`,
                            onClick: () => {
                              setShowMemo(!showMemo);
                            },
                            children: showMemo ? "Hide Memo" : "Show Memo",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 114,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "quotes",
                      children:
                        quotes &&
                        quotes.map((quote, i) => {
                          if (quotes.length === i + 1) {
                            return /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                "jsxDEV"
                              ]
                            )(
                              "div",
                              {
                                ref: lastElementRef,
                                children: /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _QuoteCard__WEBPACK_IMPORTED_MODULE_1__[
                                    "default"
                                  ],
                                  {
                                    quote: quote,
                                    author: author,
                                    book: book,
                                    showDate: showDate,
                                    showTag: showTag,
                                    showMemo: showMemo,
                                    handleDelete: handleDelete,
                                    handleUpdate: handleUpdate,
                                    activeQuote: activeQuote,
                                    setActiveQuote: setActiveQuote,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 131,
                                    columnNumber: 19,
                                  },
                                  undefined
                                ),
                              },
                              i,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 130,
                                columnNumber: 17,
                              },
                              undefined
                            );
                          } else {
                            return /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                "jsxDEV"
                              ]
                            )(
                              "div",
                              {
                                children: /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _QuoteCard__WEBPACK_IMPORTED_MODULE_1__[
                                    "default"
                                  ],
                                  {
                                    quote: quote,
                                    author: author,
                                    book: book,
                                    showDate: showDate,
                                    showTag: showTag,
                                    showMemo: showMemo,
                                    handleDelete: handleDelete,
                                    handleUpdate: handleUpdate,
                                    activeQuote: activeQuote,
                                    setActiveQuote: setActiveQuote,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 148,
                                    columnNumber: 19,
                                  },
                                  undefined
                                ),
                              },
                              i,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 147,
                                columnNumber: 17,
                              },
                              undefined
                            );
                          }
                        }),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(QuotesList, "qes4avV2t0PIfY1ClgZL0Jm46Pk=");

          _c = QuotesList;
          /* harmony default export */ __webpack_exports__["default"] =
            QuotesList;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "QuotesList");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/utils/InlineEdit.js":
      /*!********************************************!*\
  !*** ./src/components/utils/InlineEdit.js ***!
  \********************************************/
      /*! exports provided: InlineEditText, InlineLabelEditText, InlineLabelEditDate, InlineLabelEditTextarea, InlineEditImage, InlineEditTextarea */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "InlineEditText",
            function () {
              return InlineEditText;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "InlineLabelEditText",
            function () {
              return InlineLabelEditText;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "InlineLabelEditDate",
            function () {
              return InlineLabelEditDate;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "InlineLabelEditTextarea",
            function () {
              return InlineLabelEditTextarea;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "InlineEditImage",
            function () {
              return InlineEditImage;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "InlineEditTextarea",
            function () {
              return InlineEditTextarea;
            }
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/utils/InlineEdit.js";

          const InlineEditText = ({
            id,
            value,
            setValue,
            setEdited,
            className = "",
            placeholder = "",
            onChange = (event) => {
              if (setValue) setValue(event.target.value);
              if (setEdited) setEdited(true);
            },
          }) => {
            const classNames = className + "form-control inline-edit";
            const thePlaceholder = placeholder + "";
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
            )(
              "input",
              {
                id: id,
                className: classNames,
                type: "text",
                value: value,
                onChange: onChange,
                placeholder: thePlaceholder,
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 5,
              },
              undefined
            );
          };
          _c = InlineEditText;
          const InlineLabelEditText = ({
            label,
            value,
            setValue,
            setEdited,
            onChange = (event) => {
              if (setValue) setValue(event.target.value);
              if (setEdited) setEdited(true);
            },
          }) => {
            // const onChange = (event) => {
            //   if (setValue) setValue(event.target.value);
            //   if (setEdited) setEdited(true);
            // };
            const input_id = label + "-input";
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
            )(
              "div",
              {
                className: "form-floating mb-2",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                  )(
                    InlineEditText,
                    {
                      id: input_id,
                      value: value,
                      setValue: setValue,
                      onChange: onChange,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                  )(
                    "label",
                    {
                      htmlFor: input_id,
                      children: label,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 5,
              },
              undefined
            );
          };
          _c2 = InlineLabelEditText;
          const InlineLabelEditDate = ({
            label,
            value,
            setValue,
            setEdited,
            onChange = (event) => {
              if (setValue) setValue(event.target.value);
              if (setEdited) setEdited(true);
            },
          }) => {
            const input_id = label + "-input";
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
            )(
              "div",
              {
                className: "form-floating mb-2",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                  )(
                    "input",
                    {
                      className: "form-control inline-edit",
                      type: "datetime-local",
                      id: "date-input",
                      name: "date",
                      value: value,
                      min: "1990-01-01T00:00",
                      max: "2099-12-31T23:55",
                      onChange: onChange,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                  )(
                    "label",
                    {
                      htmlFor: input_id,
                      children: label,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 5,
              },
              undefined
            );
          };
          _c3 = InlineLabelEditDate;
          const InlineLabelEditTextarea = ({
            label,
            value,
            setValue,
            setEdited,
            height = "10px",
            fontSize = "18px",
            onChange = (event) => {
              if (setValue) setValue(event.target.value);
              if (setEdited) setEdited(true);
            },
          }) => {
            const fullHeight =
              value && !height
                ? value.split("\n").length * 30 + 3 + "px"
                : height;
            const input_id = label + "-input";
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
            )(
              "div",
              {
                className: "form-floating mb-2",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                  )(
                    "textarea",
                    {
                      className: "form-control inline-edit",
                      type: "text",
                      id: input_id,
                      value: value,
                      onChange: onChange,
                      style: {
                        height: fullHeight,
                        fontSize: fontSize,
                      },
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                  )(
                    "label",
                    {
                      htmlFor: input_id,
                      children: label,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 5,
              },
              undefined
            );
          };
          _c4 = InlineLabelEditTextarea;
          const InlineEditImage = ({
            value,
            setFile,
            setFilename,
            setEdited,
          }) => {
            const onChange = (event) => {
              setFile(event.target.files[0]);
              console.log("FILE:", event.target.files[0]);
              setFilename(event.target.files[0].name);
              if (setEdited) setEdited(true);
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
            )(
              "div",
              {
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                )(
                  "label",
                  {
                    htmlFor: "/",
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                        "jsxDEV"
                      ]
                    )(
                      "input",
                      {
                        type: "file",
                        className: "form-control inline-edit",
                        onChange: onChange,
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 5,
              },
              undefined
            );
          };
          _c5 = InlineEditImage;
          const InlineEditTextarea = ({
            value,
            setValue,
            height = "10px",
            fontSize = "18px",
            setEdited,
            onChange = (event) => {
              if (setValue) setValue(event.target.value);
              if (setEdited) setEdited(true);
            },
          }) => {
            // const onChange = (event) => {
            //   if (setValue) setValue(event.target.value);
            //   if (setEdited) setEdited(true);
            // };
            const fullHeight =
              value && !height
                ? value.split("\n").length * 30 + 3 + "px"
                : height;
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
            )(
              "textarea",
              {
                className: "form-control inline-edit",
                type: "text",
                "aria-label": "Field name",
                value: value,
                onChange: onChange,
                style: {
                  height: fullHeight,
                  fontSize: fontSize,
                },
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 5,
              },
              undefined
            );
          };
          _c6 = InlineEditTextarea;

          var _c, _c2, _c3, _c4, _c5, _c6;

          __webpack_require__.$Refresh$.register(_c, "InlineEditText");
          __webpack_require__.$Refresh$.register(_c2, "InlineLabelEditText");
          __webpack_require__.$Refresh$.register(_c3, "InlineLabelEditDate");
          __webpack_require__.$Refresh$.register(
            _c4,
            "InlineLabelEditTextarea"
          );
          __webpack_require__.$Refresh$.register(_c5, "InlineEditImage");
          __webpack_require__.$Refresh$.register(_c6, "InlineEditTextarea");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/utils/ModalDeleteConfirmation.js":
      /*!*********************************************************!*\
  !*** ./src/components/utils/ModalDeleteConfirmation.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _TextPreview__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./TextPreview */ "./src/components/utils/TextPreview.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/utils/ModalDeleteConfirmation.js";

          const ModalDeleteConfirmation = (props) => {
            const { id, handleDelete, message, previewText } = props;
            const modal_id = "deleteModal-" + id;
            const modal_label_id = "deleteModalLabel-" + id;
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              "div",
              {
                className: "modal fade",
                id: modal_id,
                tabIndex: "-1",
                "aria-labelledby": modal_label_id,
                "aria-hidden": "true",
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                )(
                  "div",
                  {
                    className: "modal-dialog modal-dialog-centered",
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "modal-content",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "modal-header",
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "h3",
                                  {
                                    className: "modal-title",
                                    id: modal_label_id,
                                    children: "Confirmation",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 23,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "button",
                                  {
                                    type: "button",
                                    className: "btn-close",
                                    "data-bs-dismiss": "modal",
                                    "aria-label": "Close",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 26,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 22,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "modal-body",
                              children: [
                                message,
                                previewText &&
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    _TextPreview__WEBPACK_IMPORTED_MODULE_2__[
                                      "default"
                                    ],
                                    {
                                      rawText: previewText,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 35,
                                      columnNumber: 29,
                                    },
                                    undefined
                                  ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 33,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "modal-footer",
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "button",
                                  {
                                    type: "button",
                                    className: "btn btn-secondary",
                                    "data-bs-dismiss": "modal",
                                    children: "Close",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 38,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "button",
                                  {
                                    type: "button",
                                    className: "btn btn-danger",
                                    onClick: () => handleDelete(id),
                                    children: "Delete",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 45,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 37,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 21,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = ModalDeleteConfirmation;
          ModalDeleteConfirmation.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
                .isRequired,
              handleDelete:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
                  .isRequired,
              message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              previewText:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            ModalDeleteConfirmation;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "ModalDeleteConfirmation");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/utils/ProgressBar.js":
      /*!*********************************************!*\
  !*** ./src/components/utils/ProgressBar.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _hooks_useStorage__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../hooks/useStorage */ "./src/hooks/useStorage.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/utils/ProgressBar.js",
            _s = __webpack_require__.$Refresh$.signature();

          const ProgressBar = (props) => {
            _s();

            const { file, setFile, setUrl } = props;
            const { url, progress } = Object(
              _hooks_useStorage__WEBPACK_IMPORTED_MODULE_2__["default"]
            )(file); // console.log(progress, url);

            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              if (url) {
                setUrl(url);
                setFile(null);
              }
            }, [url, setFile, setUrl]);
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              "div",
              {
                className: "progress-bar",
                style: {
                  width: progress + "%",
                },
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 10,
              },
              undefined
            );
          };

          _s(ProgressBar, "MEjGOYLr3nFqS+A/LbQy7stS7iI=", false, function () {
            return [_hooks_useStorage__WEBPACK_IMPORTED_MODULE_2__["default"]];
          });

          _c = ProgressBar;
          ProgressBar.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              file: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
                .isRequired,
              setFile:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
                  .isRequired,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            ProgressBar;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "ProgressBar");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/utils/TextIndentation.js":
      /*!*************************************************!*\
  !*** ./src/components/utils/TextIndentation.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/utils/TextIndentation.js";

          const TextIndentation = ({ rawText }) => {
            const lines = rawText.split("\n");
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "div",
              {
                className: "indented-text",
                children: lines.map((l, i) =>
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    "p",
                    {
                      style: {
                        textIndent: "40px",
                      },
                      children: l,
                    },
                    i,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 10,
                      columnNumber: 9,
                    },
                    undefined
                  )
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 8,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = TextIndentation;
          TextIndentation.propTypes = {
            rawText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          };
          /* harmony default export */ __webpack_exports__["default"] =
            TextIndentation;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "TextIndentation");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/utils/TextPreview.js":
      /*!*********************************************!*\
  !*** ./src/components/utils/TextPreview.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/utils/TextPreview.js";

          const MAX_TEXT = 50;

          const TextPreview = ({ rawText, maxText, className }) => {
            maxText = maxText ? maxText : MAX_TEXT;
            let text = "";

            if (rawText) {
              text =
                rawText.length < MAX_TEXT
                  ? rawText
                  : rawText.substring(0, maxText) + "...";
            }

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "p",
              {
                className: className,
                children: text,
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 10,
              },
              undefined
            );
          };

          _c = TextPreview;
          TextPreview.propTypes = {
            rawText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            maxText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
          };
          /* harmony default export */ __webpack_exports__["default"] =
            TextPreview;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "TextPreview");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/utils/UploadImageForm.js":
      /*!*************************************************!*\
  !*** ./src/components/utils/UploadImageForm.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js"
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./ProgressBar */ "./src/components/utils/ProgressBar.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/components/utils/UploadImageForm.js",
            _s = __webpack_require__.$Refresh$.signature();

          const UploadImageForm = (props) => {
            _s();

            const { setEdited, url, setUrl } = props;
            const [file, setFile] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(null);
            const [error, setError] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(null);
            const types = ["image/jpeg", "image/png", "image/jpg"];

            const changeHandler = (e) => {
              let selected = e.target.files[0];
              console.log(selected); // if file exists

              if (selected && types.includes(selected.type)) {
                setFile(selected);
                setEdited(true);
                setError("");
              } else {
                setFile(null);
                setError("please select an image file (png or jpeg");
              }
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              "form",
              {
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "form-floating",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                            "jsxDEV"
                          ]
                        )(
                          "input",
                          {
                            id: "image-url-input",
                            className: "form-control inline-edit",
                            type: "text",
                            value: url,
                            onChange: (e) => {
                              setUrl(e.target.value);
                              setEdited(true);
                            },
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 30,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                            "jsxDEV"
                          ]
                        )(
                          "label",
                          {
                            htmlFor: "image-url-input",
                            children: "Enter image url",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 40,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "input",
                    {
                      type: "file",
                      className: "form-control",
                      onChange: changeHandler,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "output",
                      children: [
                        error &&
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "error",
                              children: error,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 45,
                              columnNumber: 19,
                            },
                            undefined
                          ),
                        file &&
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              children: file.name,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 46,
                              columnNumber: 18,
                            },
                            undefined
                          ),
                        file &&
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                              "jsxDEV"
                            ]
                          )(
                            _ProgressBar__WEBPACK_IMPORTED_MODULE_2__[
                              "default"
                            ],
                            {
                              setUrl: setUrl,
                              file: file,
                              setFile: setFile,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 47,
                              columnNumber: 18,
                            },
                            undefined
                          ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(UploadImageForm, "g4In/gal2dmIIDovhnep1NQJW40=");

          _c = UploadImageForm;
          UploadImageForm.propTypes = {
            props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              setUrl:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
                  .isRequired,
            }),
          };
          /* harmony default export */ __webpack_exports__["default"] =
            UploadImageForm;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "UploadImageForm");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/utils/useInfiniteScroll.js":
      /*!***************************************************!*\
  !*** ./src/components/utils/useInfiniteScroll.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _s = __webpack_require__.$Refresh$.signature();

          // https://medium.com/swlh/a-comprehensive-guide-to-load-more-button-and-infinite-scrolling-in-react-js-bd88edf74d5a

          const useInfiniteScroll = (callback, isFetching) => {
            _s();

            // console.log("callback", callback);
            // use useRef to store a DOM node and the returned
            // object will persist regardless of re-renders
            const observer = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useRef"]
            )(); // useCallback takes a callback argument and an array
            // dependency list and returns a memoized callback
            // which is guaranteed to have the same reference

            const lastElementRef = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]
            )(
              (node) => {
                if (isFetching) return; // stop watching targets, you can think of it as a reset

                if (observer.current) observer.current.disconnect(); // create a new intersection observer and execute the
                // callback in case of an intersecting event

                observer.current = new IntersectionObserver((entries) => {
                  if (entries[0].isIntersecting) {
                    callback();
                  }
                }); // if there is a node, let the intersection observer
                // watch that node

                if (node) observer.current.observe(node);
              },
              [callback, isFetching]
            ); // return reference to the last element

            return [lastElementRef];
          };

          _s(useInfiniteScroll, "NuXn2ANahH0y0hK13dZr1c9SdAk=");

          /* harmony default export */ __webpack_exports__["default"] =
            useInfiniteScroll;

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/firebase/config.js":
      /*!********************************!*\
  !*** ./src/firebase/config.js ***!
  \********************************/
      /*! exports provided: projectStorage, ref, uploadBytesResumable, getDownloadURL */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "projectStorage",
            function () {
              return projectStorage;
            }
          );
          /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js"
            );
          /* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js"
            );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            "ref",
            function () {
              return firebase_storage__WEBPACK_IMPORTED_MODULE_1__["ref"];
            }
          );

          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            "uploadBytesResumable",
            function () {
              return firebase_storage__WEBPACK_IMPORTED_MODULE_1__[
                "uploadBytesResumable"
              ];
            }
          );

          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            "getDownloadURL",
            function () {
              return firebase_storage__WEBPACK_IMPORTED_MODULE_1__[
                "getDownloadURL"
              ];
            }
          );

          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          // Photo Gallery with React & Firebase
          // https://www.youtube.com/watch?v=vUe91uOx7R0

          // Your web app's Firebase configuration

          const firebaseConfig = {
            apiKey: "AIzaSyBX46Q_IF20mlEbMvFj8CVRbqrlcV6Ow-g",
            authDomain: "quoter-a859f.firebaseapp.com",
            projectId: "quoter-a859f",
            storageBucket: "quoter-a859f.appspot.com",
            messagingSenderId: "428459456544",
            appId: "1:428459456544:web:de7c1d294f1dbd4f30e445",
            measurementId: "G-DR8FK1LFMF",
          }; // Initialize Firebase

          const firebaseApp = Object(
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]
          )(firebaseConfig); // firebase.initializeApp(firebaseConfig);

          const projectStorage = Object(
            firebase_storage__WEBPACK_IMPORTED_MODULE_1__["getStorage"]
          )(firebaseApp); // const projectFirestore = firebase.firestore();

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/hooks/useStorage.js":
      /*!*********************************!*\
  !*** ./src/hooks/useStorage.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../firebase/config */ "./src/firebase/config.js"
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _s = __webpack_require__.$Refresh$.signature();

          // https://firebase.google.com/docs/storage/web/upload-files

          const useStorage = (file) => {
            _s();

            const [progress, setProgress] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(0);
            const [error, setError] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(null);
            const [url, setUrl] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(null);
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              // references
              const storageRef = Object(
                _firebase_config__WEBPACK_IMPORTED_MODULE_1__["ref"]
              )(
                _firebase_config__WEBPACK_IMPORTED_MODULE_1__["projectStorage"],
                "book-covers/" + file.name
              );
              const metadata = {
                contentType: file.type,
              };
              const uploadTask = Object(
                _firebase_config__WEBPACK_IMPORTED_MODULE_1__[
                  "uploadBytesResumable"
                ]
              )(storageRef, file, metadata); // upload file to this ref

              uploadTask.on(
                "state_changed",
                (snap) => {
                  let percentage =
                    (snap.bytesTransferred / snap.totalBytes) * 100;
                  setProgress(percentage);
                },
                (err) => {
                  setError(err);
                },
                async () => {
                  const url = await Object(
                    _firebase_config__WEBPACK_IMPORTED_MODULE_1__[
                      "getDownloadURL"
                    ]
                  )(uploadTask.snapshot.ref);
                  console.log("fiel available at", url);
                  setUrl(url);
                }
              );
            }, [file]);
            return {
              progress,
              url,
              error,
            };
          };

          _s(useStorage, "xn2AiAzche7NzWswJ7VS1PhvjkU=");

          /* harmony default export */ __webpack_exports__["default"] =
            useStorage;

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/index.css":
      /*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
              function () {
                content = __webpack_require__(
                  /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! react-dom */ "./node_modules/react-dom/index.js"
            );
          /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_dom__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ./index.css */ "./src/index.css");
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_css__WEBPACK_IMPORTED_MODULE_2__
            );
          /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! ./App */ "./src/App.js");
          /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! react-router-dom */ "./node_modules/react-router-dom/index.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/index.js";

          react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
            /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
            )(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode,
              {
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                )(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_4__[
                    "BrowserRouter"
                  ],
                  {
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                        "jsxDEV"
                      ]
                    )(
                      _App__WEBPACK_IMPORTED_MODULE_3__["default"],
                      {},
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 10,
                        columnNumber: 7,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 9,
                    columnNumber: 5,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 8,
                columnNumber: 3,
              },
              undefined
            ),
            document.getElementById("root")
          );

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/pages/AuthorDetail.js":
      /*!***********************************!*\
  !*** ./src/pages/AuthorDetail.js ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../components/Layout */ "./src/components/Layout.js"
            );
          /* harmony import */ var _components_books_FormCreateBookInAuthor__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../components/books/FormCreateBookInAuthor */ "./src/components/books/FormCreateBookInAuthor.js"
            );
          /* harmony import */ var _components_authors_FormCreateAuthor__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../components/authors/FormCreateAuthor */ "./src/components/authors/FormCreateAuthor.js"
            );
          /* harmony import */ var _components_books_BooksList__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../components/books/BooksList */ "./src/components/books/BooksList.js"
            );
          /* harmony import */ var _components_quotes_QuotesList__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../components/quotes/QuotesList */ "./src/components/quotes/QuotesList.js"
            );
          /* harmony import */ var _api_authorsAPI__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../api/authorsAPI */ "./src/api/authorsAPI.js"
            );
          /* harmony import */ var _api_booksAPI__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! ../api/booksAPI */ "./src/api/booksAPI.js");
          /* harmony import */ var _styles_authorDetail_css__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ../styles/authorDetail.css */ "./src/styles/authorDetail.css"
            );
          /* harmony import */ var _styles_authorDetail_css__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _styles_authorDetail_css__WEBPACK_IMPORTED_MODULE_8__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/pages/AuthorDetail.js",
            _s = __webpack_require__.$Refresh$.signature();

          // import {useNavigate} from "react-router-dom";
          // Element

          // API

          async function drawAuthor(setAuthor, setBooks, setQuotes) {
            const url = new URL(window.location);
            const author_id = url.searchParams.get("id");
            console.log("AuthorDetail: ", author_id);
            const result = await _api_authorsAPI__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ].getAuthorById(author_id);
            console.log("drawAuthor result", result);

            if (result.ok) {
              setAuthor(result.author);
              if (result.author.quotes) setQuotes(result.author.quotes);
              if (result.author.books) setBooks(result.author.books);
            } else {
              alert(result.msg);
            }
          }

          const AuthorDetail = (props) => {
            _s();

            const [author, setAuthor] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )();
            const [books, setBooks] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )([]);
            const [quotes, setQuotes] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )([]); // const navigate = useNavigate();

            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              drawAuthor(setAuthor, setBooks, setQuotes);
            }, []);

            const createBook = async (title, url, keywords, introduction) => {
              if (title === "") {
                alert("Please enter book information");
                return;
              }

              console.log(
                "ready to create book",
                title,
                url,
                keywords,
                introduction
              );
              const book = {
                author: {
                  name: author.name,
                  _id: author._id,
                },
                title: title,
                url: url,
                keywords: keywords,
                introduction: introduction,
              };
              console.log("ready to create book", book);
              const result = await _api_booksAPI__WEBPACK_IMPORTED_MODULE_7__[
                "default"
              ].updateBook(book);

              if (!result.ok) {
                // navigate(0);
              } else {
                book._id = result._id;
                setBooks([...books, book]); // navigate("/book?id=" + result._id);
              }
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"]
            )(
              _components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                currPage: "/authors",
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"]
                )(
                  "div",
                  {
                    className: "content-page",
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "row",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "col-8",
                              children: [
                                author &&
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    _components_authors_FormCreateAuthor__WEBPACK_IMPORTED_MODULE_3__[
                                      "default"
                                    ],
                                    {
                                      author: author,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 74,
                                      columnNumber: 24,
                                    },
                                    undefined
                                  ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "hr",
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 76,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    children: [
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "div",
                                        {
                                          className: "row",
                                          children: [
                                            /*#__PURE__*/ Object(
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                                "jsxDEV"
                                              ]
                                            )(
                                              "h3",
                                              {
                                                className: "col-auto",
                                                children: "Books by author",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 80,
                                                columnNumber: 17,
                                              },
                                              undefined
                                            ),
                                            /*#__PURE__*/ Object(
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                                "jsxDEV"
                                              ]
                                            )(
                                              "div",
                                              {
                                                className: "btn-group col-auto",
                                                children: [
                                                  /*#__PURE__*/ Object(
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                                      "jsxDEV"
                                                    ]
                                                  )(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      className:
                                                        "btn btn-outline-secondary dropdown-toggle",
                                                      "data-bs-toggle":
                                                        "dropdown",
                                                      "data-bs-display":
                                                        "static",
                                                      children: "Add",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 82,
                                                      columnNumber: 19,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ Object(
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                                      "jsxDEV"
                                                    ]
                                                  )(
                                                    "div",
                                                    {
                                                      className:
                                                        "dropdown-menu dropdown-book-create",
                                                      children:
                                                        /*#__PURE__*/ Object(
                                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                                            "jsxDEV"
                                                          ]
                                                        )(
                                                          _components_books_FormCreateBookInAuthor__WEBPACK_IMPORTED_MODULE_2__[
                                                            "default"
                                                          ],
                                                          {
                                                            author: author,
                                                            handleSubmit:
                                                              createBook,
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 91,
                                                            columnNumber: 21,
                                                          },
                                                          undefined
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 90,
                                                      columnNumber: 19,
                                                    },
                                                    undefined
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 81,
                                                columnNumber: 17,
                                              },
                                              undefined
                                            ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 79,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      books &&
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          _components_books_BooksList__WEBPACK_IMPORTED_MODULE_4__[
                                            "default"
                                          ],
                                          {
                                            books: books,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 99,
                                            columnNumber: 25,
                                          },
                                          undefined
                                        ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 78,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "hr",
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 102,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    children: [
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "h3",
                                        {
                                          children: "Quotes by author",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 105,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      quotes &&
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          _components_quotes_QuotesList__WEBPACK_IMPORTED_MODULE_5__[
                                            "default"
                                          ],
                                          {
                                            quotes: quotes,
                                            author: author,
                                            setQuotes: setQuotes,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 107,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 104,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 73,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "col-4",
                              children: /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[
                                  "jsxDEV"
                                ]
                              )(
                                _components_books_FormCreateBookInAuthor__WEBPACK_IMPORTED_MODULE_2__[
                                  "default"
                                ],
                                {
                                  author: author,
                                  handleSubmit: createBook,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 116,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 115,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(AuthorDetail, "MsfIhfTdEZsHXBuclc6ZS6dxOZs=");

          _c = AuthorDetail;
          /* harmony default export */ __webpack_exports__["default"] =
            AuthorDetail;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "AuthorDetail");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/pages/Authors.js":
      /*!******************************!*\
  !*** ./src/pages/Authors.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../components/Layout */ "./src/components/Layout.js"
            );
          /* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../components/Search */ "./src/components/Search.js"
            );
          /* harmony import */ var _components_authors_AuthorsList__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../components/authors/AuthorsList */ "./src/components/authors/AuthorsList.js"
            );
          /* harmony import */ var _components_authors_FormCreateAuthor__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../components/authors/FormCreateAuthor */ "./src/components/authors/FormCreateAuthor.js"
            );
          /* harmony import */ var _components_DashboardAuthors__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../components/DashboardAuthors */ "./src/components/DashboardAuthors.js"
            );
          /* harmony import */ var _api_authorsAPI__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../api/authorsAPI */ "./src/api/authorsAPI.js"
            );
          /* harmony import */ var _styles_authors_css__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ../styles/authors.css */ "./src/styles/authors.css"
            );
          /* harmony import */ var _styles_authors_css__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _styles_authors_css__WEBPACK_IMPORTED_MODULE_7__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/pages/Authors.js",
            _s = __webpack_require__.$Refresh$.signature();

          // Element

          // API

          async function drawAuthors(setQuotes) {
            const result = await _api_authorsAPI__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ].getAuthors();

            if (result.ok) {
              setQuotes(result.authors);
            } else {
              alert(result.msg);
            }
          }

          const Authors = () => {
            _s();

            const [authors, setAuthors] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )([]);
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              console.log("### AuthorsList EFFECT ###");
              drawAuthors(setAuthors);
            }, []);

            const createAuthor = async (name, category, url) => {
              console.log("ready to create author", name, category, url);
              const newAuthor = {
                url: url,
                category: category,
                name: name,
              };
              console.log("newAuthor", newAuthor);
              const result = await _api_authorsAPI__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].updateAuthor(newAuthor);
              console.log("result", result);

              if (result.ok) {
                newAuthor._id = result._id;
                newAuthor.books = [];
                const url = new URL(document.location); // in Authors page

                if (url.pathname === "/author") {
                  setAuthors([newAuthor, ...authors]); // in AuthorDetail page
                } else {
                  setAuthors([newAuthor, ...authors]); // navigate("/author?id=" + result._id); // creating new author
                }
              }
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"]
            )(
              _components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"]
                )(
                  "div",
                  {
                    className: "content-page",
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "row",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "col-8",
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _components_Search__WEBPACK_IMPORTED_MODULE_2__[
                                    "default"
                                  ],
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 66,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _components_authors_AuthorsList__WEBPACK_IMPORTED_MODULE_3__[
                                    "default"
                                  ],
                                  {
                                    authors: authors,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 68,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 65,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "col-4",
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _components_DashboardAuthors__WEBPACK_IMPORTED_MODULE_5__[
                                    "default"
                                  ],
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 72,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: "card",
                                    children: /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      _components_authors_FormCreateAuthor__WEBPACK_IMPORTED_MODULE_4__[
                                        "default"
                                      ],
                                      {
                                        createAuthor: createAuthor,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 74,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 73,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 71,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(Authors, "RnpXyQPbvznNLdmfeG521obsnXU=");

          _c = Authors;
          /* harmony default export */ __webpack_exports__["default"] = Authors;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Authors");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/pages/BookDetail.js":
      /*!*********************************!*\
  !*** ./src/pages/BookDetail.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../components/Layout */ "./src/components/Layout.js"
            );
          /* harmony import */ var _components_quotes_QuotesList__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../components/quotes/QuotesList */ "./src/components/quotes/QuotesList.js"
            );
          /* harmony import */ var _components_quotes_FormCreateQuoteInBook__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../components/quotes/FormCreateQuoteInBook */ "./src/components/quotes/FormCreateQuoteInBook.js"
            );
          /* harmony import */ var _components_books_FormEditBook__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../components/books/FormEditBook */ "./src/components/books/FormEditBook.js"
            );
          /* harmony import */ var _api_booksAPI__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! ../api/booksAPI */ "./src/api/booksAPI.js");
          /* harmony import */ var _styles_books_css__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../styles/books.css */ "./src/styles/books.css"
            );
          /* harmony import */ var _styles_books_css__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _styles_books_css__WEBPACK_IMPORTED_MODULE_6__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/pages/BookDetail.js",
            _s = __webpack_require__.$Refresh$.signature();

          // Element

          // API

          async function drawBook(setBook, setQuotes) {
            const url = new URL(window.location);
            const book_id = url.searchParams.get("id");
            const result = await _api_booksAPI__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ].getBookById(book_id);

            if (result.ok) {
              setBook(result.book);
              setQuotes(result.book.quotes);
            } else {
              alert(result.msg);
            }
          }

          const BookDetail = (props) => {
            _s();

            const [book, setBook] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [quotes, setQuotes] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )([]);
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              drawBook(setBook, setQuotes);
            }, []);
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
            )(
              _components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                currPage: "/books",
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
                )(
                  "div",
                  {
                    className: "content-page",
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "row",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "col-8",
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _components_books_FormEditBook__WEBPACK_IMPORTED_MODULE_4__[
                                    "default"
                                  ],
                                  {
                                    book: book,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 39,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "hr",
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 41,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    children: [
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "div",
                                        {
                                          className: "row",
                                          children: /*#__PURE__*/ Object(
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                              "jsxDEV"
                                            ]
                                          )(
                                            "h3",
                                            {
                                              className: "col-auto",
                                              children: "Quotes",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 45,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 44,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      book &&
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          _components_quotes_QuotesList__WEBPACK_IMPORTED_MODULE_2__[
                                            "default"
                                          ],
                                          {
                                            quotes: quotes,
                                            author: book.author,
                                            book: book,
                                            setQuotes: setQuotes,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 48,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 43,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 38,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "col-4",
                              children: book
                                ? /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    _components_quotes_FormCreateQuoteInBook__WEBPACK_IMPORTED_MODULE_3__[
                                      "default"
                                    ],
                                    {
                                      author: book.author,
                                      book: book,
                                      quotes: quotes,
                                      setQuotes: setQuotes,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 60,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  )
                                : /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "div",
                                    {
                                      children: "Loading...",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 62,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 58,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(BookDetail, "cRU0vpa8NSGxHEkkea6tB45zCkc=");

          _c = BookDetail;
          /* harmony default export */ __webpack_exports__["default"] =
            BookDetail;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "BookDetail");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/pages/Books.js":
      /*!****************************!*\
  !*** ./src/pages/Books.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../components/Layout */ "./src/components/Layout.js"
            );
          /* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../components/Search */ "./src/components/Search.js"
            );
          /* harmony import */ var _components_books_BookCardQuotes__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../components/books/BookCardQuotes */ "./src/components/books/BookCardQuotes.js"
            );
          /* harmony import */ var _components_quotes_QuotesList__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../components/quotes/QuotesList */ "./src/components/quotes/QuotesList.js"
            );
          /* harmony import */ var _api_quotesAPI__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../api/quotesAPI */ "./src/api/quotesAPI.js"
            );
          /* harmony import */ var _styles_books_css__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../styles/books.css */ "./src/styles/books.css"
            );
          /* harmony import */ var _styles_books_css__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _styles_books_css__WEBPACK_IMPORTED_MODULE_6__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/pages/Books.js",
            _s = __webpack_require__.$Refresh$.signature();

          // Element

          // API

          async function drawBooks(setBooks, setSelected) {
            const result = await _api_quotesAPI__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ].getBooksDashboard("latest", 0, true);

            if (result.ok) {
              setBooks(result.books);
              setSelected(result.books[0]);
            } else {
              alert(result.msg);
            }
          }

          const Books = () => {
            _s();

            const [books, setBooks] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )([]);
            const [selected, setSelected] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(null);
            const [quotes, setQuotes] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )([]);
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              console.log("##### Books Effect");
              drawBooks(setBooks, setSelected);
            }, []);
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
            )(
              _components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
                )(
                  "div",
                  {
                    className: "content-page",
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "row",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "col-3 book-list-section border-end",
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    children: [
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        _components_Search__WEBPACK_IMPORTED_MODULE_2__[
                                          "default"
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 40,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "div",
                                        {
                                          children:
                                            "(Most recently quoted shown first)",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 41,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 39,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: "book-list",
                                    children:
                                      books &&
                                      books.map((b) =>
                                        /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          "div",
                                          {
                                            children: /*#__PURE__*/ Object(
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                                "jsxDEV"
                                              ]
                                            )(
                                              _components_books_BookCardQuotes__WEBPACK_IMPORTED_MODULE_3__[
                                                "default"
                                              ],
                                              {
                                                showImage: true,
                                                book: b,
                                                setSelected: setSelected,
                                                selected: selected,
                                                setQuotes: setQuotes,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 47,
                                                columnNumber: 21,
                                              },
                                              undefined
                                            ),
                                          },
                                          b._id,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 46,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        )
                                      ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 43,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 38,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "col-8 quote-list-section",
                              children: [
                                selected &&
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "a",
                                    {
                                      rel: "noreferrer",
                                      href: `/book?id=${selected._id}`,
                                      className: "non-link",
                                      target: "_blank",
                                      children: /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "h3",
                                        {
                                          children: selected.title,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 66,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 60,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                selected &&
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    _components_quotes_QuotesList__WEBPACK_IMPORTED_MODULE_4__[
                                      "default"
                                    ],
                                    {
                                      quotes: quotes,
                                      author: selected.author,
                                      book: selected,
                                      setQuotes: setQuotes,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 70,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 58,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(Books, "Z7gY8sLOs4TcExcc3oQjwR5gu0Q=");

          _c = Books;
          /* harmony default export */ __webpack_exports__["default"] = Books;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Books");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/pages/CommentPage.js":
      /*!**********************************!*\
  !*** ./src/pages/CommentPage.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../components/Layout */ "./src/components/Layout.js"
            );
          /* harmony import */ var _comments_Comments__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../comments/Comments */ "./src/comments/Comments.js"
            );
          /* harmony import */ var _styles_comments_css__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../styles/comments.css */ "./src/styles/comments.css"
            );
          /* harmony import */ var _styles_comments_css__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              _styles_comments_css__WEBPACK_IMPORTED_MODULE_3__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/pages/CommentPage.js";
          // Element

          const CommentPage = () => {
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
            )(
              _components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "h1",
                    {
                      children: "Hello comments",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 12,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    _comments_Comments__WEBPACK_IMPORTED_MODULE_2__["default"],
                    {
                      currentUserId: "1",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 13,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = CommentPage;
          /* harmony default export */ __webpack_exports__["default"] =
            CommentPage;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "CommentPage");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/pages/MyQuotes.js":
      /*!*******************************!*\
  !*** ./src/pages/MyQuotes.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../components/Layout */ "./src/components/Layout.js"
            );
          /* harmony import */ var _MyQuotesInfiniteScroll__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./MyQuotesInfiniteScroll */ "./src/pages/MyQuotesInfiniteScroll.js"
            );
          /* harmony import */ var _components_DashboardBooks__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../components/DashboardBooks */ "./src/components/DashboardBooks.js"
            );
          /* harmony import */ var _components_DashboardAuthors__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../components/DashboardAuthors */ "./src/components/DashboardAuthors.js"
            );
          /* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../components/Search */ "./src/components/Search.js"
            );
          /* harmony import */ var _styles_quotes_css__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../styles/quotes.css */ "./src/styles/quotes.css"
            );
          /* harmony import */ var _styles_quotes_css__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _styles_quotes_css__WEBPACK_IMPORTED_MODULE_6__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/pages/MyQuotes.js";
          // Element

          const MyQuotes = () => {
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
            )(
              _components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                currPage: "/my-quotes",
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
                )(
                  "div",
                  {
                    className: "content-page",
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "row",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "col-8",
                              children: /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                  "jsxDEV"
                                ]
                              )(
                                _MyQuotesInfiniteScroll__WEBPACK_IMPORTED_MODULE_2__[
                                  "default"
                                ],
                                {},
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 21,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 19,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "col-4",
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _components_Search__WEBPACK_IMPORTED_MODULE_5__[
                                    "default"
                                  ],
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 25,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _components_DashboardBooks__WEBPACK_IMPORTED_MODULE_3__[
                                    "default"
                                  ],
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 26,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _components_DashboardAuthors__WEBPACK_IMPORTED_MODULE_4__[
                                    "default"
                                  ],
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 27,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 24,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 17,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = MyQuotes;
          /* harmony default export */ __webpack_exports__["default"] =
            MyQuotes;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "MyQuotes");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/pages/MyQuotesInfiniteScroll.js":
      /*!*********************************************!*\
  !*** ./src/pages/MyQuotesInfiniteScroll.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _components_quotes_QuotesList__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../components/quotes/QuotesList */ "./src/components/quotes/QuotesList.js"
            );
          /* harmony import */ var _components_FilterBar__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../components/FilterBar */ "./src/components/FilterBar.js"
            );
          /* harmony import */ var _components_utils_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../components/utils/useInfiniteScroll */ "./src/components/utils/useInfiniteScroll.js"
            );
          /* harmony import */ var _styles_quotes_css__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../styles/quotes.css */ "./src/styles/quotes.css"
            );
          /* harmony import */ var _styles_quotes_css__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              _styles_quotes_css__WEBPACK_IMPORTED_MODULE_4__
            );
          /* harmony import */ var _api_quotesAPI__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../api/quotesAPI */ "./src/api/quotesAPI.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/pages/MyQuotesInfiniteScroll.js",
            _s = __webpack_require__.$Refresh$.signature();

          // Element

          // API

          const MyQuotesInfiniteScroll = () => {
            _s();

            const [quotes, setQuotes] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )([]);
            const [isFetching, setIsFetching] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false); // set initial page

            const [page, setPage] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(1);
            const [hasMore, setHasMore] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(true);
            const [pageSize, setPageSize] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(15);
            const [refresh, setRefresh] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(true); // filter options

            const [sortOrder, setSortOrder] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("latest");
            const limit_options = [10, 15, 20];
            const sort_options = [
              {
                value: "latest",
                name: "Latest",
              },
              {
                value: "recent",
                name: "Recent",
              },
            ];
            const [lastElementRef] = Object(
              _components_utils_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ]
            )(hasMore ? loadMoreItems : () => {}, isFetching);
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              console.log("### MyQuotesInfiniteScroll EFFECT ###");
              loadMoreItems();
            }, [pageSize, sortOrder]);

            async function loadMoreItems() {
              setIsFetching(true); // fetch the latest

              const result = await _api_quotesAPI__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ].getAll(pageSize, page, sortOrder);

              if (result.ok) {
                if (refresh) {
                  console.log("REFERSHING...");
                  setQuotes(result.quotes);
                  setRefresh(false);
                } else {
                  setQuotes((current) => [...current, ...result.quotes]);
                }

                setPage((prevPageNumber) => prevPageNumber + 1);
                setHasMore(result.lastPage > page);
                setIsFetching(false);
              } else {
                alert(result.msg);
              }
            }

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
            )(
              "div",
              {
                className: "quotes-scroll",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
                  )(
                    _components_FilterBar__WEBPACK_IMPORTED_MODULE_2__[
                      "default"
                    ],
                    {
                      setPage: setPage,
                      setRefresh: setRefresh,
                      sortOrder: sortOrder,
                      sort_options: sort_options,
                      setSortOrder: setSortOrder,
                      limit: pageSize,
                      limit_options: limit_options,
                      setLimit: setPageSize,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
                  )(
                    _components_quotes_QuotesList__WEBPACK_IMPORTED_MODULE_1__[
                      "default"
                    ],
                    {
                      quotes: quotes,
                      lastElementRef: lastElementRef,
                      setQuotes: setQuotes,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  isFetching &&
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                        "jsxDEV"
                      ]
                    )(
                      "p",
                      {
                        children: "Fetching items...",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 22,
                      },
                      undefined
                    ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(
            MyQuotesInfiniteScroll,
            "9f2ExzDHmglmrFtj0j9l0OZnzi0=",
            false,
            function () {
              return [
                _components_utils_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ],
              ];
            }
          );

          _c = MyQuotesInfiniteScroll;
          /* harmony default export */ __webpack_exports__["default"] =
            MyQuotesInfiniteScroll;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "MyQuotesInfiniteScroll");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/pages/QuoteDetail.js":
      /*!**********************************!*\
  !*** ./src/pages/QuoteDetail.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _api_quotesAPI__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../api/quotesAPI */ "./src/api/quotesAPI.js"
            );
          /* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../components/Layout */ "./src/components/Layout.js"
            );
          /* harmony import */ var _components_quotes_FormEditQuote__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../components/quotes/FormEditQuote */ "./src/components/quotes/FormEditQuote.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/pages/QuoteDetail.js",
            _s = __webpack_require__.$Refresh$.signature();

          // API

          // Element

          async function drawQuote(setQuote) {
            const url = new URL(window.location);
            const quote_id = url.searchParams.get("id"); // console.log("QuoteDetail: ", quote_id);

            const quote = await _api_quotesAPI__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ].getQuoteById(quote_id);
            setQuote(quote);
          }

          const QuoteDetail = (props) => {
            _s();

            const [quote, setQuote] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(null);
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              drawQuote(setQuote);
            }, []);
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
            )(
              _components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],
              {
                currPage: "/my-quotes",
                children:
                  quote &&
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "content-page",
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                          "jsxDEV"
                        ]
                      )(
                        _components_quotes_FormEditQuote__WEBPACK_IMPORTED_MODULE_3__[
                          "default"
                        ],
                        {
                          quote: quote,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 28,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 27,
                      columnNumber: 17,
                    },
                    undefined
                  ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(QuoteDetail, "pHUr4/1SkZ+pqek8O0wcMu7nkro=");

          _c = QuoteDetail;
          /* harmony default export */ __webpack_exports__["default"] =
            QuoteDetail;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "QuoteDetail");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/pages/account/NewUser.js":
      /*!**************************************!*\
  !*** ./src/pages/account/NewUser.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _SignInForm__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./SignInForm */ "./src/pages/account/SignInForm.js"
            );
          /* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./SignUpForm */ "./src/pages/account/SignUpForm.js"
            );
          /* harmony import */ var _styles_newUser_css__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../../styles/newUser.css */ "./src/styles/newUser.css"
            );
          /* harmony import */ var _styles_newUser_css__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              _styles_newUser_css__WEBPACK_IMPORTED_MODULE_3__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/pages/account/NewUser.js",
            _s = __webpack_require__.$Refresh$.signature();

          // https://codesandbox.io/u/gabrielaEmendez

          const NewUser = () => {
            _s();

            const [showSignUp, setShowSignUp] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(true);

            const pageSwitcher = () => {
              setShowSignUp(!showSignUp);
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
            )(
              "div",
              {
                className: "newUser",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "appAside",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 16,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "appForm",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "pageSwitcher",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                  "jsxDEV"
                                ]
                              )(
                                "button",
                                {
                                  className: `pageSwitcherItem ${
                                    showSignUp ? "" : "pageSwitcherItem-active"
                                  }`,
                                  onClick: pageSwitcher,
                                  children: "Sign In",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 19,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                  "jsxDEV"
                                ]
                              )(
                                "button",
                                {
                                  className: `pageSwitcherItem ${
                                    showSignUp ? "pageSwitcherItem-active" : ""
                                  }`,
                                  onClick: pageSwitcher,
                                  children: "Sign Up",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 27,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 18,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "formTitle",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                  "jsxDEV"
                                ]
                              )(
                                "button",
                                {
                                  className: `formTitleLink ${
                                    showSignUp ? "" : "formTitleLink-active"
                                  }`,
                                  onClick: pageSwitcher,
                                  children: "Sign In",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 38,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              " ",
                              "or",
                              " ",
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                  "jsxDEV"
                                ]
                              )(
                                "button",
                                {
                                  className: `formTitleLink ${
                                    showSignUp ? "formTitleLink-active" : ""
                                  }`,
                                  onClick: pageSwitcher,
                                  children: "Sign Up",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 47,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 37,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        showSignUp
                          ? /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                "jsxDEV"
                              ]
                            )(
                              _SignUpForm__WEBPACK_IMPORTED_MODULE_2__[
                                "default"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 56,
                                columnNumber: 23,
                              },
                              undefined
                            )
                          : /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                "jsxDEV"
                              ]
                            )(
                              _SignInForm__WEBPACK_IMPORTED_MODULE_1__[
                                "default"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 56,
                                columnNumber: 40,
                              },
                              undefined
                            ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 17,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(NewUser, "gyYebLxs18Eg0GJ2vDXdd7FIuCM=");

          _c = NewUser;
          /* harmony default export */ __webpack_exports__["default"] = NewUser;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "NewUser");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/pages/account/SignInForm.js":
      /*!*****************************************!*\
  !*** ./src/pages/account/SignInForm.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! react-router-dom */ "./node_modules/react-router-dom/index.js"
            );
          /* harmony import */ var _api_authAPI__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../api/authAPI */ "./src/api/authAPI.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/pages/account/SignInForm.js",
            _s = __webpack_require__.$Refresh$.signature();

          // API

          const SignInForm = (props) => {
            _s();

            const [name, setName] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [password, setPassword] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [message, setMessage] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");

            const handleSubmit = async (evt) => {
              evt.preventDefault();
              const user = {
                name: name,
                password: password,
              };
              console.log("Attemp to login", user); // Attemp to login

              const result = await _api_authAPI__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ].login(user);

              if (!result.ok) {
                setMessage(
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "p",
                    {
                      className: "justify-content-right",
                      style: {
                        color: "red",
                      },
                      children: ["*", result.msg],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                      columnNumber: 9,
                    },
                    undefined
                  )
                );
              } else {
                alert("Login successful. Welcome back!");
                document.location.href = "/my-quotes";
              }
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              "div",
              {
                className: "formCenter",
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                )(
                  "form",
                  {
                    className: "formFields",
                    onSubmit: handleSubmit,
                    children: [
                      message,
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "formField",
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "label",
                              {
                                htmlFor: "name",
                                className: "formFieldLabel",
                                children: [
                                  "Username",
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "br",
                                    {},
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 42,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 40,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "input",
                              {
                                type: "text",
                                id: "name",
                                className: "formFieldInput",
                                placeholder: "Enter your username",
                                name: "name",
                                value: name,
                                onChange: (e) => {
                                  setName(e.target.value);
                                },
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 44,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 39,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "formField",
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "label",
                              {
                                htmlFor: "password",
                                className: "formFieldLabel",
                                children: [
                                  "Password",
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "br",
                                    {},
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 60,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 58,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "input",
                              {
                                type: "password",
                                id: "password",
                                className: "formFieldInput",
                                placeholder: "Enter your password",
                                name: "password",
                                value: password,
                                onChange: (e) => {
                                  setPassword(e.target.value);
                                },
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 62,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 57,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "formField",
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "button",
                              {
                                className: "formFieldButton",
                                children: "Sign in",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 76,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              react_router_dom__WEBPACK_IMPORTED_MODULE_1__[
                                "Link"
                              ],
                              {
                                to: "/",
                                className: "formFieldLink",
                                children: "Create an Account",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 77,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 75,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(SignInForm, "hj3m/SoL3AxwHQBq3BYPqiWhBlM=");

          _c = SignInForm;
          /* harmony default export */ __webpack_exports__["default"] =
            SignInForm;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "SignInForm");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/pages/account/SignUpForm.js":
      /*!*****************************************!*\
  !*** ./src/pages/account/SignUpForm.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! react-router-dom */ "./node_modules/react-router-dom/index.js"
            );
          /* harmony import */ var _api_authAPI__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../api/authAPI */ "./src/api/authAPI.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/pages/account/SignUpForm.js",
            _s = __webpack_require__.$Refresh$.signature();

          // API

          const SignUpForm = () => {
            _s();

            const [email, setEmail] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [name, setName] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [password, setPassword] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");
            const [message, setMessage] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("");

            const handleSubmit = async (evt) => {
              evt.preventDefault();
              const user = {
                email: email,
                name: name,
                password: password,
              };
              console.log("Attemp to register", user);
              const result = await _api_authAPI__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ].register(user);

              if (!result.ok) {
                setMessage(
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "p",
                    {
                      className: "justify-content-right",
                      style: {
                        color: "red",
                      },
                      children: ["*", result.msg],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 27,
                      columnNumber: 9,
                    },
                    undefined
                  )
                );
              } else {
                alert("Register successful. Welcome to Quoter!");
                document.location.href = "/my-quotes";
              }
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              "div",
              {
                className: "formCenter",
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                )(
                  "form",
                  {
                    onSubmit: handleSubmit,
                    className: "formFields",
                    children: [
                      message,
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "formField",
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "label",
                              {
                                className: "formFieldLabel",
                                htmlFor: "name",
                                children: "Full Name",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 42,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "input",
                              {
                                type: "text",
                                id: "name",
                                className: "formFieldInput",
                                placeholder: "Enter your username",
                                name: "name",
                                value: name,
                                onChange: (e) => {
                                  setName(e.target.value);
                                },
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 45,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 41,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "formField",
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "label",
                              {
                                className: "formFieldLabel",
                                htmlFor: "email",
                                children: "E-Mail Address",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 59,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "input",
                              {
                                type: "email",
                                id: "email",
                                className: "formFieldInput",
                                placeholder: "Enter your email",
                                name: "email",
                                value: email,
                                onChange: (e) => {
                                  setEmail(e.target.value);
                                },
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 62,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 58,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "formField",
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "label",
                              {
                                className: "formFieldLabel",
                                htmlFor: "password",
                                children: "Password",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 76,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "input",
                              {
                                type: "password",
                                id: "password",
                                className: "formFieldInput",
                                placeholder: "Enter your password",
                                name: "password",
                                value: password,
                                onChange: (e) => {
                                  setPassword(e.target.value);
                                },
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 79,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 75,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "formField",
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "button",
                              {
                                className: "formFieldButton",
                                children: "Sign Up",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 93,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            " ",
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              react_router_dom__WEBPACK_IMPORTED_MODULE_1__[
                                "Link"
                              ],
                              {
                                to: "/sign-in",
                                className: "formFieldLink",
                                children: "I'm already member",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 94,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 92,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(SignUpForm, "9ypmp26gMqOI7BiUNjPAawf6h3I=");

          _c = SignUpForm;
          /* harmony default export */ __webpack_exports__["default"] =
            SignUpForm;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "SignUpForm");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/styles/authorDetail.css":
      /*!*************************************!*\
  !*** ./src/styles/authorDetail.css ***!
  \*************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./authorDetail.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/authorDetail.css"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./authorDetail.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/authorDetail.css",
              function () {
                content = __webpack_require__(
                  /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./authorDetail.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/authorDetail.css"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/styles/authors.css":
      /*!********************************!*\
  !*** ./src/styles/authors.css ***!
  \********************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./authors.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/authors.css"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./authors.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/authors.css",
              function () {
                content = __webpack_require__(
                  /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./authors.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/authors.css"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/styles/books.css":
      /*!******************************!*\
  !*** ./src/styles/books.css ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./books.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/books.css"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./books.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/books.css",
              function () {
                content = __webpack_require__(
                  /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./books.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/books.css"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/styles/comments.css":
      /*!*********************************!*\
  !*** ./src/styles/comments.css ***!
  \*********************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./comments.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/comments.css"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./comments.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/comments.css",
              function () {
                content = __webpack_require__(
                  /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./comments.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/comments.css"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/styles/newUser.css":
      /*!********************************!*\
  !*** ./src/styles/newUser.css ***!
  \********************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./newUser.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/newUser.css"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./newUser.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/newUser.css",
              function () {
                content = __webpack_require__(
                  /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./newUser.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/newUser.css"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/styles/quotes.css":
      /*!*******************************!*\
  !*** ./src/styles/quotes.css ***!
  \*******************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./quotes.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/quotes.css"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./quotes.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/quotes.css",
              function () {
                content = __webpack_require__(
                  /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./quotes.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/quotes.css"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ 1:
      /*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        __webpack_require__(
          /*! /Users/vanishima/Documents/Programming/web-local/QuoterReact/front/node_modules/webpack/hot/dev-server.js */ "./node_modules/webpack/hot/dev-server.js"
        );
        __webpack_require__(
          /*! /Users/vanishima/Documents/Programming/web-local/QuoterReact/front/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js"
        );
        __webpack_require__(
          /*! /Users/vanishima/Documents/Programming/web-local/QuoterReact/front/node_modules/react-dev-utils/webpackHotDevClient.js */ "./node_modules/react-dev-utils/webpackHotDevClient.js"
        );
        module.exports = __webpack_require__(
          /*! /Users/vanishima/Documents/Programming/web-local/QuoterReact/front/src/index.js */ "./src/index.js"
        );

        /***/
      },
  },
  [[1, "runtime-main", "vendors~main"]],
]);
//# sourceMappingURL=main.chunk.js.map
