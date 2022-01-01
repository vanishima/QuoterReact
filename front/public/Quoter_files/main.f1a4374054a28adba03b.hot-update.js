webpackHotUpdate("main", {
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
                    },
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 104,
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
                    lineNumber: 112,
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
              lineNumber: 103,
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
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
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
                      lineNumber: 128,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 126,
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
              lineNumber: 158,
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
        __webpack_require__.$Refresh$.register(_c4, "InlineLabelEditTextarea");
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
          const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

          if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
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
                      typeof __react_refresh_error_overlay__ !== "undefined" &&
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
});
//# sourceMappingURL=main.f1a4374054a28adba03b.hot-update.js.map
