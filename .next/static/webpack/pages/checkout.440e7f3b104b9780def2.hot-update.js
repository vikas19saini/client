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

  var _this = this;

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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      allPaymentMethods = _useState2[0],
      setAllPaymentMethods = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (paymentMethod === "bank" && document.getElementById("cardForm")) {
      document.getElementById("cardForm").scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [paymentMethod]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat("http://localhost:3010/", "payments/config")).then(function (res) {
      setAllPaymentMethods(res.data);
    });
  }, []);

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
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
      className: "seperator"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "center-block",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-12 col-12",
          children: [allPaymentMethods.map(function (pm) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "paymentMethod",
              onClick: function onClick() {
                return setPaymentMethod(pm);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "radio-item",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "radio",
                  name: "ritem",
                  onChange: function onChange() {
                    return setPaymentMethod(pm);
                  },
                  value: pm.name,
                  checked: paymentMethod && paymentMethod.name === pm.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: pm.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 45
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 41
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 37
            }, _this);
          }), paymentMethod && paymentMethod.name === "bank" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "payViaBank",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "You'll be redirected to payment page, where you can pay via credit/debit card"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              name: "payFormCcard",
              method: "post",
              action: paymentMethod.url,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "merchantId",
                value: paymentMethod.merchantId
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "amount",
                value: "3000.0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "orderRef",
                value: "000000000014"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "currCode",
                value: "usd"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "successUrl",
                value: "http://www.yourdomain.com/Success.html"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "failUrl",
                value: "http://www.yourdomain.com/Fail.html"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "cancelUrl",
                value: "http://www.yourdomain.com/Cancel.html"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "payType",
                value: "N"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "lang",
                value: "E"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "remark",
                value: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "redirect",
                value: "30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "orderRef1",
                value: "add-ref-00001"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "orderRef2",
                value: "add-ref-00002"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "orderRef3",
                value: "add-ref-00003"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "orderRef4",
                value: "add-ref-00004"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "orderRef5",
                value: "add-ref-00005"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "submit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 30
          }, this), paymentMethod && paymentMethod.name === "paypal" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_2___default.a, {
            client: paymentMethod.mode === "production" ? {
              production: paymentMethod.key
            } : {
              sandbox: paymentMethod.key
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
            lineNumber: 86,
            columnNumber: 84
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

_s(PaymentMethod, "WNjEzZMDvy/bmDOrxTQEZm75nWA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGF5bWVudE1ldGhvZHMuanMiXSwibmFtZXMiOlsiUGF5bWVudE1ldGhvZCIsInByb3BzIiwiY3VycmVuY3kiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY29uZmlnIiwib3JkZXJJZCIsIm9yZGVyIiwidXNlU3RhdGUiLCJwYXltZW50TWV0aG9kIiwic2V0UGF5bWVudE1ldGhvZCIsImFtb3VudFRvUGF5IiwicGFyc2VGbG9hdCIsImFtb3VudCIsInZhbHVlIiwidG9GaXhlZCIsImFsbFBheW1lbnRNZXRob2RzIiwic2V0QWxsUGF5bWVudE1ldGhvZHMiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwib25TdWNjZXNzIiwicGF5bWVudCIsIm9uRXJyb3IiLCJlcnIiLCJvbkNhbmNlbCIsIm1hcCIsInBtIiwibmFtZSIsInRpdGxlIiwidXJsIiwibWVyY2hhbnRJZCIsIm1vZGUiLCJwcm9kdWN0aW9uIiwia2V5Iiwic2FuZGJveCIsImNvZGUiLCJzaXplIiwiY29sb3IiLCJzaGFwZSIsImxhYmVsIiwidGFnbGluZSIsImZ1bmRpbmdpY29ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQUE7O0FBQ3pDLE1BQUlDLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFILFFBQWpCO0FBQUEsR0FBTixDQUExQjtBQUNBLE1BQU1JLE9BQU8sR0FBR0gsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFF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QUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFmVCxFQXVDUzlCLGFBQWEsSUFBSUEsYUFBYSxDQUFDMkIsSUFBZCxLQUF1QixRQUF6QyxpQkFBdUQscUVBQUMsb0VBQUQ7QUFBa0Isa0JBQU0sRUFDM0UzQixhQUFhLENBQUMrQixJQUFkLEtBQXVCLFlBQXZCLEdBQXNDO0FBQ2xDQyx3QkFBVSxFQUFFaEMsYUFBYSxDQUFDaUM7QUFEUSxhQUF0QyxHQUVJO0FBQ0lDLHFCQUFPLEVBQUVsQyxhQUFhLENBQUNpQztBQUQzQixhQUgrQztBQU1yRCxvQkFBUSxFQUFFeEMsUUFBUSxDQUFDMEMsSUFOa0M7QUFNNUIsaUJBQUssRUFBRWpDLFdBTnFCO0FBTVIsaUJBQUssRUFBRTtBQUNsRGtDLGtCQUFJLEVBQUUsWUFENEM7QUFFbERDLG1CQUFLLEVBQUUsTUFGMkM7QUFHbERDLG1CQUFLLEVBQUUsTUFIMkM7QUFJbERDLG1CQUFLLEVBQUUsS0FKMkM7QUFLbERDLHFCQUFPLEVBQUUsSUFMeUM7QUFNbERDLDBCQUFZLEVBQUU7QUFOb0MsYUFOQztBQWFwRCxvQkFBUSxFQUFFakIsUUFiMEM7QUFhaEMsbUJBQU8sRUFBRUYsT0FidUI7QUFhZCxxQkFBUyxFQUFFRjtBQWJHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkMvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUVIOztHQXBHdUI3QixhO1VBQ0xHLHVELEVBQ0NBLHVEOzs7S0FGSUgsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC40NDBlN2YzYjEwNGI5NzgwZGVmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBQYXlwYWxFeHByZXNzQnRuIGZyb20gJ3JlYWN0LXBheXBhbC1leHByZXNzLWNoZWNrb3V0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheW1lbnRNZXRob2QocHJvcHMpIHtcclxuICAgIGxldCBjdXJyZW5jeSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNvbmZpZy5jdXJyZW5jeSk7XHJcbiAgICBjb25zdCBvcmRlcklkID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY29uZmlnLm9yZGVyID8gc3RhdGUuY29uZmlnLm9yZGVyIDogbnVsbCk7XHJcbiAgICBjb25zdCBbcGF5bWVudE1ldGhvZCwgc2V0UGF5bWVudE1ldGhvZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGFtb3VudFRvUGF5ID0gcGFyc2VGbG9hdCgocHJvcHMuYW1vdW50ICogY3VycmVuY3kudmFsdWUpLnRvRml4ZWQoMikpO1xyXG4gICAgY29uc3QgW2FsbFBheW1lbnRNZXRob2RzLCBzZXRBbGxQYXltZW50TWV0aG9kc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocGF5bWVudE1ldGhvZCA9PT0gXCJiYW5rXCIgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkRm9ybVwiKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRGb3JtXCIpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3BheW1lbnRNZXRob2RdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5BUElfVVJMfXBheW1lbnRzL2NvbmZpZ2ApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBzZXRBbGxQYXltZW50TWV0aG9kcyhyZXMuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBvblN1Y2Nlc3MgPSAocGF5bWVudCkgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocGF5bWVudClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkVycm9yID0gKGVycikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2FuY2VsID0gKGRhdGEpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc19kZXRhaWwgYmxvY2tCb3JkZXJcIiBpZD1cInBheW1lbnRNZXRob2RzXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicDBcIj5QYXltZW50IE1ldGhvZDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwZXJhdG9yXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBheW1lbnRNZXRob2RzLm1hcCgocG0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRNZXRob2RcIiBvbkNsaWNrPXsoKSA9PiBzZXRQYXltZW50TWV0aG9kKHBtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYWRpby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyaXRlbVwiIG9uQ2hhbmdlPXsoKSA9PiBzZXRQYXltZW50TWV0aG9kKHBtKX0gdmFsdWU9e3BtLm5hbWV9IGNoZWNrZWQ9eyhwYXltZW50TWV0aG9kICYmIChwYXltZW50TWV0aG9kLm5hbWUgPT09IHBtLm5hbWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3BtLnRpdGxlfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXltZW50TWV0aG9kICYmIHBheW1lbnRNZXRob2QubmFtZSA9PT0gXCJiYW5rXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGRpdiBjbGFzc05hbWU9XCJwYXlWaWFCYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91J2xsIGJlIHJlZGlyZWN0ZWQgdG8gcGF5bWVudCBwYWdlLCB3aGVyZSB5b3UgY2FuIHBheSB2aWEgY3JlZGl0L2RlYml0IGNhcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbmFtZT1cInBheUZvcm1DY2FyZFwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249e3BheW1lbnRNZXRob2QudXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibWVyY2hhbnRJZFwiIHZhbHVlPXtwYXltZW50TWV0aG9kLm1lcmNoYW50SWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImFtb3VudFwiIHZhbHVlPVwiMzAwMC4wXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib3JkZXJSZWZcIiB2YWx1ZT1cIjAwMDAwMDAwMDAxNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJDb2RlXCIgdmFsdWU9XCJ1c2RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzdWNjZXNzVXJsXCIgdmFsdWU9XCJodHRwOi8vd3d3LnlvdXJkb21haW4uY29tL1N1Y2Nlc3MuaHRtbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZhaWxVcmxcIiB2YWx1ZT1cImh0dHA6Ly93d3cueW91cmRvbWFpbi5jb20vRmFpbC5odG1sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY2FuY2VsVXJsXCIgdmFsdWU9XCJodHRwOi8vd3d3LnlvdXJkb21haW4uY29tL0NhbmNlbC5odG1sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicGF5VHlwZVwiIHZhbHVlPVwiTlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImxhbmdcIiB2YWx1ZT1cIkVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZW1hcmtcIiB2YWx1ZT1cIi1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZWRpcmVjdFwiIHZhbHVlPVwiMzBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjFcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjJcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjNcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjRcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjVcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXltZW50TWV0aG9kICYmIHBheW1lbnRNZXRob2QubmFtZSA9PT0gXCJwYXlwYWxcIikgJiYgKDxQYXlwYWxFeHByZXNzQnRuIGNsaWVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZC5tb2RlID09PSBcInByb2R1Y3Rpb25cIiA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdGlvbjogcGF5bWVudE1ldGhvZC5rZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuZGJveDogcGF5bWVudE1ldGhvZC5rZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjdXJyZW5jeT17Y3VycmVuY3kuY29kZX0gdG90YWw9e2Ftb3VudFRvUGF5fSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6ICdyZXNwb25zaXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dvbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiAncGlsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdwYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ2xpbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuZGluZ2ljb25zOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNhbmNlbD17b25DYW5jZWx9IG9uRXJyb3I9e29uRXJyb3J9IG9uU3VjY2Vzcz17b25TdWNjZXNzfSAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==