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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: product.metaTitle ? product.metaTitle : product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "description",
        content: product.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      shadow: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
                          lineNumber: 75,
                          columnNumber: 61
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 57
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_11___default.a, {
                        src: t.fullUrl,
                        height: 570,
                        width: 680,
                        alt: product.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 57
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 53
                    }, _this)
                  }, t.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 49
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "main_pd_dis wow fadeInUp",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_cartButon__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  product: product
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
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
                            lineNumber: 97,
                            columnNumber: 113
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 97,
                          columnNumber: 61
                        }, _this)
                      }, a.id, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 57
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "clearfix"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
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
                          lineNumber: 110,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
                          children: "Bulk Order"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 111,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      className: "col-md-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        className: "order_s_1",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                          children: "Want to order sample ?"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 117,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
                          children: "Order Swatch"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 116,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
              lineNumber: 137,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: product.longDescription
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 29
          }, this), product.shortDescription && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "product_dis_1 wow fadeInUp",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
              children: "Applications"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: product.shortDescription
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
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
              lineNumber: 153,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
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
                lineNumber: 161,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
                  children: "Give us a call"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 36
                }, this), " Mon - Sat 10AM to 7Pm"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
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
                lineNumber: 168,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
                  children: "Chat with us on whatapp"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 36
                }, this), " Mon - Sat 10AM to 7Pm"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
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
                lineNumber: 175,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
                  children: "Drop us an email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 36
                }, this), " Mon - Sat 10AM to 7Pm"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
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
                lineNumber: 190,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
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
                lineNumber: 197,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwicHJvZHVjdEltYWdlcyIsImZlYXR1cmVkSW1hZ2UiLCJ0aHVtYm5haWxzIiwidXNlRWZmZWN0IiwicHJvZHVjdFBhZ2VJbml0IiwiYWRkVG9XaXNobGlzdCIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiLCJwcm9kdWN0SWQiLCJpZCIsInRoZW4iLCJyZXMiLCJ0b2FzdCIsIm5vdGlmeSIsImRhdGEiLCJtZXNzYWdlIiwidHlwZSIsInRpdGxlIiwiZXJyIiwibWV0YVRpdGxlIiwibmFtZSIsIm1ldGFEZXNjcmlwdGlvbiIsInJlc3BvbnNpdmUiLCJpdGVtcyIsImxvb3AiLCJhdXRvcGxheSIsImRvdHMiLCJuYXYiLCJyZXdpbmQiLCJtYXAiLCJ0IiwiZnVsbFVybCIsImF0dHJpYnV0ZXMiLCJhIiwicHJvZHVjdHNBdHRyaWJ1dGVWYWx1ZXMiLCJhdHRyaWJ1dGVEZXNjcmlwdGlvbiIsImxvbmdEZXNjcmlwdGlvbiIsInNob3J0RGVzY3JpcHRpb24iLCJyZWxhdGl2ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxPQUFqQixFQUEwQjtBQUFBOztBQUFBOztBQUVyQyxNQUFJQyxhQUFhLEdBQU8sQ0FBQ0QsT0FBTyxDQUFDRSxhQUFULENBQVAsbUlBQW1DRixPQUFPLENBQUNHLFVBQTNDLEVBQWpCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxtQkFBZSxHQURILENBQ007QUFDckIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJDLGdEQUFL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O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBKUixlQXVLSSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdktKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMktIOztHQWpNdUJ6QyxPOztLQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLjM4YThiMTJlMTgzNzJlZTQwZGUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vZm9vdGVyXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2R1Y3RDcm91c2VsXCJcclxuaW1wb3J0IHsgR2V0UHJpY2VIdG1sLCBzdG9ja1N0YXR1cyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBDYXJ0QnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcnRCdXRvblwiO1xyXG5pbXBvcnQgT3dsQ2Fyb3VzZWwgZnJvbSAncmVhY3Qtb3dsLWNhcm91c2VsMic7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LW5leHRqcy10b2FzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0KHByb2R1Y3QpIHtcclxuXHJcbiAgICBsZXQgcHJvZHVjdEltYWdlcyA9IFsuLi5bcHJvZHVjdC5mZWF0dXJlZEltYWdlXSwgLi4ucHJvZHVjdC50aHVtYm5haWxzXVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvZHVjdFBhZ2VJbml0KCkgLy8gZGVmaW5lZCBpbiBzY3JpcHQuanNcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGFkZFRvV2lzaGxpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5BUElfVVJMfXdpc2hsaXN0YCwgeyBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5ub3RpZnkoYCR7cmVzLmRhdGEubWVzc2FnZX1gLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIldpc2hsaXN0IVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgdG9hc3Qubm90aWZ5KGBTb21ldGhpbmcgd2VudCB3cm9uZyFgLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJXaXNobGlzdCFcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntwcm9kdWN0Lm1ldGFUaXRsZSA/IHByb2R1Y3QubWV0YVRpdGxlIDogcHJvZHVjdC5uYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9kdWN0Lm1ldGFEZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyIHNoYWRvdyAvPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbm5lcl9wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndkX2Z1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPd2xDYXJvdXNlbCBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1Njg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA2Njc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMTcwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3aW5kOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cIm93bC1jYXJvdXNlbCB3b3cgZmFkZUluVXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJbWFnZXMubWFwKCh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIga2V5PXt0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbl9oYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyX2ljb25faGFyZFwiIG9uQ2xpY2s9e2FkZFRvV2lzaGxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYWRkcmVzc19pY29uL2hlYXJ0LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dC5mdWxsVXJsfSBoZWlnaHQ9ezU3MH0gd2lkdGg9ezY4MH0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX3BkX2RpcyB3b3cgZmFkZUluVXBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0QnV0dG9uIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX2ZhYnJpY18xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZmFiXzEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmF0dHJpYnV0ZXMubWFwKChhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFiXzEyXCIga2V5PXthLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2EucHJvZHVjdHNBdHRyaWJ1dGVWYWx1ZXMuYXR0cmlidXRlRGVzY3JpcHRpb259IDxzcGFuPnthLm5hbWV9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cF9idHRtIGRlc2tfdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJfc18xIHJpZ2h0X3NfMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9va2luZyBmb3Igb3JkZXIgQnVsaz88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+QnVsayBPcmRlcjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJfc18xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XYW50IHRvIG9yZGVyIHNhbXBsZSA/PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pk9yZGVyIFN3YXRjaDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkaXNfbXJnXzFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5sb25nRGVzY3JpcHRpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9kaXNfMSB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UHJvZHVjdCBEZXNjcmlwdGlvbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QubG9uZ0Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc2hvcnREZXNjcmlwdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X2Rpc18xIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5BcHBsaWNhdGlvbnM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9kdWN0LnNob3J0RGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc19oZWxwIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmVlZCBoZWxwIHdpdGggdGhpcyBwcm9kdWN0PzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxpX2luZm9fYnIgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsaV9pbmZvIGluZm9fcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYWRkcmVzc19pY29uL21vYl9pLnN2Z1wiIGFsdD1cIm1vYmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5HaXZlIHVzIGEgY2FsbDwvc3Ryb25nPiBNb24gLSBTYXQgMTBBTSB0byA3UG08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLTYgIHBhZGRfcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxpX2luZm8gaW5mb19yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hZGRyZXNzX2ljb24vd2hhdHNhcHAuc3ZnXCIgYWx0PVwid2hhdHNhcHBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+Q2hhdCB3aXRoIHVzIG9uIHdoYXRhcHA8L3N0cm9uZz4gTW9uIC0gU2F0IDEwQU0gdG8gN1BtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC02IHBhZGRfbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGlfaW5mbyBiZHJfbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hZGRyZXNzX2ljb24vbWVzc2FnZS5zdmdcIiBhbHQ9XCJtZXNzYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkRyb3AgdXMgYW4gZW1haWw8L3N0cm9uZz4gTW9uIC0gU2F0IDEwQU0gdG8gN1BtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5yZWxhdGl2ZS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYXlfbGVrZV9zZWNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX21haW5faGFkZGluZyB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PllvdSBNYXkgQWxzbyBMaWtlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1heV9saWtlXCIgY2xhc3NOYW1lPVwib3dsLWNhcm91c2VsIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdHMgcHJvZHVjdHM9e3Byb2R1Y3QucmVsYXRpdmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3QgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH1wcm9kdWN0cy8ke2NvbnRleHQucGFyYW1zLnNsdWd9YClcclxuICAgICAgICBwcm9kdWN0ID0gcHJvZHVjdC5kYXRhO1xyXG5cclxuICAgICAgICBsZXQgcmVsYXRpdmVQcm9kdWN0cyA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5BUElfVVJMfXByb2R1Y3RzL3JlbGF0aXZlLyR7cHJvZHVjdC5pZH1gKTtcclxuICAgICAgICByZWxhdGl2ZVByb2R1Y3RzID0gcmVsYXRpdmVQcm9kdWN0cy5kYXRhXHJcblxyXG4gICAgICAgIHByb2R1Y3Quc3RvY2tTdGF0dXMgPSBzdG9ja1N0YXR1cyhwcm9kdWN0KVxyXG5cclxuICAgICAgICBwcm9kdWN0LnJlbGF0aXZlID0gcmVsYXRpdmVQcm9kdWN0cztcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczogcHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiXSwic291cmNlUm9vdCI6IiJ9