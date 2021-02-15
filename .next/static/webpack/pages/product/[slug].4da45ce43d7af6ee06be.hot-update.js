webpackHotUpdate_N_E("pages/product/[slug]",{

/***/ "./src/pages/product/[slug].js":
/*!*************************************!*\
  !*** ./src/pages/product/[slug].js ***!
  \*************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var D_Projects_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header */ "./src/pages/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer */ "./src/pages/footer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_productCrousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/productCrousel */ "./src/components/productCrousel.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers */ "./src/pages/helpers.js");
/* harmony import */ var _components_cartButon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/cartButon */ "./src/components/cartButon.js");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-owl-carousel2 */ "./node_modules/react-owl-carousel2/lib/OwlCarousel.js");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_nextjs_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-nextjs-toast */ "./node_modules/react-nextjs-toast/lib/toast.js");
/* harmony import */ var react_nextjs_toast__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_nextjs_toast__WEBPACK_IMPORTED_MODULE_12__);



var _jsxFileName = "D:\\Projects\\client\\src\\pages\\product\\[slug].js",
    _s = $RefreshSig$();












var __N_SSP = true;
function Product(product) {
  _s();

  var _this = this;

  var productImages = [product.featuredImage].concat(Object(D_Projects_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(product.thumbnails));
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    productPageInit(); // defined in script.js
  }, []);

  var addToWishlist = function addToWishlist() {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat("http://localhost:3010/", "wishlist"), {
      productId: product.id
    }).then(function (res) {
      react_nextjs_toast__WEBPACK_IMPORTED_MODULE_12__["toast"].notify("".concat(res.data.message), {
        type: "success",
        title: "Wishlist!"
      });
    })["catch"](function (err) {
      react_nextjs_toast__WEBPACK_IMPORTED_MODULE_12__["toast"].notify("Something went wrong!", {
        type: "error",
        title: "Wishlist!"
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_nextjs_toast__WEBPACK_IMPORTED_MODULE_12__["ToastContainer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: product.metaTitle ? product.metaTitle : product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "description",
        content: product.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      shadow: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
      className: "inner_product",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "wd_full",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_10___default.a, {
                options: {
                  responsive: {
                    0: {
                      items: 1
                    },
                    568: {
                      items: 1
                    },
                    667: {
                      items: 1
                    },
                    1170: {
                      items: 1
                    }
                  },
                  loop: true,
                  autoplay: false,
                  dots: true,
                  nav: false,
                  rewind: true
                },
                className: "owl-carousel wow fadeInUp",
                children: productImages.map(function (t) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      className: "icon_hard",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        className: "over_icon_hard",
                        onClick: addToWishlist,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                          src: "/images/address_icon/heart.svg"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 76,
                          columnNumber: 61
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 57
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_11___default.a, {
                        src: t.fullUrl,
                        height: 570,
                        width: 680,
                        alt: product.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 57
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 53
                    }, _this)
                  }, t.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 49
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "main_pd_dis wow fadeInUp",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_cartButon__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  product: product
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "inner_fabric_1",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "main_fab_12",
                    children: product.attributes.map(function (a) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        className: "fab_12",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                          children: [a.productsAttributeValues.attributeDescription, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                            children: a.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 98,
                            columnNumber: 113
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 98,
                          columnNumber: 61
                        }, _this)
                      }, a.id, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 57
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "clearfix"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "tp_bttm desk_view",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      className: "col-md-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        className: "order_s_1 right_s_1",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                          children: "Looking for order Bulk?"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 111,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
                          children: "Bulk Order"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 112,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      className: "col-md-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        className: "order_s_1",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                          children: "Want to order sample ?"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
                          children: "Order Swatch"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 119,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container dis_mrg_1",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "col-md-12",
          children: [product.longDescription && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "product_dis_1 wow fadeInUp",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
              children: "Product Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: product.longDescription
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 29
          }, this), product.shortDescription && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "product_dis_1 wow fadeInUp",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
              children: "Applications"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: product.shortDescription
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "col-md-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "dis_help wow fadeInUp",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "Need help with this product?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "deli_info_br wow fadeInUp",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "col-md-4 col-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "deli_info info_right",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                src: "/images/address_icon/mob_i.svg",
                alt: "mobile"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
                  children: "Give us a call"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 36
                }, this), " Mon - Sat 10AM to 7Pm"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "col-md-4 col-6  padd_right",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "deli_info info_right",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                src: "/images/address_icon/whatsapp.svg",
                alt: "whatsapp"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
                  children: "Chat with us on whatapp"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 36
                }, this), " Mon - Sat 10AM to 7Pm"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "col-md-4 col-6 padd_left",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "deli_info bdr_message",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                src: "/images/address_icon/message.svg",
                alt: "message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
                  children: "Drop us an email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 36
                }, this), " Mon - Sat 10AM to 7Pm"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, this), product.relative.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
      className: "may_leke_sec",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "col-md-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "inner_main_hadding wow fadeInUp",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
                children: "You May Also Like"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "col-md-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              id: "may_like",
              className: "owl-carousel wow fadeInUp",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_productCrousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                products: product.relative
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, this);
}

