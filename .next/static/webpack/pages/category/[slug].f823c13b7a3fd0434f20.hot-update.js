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
/* harmony import */ var D_Projects_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Projects_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Projects_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projects_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Projects_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/helpers */ "./src/pages/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dist/next-server/server/router */ "./node_modules/next/dist/next-server/server/router.js");
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "D:\\Projects\\client\\src\\components\\products.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Projects_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var category = props.category;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      products = _useState[0],
      setProducts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      filters = _useState2[0],
      setFilters = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      total = _useState3[0],
      setTotal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      totalPages = _useState4[0],
      setTotalPages = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(-1),
      openFilter = _useState5[0],
      setOpenFilter = _useState5[1];

  var limit = 10;

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(props.reload ? props.reload : 1),
      reload = _useState6[0],
      setReload = _useState6[1];

  var page = router.query.page ? parseInt(router.query.page) : 1;
  var currency = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.config.currency;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])( /*#__PURE__*/Object(D_Projects_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Projects_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var queryParams, offset;
    return D_Projects_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryParams = router.query;
            offset = (page - 1) * limit;
            queryParams = _objectSpread(_objectSpread({}, queryParams), {
              limit: limit,
              offset: offset
            });
            queryParams = new URLSearchParams(queryParams);
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat("http://localhost:3010/", "category/products/").concat(category.slug, "?").concat(queryParams)).then(function (response) {
              setProducts(response.data.rows);
              setTotal(response.data.count);
              setTotalPages(Math.ceil(response.data.count / limit));
              window.scroll({
                top: 0,
                behavior: "smooth"
              });
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [router.query.start, router.query.filters, router.query.slug]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat("http://localhost:3010/", "static/filters")).then(function (res) {
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
    var appliedFiltersTemp = router.query;
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
    className: "inner_listing",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "inner_sec_tp",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "row",
          children: products.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "emptyCart",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
              src: "/images/emptyCart.svg",
              alt: "emptyCart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
              children: "No product found!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                children: "Shop Now!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 33
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "col-md-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "left_fittr wow fadeInUp",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h4", {
                  children: "Filter"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "inner_boxs",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                        className: "radio_cus",
                        children: priceFilters.map(function (pf, index) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                            onClick: function onClick() {
                              return setPrice(pf.start, pf.end);
                            },
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                              type: "radio",
                              defaultValue: pf.start,
                              readOnly: true,
                              checked: router.query.start && parseInt(router.query.start) === pf.start ? true : false
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 132,
                              columnNumber: 77
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                              htmlFor: "test1",
                              children: [Object(_pages_helpers__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(pf.start, currency), " - ", Object(_pages_helpers__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(pf.end, currency)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 133,
                              columnNumber: 77
                            }, _this)]
                          }, index, true, {
                            fileName: _jsxFileName,
                            lineNumber: 131,
                            columnNumber: 73
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                        columnNumber: 57
                      }, this), filters.map(function (filter) {
                        if (filter.filterValues.length > 0) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                            className: "categories_bx",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                              className: "cate_tx",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                                children: filter.name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 147,
                                columnNumber: 81
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 146,
                              columnNumber: 77
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                              className: "searchbar search_t_1 collapsed",
                              children: filter.filterValues.map(function (fv) {
                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                                  className: "check_cus",
                                  onClick: function onClick() {
                                    return applyFilter(fv.id);
                                  },
                                  children: [fv.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultValue: fv.id,
                                    readOnly: true,
                                    checked: router.query.filters && router.query.filters.includes(fv.id) ? true : false
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 154,
                                    columnNumber: 97
                                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                                    className: "checkmark"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 155,
                                    columnNumber: 97
                                  }, _this)]
                                }, fv.id, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 153,
                                  columnNumber: 93
                                }, _this);
                              })
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 149,
                              columnNumber: 77
                            }, _this)]
                          }, filter.id, true, {
                            fileName: _jsxFileName,
                            lineNumber: 145,
                            columnNumber: 73
                          }, _this);
                        }
                      })]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 53
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "col-md-8",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "inner_right_prodct wow fadeInUp",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "mob_view filter_cs",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "col_6",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h6", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
                        src: "/images/sort.jpg",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 57
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        children: "Sort"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 94
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 175,
                      columnNumber: 53
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 49
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "col_6",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h6", {
                      "data-toggle": "modal",
                      "data-target": "#myModal",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
                        src: "/images/filter.png",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 178,
                        columnNumber: 100
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        children: "Filter"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 179,
                        columnNumber: 66
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 178,
                      columnNumber: 53
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 49
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "inner_right_prodct wow fadeInUp",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                    children: [category.name, " - ", total]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 49
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "row custom_col",
                    children: products.map(function (p) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                        className: "col-md-6 col-6",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                          className: "cotton_fabric_sec",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            href: "/product/" + p.slug,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
                                src: p.featuredImage ? p.featuredImage.thumbnailUrl : "/images/placeholder.png",
                                alt: p.name,
                                className: "img-fluid"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 192,
                                columnNumber: 81
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 191,
                              columnNumber: 77
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 190,
                            columnNumber: 73
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
                            children: p.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 195,
                            columnNumber: 73
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_pages_helpers__WEBPACK_IMPORTED_MODULE_7__["GetPriceHtml"], {
                              product: p
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 196,
                              columnNumber: 76
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 196,
                            columnNumber: 73
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 189,
                          columnNumber: 69
                        }, _this)
                      }, p.id, false, {
                        fileName: _jsxFileName,
                        lineNumber: 188,
                        columnNumber: 65
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 49
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "center wow fadeInUp",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("ul", {
                    className: "pagination",
                    children: [page > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                        onClick: function onClick() {
                          return setPage(page - 1);
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
                          src: "/images/left.png",
                          alt: "prev"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 217,
                          columnNumber: 65
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 216,
                        columnNumber: 61
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 57
                    }, this), page < totalPages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                        onClick: function onClick() {
                          return setPage(page + 1);
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
                          src: "/images/right.png",
                          alt: "arrow"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 225,
                          columnNumber: 65
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                        columnNumber: 61
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 57
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 37
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "modal md_bg_filter",
      id: "myModal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "modal-dialog filter_mrg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "modal-content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "modal-header",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h4", {
              children: "Filter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "modal-body main_filter_pop filtersMobile",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "d-flex flex-row mt-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("ul", {
                className: "nav nav-tabs nav-tabs--vertical nav-tabs--left",
                role: "navigation",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                    className: openFilter === -1 ? "nav-link active" : "nav-link",
                    onClick: function onClick() {
                      return setOpenFilter(-1);
                    },
                    children: "Price"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 37
                }, this), filters.map(function (filter) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                      className: filter.id === openFilter ? "nav-link active" : "nav-link",
                      onClick: function onClick() {
                        return setOpenFilter(filter.id);
                      },
                      children: filter.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 53
                    }, _this)
                  }, filter.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 49
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "tab-content",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: openFilter === -1 ? "tab-pane fade show active" : "tab-pane fade show",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "main_tag priceFilterModal",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("ul", {
                      children: priceFilters.map(function (pf, index) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                          onClick: function onClick() {
                            return setPrice(pf.start, pf.end);
                          },
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                            type: "radio",
                            defaultValue: pf.start,
                            readOnly: true,
                            checked: router.query.start && parseInt(router.query.start) === pf.start ? true : false
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 268,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                            htmlFor: "test1",
                            children: [Object(_pages_helpers__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(pf.start, currency), " - ", Object(_pages_helpers__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(pf.end, currency)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 269,
                            columnNumber: 65
                          }, _this)]
                        }, index, true, {
                          fileName: _jsxFileName,
                          lineNumber: 267,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 263,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 37
                }, this), filters.map(function (filter) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: filter.id === openFilter ? "tab-pane fade show active" : "tab-pane fade show",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                      className: "main_tag",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("ul", {
                        children: filter.filterValues.map(function (fv) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
                            className: "normalValueContainer selectedOption",
                            onClick: function onClick() {
                              return applyFilter(fv.id);
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                              className: "customCheckbox",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                                className: "filterValue",
                                children: fv.name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 288,
                                columnNumber: 81
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                                type: "checkbox",
                                name: "filterValues"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 289,
                                columnNumber: 81
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                                className: "checkboxIndicator"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 290,
                                columnNumber: 81
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 287,
                              columnNumber: 77
                            }, _this)
                          }, fv.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 286,
                            columnNumber: 73
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 282,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 281,
                      columnNumber: 53
                    }, _this)
                  }, filter.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 49
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "modal-footer ft_btn_lft",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
              type: "button",
              className: "btn btn-danger clse_bttn",
              "data-dismiss": "modal",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 9
  }, this);
}

