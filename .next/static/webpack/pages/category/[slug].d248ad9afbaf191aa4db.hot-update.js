webpackHotUpdate_N_E("pages/category/[slug]",{

/***/ "./src/components/products.js":
/*!************************************!*\
  !*** ./src/components/products.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Products; });
/* harmony import */ var D_Projects_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/helpers */ "./src/pages/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/next-server/server/router */ "./node_modules/next/dist/next-server/server/router.js");
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "D:\\Projects\\client\\src\\components\\products.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Projects_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var priceFilters = [{
  start: 50,
  end: 250
}, {
  start: 251,
  end: 500
}, {
  start: 501,
  end: 1000
}, {
  start: 1001,
  end: 2000
}, {
  start: 2001,
  end: 5000
}, {
  start: 5001,
  end: 10000
}];
function Products(props) {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var category = props.category;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      products = _useState[0],
      setProducts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      filters = _useState2[0],
      setFilters = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      total = _useState3[0],
      setTotal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      totalPages = _useState4[0],
      setTotalPages = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(-1),
      openFilter = _useState5[0],
      setOpenFilter = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(router.query),
      params = _useState6[0],
      setParams = _useState6[1];

  var limit = 10;

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props.reload ? props.reload : 1),
      reload = _useState7[0],
      setReload = _useState7[1];

  var page = params.page ? parseInt(params.page) : 1;
  var currency = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.config.currency;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var queryParams = params;
    var offset = (page - 1) * limit;
    queryParams = _objectSpread(_objectSpread({}, queryParams), {
      limit: limit,
      offset: offset
    });
    queryParams = new URLSearchParams(queryParams);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat("http://localhost:3010/", "category/products/").concat(category.slug, "?").concat(queryParams)).then(function (response) {
      setProducts(response.data.rows);
      setTotal(response.data.count);
      setTotalPages(Math.ceil(response.data.count / limit));
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    });
  }, [router.query.start, router.query.filters, router.query.slug]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat("http://localhost:3010/", "static/filters")).then(function (res) {
      setFilters(res.data);
    });
  }, []);

  var applyFilter = function applyFilter(filterValue) {
    var currentFilters = router.query.filters ? router.query.filters.split("|") : [];
    currentFilters = currentFilters.map(function (fv) {
      return parseInt(fv);
    });

    if (currentFilters.includes(filterValue)) {
      currentFilters = currentFilters.filter(function (fv) {
        return fv !== filterValue;
      });
    } else {
      currentFilters.push(filterValue);
    }

    var appliedFiltersTemp = _objectSpread(_objectSpread({}, router.query), {
      filters: currentFilters.join("|")
    });

    var queryParams = new URLSearchParams(appliedFiltersTemp);
    router.push("/category/".concat(category.slug, "?").concat(queryParams));
  };

  var setPage = function setPage(pageNo) {
    var appliedFiltersTemp = params;
    appliedFiltersTemp.page = pageNo;
    var queryParams = new URLSearchParams(appliedFiltersTemp);
    router.push("/category/".concat(category.slug, "?").concat(queryParams));
    setReload(reload + 1);
  };

  var setPrice = function setPrice(start, end) {
    var appliedFiltersTemp = router.query;
    appliedFiltersTemp['start'] = start;
    appliedFiltersTemp['end'] = end;
    var queryParams = new URLSearchParams(appliedFiltersTemp);
    router.push("/category/".concat(category.slug, "?").concat(queryParams));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: "inner_listing",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "inner_sec_tp",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "row",
          children: products.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "emptyCart",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/images/emptyCart.svg",
              alt: "emptyCart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
              children: "Your cart is empty"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "You have no items in your shopping cart let's go buy something!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                children: "Shop Now!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 33
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col-md-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "left_fittr wow fadeInUp",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
                  children: "Filter"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "inner_boxs",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        className: "radio_cus",
                        children: priceFilters.map(function (pf, index) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                            onClick: function onClick() {
                              return setPrice(pf.start, pf.end);
                            },
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                              type: "radio",
                              defaultValue: pf.start,
                              checked: router.query.start && parseInt(router.query.start) === pf.start ? true : false
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 136,
                              columnNumber: 77
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
                              "for": "test1",
                              children: [Object(_pages_helpers__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(pf.start, currency), " - ", Object(_pages_helpers__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(pf.end, currency)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 137,
                              columnNumber: 77
                            }, _this)]
                          }, index, true, {
                            fileName: _jsxFileName,
                            lineNumber: 135,
                            columnNumber: 73
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 57
                      }, this), filters.map(function (filter) {
                        if (filter.filterValues.length > 0) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                            className: "categories_bx",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                              className: "cate_tx",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                                children: filter.name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 151,
                                columnNumber: 81
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 150,
                              columnNumber: 77
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                              className: "searchbar search_t_1 collapsed",
                              children: filter.filterValues.map(function (fv) {
                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
                                  className: "check_cus",
                                  onClick: function onClick() {
                                    return applyFilter(fv.id);
                                  },
                                  children: [fv.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultValue: fv.id,
                                    checked: router.query.filters && router.query.filters.includes(fv.id) ? true : false
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 158,
                                    columnNumber: 97
                                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                                    className: "checkmark"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 159,
                                    columnNumber: 97
                                  }, _this)]
                                }, fv.id, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 157,
                                  columnNumber: 93
                                }, _this);
                              })
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 153,
                              columnNumber: 77
                            }, _this)]
                          }, filter.id, true, {
                            fileName: _jsxFileName,
                            lineNumber: 149,
                            columnNumber: 73
                          }, _this);
                        }
                      })]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 53
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col-md-8",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "inner_right_prodct wow fadeInUp",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "mob_view filter_cs",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "col_6",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                        src: "/images/sort.jpg",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
                        columnNumber: 57
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                        children: "Sort"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
                        columnNumber: 94
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 53
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 49
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "col_6",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
                      "data-toggle": "modal",
                      "data-target": "#myModal",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                        src: "/images/filter.png",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 100
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                        children: "Filter"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 184,
                        columnNumber: 66
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 53
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 49
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "inner_right_prodct wow fadeInUp",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    children: [category.name, " - ", total]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 49
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "row custom_col",
                    children: products.map(function (p) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        className: "col-md-6 col-6",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                          className: "cotton_fabric_sec",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            href: "/product/" + p.slug,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                                src: p.featuredImage ? p.featuredImage.thumbnailUrl : "/images/placeholder.png",
                                alt: p.name,
                                className: "img-fluid"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 197,
                                columnNumber: 81
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 196,
                              columnNumber: 77
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 195,
                            columnNumber: 73
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                            children: p.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 200,
                            columnNumber: 73
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_pages_helpers__WEBPACK_IMPORTED_MODULE_5__["GetPriceHtml"], {
                              product: p
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 201,
                              columnNumber: 76
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 201,
                            columnNumber: 73
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 194,
                          columnNumber: 69
                        }, _this)
                      }, p.id, false, {
                        fileName: _jsxFileName,
                        lineNumber: 193,
                        columnNumber: 65
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 49
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "center wow fadeInUp",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
                    className: "pagination",
                    children: [page > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                        onClick: function onClick() {
                          return setPage(page - 1);
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                          src: "/images/left.png",
                          alt: "prev"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 222,
                          columnNumber: 65
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 221,
                        columnNumber: 61
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 57
                    }, this), page < totalPages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                        onClick: function onClick() {
                          return setPage(page + 1);
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                          src: "/images/right.png",
                          alt: "arrow"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 230,
                          columnNumber: 65
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 229,
                        columnNumber: 61
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 57
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 37
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "modal md_bg_filter",
      id: "myModal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "modal-dialog filter_mrg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "modal-content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "modal-header",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
              children: "Filter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "modal-body main_filter_pop filtersMobile",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "d-flex flex-row mt-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
                className: "nav nav-tabs nav-tabs--vertical nav-tabs--left",
                role: "navigation",
                children: filters.map(function (filter) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
                      className: filter.id === openFilter ? "nav-link active" : "nav-link",
                      onClick: function onClick() {
                        return setOpenFilter(filter.id);
                      },
                      children: filter.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 256,
                      columnNumber: 53
                    }, _this)
                  }, filter.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 49
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "tab-content",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "tab-pane fade show active",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "main_tag",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
                      children: priceFilters.map(function (pf, index) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                          onClick: function onClick() {
                            return setPrice(pf.start, pf.end);
                          },
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                            type: "radio",
                            defaultValue: pf.start,
                            checked: router.query.start && parseInt(router.query.start) === pf.start ? true : false
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 270,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
                            "for": "test1",
                            children: [Object(_pages_helpers__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(pf.start, currency), " - ", Object(_pages_helpers__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(pf.end, currency)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 271,
                            columnNumber: 65
                          }, _this)]
                        }, index, true, {
                          fileName: _jsxFileName,
                          lineNumber: 269,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 37
                }, this), filters.map(function (filter) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: filter.id === openFilter ? "tab-pane fade show active" : "tab-pane fade show",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      className: "main_tag",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
                        children: filter.filterValues.map(function (fv) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                            className: "normalValueContainer selectedOption",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
                              className: "customCheckbox",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                                className: "filterValue",
                                children: fv.name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 290,
                                columnNumber: 81
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                                type: "checkbox",
                                name: "filterValues"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 291,
                                columnNumber: 81
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                                className: "checkboxIndicator"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 292,
                                columnNumber: 81
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 289,
                              columnNumber: 77
                            }, _this)
                          }, fv.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 288,
                            columnNumber: 73
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 284,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 283,
                      columnNumber: 53
                    }, _this)
                  }, filter.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 49
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "modal-footer ft_btn_lft",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              type: "button",
              className: "btn btn-danger frst clse_bttn",
              "data-dismiss": "modal",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              type: "button",
              className: "btn btn-danger clse_bttn",
              "data-dismiss": "modal",
              children: "Apply"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 9
  }, this);
}

