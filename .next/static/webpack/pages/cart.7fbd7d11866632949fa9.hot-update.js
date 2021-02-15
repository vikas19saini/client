webpackHotUpdate_N_E("pages/cart",{

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _jsxFileName = "D:\\Projects\\client\\src\\pages\\header.js",
    _s = $RefreshSig$();





function Header(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cartItemCount = _useState[0],
      setCartItemCount = _useState[1];

  var config = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.config;
  });

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showSearchMenu = _useState2[0],
      setShowSearchMenu = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      categories = _useState3[0],
      setCategories = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(-1),
      openCategory = _useState4[0],
      setOpenCategory = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    navigation(); // written in script.js

    if (config.cart) {
      setCartItemCount(config.cart.length);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat("http://localhost:3010/", "category")).then(function (response) {
      setCategories(response.data.rows);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: props.shadow ? "header_area head_shedow" : "header_area",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main_header_area animated",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          id: "navigation1",
          className: "navigation_1 row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "nav-header",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "icon_r_12 mob_view",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "inner_po_right",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                  className: "searchbox",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "search",
                    placeholder: "Search......",
                    name: "search",
                    className: "searchbox-input",
                    onKeyUp: buttonUp()
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "submit",
                    className: "searchbox-submit",
                    value: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "searchbox-icon",
                    onClick: function onClick() {
                      return setShowSearchMenu(!showSearchMenu);
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/address_icon/search.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 125
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "txt_op_0",
                  style: {
                    display: showSearchMenu ? "block" : "none"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "What do you wanna make"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 41
                  }, this), categories.map(function (cat) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "category",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        href: "/category/".concat(cat.slug),
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: cat.icon ? cat.icon.fullUrl : "/images/placeholder.png",
                            alt: cat.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 48,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            children: cat.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 49,
                            columnNumber: 65
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 47,
                          columnNumber: 61
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 57
                      }, _this)
                    }, cat.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 53
                    }, _this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "icon_up",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/cart",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: "mobileCart",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "/images/address_icon/card.svg",
                        alt: "cart"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 61,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "badge",
                        id: "cartItems",
                        children: cartItemCount
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/account?view=wishlist",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "/images/address_icon/heart.svg",
                        alt: "wishlist"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "nav-brand",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/images/logo.png",
                  alt: "gandhi logo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "nav-toggle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "nav-menus-wrapper",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "nav-menu categoery_menu align-to-right wt_tx",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "show_sub",
                  href: "#",
                  children: "All Fabric"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "megamenu-panel",
                  id: "close_menu",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "container nav_head",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      id: "closeButton",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "/images/close.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 67
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "row",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "col-md-2 col-xs-12",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                          href: "/",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                              className: "desk_view",
                              src: "/images/logo.png",
                              alt: "logo"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 90,
                              columnNumber: 60
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 90,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 89,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "col-md-10 col-xs-12",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "megamenu-lists",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                            className: "megamenu-list list-col-4",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "cus_nv ac-menu",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "row cus_nv_m ac-list",
                                children: categories.map(function (cat) {
                                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                    id: "some-div",
                                    className: "expanded",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                      onClick: function onClick() {
                                        return setOpenCategory(cat.id);
                                      },
                                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                                        className: "catImage",
                                        src: cat.icon ? cat.icon.fullUrl : "/images/placeholder.png",
                                        alt: cat.name
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 103,
                                        columnNumber: 89
                                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                        children: cat.name
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 104,
                                        columnNumber: 89
                                      }, _this)]
                                    }, void 0, true, {
                                      fileName: _jsxFileName,
                                      lineNumber: 102,
                                      columnNumber: 85
                                    }, _this), cat.children && cat.children.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                      id: "some-element",
                                      className: "sub-menu",
                                      style: {
                                        display: openCategory === cat.id ? "block" : "none"
                                      },
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                                        children: cat.children.map(function (subCat) {
                                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                              href: "/category/".concat(subCat.slug),
                                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                                children: subCat.name
                                              }, void 0, false, {
                                                fileName: _jsxFileName,
                                                lineNumber: 115,
                                                columnNumber: 117
                                              }, _this)
                                            }, void 0, false, {
                                              fileName: _jsxFileName,
                                              lineNumber: 114,
                                              columnNumber: 113
                                            }, _this)
                                          }, subCat.id, false, {
                                            fileName: _jsxFileName,
                                            lineNumber: 113,
                                            columnNumber: 109
                                          }, _this);
                                        })
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 109,
                                        columnNumber: 93
                                      }, _this)
                                    }, cat.id, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 108,
                                      columnNumber: 89
                                    }, _this)]
                                  }, cat.id, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 101,
                                    columnNumber: 81
                                  }, _this);
                                })
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 97,
                                columnNumber: 65
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 96,
                              columnNumber: 61
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 95,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 94,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  target: "_blank",
                  children: "Shop By Categories"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "nav-search",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "nav-search-button",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/images/address_icon/search.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 72
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "nav-search-inner",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "search",
                      name: "search",
                      placeholder: "Search..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  href: "/cart",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/address_icon/card.svg",
                      alt: "cart"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "badge",
                      id: "cartItems",
                      children: cartItemCount
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  href: "/account",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/address_icon/user.svg",
                      alt: "account"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

