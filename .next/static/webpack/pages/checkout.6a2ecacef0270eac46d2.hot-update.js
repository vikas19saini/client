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
                  value: "bank",
                  checked: paymentMethod.name === pm.name
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
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "payViaBank",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "You'll be redirected to payment page, where you can pay via credit/debit card"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
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
                lineNumber: 64,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "amount",
                value: "3000.0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "orderRef",
                value: "000000000014"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "currCode",
                value: "usd"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "successUrl",
                value: "http://www.yourdomain.com/Success.html"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "failUrl",
                value: "http://www.yourdomain.com/Fail.html"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "cancelUrl",
                value: "http://www.yourdomain.com/Cancel.html"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "payType",
                value: "N"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "lang",
                value: "E"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "remark",
                value: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "redirect",
                value: "30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "orderRef1",
                value: "add-ref-00001"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "orderRef2",
                value: "add-ref-00002"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "orderRef3",
                value: "add-ref-00003"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "orderRef4",
                value: "add-ref-00004"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "orderRef5",
                value: "add-ref-00005"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "submit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 29
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
            lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGF5bWVudE1ldGhvZHMuanMiXSwibmFtZXMiOlsiUGF5bWVudE1ldGhvZCIsInByb3BzIiwiY3VycmVuY3kiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY29uZmlnIiwib3JkZXJJZCIsIm9yZGVyIiwidXNlU3RhdGUiLCJwYXltZW50TWV0aG9kIiwic2V0UGF5bWVudE1ldGhvZCIsImFtb3VudFRvUGF5IiwicGFyc2VGbG9hdCIsImFtb3VudCIsInZhbHVlIiwidG9GaXhlZCIsImFsbFBheW1lbnRNZXRob2RzIiwic2V0QWxsUGF5bWVudE1ldGhvZHMiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwib25TdWNjZXNzIiwicGF5bWVudCIsIm9uRXJyb3IiLCJlcnIiLCJvbkNhbmNlbCIsIm1hcCIsInBtIiwibmFtZSIsInNhbmRib3giLCJjb2RlIiwic2l6ZSIsImNvbG9yIiwic2hhcGUiLCJsYWJlbCIsInRhZ2xpbmUiLCJmdW5kaW5naWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUFBOztBQUN6QyxNQUFJQyxRQUFRLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhSCxRQUFqQjtBQUFBLEdBQU4sQ0FBMUI7QUFDQSxNQUFNSSxPQUFPLEdBQUdILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxLQUFiLEdBQXFCSCxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FBbEMsR0FBMEMsSUFBOUM7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QixrQkFBTSxFQUFFO0FBQzdFQyxxQkFBTyxFQUFFO0FBRG9FLGFBQTFCO0FBRXBELG9CQUFRLEVBQUVuQyxRQUFRLENBQUNvQyxJQUZpQztBQUUzQixpQkFBSyxFQUFFM0IsV0FGb0I7QUFFUCxpQkFBSyxFQUFFO0FBQ25ENEIsa0JBQUksRUFBRSxZQUQ2QztBQUVuREMsbUJBQUssRUFBRSxNQUY0QztBQUduREMsbUJBQUssRUFBRSxNQUg0QztBQUluREMsbUJBQUssRUFBRSxLQUo0QztBQUtuREMscUJBQU8sRUFBRSxJQUwwQztBQU1uREMsMEJBQVksRUFBRTtBQU5xQyxhQUZBO0FBU3BELG9CQUFRLEVBQUVYLFFBVDBDO0FBU2hDLG1CQUFPLEVBQUVGLE9BVHVCO0FBU2QscUJBQVMsRUFBRUY7QUFURztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRDL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThESDs7R0EvRnVCN0IsYTtVQUNMRyx1RCxFQUNDQSx1RDs7O0tBRklILGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuNmEyZWNhY2VmMDI3MGVhYzQ2ZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUGF5cGFsRXhwcmVzc0J0biBmcm9tICdyZWFjdC1wYXlwYWwtZXhwcmVzcy1jaGVja291dCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXltZW50TWV0aG9kKHByb3BzKSB7XHJcbiAgICBsZXQgY3VycmVuY3kgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jb25maWcuY3VycmVuY3kpO1xyXG4gICAgY29uc3Qgb3JkZXJJZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNvbmZpZy5vcmRlciA/IHN0YXRlLmNvbmZpZy5vcmRlciA6IG51bGwpO1xyXG4gICAgY29uc3QgW3BheW1lbnRNZXRob2QsIHNldFBheW1lbnRNZXRob2RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBhbW91bnRUb1BheSA9IHBhcnNlRmxvYXQoKHByb3BzLmFtb3VudCAqIGN1cnJlbmN5LnZhbHVlKS50b0ZpeGVkKDIpKTtcclxuICAgIGNvbnN0IFthbGxQYXltZW50TWV0aG9kcywgc2V0QWxsUGF5bWVudE1ldGhvZHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBheW1lbnRNZXRob2QgPT09IFwiYmFua1wiICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZEZvcm1cIikpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkRm9ybVwiKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwYXltZW50TWV0aG9kXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH1wYXltZW50cy9jb25maWdgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgc2V0QWxsUGF5bWVudE1ldGhvZHMocmVzLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qgb25TdWNjZXNzID0gKHBheW1lbnQpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHBheW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25FcnJvciA9IChlcnIpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNhbmNlbCA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNfZGV0YWlsIGJsb2NrQm9yZGVyXCIgaWQ9XCJwYXltZW50TWV0aG9kc1wiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInAwXCI+UGF5bWVudCBNZXRob2Q8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNlcGVyYXRvclwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxQYXltZW50TWV0aG9kcy5tYXAoKHBtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50TWV0aG9kXCIgb25DbGljaz17KCkgPT4gc2V0UGF5bWVudE1ldGhvZChwbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmFkaW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicml0ZW1cIiBvbkNoYW5nZT17KCkgPT4gc2V0UGF5bWVudE1ldGhvZChwbSl9IHZhbHVlPVwiYmFua1wiIGNoZWNrZWQ9eyhwYXltZW50TWV0aG9kLm5hbWUgPT09IHBtLm5hbWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DcmVkaXQgb3IgZGViaXQgY2FyZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5VmlhQmFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSdsbCBiZSByZWRpcmVjdGVkIHRvIHBheW1lbnQgcGFnZSwgd2hlcmUgeW91IGNhbiBwYXkgdmlhIGNyZWRpdC9kZWJpdCBjYXJkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG5hbWU9XCJwYXlGb3JtQ2NhcmRcIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiaHR0cHM6Ly9pcGF5LmJhbmdrb2tiYW5rLmNvbS9iMmMvZW5nL3BheW1lbnQvcGF5Rm9ybS5qc3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibWVyY2hhbnRJZFwiIHZhbHVlPVwiNjg0OFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImFtb3VudFwiIHZhbHVlPVwiMzAwMC4wXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib3JkZXJSZWZcIiB2YWx1ZT1cIjAwMDAwMDAwMDAxNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJDb2RlXCIgdmFsdWU9XCJ1c2RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzdWNjZXNzVXJsXCIgdmFsdWU9XCJodHRwOi8vd3d3LnlvdXJkb21haW4uY29tL1N1Y2Nlc3MuaHRtbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZhaWxVcmxcIiB2YWx1ZT1cImh0dHA6Ly93d3cueW91cmRvbWFpbi5jb20vRmFpbC5odG1sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY2FuY2VsVXJsXCIgdmFsdWU9XCJodHRwOi8vd3d3LnlvdXJkb21haW4uY29tL0NhbmNlbC5odG1sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicGF5VHlwZVwiIHZhbHVlPVwiTlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImxhbmdcIiB2YWx1ZT1cIkVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZW1hcmtcIiB2YWx1ZT1cIi1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZWRpcmVjdFwiIHZhbHVlPVwiMzBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjFcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjJcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjNcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjRcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvcmRlclJlZjVcIiB2YWx1ZT1cImFkZC1yZWYtMDAwMDVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBheW1lbnRNZXRob2QgJiYgcGF5bWVudE1ldGhvZC5uYW1lID09PSBcInBheXBhbFwiKSAmJiAoPFBheXBhbEV4cHJlc3NCdG4gY2xpZW50PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuZGJveDogXCJBVnFjZnEzRS1PRHVaMUlmelBXQjZmYW1nbEJQaXlIT0J4VlYwV1RzSWtrZl9mRE9NODRJbTAwNk91eWlxQVRrcl9PODhrSklRZVpXdFAtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjdXJyZW5jeT17Y3VycmVuY3kuY29kZX0gdG90YWw9e2Ftb3VudFRvUGF5fSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6ICdyZXNwb25zaXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dvbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiAncGlsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdwYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ2xpbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuZGluZ2ljb25zOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNhbmNlbD17b25DYW5jZWx9IG9uRXJyb3I9e29uRXJyb3J9IG9uU3VjY2Vzcz17b25TdWNjZXNzfSAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==