_s(Products, "kqr5xVetdZQvrSIHfsaA176woQk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c = Products;

var _c;

$RefreshReg$(_c, "Products");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsicHJpY2VGaWx0ZXJzIiwic3RhcnQiLCJlbmQiLCJQcm9kdWN0cyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2F0ZWdvcnkiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInRvdGFsIiwic2V0VG90YWwiLCJ0b3RhbFBhZ2VzIiwic2V0VG90YWxQYWdlcyIsIm9wZW5GaWx0ZXIiLCJzZXRPcGVuRmlsdGVyIiwicXVlcnkiLCJwYXJhbXMiLCJzZXRQYXJhbXMiLCJsaW1pdCIsInJlbG9hZCIsInNldFJlbG9hZCIsInBhZ2UiLCJwYXJzZUludCIsImN1cnJlbmN5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbmZpZyIsInVzZUVmZmVjdCIsInF1ZXJ5UGFyYW1zIiwib2Zmc2V0IiwiVVJMU2VhcmNoUGFyYW1zIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwic2x1ZyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJyb3dzIiwiY291bnQiLCJNYXRoIiwiY2VpbCIsIndpbmRvdyIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIiwicmVzIiwiYXBwbHlGaWx0ZXIiLCJmaWx0ZXJWYWx1ZSIsImN1cnJlbnRGaWx0ZXJzIiwic3BsaXQiLCJtYXAiLCJmdiIsImluY2x1ZGVzIiwiZmlsdGVyIiwicHVzaCIsImFwcGxpZWRGaWx0ZXJzVGVtcCIsImpvaW4iLCJzZXRQYWdlIiwicGFnZU5vIiwic2V0UHJpY2UiLCJsZW5ndGgiLCJwZiIsImluZGV4IiwiZm9ybWF0Q3VycmVuY3kiLCJmaWx0ZXJWYWx1ZXMiLCJuYW1lIiwiaWQiLCJwIiwiZmVhdHVyZWRJbWFnZSIsInRodW1ibmFpbFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtB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QUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBOURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeElKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa05IOztHQXhSdUJwRSxRO1VBQ0xHLHFELEVBV0VzQix1RDs7O0tBWkd6QixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5L1tzbHVnXS5kMjQ4YWQ5YWZiYWYxOTFhYTRkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3ksIEdldFByaWNlSHRtbCB9IGZyb20gXCIuLi9wYWdlcy9oZWxwZXJzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgcm91dGUgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXJcIlxyXG5cclxuY29uc3QgcHJpY2VGaWx0ZXJzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHN0YXJ0OiA1MCxcclxuICAgICAgICBlbmQ6IDI1MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzdGFydDogMjUxLFxyXG4gICAgICAgIGVuZDogNTAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0YXJ0OiA1MDEsXHJcbiAgICAgICAgZW5kOiAxMDAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0YXJ0OiAxMDAxLFxyXG4gICAgICAgIGVuZDogMjAwMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzdGFydDogMjAwMSxcclxuICAgICAgICBlbmQ6IDUwMDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3RhcnQ6IDUwMDEsXHJcbiAgICAgICAgZW5kOiAxMDAwMFxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMocHJvcHMpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgbGV0IGNhdGVnb3J5ID0gcHJvcHMuY2F0ZWdvcnk7XHJcbiAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW29wZW5GaWx0ZXIsIHNldE9wZW5GaWx0ZXJdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW3BhcmFtcywgc2V0UGFyYW1zXSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeSk7XHJcbiAgICBjb25zdCBsaW1pdCA9IDEwXHJcbiAgICBjb25zdCBbcmVsb2FkLCBzZXRSZWxvYWRdID0gdXNlU3RhdGUocHJvcHMucmVsb2FkID8gcHJvcHMucmVsb2FkIDogMSk7XHJcbiAgICBsZXQgcGFnZSA9IHBhcmFtcy5wYWdlID8gcGFyc2VJbnQocGFyYW1zLnBhZ2UpIDogMTtcclxuICAgIGNvbnN0IGN1cnJlbmN5ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY29uZmlnLmN1cnJlbmN5KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IHBhcmFtcztcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIGxpbWl0XHJcblxyXG4gICAgICAgIHF1ZXJ5UGFyYW1zID0geyAuLi5xdWVyeVBhcmFtcywgLi4ueyBsaW1pdDogbGltaXQsIG9mZnNldDogb2Zmc2V0IH0gfVxyXG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVBhcmFtcylcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9Y2F0ZWdvcnkvcHJvZHVjdHMvJHtjYXRlZ29yeS5zbHVnfT8ke3F1ZXJ5UGFyYW1zfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEucm93cylcclxuICAgICAgICAgICAgc2V0VG90YWwocmVzcG9uc2UuZGF0YS5jb3VudClcclxuICAgICAgICAgICAgc2V0VG90YWxQYWdlcyhNYXRoLmNlaWwocmVzcG9uc2UuZGF0YS5jb3VudCAvIGxpbWl0KSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoe1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtyb3V0ZXIucXVlcnkuc3RhcnQsIHJvdXRlci5xdWVyeS5maWx0ZXJzLCByb3V0ZXIucXVlcnkuc2x1Z10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH1zdGF0aWMvZmlsdGVyc2ApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJzKHJlcy5kYXRhKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGFwcGx5RmlsdGVyID0gKGZpbHRlclZhbHVlKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRGaWx0ZXJzID0gcm91dGVyLnF1ZXJ5LmZpbHRlcnMgPyByb3V0ZXIucXVlcnkuZmlsdGVycy5zcGxpdChcInxcIikgOiBbXTtcclxuICAgICAgICBjdXJyZW50RmlsdGVycyA9IGN1cnJlbnRGaWx0ZXJzLm1hcChmdiA9PiBwYXJzZUludChmdikpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudEZpbHRlcnMuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzID0gY3VycmVudEZpbHRlcnMuZmlsdGVyKGZ2ID0+IGZ2ICE9PSBmaWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudEZpbHRlcnMucHVzaChmaWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYXBwbGllZEZpbHRlcnNUZW1wID0geyAuLi5yb3V0ZXIucXVlcnksIC4uLnsgZmlsdGVyczogY3VycmVudEZpbHRlcnMuam9pbihcInxcIikgfSB9O1xyXG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYXBwbGllZEZpbHRlcnNUZW1wKTtcclxuICAgICAgICByb3V0ZXIucHVzaChgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Z30/JHtxdWVyeVBhcmFtc31gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFBhZ2UgPSAocGFnZU5vKSA9PiB7XHJcbiAgICAgICAgbGV0IGFwcGxpZWRGaWx0ZXJzVGVtcCA9IHBhcmFtc1xyXG4gICAgICAgIGFwcGxpZWRGaWx0ZXJzVGVtcC5wYWdlID0gcGFnZU5vXHJcblxyXG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYXBwbGllZEZpbHRlcnNUZW1wKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfT8ke3F1ZXJ5UGFyYW1zfWApXHJcbiAgICAgICAgc2V0UmVsb2FkKHJlbG9hZCArIDEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UHJpY2UgPSAoc3RhcnQsIGVuZCkgPT4ge1xyXG4gICAgICAgIGxldCBhcHBsaWVkRmlsdGVyc1RlbXAgPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgYXBwbGllZEZpbHRlcnNUZW1wWydzdGFydCddID0gc3RhcnQ7XHJcbiAgICAgICAgYXBwbGllZEZpbHRlcnNUZW1wWydlbmQnXSA9IGVuZDtcclxuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGFwcGxpZWRGaWx0ZXJzVGVtcCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9jYXRlZ29yeS8ke2NhdGVnb3J5LnNsdWd9PyR7cXVlcnlQYXJhbXN9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbm5lcl9saXN0aW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfc2VjX3RwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eUNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2VtcHR5Q2FydC5zdmdcIiBhbHQ9XCJlbXB0eUNhcnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+WW91ciBjYXJ0IGlzIGVtcHR5PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IGhhdmUgbm8gaXRlbXMgaW4geW91ciBzaG9wcGluZyBjYXJ0IGxldCdzIGdvIGJ1eSBzb21ldGhpbmchPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvcCBOb3chXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfZml0dHIgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkZpbHRlcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9ib3hzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvX2N1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZUZpbHRlcnMubWFwKChwZiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldFByaWNlKHBmLnN0YXJ0LCBwZi5lbmQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBkZWZhdWx0VmFsdWU9e3BmLnN0YXJ0fSBjaGVja2VkPXtyb3V0ZXIucXVlcnkuc3RhcnQgJiYgcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnN0YXJ0KSA9PT0gcGYuc3RhcnQgPyB0cnVlIDogZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGVzdDFcIj57Zm9ybWF0Q3VycmVuY3kocGYuc3RhcnQsIGN1cnJlbmN5KX0gLSB7Zm9ybWF0Q3VycmVuY3kocGYuZW5kLCBjdXJyZW5jeSl9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLm1hcChmaWx0ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlci5maWx0ZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19ieFwiIGtleT17ZmlsdGVyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZV90eFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57ZmlsdGVyLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hiYXIgc2VhcmNoX3RfMSBjb2xsYXBzZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJWYWx1ZXMubWFwKGZ2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrX2N1c1wiIG9uQ2xpY2s9eygpID0+IGFwcGx5RmlsdGVyKGZ2LmlkKX0ga2V5PXtmdi5pZH0+e2Z2Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkZWZhdWx0VmFsdWU9e2Z2LmlkfSBjaGVja2VkPXtyb3V0ZXIucXVlcnkuZmlsdGVycyAmJiByb3V0ZXIucXVlcnkuZmlsdGVycy5pbmNsdWRlcyhmdi5pZCkgPyB0cnVlIDogZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX3JpZ2h0X3Byb2RjdCB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYl92aWV3IGZpbHRlcl9jc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbF82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+PGltZyBzcmM9XCIvaW1hZ2VzL3NvcnQuanBnXCIgYWx0PVwiXCIgLz48c3Bhbj5Tb3J0PC9zcGFuPjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbF82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI215TW9kYWxcIj48aW1nIHNyYz1cIi9pbWFnZXMvZmlsdGVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIgLz48c3Bhbj5GaWx0ZXI8L3NwYW4+PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9yaWdodF9wcm9kY3Qgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjYXRlZ29yeS5uYW1lfSAtIHt0b3RhbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGN1c3RvbV9jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC02XCIga2V5PXtwLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdHRvbl9mYWJyaWNfc2VjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Byb2R1Y3QvXCIgKyBwLnNsdWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3AuZmVhdHVyZWRJbWFnZSA/IHAuZmVhdHVyZWRJbWFnZS50aHVtYm5haWxVcmwgOiBcIi9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCJ9IGFsdD17cC5uYW1lfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cC5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxHZXRQcmljZUh0bWwgcHJvZHVjdD17cH0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24gcGFnaW5hdGlvbi1tZCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtXCI+PGEgY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj5QcmV2aW91czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+TmV4dDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlID4gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlIC0gMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xlZnQucG5nXCIgYWx0PVwicHJldlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgPCB0b3RhbFBhZ2VzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2UgKyAxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcmlnaHQucG5nXCIgYWx0PVwiYXJyb3dcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIG1kX2JnX2ZpbHRlclwiIGlkPVwibXlNb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgZmlsdGVyX21yZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkZpbHRlcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHkgbWFpbl9maWx0ZXJfcG9wIGZpbHRlcnNNb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIG5hdi10YWJzLS12ZXJ0aWNhbCBuYXYtdGFicy0tbGVmdFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMubWFwKGZpbHRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIga2V5PXtmaWx0ZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2ZpbHRlci5pZCA9PT0gb3BlbkZpbHRlciA/IFwibmF2LWxpbmsgYWN0aXZlXCIgOiBcIm5hdi1saW5rXCJ9IG9uQ2xpY2s9eygpID0+IHNldE9wZW5GaWx0ZXIoZmlsdGVyLmlkKX0+e2ZpbHRlci5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fdGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZUZpbHRlcnMubWFwKChwZiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldFByaWNlKHBmLnN0YXJ0LCBwZi5lbmQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBkZWZhdWx0VmFsdWU9e3BmLnN0YXJ0fSBjaGVja2VkPXtyb3V0ZXIucXVlcnkuc3RhcnQgJiYgcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnN0YXJ0KSA9PT0gcGYuc3RhcnQgPyB0cnVlIDogZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGVzdDFcIj57Zm9ybWF0Q3VycmVuY3kocGYuc3RhcnQsIGN1cnJlbmN5KX0gLSB7Zm9ybWF0Q3VycmVuY3kocGYuZW5kLCBjdXJyZW5jeSl9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMubWFwKGZpbHRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZpbHRlci5pZCA9PT0gb3BlbkZpbHRlciA/IFwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIDogXCJ0YWItcGFuZSBmYWRlIHNob3dcIn0ga2V5PXtmaWx0ZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX3RhZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlclZhbHVlcy5tYXAoZnYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJub3JtYWxWYWx1ZUNvbnRhaW5lciBzZWxlY3RlZE9wdGlvblwiIGtleT17ZnYuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbUNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJWYWx1ZVwiPntmdi5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlsdGVyVmFsdWVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94SW5kaWNhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlciBmdF9idG5fbGZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBmcnN0IGNsc2VfYnR0blwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGNsc2VfYnR0blwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+QXBwbHk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==