_s(Header, "RlN7nsHbtT6QrNupQhEmHsKEw90=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiY2FydEl0ZW1Db3VudCIsInNldENhcnRJdGVtQ291bnQiLCJjb25maWciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2hvd1NlYXJjaE1lbnUiLCJzZXRTaG93U2VhcmNoTWVudSIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwib3BlbkNhdGVnb3J5Iiwic2V0T3BlbkNhdGVnb3J5IiwidXNlRWZmZWN0IiwibmF2aWdhdGlvbiIsImNhcnQiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicm93cyIsInNoYWRvdyIsImJ1dHRvblVwIiwiZGlzcGxheSIsIm1hcCIsImNhdCIsInNsdWciLCJpY29uIiwiZnVsbFVybCIsIm5hbWUiLCJpZCIsImNoaWxkcmVuIiwic3ViQ2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxDQUFELENBRGhCO0FBQUEsTUFDM0JDLGFBRDJCO0FBQUEsTUFDWkMsZ0JBRFk7O0FBRWxDLE1BQU1DLE1BQU0sR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRixNQUFWO0FBQUEsR0FBTixDQUExQjs7QUFGa0MsbUJBR1VILHNEQUFRLENBQUMsS0FBRCxDQUhsQjtBQUFBLE1BRzNCTSxjQUgyQjtBQUFBLE1BR1hDLGlCQUhXOztBQUFBLG1CQUlFUCxzREFBUSxDQUFDLEVBQUQsQ0FKVjtBQUFBLE1BSTNCUSxVQUoyQjtBQUFBLE1BSWZDLGFBSmU7O0FBQUEsbUJBS01ULHNEQUFRLENBQUMsQ0FBQyxDQUFGLENB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QUFBLHdCQUZKLGVBUUkscUVBQUMsZ0RBQUQ7QUFBTSxzQkFBSSxFQUFDLE9BQVg7QUFBQSx5Q0FDSTtBQUFBLDRDQUNJO0FBQUsseUJBQUcsRUFBQywrQkFBVDtBQUF5Qyx5QkFBRyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosZUFFSTtBQUFNLCtCQUFTLEVBQUMsT0FBaEI7QUFBd0Isd0JBQUUsRUFBQyxXQUEzQjtBQUFBLGdDQUF3Qy9CO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSSixlQWNJLHFFQUFDLGdEQUFEO0FBQU0sc0JBQUksRUFBQyxVQUFYO0FBQUEseUNBQ0k7QUFBQSwyQ0FDSTtBQUFLLHlCQUFHLEVBQUMsK0JBQVQ7QUFBeUMseUJBQUcsRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTVESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThJSDs7R0FuS3VCSCxNO1VBRUxNLHVEOzs7S0FGS04sTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LjdmYmQ3ZDExODY2NjMyOTQ5ZmE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IFtjYXJ0SXRlbUNvdW50LCBzZXRDYXJ0SXRlbUNvdW50XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBjb25maWcgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jb25maWcpXHJcbiAgICBjb25zdCBbc2hvd1NlYXJjaE1lbnUsIHNldFNob3dTZWFyY2hNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtvcGVuQ2F0ZWdvcnksIHNldE9wZW5DYXRlZ29yeV0gPSB1c2VTdGF0ZSgtMSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBuYXZpZ2F0aW9uKCkgLy8gd3JpdHRlbiBpbiBzY3JpcHQuanNcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5jYXJ0KSB7XHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtQ291bnQoY29uZmlnLmNhcnQubGVuZ3RoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH1jYXRlZ29yeWApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRDYXRlZ29yaWVzKHJlc3BvbnNlLmRhdGEucm93cyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtwcm9wcy5zaGFkb3cgPyBcImhlYWRlcl9hcmVhIGhlYWRfc2hlZG93XCIgOiBcImhlYWRlcl9hcmVhXCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5faGVhZGVyX2FyZWEgYW5pbWF0ZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBpZD1cIm5hdmlnYXRpb24xXCIgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl8xIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbl9yXzEyIG1vYl92aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9wb19yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2hib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi4uLi5cIiBuYW1lPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwic2VhcmNoYm94LWlucHV0XCIgb25LZXlVcD17YnV0dG9uVXAoKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic2VhcmNoYm94LXN1Ym1pdFwiIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaGJveC1pY29uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd1NlYXJjaE1lbnUoIXNob3dTZWFyY2hNZW51KX0+PGltZyBzcmM9XCIvaW1hZ2VzL2FkZHJlc3NfaWNvbi9zZWFyY2guc3ZnXCIgYWx0PVwiXCIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eHRfb3BfMFwiIHN0eWxlPXt7IGRpc3BsYXk6IHNob3dTZWFyY2hNZW51ID8gXCJibG9ja1wiIDogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4+V2hhdCBkbyB5b3Ugd2FubmEgbWFrZTwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjYXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIiBrZXk9e2NhdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYXRlZ29yeS8ke2NhdC5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXQuaWNvbiA/IGNhdC5pY29uLmZ1bGxVcmwgOiBcIi9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCJ9IGFsdD17Y2F0Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y2F0Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25fdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1vYmlsZUNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2FkZHJlc3NfaWNvbi9jYXJkLnN2Z1wiIGFsdD1cImNhcnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiIGlkPVwiY2FydEl0ZW1zXCI+e2NhcnRJdGVtQ291bnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudD92aWV3PXdpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hZGRyZXNzX2ljb24vaGVhcnQuc3ZnXCIgYWx0PVwid2lzaGxpc3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWJyYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cImdhbmRoaSBsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi10b2dnbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LW1lbnVzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtbWVudSBjYXRlZ29lcnlfbWVudSBhbGlnbi10by1yaWdodCB3dF90eFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2hvd19zdWJcIiBocmVmPVwiI1wiPkFsbCBGYWJyaWM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYW1lbnUtcGFuZWxcIiBpZD1cImNsb3NlX21lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG5hdl9oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNsb3NlQnV0dG9uXCI+PGltZyBzcmM9XCIvaW1hZ2VzL2Nsb3NlLnBuZ1wiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGltZyBjbGFzc05hbWU9XCJkZXNrX3ZpZXdcIiBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2FtZW51LWxpc3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LWxpc3QgbGlzdC1jb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c19udiBhYy1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjdXNfbnZfbSBhYy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLm1hcCgoY2F0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzb21lLWRpdlwiIGNsYXNzTmFtZT1cImV4cGFuZGVkXCIga2V5PXtjYXQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuQ2F0ZWdvcnkoY2F0LmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhdEltYWdlXCIgc3JjPXtjYXQuaWNvbiA/IGNhdC5pY29uLmZ1bGxVcmwgOiBcIi9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCJ9IGFsdD17Y2F0Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2F0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdC5jaGlsZHJlbiAmJiBjYXQuY2hpbGRyZW4ubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNvbWUtZWxlbWVudFwiIGNsYXNzTmFtZT1cInN1Yi1tZW51XCIga2V5PXtjYXQuaWR9IHN0eWxlPXt7IGRpc3BsYXk6IChvcGVuQ2F0ZWdvcnkgPT09IGNhdC5pZCkgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdC5jaGlsZHJlbi5tYXAoKHN1YkNhdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3N1YkNhdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5LyR7c3ViQ2F0LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3N1YkNhdC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiPlNob3AgQnkgQ2F0ZWdvcmllczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zZWFyY2gtYnV0dG9uXCI+PGltZyBzcmM9XCIvaW1hZ2VzL2FkZHJlc3NfaWNvbi9zZWFyY2guc3ZnXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zZWFyY2gtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIG5hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYWRkcmVzc19pY29uL2NhcmQuc3ZnXCIgYWx0PVwiY2FydFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIiBpZD1cImNhcnRJdGVtc1wiPntjYXJ0SXRlbUNvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hZGRyZXNzX2ljb24vdXNlci5zdmdcIiBhbHQ9XCJhY2NvdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=