_s(Product, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Product;

var _c;

$RefreshReg$(_c, "Product");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwicHJvZHVjdEltYWdlcyIsImZlYXR1cmVkSW1hZ2UiLCJ0aHVtYm5haWxzIiwidXNlRWZmZWN0IiwicHJvZHVjdFBhZ2VJbml0IiwiYWRkVG9XaXNobGlzdCIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiLCJwcm9kdWN0SWQiLCJpZCIsInRoZW4iLCJyZXMiLCJ0b2FzdCIsIm5vdGlmeSIsImRhdGEiLCJtZXNzYWdlIiwidHlwZSIsInRpdGxlIiwiZXJyIiwibWV0YVRpdGxlIiwibmFtZSIsIm1ldGFEZXNjcmlwdGlvbiIsInJlc3BvbnNpdmUiLCJpdGVtcyIsImxvb3AiLCJhdXRvcGxheSIsImRvdHMiLCJuYXYiLCJyZXdpbmQiLCJtYXAiLCJ0IiwiZnVsbFVybCIsImF0dHJpYnV0ZXMiLCJhIiwicHJvZHVjdHNBdHRyaWJ1dGVWYWx1ZXMiLCJhdHRyaWJ1dGVEZXNjcmlwdGlvbiIsImxvbmdEZXNjcmlwdGlvbiIsInNob3J0RGVzY3JpcHRpb24iLCJyZWxhdGl2ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxPQUFqQixFQUEwQjtBQUFBOztBQUFBOztBQUVyQyxNQUFJQyxhQUFhLEdBQU8sQ0FBQ0QsT0FBTyxDQUFDRSxhQUFULENBQVAsbUlBQW1DRixPQUFPLENBQUNHLFVBQTNDLEVBQWpCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxtQkFBZSxHQURILENBQ007QUFDckIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJDLGdEQUFL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QTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFySlIsZUF3S0kscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhLSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRLSDs7R0FsTXVCekMsTzs7S0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0L1tzbHVnXS40ZGE0NWNlNDNkN2FmNmVlMDZiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9kdWN0Q3JvdXNlbFwiXHJcbmltcG9ydCB7IEdldFByaWNlSHRtbCwgc3RvY2tTdGF0dXMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgQ2FydEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJ0QnV0b25cIjtcclxuaW1wb3J0IE93bENhcm91c2VsIGZyb20gJ3JlYWN0LW93bC1jYXJvdXNlbDInO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC1uZXh0anMtdG9hc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdChwcm9kdWN0KSB7XHJcblxyXG4gICAgbGV0IHByb2R1Y3RJbWFnZXMgPSBbLi4uW3Byb2R1Y3QuZmVhdHVyZWRJbWFnZV0sIC4uLnByb2R1Y3QudGh1bWJuYWlsc11cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHByb2R1Y3RQYWdlSW5pdCgpIC8vIGRlZmluZWQgaW4gc2NyaXB0LmpzXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBhZGRUb1dpc2hsaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH13aXNobGlzdGAsIHsgcHJvZHVjdElkOiBwcm9kdWN0LmlkIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgdG9hc3Qubm90aWZ5KGAke3Jlcy5kYXRhLm1lc3NhZ2V9YCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJXaXNobGlzdCFcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0Lm5vdGlmeShgU29tZXRoaW5nIHdlbnQgd3JvbmchYCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV2lzaGxpc3QhXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3Byb2R1Y3QubWV0YVRpdGxlID8gcHJvZHVjdC5tZXRhVGl0bGUgOiBwcm9kdWN0Lm5hbWV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb2R1Y3QubWV0YURlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgc2hhZG93IC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImlubmVyX3Byb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2RfZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDU2ODoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDY2Nzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExNzA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdpbmQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwib3dsLWNhcm91c2VsIHdvdyBmYWRlSW5VcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEltYWdlcy5tYXAoKHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBrZXk9e3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uX2hhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJfaWNvbl9oYXJkXCIgb25DbGljaz17YWRkVG9XaXNobGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hZGRyZXNzX2ljb24vaGVhcnQuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0LmZ1bGxVcmx9IGhlaWdodD17NTcwfSB3aWR0aD17NjgwfSBhbHQ9e3Byb2R1Y3QubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fcGRfZGlzIHdvdyBmYWRlSW5VcFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRCdXR0b24gcHJvZHVjdD17cHJvZHVjdH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfZmFicmljXzFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9mYWJfMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuYXR0cmlidXRlcy5tYXAoKGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWJfMTJcIiBrZXk9e2EuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YS5wcm9kdWN0c0F0dHJpYnV0ZVZhbHVlcy5hdHRyaWJ1dGVEZXNjcmlwdGlvbn0gPHNwYW4+e2EubmFtZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRwX2J0dG0gZGVza192aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcl9zXzEgcmlnaHRfc18xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb29raW5nIGZvciBvcmRlciBCdWxrPzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5CdWxrIE9yZGVyPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcl9zXzFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldhbnQgdG8gb3JkZXIgc2FtcGxlID88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+T3JkZXIgU3dhdGNoPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGRpc19tcmdfMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmxvbmdEZXNjcmlwdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X2Rpc18xIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Qcm9kdWN0IERlc2NyaXB0aW9uPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5sb25nRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zaG9ydERlc2NyaXB0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfZGlzXzEgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFwcGxpY2F0aW9uczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3Quc2hvcnREZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzX2hlbHAgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OZWVkIGhlbHAgd2l0aCB0aGlzIHByb2R1Y3Q/PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWxpX2luZm9fYnIgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsaV9pbmZvIGluZm9fcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYWRkcmVzc19pY29uL21vYl9pLnN2Z1wiIGFsdD1cIm1vYmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5HaXZlIHVzIGEgY2FsbDwvc3Ryb25nPiBNb24gLSBTYXQgMTBBTSB0byA3UG08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC02ICBwYWRkX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbGlfaW5mbyBpbmZvX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2FkZHJlc3NfaWNvbi93aGF0c2FwcC5zdmdcIiBhbHQ9XCJ3aGF0c2FwcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5DaGF0IHdpdGggdXMgb24gd2hhdGFwcDwvc3Ryb25nPiBNb24gLSBTYXQgMTBBTSB0byA3UG08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC02IHBhZGRfbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWxpX2luZm8gYmRyX21lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYWRkcmVzc19pY29uL21lc3NhZ2Uuc3ZnXCIgYWx0PVwibWVzc2FnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5Ecm9wIHVzIGFuIGVtYWlsPC9zdHJvbmc+IE1vbiAtIFNhdCAxMEFNIHRvIDdQbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QucmVsYXRpdmUubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWF5X2xla2Vfc2VjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9tYWluX2hhZGRpbmcgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Zb3UgTWF5IEFsc28gTGlrZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXlfbGlrZVwiIGNsYXNzTmFtZT1cIm93bC1jYXJvdXNlbCB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RzIHByb2R1Y3RzPXtwcm9kdWN0LnJlbGF0aXZlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBwcm9kdWN0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9cHJvZHVjdHMvJHtjb250ZXh0LnBhcmFtcy5zbHVnfWApXHJcbiAgICAgICAgcHJvZHVjdCA9IHByb2R1Y3QuZGF0YTtcclxuXHJcbiAgICAgICAgbGV0IHJlbGF0aXZlUHJvZHVjdHMgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH1wcm9kdWN0cy9yZWxhdGl2ZS8ke3Byb2R1Y3QuaWR9YCk7XHJcbiAgICAgICAgcmVsYXRpdmVQcm9kdWN0cyA9IHJlbGF0aXZlUHJvZHVjdHMuZGF0YVxyXG5cclxuICAgICAgICBwcm9kdWN0LnN0b2NrU3RhdHVzID0gc3RvY2tTdGF0dXMocHJvZHVjdClcclxuXHJcbiAgICAgICAgcHJvZHVjdC5yZWxhdGl2ZSA9IHJlbGF0aXZlUHJvZHVjdHM7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==