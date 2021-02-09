webpackHotUpdate_N_E("pages/checkout",{

/***/ "./src/components/paymentMethods.js":
/*!******************************************!*\
  !*** ./src/components/paymentMethods.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentMethod; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-paypal-express-checkout */ "./node_modules/react-paypal-express-checkout/index.js");
/* harmony import */ var react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Projects\\client\\src\\components\\paymentMethods.js",
    _s = $RefreshSig$();





function PaymentMethod(props) {
  _s();

  var currency = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.config.currency;
  });
  var orderId = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.config.order ? state.config.order : null;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      paymentMethod = _useState[0],
      setPaymentMethod = _useState[1];

  var amountToPay = parseFloat((props.amount * currency.value).toFixed(2));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (paymentMethod === "bank" && document.getElementById("cardForm")) {
      document.getElementById("cardForm").scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [paymentMethod]);

  var onSuccess = function onSuccess(payment) {//console.log(payment)
  };

  var onError = function onError(err) {//console.log(err)
  };

  var onCancel = function onCancel(data) {//console.log(data)
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "dis_detail blockBorder",
    id: "paymentMethods",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        className: "p0",
        children: "Payment Method"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
      className: "seperator"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "center-block",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-12 col-12",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "paymentMethod",
            onClick: function onClick() {
              return setPaymentMethod("bank");
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "radio-item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "ritem",
                onChange: function onChange() {
                  return setPaymentMethod("bank");
                },
                value: "bank",
                checked: paymentMethod === "bank"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Credit or debit card"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "payViaBank",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "You'll be redirected to payment page, where you can pay via credit/debit card"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "paymentMethod",
            onClick: function onClick() {
              return setPaymentMethod("paypal");
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "radio-item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "paymentMethod",
                onChange: function onChange() {
                  return setPaymentMethod("paypal");
                },
                value: "paypal",
                checked: paymentMethod === "paypal"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Paypal express checkout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), paymentMethod === "paypal" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_2___default.a, {
            client: {
              sandbox: "AVqcfq3E-ODuZ1IfzPWB6famglBPiyHOBxVV0WTsIkkf_fDOM84Im006OuyiqATkr_O88kJIQeZWtP-6"
            },
            currency: currency.code,
            total: amountToPay,
            style: {
              size: 'responsive',
              color: 'gold',
              shape: 'pill',
              label: 'pay',
              tagline: true,
              fundingicons: true
            },
            onCancel: onCancel,
            onError: onError,
            onSuccess: onSuccess
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 62
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

_s(PaymentMethod, "wVaEwk0a4C7cFK+ObGiD7skqXAM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = PaymentMethod;

var _c;

$RefreshReg$(_c, "PaymentMethod");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGF5bWVudE1ldGhvZHMuanMiXSwibmFtZXMiOlsiUGF5bWVudE1ldGhvZCIsInByb3BzIiwiY3VycmVuY3kiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY29uZmlnIiwib3JkZXJJZCIsIm9yZGVyIiwidXNlU3RhdGUiLCJwYXltZW50TWV0aG9kIiwic2V0UGF5bWVudE1ldGhvZCIsImFtb3VudFRvUGF5IiwicGFyc2VGbG9hdCIsImFtb3VudCIsInZhbHVlIiwidG9GaXhlZCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwib25TdWNjZXNzIiwicGF5bWVudCIsIm9uRXJyb3IiLCJlcnIiLCJvbkNhbmNlbCIsImRhdGEiLCJzYW5kYm94IiwiY29kZSIsInNpemUiLCJjb2xvciIsInNoYXBlIiwibGFiZWwiLCJ0YWdsaW5lIiwiZnVuZGluZ2ljb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDekMsTUFBSUMsUUFBUSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUgsUUFBakI7QUFBQSxHQUFOLENBQTFCO0FBQ0EsTUFBTUksT0FBTyxHQUFHSCwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FBYixHQUFxQkgsS0FBSyxDQUFDQyxNQUFOLENBQWFFLEtBQWxDLEdBQTBDLElBQTlDO0FBQUEsR0FBTixDQUEzQjs7QUFGeUMsa0JBR0NDLHNEQUFRLENBQUMsSUFBRCxDQUhUO0FBQUEsTUFHbENDLGFBSGtDO0FBQUEsTUFHbkJDLGdCQUhtQjs7QUFJekMsTUFBTUMsV0FB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QUQ7QUFBa0Isa0JBQU0sRUFBRTtBQUN2RGtCLHFCQUFPLEVBQUU7QUFEOEMsYUFBMUI7QUFFOUIsb0JBQVEsRUFBRXpCLFFBQVEsQ0FBQzBCLElBRlc7QUFFTCxpQkFBSyxFQUFFakIsV0FGRjtBQUVlLGlCQUFLLEVBQUU7QUFDbkRrQixrQkFBSSxFQUFFLFlBRDZDO0FBRW5EQyxtQkFBSyxFQUFFLE1BRjRDO0FBR25EQyxtQkFBSyxFQUFFLE1BSDRDO0FBSW5EQyxtQkFBSyxFQUFFLEtBSjRDO0FBS25EQyxxQkFBTyxFQUFFLElBTDBDO0FBTW5EQywwQkFBWSxFQUFFO0FBTnFDLGFBRnRCO0FBUzlCLG9CQUFRLEVBQUVULFFBVG9CO0FBU1YsbUJBQU8sRUFBRUYsT0FUQztBQVNRLHFCQUFTLEVBQUVGO0FBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkJ6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkNIOztHQXJFdUJyQixhO1VBQ0xHLHVELEVBQ0NBLHVEOzs7S0FGSUgsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC4zZWM1ZTk4N2NlMGU3MDRkYjk0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBQYXlwYWxFeHByZXNzQnRuIGZyb20gJ3JlYWN0LXBheXBhbC1leHByZXNzLWNoZWNrb3V0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheW1lbnRNZXRob2QocHJvcHMpIHtcclxuICAgIGxldCBjdXJyZW5jeSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNvbmZpZy5jdXJyZW5jeSk7XHJcbiAgICBjb25zdCBvcmRlcklkID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY29uZmlnLm9yZGVyID8gc3RhdGUuY29uZmlnLm9yZGVyIDogbnVsbCk7XHJcbiAgICBjb25zdCBbcGF5bWVudE1ldGhvZCwgc2V0UGF5bWVudE1ldGhvZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGFtb3VudFRvUGF5ID0gcGFyc2VGbG9hdCgocHJvcHMuYW1vdW50ICogY3VycmVuY3kudmFsdWUpLnRvRml4ZWQoMikpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBheW1lbnRNZXRob2QgPT09IFwiYmFua1wiICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZEZvcm1cIikpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkRm9ybVwiKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwYXltZW50TWV0aG9kXSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWNjZXNzID0gKHBheW1lbnQpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHBheW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25FcnJvciA9IChlcnIpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNhbmNlbCA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNfZGV0YWlsIGJsb2NrQm9yZGVyXCIgaWQ9XCJwYXltZW50TWV0aG9kc1wiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInAwXCI+UGF5bWVudCBNZXRob2Q8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNlcGVyYXRvclwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRNZXRob2RcIiBvbkNsaWNrPXsoKSA9PiBzZXRQYXltZW50TWV0aG9kKFwiYmFua1wiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYWRpby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyaXRlbVwiIG9uQ2hhbmdlPXsoKSA9PiBzZXRQYXltZW50TWV0aG9kKFwiYmFua1wiKX0gdmFsdWU9XCJiYW5rXCIgY2hlY2tlZD17KHBheW1lbnRNZXRob2QgPT09IFwiYmFua1wiKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3JlZGl0IG9yIGRlYml0IGNhcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXlWaWFCYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91J2xsIGJlIHJlZGlyZWN0ZWQgdG8gcGF5bWVudCBwYWdlLCB3aGVyZSB5b3UgY2FuIHBheSB2aWEgY3JlZGl0L2RlYml0IGNhcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRNZXRob2RcIiBvbkNsaWNrPXsoKSA9PiBzZXRQYXltZW50TWV0aG9kKFwicGF5cGFsXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhZGlvLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInBheW1lbnRNZXRob2RcIiBvbkNoYW5nZT17KCkgPT4gc2V0UGF5bWVudE1ldGhvZChcInBheXBhbFwiKX0gdmFsdWU9XCJwYXlwYWxcIiBjaGVja2VkPXsocGF5bWVudE1ldGhvZCA9PT0gXCJwYXlwYWxcIil9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBheXBhbCBleHByZXNzIGNoZWNrb3V0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXltZW50TWV0aG9kID09PSBcInBheXBhbFwiKSAmJiAoPFBheXBhbEV4cHJlc3NCdG4gY2xpZW50PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuZGJveDogXCJBVnFjZnEzRS1PRHVaMUlmelBXQjZmYW1nbEJQaXlIT0J4VlYwV1RzSWtrZl9mRE9NODRJbTAwNk91eWlxQVRrcl9PODhrSklRZVpXdFAtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjdXJyZW5jeT17Y3VycmVuY3kuY29kZX0gdG90YWw9e2Ftb3VudFRvUGF5fSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6ICdyZXNwb25zaXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dvbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiAncGlsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdwYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ2xpbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuZGluZ2ljb25zOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNhbmNlbD17b25DYW5jZWx9IG9uRXJyb3I9e29uRXJyb3J9IG9uU3VjY2Vzcz17b25TdWNjZXNzfSAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==