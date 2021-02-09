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
                  children: "Credit or debit card"
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
              action: "https://ipay.bangkokbank.com/b2c/eng/payment/payForm.jsp",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "merchantId",
                value: "6848"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGF5bWVudE1ldGhvZHMuanMiXSwibmFtZXMiOlsiUGF5bWVudE1ldGhvZCIsInByb3BzIiwiY3VycmVuY3kiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY29uZmlnIiwib3JkZXJJZCIsIm9yZGVyIiwidXNlU3RhdGUiLCJwYXltZW50TWV0aG9kIiwic2V0UGF5bWVudE1ldGhvZCIsImFtb3VudFRvUGF5IiwicGFyc2VGbG9hdCIsImFtb3VudCIsInZhbHVlIiwidG9GaXhlZCIsImFsbFBheW1lbnRNZXRob2RzIiwic2V0QWxsUGF5bWVudE1ldGhvZHMiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwib25TdWNjZXNzIiwicGF5bWVudCIsIm9uRXJyb3IiLCJlcnIiLCJvbkNhbmNlbCIsIm1hcCIsInBtIiwibmFtZSIsInNhbmRib3giLCJjb2RlIiwic2l6ZSIsImNvbG9yIiwic2hhcGUiLCJsYWJlbCIsInRhZ2xpbmUiLCJmdW5kaW5naWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUFBOztBQUN6QyxNQUFJQyxRQUFRLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhSCxRQUFqQjtBQUFBLEdBQU4sQ0FBMUI7QUFDQSxNQUFNSSxPQUFPLEdBQUdILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxLQUFiLEdBQXFCSCxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FBbEMsR0FBMEMsSUFBOUM7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RUF1Q1MzQixhQUFhLElBQUlBLGFBQWEsQ0FBQzJCLElBQWQsS0FBdUIsUUFBekMsaUJBQXVELHFFQUFDLG9FQUFEO0FBQWtCLGtCQUFNLEVBQUU7QUFDN0VDLHFCQUFPLEVBQUU7QUFEb0UsYUFBMUI7QUFFcEQsb0JBQVEsRUFBRW5DLFFBQVEsQ0FBQ29DLElBRmlDO0FBRTNCLGlCQUFLLEVBQUUzQixXQUZvQjtBQUVQLGlCQUFLLEVBQUU7QUFDbkQ0QixrQkFBSSxFQUFFLFlBRDZDO0FBRW5EQyxtQkFBSyxFQUFFLE1BRjRDO0FBR25EQyxtQkFBSyxFQUFFLE1BSDRDO0FBSW5EQyxtQkFBSyxFQUFFLEtBSjRDO0FBS25EQyxxQkFBTyxFQUFFLElBTDBDO0FBTW5EQywwQkFBWSxFQUFFO0FBTnFDLGFBRkE7QUFTcEQsb0JBQVEsRUFBRVgsUUFUMEM7QUFTaEMsbUJBQU8sRUFBRUYsT0FUdUI7QUFTZCxxQkFBUyxFQUFFRjtBQVRHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkMvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0RIOztHQWhHdUI3QixhO1VBQ0xHLHVELEVBQ0NBLHVEOzs7S0FGSUgsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC4wZjQ5MzI0ZTg4Y2RhNzNiMjE2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBQYXlwYWxFeHByZXNzQnRuIGZyb20gJ3JlYWN0LXBheXBhbC1leHByZXNzLWNoZWNrb3V0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheW1lbnRNZXRob2QocHJvcHMpIHtcclxuICAgIGxldCBjdXJyZW5jeSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNvbmZpZy5jdXJyZW5jeSk7XHJcbiAgICBjb25zdCBvcmRlcklkID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY29uZmlnLm9yZGVyID8gc3RhdGUuY29uZmlnLm9yZGVyIDogbnVsbCk7XHJcbiAgICBjb25zdCBbcGF5bWVudE1ldGhvZCwgc2V0UGF5bWVudE1ldGhvZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGFtb3VudFRvUGF5ID0gcGFyc2VGbG9hdCgocHJvcHMuYW1vdW50ICogY3VycmVuY3kudmFsdWUpLnRvRml4ZWQoMikpO1xyXG4gICAgY29uc3QgW2FsbFBheW1lbnRNZXRob2RzLCBzZXRBbGxQYXltZW50TWV0aG9kc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocGF5bWVudE1ldGhvZCA9PT0gXCJiYW5rXCIgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkRm9ybVwiKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRGb3JtXCIpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3BheW1lbnRNZXRob2RdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5BUElfVVJMfXBheW1lbnRzL2NvbmZpZ2ApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBzZXRBbGxQYXltZW50TWV0aG9kcyhyZXMuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBvblN1Y2Nlc3MgPSAocGF5bWVudCkgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocGF5bWVudClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkVycm9yID0gKGVycikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2FuY2VsID0gKGRhdGEpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc19kZXRhaWwgYmxvY2tCb3JkZXJcIiBpZD1cInBheW1lbnRNZXRob2RzXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicDBcIj5QYXltZW50IE1ldGhvZDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwZXJhdG9yXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBheW1lbnRNZXRob2RzLm1hcCgocG0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRNZXRob2RcIiBvbkNsaWNrPXsoKSA9PiBzZXRQYXltZW50TWV0aG9kKHBtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYWRpby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyaXRlbVwiIG9uQ2hhbmdlPXsoKSA9PiBzZXRQYXltZW50TWV0aG9kKHBtKX0gdmFsdWU9e3BtLm5hbWV9IGNoZWNrZWQ9eyhwYXltZW50TWV0aG9kICYmIChwYXltZW50TWV0aG9kLm5hbWUgPT09IHBtLm5hbWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3JlZGl0IG9yIGRlYml0IGNhcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGF5bWVudE1ldGhvZCAmJiBwYXltZW50TWV0aG9kLm5hbWUgPT09IFwiYmFua1wiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxkaXYgY2xhc3NOYW1lPVwicGF5VmlhQmFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSdsbCBiZSByZWRpcmVjdGVkIHRvIHBheW1lbnQgcGFnZSwgd2hlcmUgeW91IGNhbiBwYXkgdmlhIGNyZWRpdC9kZWJpdCBjYXJkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG5hbWU9XCJwYXlGb3JtQ2NhcmRcIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiaHR0cHM6Ly9pcGF5LmJhbmdrb2tiYW5rLmNvbS9iMmMvZW5nL3BheW1lbnQvcGF5Rm9ybS5qc3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibWVyY2hhbnRJZFwiIHZhbHVlPVwiNjg0OFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImFtb3VudFwiIHZhbHVlPVwiMzAwMC4wXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib3JkZXJSZWZcIiB2YWx1ZT1cIjAwMDAwMDAwMDAxNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJDb2RlXCIgdmFsdWU9XCJ1c2RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzdWNjZXNzVXJsXCIgdmFsdWU9XCJodHRwOi8vd3d3LnlvdXJkb21haW4uY29tL1N1Y2Nlc3MuaHRtbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZhaWxVcmxcIiB2YWx1ZT1cImh0dHA6Ly93d3cueW91cmRvbWFpbi5jb20vRmFpbC5odG1sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY2FuY2VsVXJsXCIgdmFsdWU9XCJodHRwOi8vd3d3LnlvdXJkb21haW4uY29tL0NhbmNlbC5odG1sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicGF5VHlwZVwiIHZhbHVlPVwiTlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImxhbmdcIiB2YWx1ZT1cIkVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZW1hcmtcIiB2YWx1ZT1cIi1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZWRpcmVjdFwiIHZhbHVlPVwiMzBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjFcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjJcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjNcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjRcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjVcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXltZW50TWV0aG9kICYmIHBheW1lbnRNZXRob2QubmFtZSA9PT0gXCJwYXlwYWxcIikgJiYgKDxQYXlwYWxFeHByZXNzQnRuIGNsaWVudD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbmRib3g6IFwiQVZxY2ZxM0UtT0R1WjFJZnpQV0I2ZmFtZ2xCUGl5SE9CeFZWMFdUc0lra2ZfZkRPTTg0SW0wMDZPdXlpcUFUa3JfTzg4a0pJUWVaV3RQLTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY3VycmVuY3k9e2N1cnJlbmN5LmNvZGV9IHRvdGFsPXthbW91bnRUb1BheX0gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAncmVzcG9uc2l2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdnb2xkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZTogJ3BpbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAncGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdsaW5lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmRpbmdpY29uczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25DYW5jZWw9e29uQ2FuY2VsfSBvbkVycm9yPXtvbkVycm9yfSBvblN1Y2Nlc3M9e29uU3VjY2Vzc30gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=