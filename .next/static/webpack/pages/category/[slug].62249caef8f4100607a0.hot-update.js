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
                              defaultChecked: router.query.start && parseInt(router.query.start) === pf.start ? true : false
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 136,
                              columnNumber: 77
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
                              htmlFor: "test1",
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
                                    defaultChecked: router.query.filters && router.query.filters.includes(fv.id) ? true : false
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
                        lineNumber: 179,
                        columnNumber: 57
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                        children: "Sort"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 179,
                        columnNumber: 94
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 53
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
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
                        lineNumber: 182,
                        columnNumber: 100
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                        children: "Filter"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 66
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 53
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 49
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "inner_right_prodct wow fadeInUp",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    children: [category.name, " - ", total]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
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
                                lineNumber: 196,
                                columnNumber: 81
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 195,
                              columnNumber: 77
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 194,
                            columnNumber: 73
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                            children: p.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 199,
                            columnNumber: 73
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_pages_helpers__WEBPACK_IMPORTED_MODULE_5__["GetPriceHtml"], {
                              product: p
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 200,
                              columnNumber: 76
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 200,
                            columnNumber: 73
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 193,
                          columnNumber: 69
                        }, _this)
                      }, p.id, false, {
                        fileName: _jsxFileName,
                        lineNumber: 192,
                        columnNumber: 65
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 49
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
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
                          lineNumber: 221,
                          columnNumber: 65
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 220,
                        columnNumber: 61
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 219,
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
                          lineNumber: 229,
                          columnNumber: 65
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 61
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 57
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
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
              lineNumber: 246,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "modal-body main_filter_pop filtersMobile",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "d-flex flex-row mt-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
                className: "nav nav-tabs nav-tabs--vertical nav-tabs--left",
                role: "navigation",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
                    className: openFilter === -1 ? "nav-link active" : "nav-link",
                    onClick: function onClick() {
                      return setOpenFilter(-1);
                    },
                    children: "Price"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 37
                }, this), filters.map(function (filter) {
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
                      lineNumber: 258,
                      columnNumber: 53
                    }, _this)
                  }, filter.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 49
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "tab-content",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: openFilter === -1 ? "tab-pane fade show active" : "tab-pane fade show",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "main_tag priceFilterModal",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
                      children: priceFilters.map(function (pf, index) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                          onClick: function onClick() {
                            return setPrice(pf.start, pf.end);
                          },
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                            type: "radio",
                            defaultValue: pf.start,
                            defaultChecked: router.query.start && parseInt(router.query.start) === pf.start ? true : false
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 272,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
                            htmlFor: "test1",
                            children: [Object(_pages_helpers__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(pf.start, currency), " - ", Object(_pages_helpers__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(pf.end, currency)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 273,
                            columnNumber: 65
                          }, _this)]
                        }, index, true, {
                          fileName: _jsxFileName,
                          lineNumber: 271,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 267,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 266,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
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
                            onClick: function onClick() {
                              return applyFilter(fv.id);
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
                              className: "customCheckbox",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                                className: "filterValue",
                                children: fv.name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 292,
                                columnNumber: 81
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                                type: "checkbox",
                                name: "filterValues"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 293,
                                columnNumber: 81
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                                className: "checkboxIndicator"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 294,
                                columnNumber: 81
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 291,
                              columnNumber: 77
                            }, _this)
                          }, fv.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 290,
                            columnNumber: 73
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 286,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 285,
                      columnNumber: 53
                    }, _this)
                  }, filter.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 49
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "modal-footer ft_btn_lft",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              type: "button",
              className: "btn btn-danger clse_bttn",
              "data-dismiss": "modal",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 242,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsicHJpY2VGaWx0ZXJzIiwic3RhcnQiLCJlbmQiLCJQcm9kdWN0cyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2F0ZWdvcnkiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInRvdGFsIiwic2V0VG90YWwiLCJ0b3RhbFBhZ2VzIiwic2V0VG90YWxQYWdlcyIsIm9wZW5GaWx0ZXIiLCJzZXRPcGVuRmlsdGVyIiwicXVlcnkiLCJwYXJhbXMiLCJzZXRQYXJhbXMiLCJsaW1pdCIsInJlbG9hZCIsInNldFJlbG9hZCIsInBhZ2UiLCJwYXJzZUludCIsImN1cnJlbmN5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbmZpZyIsInVzZUVmZmVjdCIsInF1ZXJ5UGFyYW1zIiwib2Zmc2V0IiwiVVJMU2VhcmNoUGFyYW1zIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwic2x1ZyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJyb3dzIiwiY291bnQiLCJNYXRoIiwiY2VpbCIsIndpbmRvdyIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIiwicmVzIiwiYXBwbHlGaWx0ZXIiLCJmaWx0ZXJWYWx1ZSIsImN1cnJlbnRGaWx0ZXJzIiwic3BsaXQiLCJtYXAiLCJmdiIsImluY2x1ZGVzIiwiZmlsdGVyIiwicHVzaCIsImFwcGxpZWRGaWx0ZXJzVGVtcCIsImpvaW4iLCJzZXRQYWdlIiwicGFnZU5vIiwic2V0UHJpY2UiLCJsZW5ndGgiLCJwZiIsImluZGV4IiwiZm9ybWF0Q3VycmVuY3kiLCJmaWx0ZXJWYWx1ZXMiLCJuYW1lIiwiaWQiLCJwIiwiZmVhdHVyZWRJbWFnZSIsInRodW1ibmFpbFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtB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REoscUJBQW9HYixNQUFNLENBQUNhLEVBQTNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREo7QUFxQkgsaUJBdEJELENBbEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBaUVJO0FBQUsscUJBQVMsRUFBQyx5QkFBZjtBQUFBLG1DQUVJO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQXNCLHVCQUFTLEVBQUMsMEJBQWhDO0FBQTJELDhCQUFhLE9BQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2SUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvTkg7O0dBMVJ1QnBFLFE7VUFDTEcscUQsRUFXRXNCLHVEOzs7S0FaR3pCLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcnkvW3NsdWddLjYyMjQ5Y2FlZjhmNDEwMDYwN2EwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgR2V0UHJpY2VIdG1sIH0gZnJvbSBcIi4uL3BhZ2VzL2hlbHBlcnNcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyByb3V0ZSB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3JvdXRlclwiXHJcblxyXG5jb25zdCBwcmljZUZpbHRlcnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgc3RhcnQ6IDUwLFxyXG4gICAgICAgIGVuZDogMjUwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0YXJ0OiAyNTEsXHJcbiAgICAgICAgZW5kOiA1MDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3RhcnQ6IDUwMSxcclxuICAgICAgICBlbmQ6IDEwMDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3RhcnQ6IDEwMDEsXHJcbiAgICAgICAgZW5kOiAyMDAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0YXJ0OiAyMDAxLFxyXG4gICAgICAgIGVuZDogNTAwMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzdGFydDogNTAwMSxcclxuICAgICAgICBlbmQ6IDEwMDAwXHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cyhwcm9wcykge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBsZXQgY2F0ZWdvcnkgPSBwcm9wcy5jYXRlZ29yeTtcclxuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3RvdGFsUGFnZXMsIHNldFRvdGFsUGFnZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbb3BlbkZpbHRlciwgc2V0T3BlbkZpbHRlcl0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbcGFyYW1zLCBzZXRQYXJhbXNdID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5KTtcclxuICAgIGNvbnN0IGxpbWl0ID0gMTBcclxuICAgIGNvbnN0IFtyZWxvYWQsIHNldFJlbG9hZF0gPSB1c2VTdGF0ZShwcm9wcy5yZWxvYWQgPyBwcm9wcy5yZWxvYWQgOiAxKTtcclxuICAgIGxldCBwYWdlID0gcGFyYW1zLnBhZ2UgPyBwYXJzZUludChwYXJhbXMucGFnZSkgOiAxO1xyXG4gICAgY29uc3QgY3VycmVuY3kgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jb25maWcuY3VycmVuY3kpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gcGFyYW1zO1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAocGFnZSAtIDEpICogbGltaXRcclxuXHJcbiAgICAgICAgcXVlcnlQYXJhbXMgPSB7IC4uLnF1ZXJ5UGFyYW1zLCAuLi57IGxpbWl0OiBsaW1pdCwgb2Zmc2V0OiBvZmZzZXQgfSB9XHJcbiAgICAgICAgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5UGFyYW1zKVxyXG5cclxuICAgICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH1jYXRlZ29yeS9wcm9kdWN0cy8ke2NhdGVnb3J5LnNsdWd9PyR7cXVlcnlQYXJhbXN9YCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YS5yb3dzKVxyXG4gICAgICAgICAgICBzZXRUb3RhbChyZXNwb25zZS5kYXRhLmNvdW50KVxyXG4gICAgICAgICAgICBzZXRUb3RhbFBhZ2VzKE1hdGguY2VpbChyZXNwb25zZS5kYXRhLmNvdW50IC8gbGltaXQpKTtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbCh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfSwgW3JvdXRlci5xdWVyeS5zdGFydCwgcm91dGVyLnF1ZXJ5LmZpbHRlcnMsIHJvdXRlci5xdWVyeS5zbHVnXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5BUElfVVJMfXN0YXRpYy9maWx0ZXJzYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcnMocmVzLmRhdGEpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgYXBwbHlGaWx0ZXIgPSAoZmlsdGVyVmFsdWUpID0+IHtcclxuICAgICAgICBsZXQgY3VycmVudEZpbHRlcnMgPSByb3V0ZXIucXVlcnkuZmlsdGVycyA/IHJvdXRlci5xdWVyeS5maWx0ZXJzLnNwbGl0KFwifFwiKSA6IFtdO1xyXG4gICAgICAgIGN1cnJlbnRGaWx0ZXJzID0gY3VycmVudEZpbHRlcnMubWFwKGZ2ID0+IHBhcnNlSW50KGZ2KSk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50RmlsdGVycy5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpIHtcclxuICAgICAgICAgICAgY3VycmVudEZpbHRlcnMgPSBjdXJyZW50RmlsdGVycy5maWx0ZXIoZnYgPT4gZnYgIT09IGZpbHRlclZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJyZW50RmlsdGVycy5wdXNoKGZpbHRlclZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhcHBsaWVkRmlsdGVyc1RlbXAgPSB7IC4uLnJvdXRlci5xdWVyeSwgLi4ueyBmaWx0ZXJzOiBjdXJyZW50RmlsdGVycy5qb2luKFwifFwiKSB9IH07XHJcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhhcHBsaWVkRmlsdGVyc1RlbXApO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfT8ke3F1ZXJ5UGFyYW1zfWApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UGFnZSA9IChwYWdlTm8pID0+IHtcclxuICAgICAgICBsZXQgYXBwbGllZEZpbHRlcnNUZW1wID0gcGFyYW1zXHJcbiAgICAgICAgYXBwbGllZEZpbHRlcnNUZW1wLnBhZ2UgPSBwYWdlTm9cclxuXHJcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhhcHBsaWVkRmlsdGVyc1RlbXApXHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9jYXRlZ29yeS8ke2NhdGVnb3J5LnNsdWd9PyR7cXVlcnlQYXJhbXN9YClcclxuICAgICAgICBzZXRSZWxvYWQocmVsb2FkICsgMSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRQcmljZSA9IChzdGFydCwgZW5kKSA9PiB7XHJcbiAgICAgICAgbGV0IGFwcGxpZWRGaWx0ZXJzVGVtcCA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICBhcHBsaWVkRmlsdGVyc1RlbXBbJ3N0YXJ0J10gPSBzdGFydDtcclxuICAgICAgICBhcHBsaWVkRmlsdGVyc1RlbXBbJ2VuZCddID0gZW5kO1xyXG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYXBwbGllZEZpbHRlcnNUZW1wKTtcclxuICAgICAgICByb3V0ZXIucHVzaChgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Z30/JHtxdWVyeVBhcmFtc31gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImlubmVyX2xpc3RpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9zZWNfdHBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5Q2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZW1wdHlDYXJ0LnN2Z1wiIGFsdD1cImVtcHR5Q2FydFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Zb3VyIGNhcnQgaXMgZW1wdHk8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgaGF2ZSBubyBpdGVtcyBpbiB5b3VyIHNob3BwaW5nIGNhcnQgbGV0J3MgZ28gYnV5IHNvbWV0aGluZyE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG9wIE5vdyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9maXR0ciB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RmlsdGVyPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX2JveHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fY3VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlRmlsdGVycy5tYXAoKHBmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gc2V0UHJpY2UocGYuc3RhcnQsIHBmLmVuZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGRlZmF1bHRWYWx1ZT17cGYuc3RhcnR9IGRlZmF1bHRDaGVja2VkPXtyb3V0ZXIucXVlcnkuc3RhcnQgJiYgcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnN0YXJ0KSA9PT0gcGYuc3RhcnQgPyB0cnVlIDogZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlc3QxXCI+e2Zvcm1hdEN1cnJlbmN5KHBmLnN0YXJ0LCBjdXJyZW5jeSl9IC0ge2Zvcm1hdEN1cnJlbmN5KHBmLmVuZCwgY3VycmVuY3kpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5tYXAoZmlsdGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIuZmlsdGVyVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfYnhcIiBrZXk9e2ZpbHRlci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVfdHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2ZpbHRlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYmFyIHNlYXJjaF90XzEgY29sbGFwc2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuZmlsdGVyVmFsdWVzLm1hcChmdiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja19jdXNcIiBvbkNsaWNrPXsoKSA9PiBhcHBseUZpbHRlcihmdi5pZCl9IGtleT17ZnYuaWR9Pntmdi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGVmYXVsdFZhbHVlPXtmdi5pZH0gZGVmYXVsdENoZWNrZWQ9e3JvdXRlci5xdWVyeS5maWx0ZXJzICYmIHJvdXRlci5xdWVyeS5maWx0ZXJzLmluY2x1ZGVzKGZ2LmlkKSA/IHRydWUgOiBmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9yaWdodF9wcm9kY3Qgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JfdmlldyBmaWx0ZXJfY3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xfNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PjxpbWcgc3JjPVwiL2ltYWdlcy9zb3J0LmpwZ1wiIGFsdD1cIlwiIC8+PHNwYW4+U29ydDwvc3Bhbj48L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xfNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCI+PGltZyBzcmM9XCIvaW1hZ2VzL2ZpbHRlci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+PHNwYW4+RmlsdGVyPC9zcGFuPjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfcmlnaHRfcHJvZGN0IHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y2F0ZWdvcnkubmFtZX0gLSB7dG90YWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjdXN0b21fY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtNlwiIGtleT17cC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3R0b25fZmFicmljX3NlY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9wcm9kdWN0L1wiICsgcC5zbHVnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwLmZlYXR1cmVkSW1hZ2UgPyBwLmZlYXR1cmVkSW1hZ2UudGh1bWJuYWlsVXJsIDogXCIvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ1wifSBhbHQ9e3AubmFtZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3AubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48R2V0UHJpY2VIdG1sIHByb2R1Y3Q9e3B9IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlciB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tbWQganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+UHJldmlvdXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj48YSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj48YSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjI8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj48YSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj48YSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPk5leHQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSA+IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSAtIDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sZWZ0LnBuZ1wiIGFsdD1cInByZXZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlIDwgdG90YWxQYWdlcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlICsgMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3JpZ2h0LnBuZ1wiIGFsdD1cImFycm93XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBtZF9iZ19maWx0ZXJcIiBpZD1cIm15TW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGZpbHRlcl9tcmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5GaWx0ZXI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5IG1haW5fZmlsdGVyX3BvcCBmaWx0ZXJzTW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBuYXYtdGFicy0tdmVydGljYWwgbmF2LXRhYnMtLWxlZnRcIiByb2xlPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtvcGVuRmlsdGVyID09PSAtMSA/IFwibmF2LWxpbmsgYWN0aXZlXCIgOiBcIm5hdi1saW5rXCJ9IG9uQ2xpY2s9eygpID0+IHNldE9wZW5GaWx0ZXIoLTEpfT5QcmljZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLm1hcChmaWx0ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17ZmlsdGVyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtmaWx0ZXIuaWQgPT09IG9wZW5GaWx0ZXIgPyBcIm5hdi1saW5rIGFjdGl2ZVwiIDogXCJuYXYtbGlua1wifSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRmlsdGVyKGZpbHRlci5pZCl9PntmaWx0ZXIubmFtZX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvcGVuRmlsdGVyID09PSAtMSA/IFwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIDogXCJ0YWItcGFuZSBmYWRlIHNob3dcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fdGFnIHByaWNlRmlsdGVyTW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlRmlsdGVycy5tYXAoKHBmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gc2V0UHJpY2UocGYuc3RhcnQsIHBmLmVuZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGRlZmF1bHRWYWx1ZT17cGYuc3RhcnR9IGRlZmF1bHRDaGVja2VkPXtyb3V0ZXIucXVlcnkuc3RhcnQgJiYgcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnN0YXJ0KSA9PT0gcGYuc3RhcnQgPyB0cnVlIDogZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlc3QxXCI+e2Zvcm1hdEN1cnJlbmN5KHBmLnN0YXJ0LCBjdXJyZW5jeSl9IC0ge2Zvcm1hdEN1cnJlbmN5KHBmLmVuZCwgY3VycmVuY3kpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLm1hcChmaWx0ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaWx0ZXIuaWQgPT09IG9wZW5GaWx0ZXIgPyBcInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiA6IFwidGFiLXBhbmUgZmFkZSBzaG93XCJ9IGtleT17ZmlsdGVyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl90YWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJWYWx1ZXMubWFwKGZ2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm9ybWFsVmFsdWVDb250YWluZXIgc2VsZWN0ZWRPcHRpb25cIiBvbkNsaWNrPXsoKSA9PiBhcHBseUZpbHRlcihmdi5pZCl9IGtleT17ZnYuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbUNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJWYWx1ZVwiPntmdi5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlsdGVyVmFsdWVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94SW5kaWNhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlciBmdF9idG5fbGZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGNsc2VfYnR0blwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==