_s(Products, "mOex1qkyV+CuyYzMm51qyeVS39E=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsicHJpY2VGaWx0ZXJzIiwic3RhcnQiLCJlbmQiLCJQcm9kdWN0cyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2F0ZWdvcnkiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInRvdGFsIiwic2V0VG90YWwiLCJ0b3RhbFBhZ2VzIiwic2V0VG90YWxQYWdlcyIsIm9wZW5GaWx0ZXIiLCJzZXRPcGVuRmlsdGVyIiwibGltaXQiLCJyZWxvYWQiLCJzZXRSZWxvYWQiLCJwYWdlIiwicXVlcnkiLCJwYXJzZUludCIsImN1cnJlbmN5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbmZpZyIsInVzZUVmZmVjdCIsInF1ZXJ5UGFyYW1zIiwib2Zmc2V0IiwiVVJMU2VhcmNoUGFyYW1zIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwic2x1ZyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJyb3dzIiwiY291bnQiLCJNYXRoIiwiY2VpbCIsIndpbmRvdyIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIiwicmVzIiwiYXBwbHlGaWx0ZXIiLCJmaWx0ZXJWYWx1ZSIsImN1cnJlbnRGaWx0ZXJzIiwic3BsaXQiLCJtYXAiLCJmdiIsImluY2x1ZGVzIiwiZmlsdGVyIiwicHVzaCIsImFwcGxpZWRGaWx0ZXJzVGVtcCIsImpvaW4iLCJzZXRQYWdlIiwicGFnZU5vIiwic2V0UHJpY2UiLCJsZW5ndGgiLCJwZiIsImluZGV4IiwiZm9ybWF0Q3VycmVuY3kiLCJmaWx0ZXJWYWx1ZXMiLCJuYW1lIiwiaWQiLCJwIiwiZmVhdHVyZWRJbWFnZSIsInRodW1ibmFpbFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FB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SCx5QkFWRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBQW9HYixNQUFNLENBQUNhLEVBQTNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREo7QUFxQkgsaUJBdEJELENBbEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBaUVJO0FBQUsscUJBQVMsRUFBQyx5QkFBZjtBQUFBLG1DQUNJO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQXNCLHVCQUFTLEVBQUMsMEJBQWhDO0FBQTJELDhCQUFhLE9BQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwSUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnTkg7O0dBclJ1QmxFLFE7VUFDTEcscUQsRUFVRW9CLHVEOzs7S0FYR3ZCLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcnkvW3NsdWddLmY4MjNjMTNiN2EzZmQwNDM0ZjIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgR2V0UHJpY2VIdG1sIH0gZnJvbSBcIi4uL3BhZ2VzL2hlbHBlcnNcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyByb3V0ZSB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3JvdXRlclwiXHJcblxyXG5jb25zdCBwcmljZUZpbHRlcnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgc3RhcnQ6IDUwLFxyXG4gICAgICAgIGVuZDogMjUwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0YXJ0OiAyNTEsXHJcbiAgICAgICAgZW5kOiA1MDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3RhcnQ6IDUwMSxcclxuICAgICAgICBlbmQ6IDEwMDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3RhcnQ6IDEwMDEsXHJcbiAgICAgICAgZW5kOiAyMDAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0YXJ0OiAyMDAxLFxyXG4gICAgICAgIGVuZDogNTAwMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzdGFydDogNTAwMSxcclxuICAgICAgICBlbmQ6IDEwMDAwXHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cyhwcm9wcykge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBsZXQgY2F0ZWdvcnkgPSBwcm9wcy5jYXRlZ29yeTtcclxuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3RvdGFsUGFnZXMsIHNldFRvdGFsUGFnZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbb3BlbkZpbHRlciwgc2V0T3BlbkZpbHRlcl0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBsaW1pdCA9IDEwXHJcbiAgICBjb25zdCBbcmVsb2FkLCBzZXRSZWxvYWRdID0gdXNlU3RhdGUocHJvcHMucmVsb2FkID8gcHJvcHMucmVsb2FkIDogMSk7XHJcbiAgICBsZXQgcGFnZSA9IHJvdXRlci5xdWVyeS5wYWdlID8gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnBhZ2UpIDogMTtcclxuICAgIGNvbnN0IGN1cnJlbmN5ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY29uZmlnLmN1cnJlbmN5KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIGxpbWl0XHJcblxyXG4gICAgICAgIHF1ZXJ5UGFyYW1zID0geyAuLi5xdWVyeVBhcmFtcywgLi4ueyBsaW1pdDogbGltaXQsIG9mZnNldDogb2Zmc2V0IH0gfVxyXG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVBhcmFtcylcclxuXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9Y2F0ZWdvcnkvcHJvZHVjdHMvJHtjYXRlZ29yeS5zbHVnfT8ke3F1ZXJ5UGFyYW1zfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEucm93cylcclxuICAgICAgICAgICAgc2V0VG90YWwocmVzcG9uc2UuZGF0YS5jb3VudClcclxuICAgICAgICAgICAgc2V0VG90YWxQYWdlcyhNYXRoLmNlaWwocmVzcG9uc2UuZGF0YS5jb3VudCAvIGxpbWl0KSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoe1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtyb3V0ZXIucXVlcnkuc3RhcnQsIHJvdXRlci5xdWVyeS5maWx0ZXJzLCByb3V0ZXIucXVlcnkuc2x1Z10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH1zdGF0aWMvZmlsdGVyc2ApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJzKHJlcy5kYXRhKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGFwcGx5RmlsdGVyID0gKGZpbHRlclZhbHVlKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRGaWx0ZXJzID0gcm91dGVyLnF1ZXJ5LmZpbHRlcnMgPyByb3V0ZXIucXVlcnkuZmlsdGVycy5zcGxpdChcInxcIikgOiBbXTtcclxuICAgICAgICBjdXJyZW50RmlsdGVycyA9IGN1cnJlbnRGaWx0ZXJzLm1hcChmdiA9PiBwYXJzZUludChmdikpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudEZpbHRlcnMuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzID0gY3VycmVudEZpbHRlcnMuZmlsdGVyKGZ2ID0+IGZ2ICE9PSBmaWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudEZpbHRlcnMucHVzaChmaWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYXBwbGllZEZpbHRlcnNUZW1wID0geyAuLi5yb3V0ZXIucXVlcnksIC4uLnsgZmlsdGVyczogY3VycmVudEZpbHRlcnMuam9pbihcInxcIikgfSB9O1xyXG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYXBwbGllZEZpbHRlcnNUZW1wKTtcclxuICAgICAgICByb3V0ZXIucHVzaChgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Z30/JHtxdWVyeVBhcmFtc31gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFBhZ2UgPSAocGFnZU5vKSA9PiB7XHJcbiAgICAgICAgbGV0IGFwcGxpZWRGaWx0ZXJzVGVtcCA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICBhcHBsaWVkRmlsdGVyc1RlbXAucGFnZSA9IHBhZ2VObztcclxuXHJcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhhcHBsaWVkRmlsdGVyc1RlbXApXHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9jYXRlZ29yeS8ke2NhdGVnb3J5LnNsdWd9PyR7cXVlcnlQYXJhbXN9YClcclxuICAgICAgICBzZXRSZWxvYWQocmVsb2FkICsgMSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRQcmljZSA9IChzdGFydCwgZW5kKSA9PiB7XHJcbiAgICAgICAgbGV0IGFwcGxpZWRGaWx0ZXJzVGVtcCA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICBhcHBsaWVkRmlsdGVyc1RlbXBbJ3N0YXJ0J10gPSBzdGFydDtcclxuICAgICAgICBhcHBsaWVkRmlsdGVyc1RlbXBbJ2VuZCddID0gZW5kO1xyXG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYXBwbGllZEZpbHRlcnNUZW1wKTtcclxuICAgICAgICByb3V0ZXIucHVzaChgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Z30/JHtxdWVyeVBhcmFtc31gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImlubmVyX2xpc3RpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9zZWNfdHBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5Q2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZW1wdHlDYXJ0LnN2Z1wiIGFsdD1cImVtcHR5Q2FydFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5ObyBwcm9kdWN0IGZvdW5kITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TaG9wIE5vdyE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2ZpdHRyIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5GaWx0ZXI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfYm94c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpb19jdXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VGaWx0ZXJzLm1hcCgocGYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBzZXRQcmljZShwZi5zdGFydCwgcGYuZW5kKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgZGVmYXVsdFZhbHVlPXtwZi5zdGFydH0gcmVhZE9ubHk9e3RydWV9IGNoZWNrZWQ9e3JvdXRlci5xdWVyeS5zdGFydCAmJiBwYXJzZUludChyb3V0ZXIucXVlcnkuc3RhcnQpID09PSBwZi5zdGFydCA/IHRydWUgOiBmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVzdDFcIj57Zm9ybWF0Q3VycmVuY3kocGYuc3RhcnQsIGN1cnJlbmN5KX0gLSB7Zm9ybWF0Q3VycmVuY3kocGYuZW5kLCBjdXJyZW5jeSl9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLm1hcChmaWx0ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlci5maWx0ZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19ieFwiIGtleT17ZmlsdGVyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZV90eFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57ZmlsdGVyLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hiYXIgc2VhcmNoX3RfMSBjb2xsYXBzZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJWYWx1ZXMubWFwKGZ2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrX2N1c1wiIG9uQ2xpY2s9eygpID0+IGFwcGx5RmlsdGVyKGZ2LmlkKX0ga2V5PXtmdi5pZH0+e2Z2Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkZWZhdWx0VmFsdWU9e2Z2LmlkfSByZWFkT25seT17dHJ1ZX0gY2hlY2tlZD17cm91dGVyLnF1ZXJ5LmZpbHRlcnMgJiYgcm91dGVyLnF1ZXJ5LmZpbHRlcnMuaW5jbHVkZXMoZnYuaWQpID8gdHJ1ZSA6IGZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX3JpZ2h0X3Byb2RjdCB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYl92aWV3IGZpbHRlcl9jc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbF82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+PGltZyBzcmM9XCIvaW1hZ2VzL3NvcnQuanBnXCIgYWx0PVwiXCIgLz48c3Bhbj5Tb3J0PC9zcGFuPjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbF82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI215TW9kYWxcIj48aW1nIHNyYz1cIi9pbWFnZXMvZmlsdGVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIgLz48c3Bhbj5GaWx0ZXI8L3NwYW4+PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9yaWdodF9wcm9kY3Qgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjYXRlZ29yeS5uYW1lfSAtIHt0b3RhbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGN1c3RvbV9jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC02XCIga2V5PXtwLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdHRvbl9mYWJyaWNfc2VjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Byb2R1Y3QvXCIgKyBwLnNsdWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3AuZmVhdHVyZWRJbWFnZSA/IHAuZmVhdHVyZWRJbWFnZS50aHVtYm5haWxVcmwgOiBcIi9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCJ9IGFsdD17cC5uYW1lfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cC5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxHZXRQcmljZUh0bWwgcHJvZHVjdD17cH0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24gcGFnaW5hdGlvbi1tZCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtXCI+PGEgY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj5QcmV2aW91czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+TmV4dDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlID4gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlIC0gMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xlZnQucG5nXCIgYWx0PVwicHJldlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgPCB0b3RhbFBhZ2VzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2UgKyAxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcmlnaHQucG5nXCIgYWx0PVwiYXJyb3dcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIG1kX2JnX2ZpbHRlclwiIGlkPVwibXlNb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgZmlsdGVyX21yZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkZpbHRlcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHkgbWFpbl9maWx0ZXJfcG9wIGZpbHRlcnNNb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIG5hdi10YWJzLS12ZXJ0aWNhbCBuYXYtdGFicy0tbGVmdFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e29wZW5GaWx0ZXIgPT09IC0xID8gXCJuYXYtbGluayBhY3RpdmVcIiA6IFwibmF2LWxpbmtcIn0gb25DbGljaz17KCkgPT4gc2V0T3BlbkZpbHRlcigtMSl9PlByaWNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMubWFwKGZpbHRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIga2V5PXtmaWx0ZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2ZpbHRlci5pZCA9PT0gb3BlbkZpbHRlciA/IFwibmF2LWxpbmsgYWN0aXZlXCIgOiBcIm5hdi1saW5rXCJ9IG9uQ2xpY2s9eygpID0+IHNldE9wZW5GaWx0ZXIoZmlsdGVyLmlkKX0+e2ZpbHRlci5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e29wZW5GaWx0ZXIgPT09IC0xID8gXCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgOiBcInRhYi1wYW5lIGZhZGUgc2hvd1wifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl90YWcgcHJpY2VGaWx0ZXJNb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VGaWx0ZXJzLm1hcCgocGYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBzZXRQcmljZShwZi5zdGFydCwgcGYuZW5kKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgZGVmYXVsdFZhbHVlPXtwZi5zdGFydH0gcmVhZE9ubHk9e3RydWV9IGNoZWNrZWQ9e3JvdXRlci5xdWVyeS5zdGFydCAmJiBwYXJzZUludChyb3V0ZXIucXVlcnkuc3RhcnQpID09PSBwZi5zdGFydCA/IHRydWUgOiBmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVzdDFcIj57Zm9ybWF0Q3VycmVuY3kocGYuc3RhcnQsIGN1cnJlbmN5KX0gLSB7Zm9ybWF0Q3VycmVuY3kocGYuZW5kLCBjdXJyZW5jeSl9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMubWFwKGZpbHRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZpbHRlci5pZCA9PT0gb3BlbkZpbHRlciA/IFwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIDogXCJ0YWItcGFuZSBmYWRlIHNob3dcIn0ga2V5PXtmaWx0ZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX3RhZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlclZhbHVlcy5tYXAoZnYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJub3JtYWxWYWx1ZUNvbnRhaW5lciBzZWxlY3RlZE9wdGlvblwiIG9uQ2xpY2s9eygpID0+IGFwcGx5RmlsdGVyKGZ2LmlkKX0ga2V5PXtmdi5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tQ2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlclZhbHVlXCI+e2Z2Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWx0ZXJWYWx1ZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3hJbmRpY2F0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyIGZ0X2J0bl9sZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGNsc2VfYnR0blwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==