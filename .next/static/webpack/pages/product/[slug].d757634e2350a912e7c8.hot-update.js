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
        "class": "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          "class": "col-md-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            "class": "dis_help wow fadeInUp",
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
        "class": "deli_info_br wow fadeInUp",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          "class": "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            "class": "col-md-4 col-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              "class": "deli_info info_right",
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
            "class": "col-md-4 col-6  padd_right",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              "class": "deli_info info_right",
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
            "class": "col-md-4 col-6 padd_left",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              "class": "deli_info bdr_message",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwicHJvZHVjdEltYWdlcyIsImZlYXR1cmVkSW1hZ2UiLCJ0aHVtYm5haWxzIiwidXNlRWZmZWN0IiwicHJvZHVjdFBhZ2VJbml0IiwiYWRkVG9XaXNobGlzdCIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiLCJwcm9kdWN0SWQiLCJpZCIsInRoZW4iLCJyZXMiLCJ0b2FzdCIsIm5vdGlmeSIsImRhdGEiLCJtZXNzYWdlIiwidHlwZSIsInRpdGxlIiwiZXJyIiwibWV0YVRpdGxlIiwibmFtZSIsIm1ldGFEZXNjcmlwdGlvbiIsInJlc3BvbnNpdmUiLCJpdGVtcyIsImxvb3AiLCJhdXRvcGxheSIsImRvdHMiLCJuYXYiLCJyZXdpbmQiLCJtYXAiLCJ0IiwiZnVsbFVybCIsImF0dHJpYnV0ZXMiLCJhIiwicHJvZHVjdHNBdHRyaWJ1dGVWYWx1ZXMiLCJhdHRyaWJ1dGVEZXNjcmlwdGlvbiIsImxvbmdEZXNjcmlwdGlvbiIsInNob3J0RGVzY3JpcHRpb24iLCJyZWxhdGl2ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxPQUFqQixFQUEwQjtBQUFBOztBQUFBOztBQUVyQyxNQUFJQyxhQUFhLEdBQU8sQ0FBQ0QsT0FBTyxDQUFDRSxhQUFULENBQVAsbUlBQW1DRixPQUFPLENBQUNHLFVBQTNDLEVBQWpCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxtQkFBZSxHQURILENBQ007QUFDckIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJDLGdEQUFL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QTtBQUFBO0FBQUEsZ0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJKUixlQXdLSSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEtKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEtIOztHQWxNdUJ6QyxPOztLQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmQ3NTc2MzRlMjM1MGE5MTJlN2M4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vZm9vdGVyXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2R1Y3RDcm91c2VsXCJcclxuaW1wb3J0IHsgR2V0UHJpY2VIdG1sLCBzdG9ja1N0YXR1cyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBDYXJ0QnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcnRCdXRvblwiO1xyXG5pbXBvcnQgT3dsQ2Fyb3VzZWwgZnJvbSAncmVhY3Qtb3dsLWNhcm91c2VsMic7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LW5leHRqcy10b2FzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0KHByb2R1Y3QpIHtcclxuXHJcbiAgICBsZXQgcHJvZHVjdEltYWdlcyA9IFsuLi5bcHJvZHVjdC5mZWF0dXJlZEltYWdlXSwgLi4ucHJvZHVjdC50aHVtYm5haWxzXVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvZHVjdFBhZ2VJbml0KCkgLy8gZGVmaW5lZCBpbiBzY3JpcHQuanNcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGFkZFRvV2lzaGxpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5BUElfVVJMfXdpc2hsaXN0YCwgeyBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5ub3RpZnkoYCR7cmVzLmRhdGEubWVzc2FnZX1gLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIldpc2hsaXN0IVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgdG9hc3Qubm90aWZ5KGBTb21ldGhpbmcgd2VudCB3cm9uZyFgLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJXaXNobGlzdCFcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57cHJvZHVjdC5tZXRhVGl0bGUgPyBwcm9kdWN0Lm1ldGFUaXRsZSA6IHByb2R1Y3QubmFtZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvZHVjdC5tZXRhRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlciBzaGFkb3cgLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW5uZXJfcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZF9mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTY4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNjY3OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTE3MDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2luZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJvd2wtY2Fyb3VzZWwgd293IGZhZGVJblVwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SW1hZ2VzLm1hcCgodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIGtleT17dC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25faGFyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3Zlcl9pY29uX2hhcmRcIiBvbkNsaWNrPXthZGRUb1dpc2hsaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2FkZHJlc3NfaWNvbi9oZWFydC5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3QuZnVsbFVybH0gaGVpZ2h0PXs1NzB9IHdpZHRoPXs2ODB9IGFsdD17cHJvZHVjdC5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9wZF9kaXMgd293IGZhZGVJblVwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FydEJ1dHRvbiBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9mYWJyaWNfMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2ZhYl8xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5hdHRyaWJ1dGVzLm1hcCgoYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhYl8xMlwiIGtleT17YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthLnByb2R1Y3RzQXR0cmlidXRlVmFsdWVzLmF0dHJpYnV0ZURlc2NyaXB0aW9ufSA8c3Bhbj57YS5uYW1lfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHBfYnR0bSBkZXNrX3ZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyX3NfMSByaWdodF9zXzFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvb2tpbmcgZm9yIG9yZGVyIEJ1bGs/PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkJ1bGsgT3JkZXI8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyX3NfMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2FudCB0byBvcmRlciBzYW1wbGUgPzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5PcmRlciBTd2F0Y2g8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZGlzX21yZ18xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubG9uZ0Rlc2NyaXB0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfZGlzXzEgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlByb2R1Y3QgRGVzY3JpcHRpb248L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9kdWN0LmxvbmdEZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNob3J0RGVzY3JpcHRpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9kaXNfMSB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+QXBwbGljYXRpb25zPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5zaG9ydERlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNfaGVscCB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5lZWQgaGVscCB3aXRoIHRoaXMgcHJvZHVjdD88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsaV9pbmZvX2JyIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGlfaW5mbyBpbmZvX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2FkZHJlc3NfaWNvbi9tb2JfaS5zdmdcIiBhbHQ9XCJtb2JpbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+R2l2ZSB1cyBhIGNhbGw8L3N0cm9uZz4gTW9uIC0gU2F0IDEwQU0gdG8gN1BtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC02ICBwYWRkX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsaV9pbmZvIGluZm9fcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYWRkcmVzc19pY29uL3doYXRzYXBwLnN2Z1wiIGFsdD1cIndoYXRzYXBwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkNoYXQgd2l0aCB1cyBvbiB3aGF0YXBwPC9zdHJvbmc+IE1vbiAtIFNhdCAxMEFNIHRvIDdQbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtNiBwYWRkX2xlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxpX2luZm8gYmRyX21lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYWRkcmVzc19pY29uL21lc3NhZ2Uuc3ZnXCIgYWx0PVwibWVzc2FnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5Ecm9wIHVzIGFuIGVtYWlsPC9zdHJvbmc+IE1vbiAtIFNhdCAxMEFNIHRvIDdQbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QucmVsYXRpdmUubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWF5X2xla2Vfc2VjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9tYWluX2hhZGRpbmcgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Zb3UgTWF5IEFsc28gTGlrZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXlfbGlrZVwiIGNsYXNzTmFtZT1cIm93bC1jYXJvdXNlbCB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RzIHByb2R1Y3RzPXtwcm9kdWN0LnJlbGF0aXZlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBwcm9kdWN0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9cHJvZHVjdHMvJHtjb250ZXh0LnBhcmFtcy5zbHVnfWApXHJcbiAgICAgICAgcHJvZHVjdCA9IHByb2R1Y3QuZGF0YTtcclxuXHJcbiAgICAgICAgbGV0IHJlbGF0aXZlUHJvZHVjdHMgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH1wcm9kdWN0cy9yZWxhdGl2ZS8ke3Byb2R1Y3QuaWR9YCk7XHJcbiAgICAgICAgcmVsYXRpdmVQcm9kdWN0cyA9IHJlbGF0aXZlUHJvZHVjdHMuZGF0YVxyXG5cclxuICAgICAgICBwcm9kdWN0LnN0b2NrU3RhdHVzID0gc3RvY2tTdGF0dXMocHJvZHVjdClcclxuXHJcbiAgICAgICAgcHJvZHVjdC5yZWxhdGl2ZSA9IHJlbGF0aXZlUHJvZHVjdHM7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==