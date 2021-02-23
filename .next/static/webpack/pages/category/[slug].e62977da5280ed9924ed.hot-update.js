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
                className: "left_fittr",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsicHJpY2VGaWx0ZXJzIiwic3RhcnQiLCJlbmQiLCJQcm9kdWN0cyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2F0ZWdvcnkiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInRvdGFsIiwic2V0VG90YWwiLCJ0b3RhbFBhZ2VzIiwic2V0VG90YWxQYWdlcyIsIm9wZW5GaWx0ZXIiLCJzZXRPcGVuRmlsdGVyIiwibGltaXQiLCJyZWxvYWQiLCJzZXRSZWxvYWQiLCJwYWdlIiwicXVlcnkiLCJwYXJzZUludCIsImN1cnJlbmN5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbmZpZyIsInVzZUVmZmVjdCIsInF1ZXJ5UGFyYW1zIiwib2Zmc2V0IiwiVVJMU2VhcmNoUGFyYW1zIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwic2x1ZyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJyb3dzIiwiY291bnQiLCJNYXRoIiwiY2VpbCIsIndpbmRvdyIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIiwicmVzIiwiYXBwbHlGaWx0ZXIiLCJmaWx0ZXJWYWx1ZSIsImN1cnJlbnRGaWx0ZXJzIiwic3BsaXQiLCJtYXAiLCJmdiIsImluY2x1ZGVzIiwiZmlsdGVyIiwicHVzaCIsImFwcGxpZWRGaWx0ZXJzVGVtcCIsImpvaW4iLCJzZXRQYWdlIiwicGFnZU5vIiwic2V0UHJpY2UiLCJsZW5ndGgiLCJwZiIsImluZGV4IiwiZm9ybWF0Q3VycmVuY3kiLCJmaWx0ZXJWYWx1ZXMiLCJuYW1lIiwiaWQiLCJwIiwiZmVhdHVyZWRJbWFnZSIsInRodW1ibmFpbFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FB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LHlCQVZEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFBb0diLE1BQU0sQ0FBQ2EsRUFBM0c7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESjtBQXFCSCxpQkF0QkQsQ0FsQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFpRUk7QUFBSyxxQkFBUyxFQUFDLHlCQUFmO0FBQUEsbUNBQ0k7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBc0IsdUJBQVMsRUFBQywwQkFBaEM7QUFBMkQsOEJBQWEsT0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBJSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdOSDs7R0FyUnVCbEUsUTtVQUNMRyxxRCxFQVVFb0IsdUQ7OztLQVhHdkIsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS9bc2x1Z10uZTYyOTc3ZGE1MjgwZWQ5OTI0ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBHZXRQcmljZUh0bWwgfSBmcm9tIFwiLi4vcGFnZXMvaGVscGVyc1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyXCJcclxuXHJcbmNvbnN0IHByaWNlRmlsdGVycyA9IFtcclxuICAgIHtcclxuICAgICAgICBzdGFydDogNTAsXHJcbiAgICAgICAgZW5kOiAyNTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3RhcnQ6IDI1MSxcclxuICAgICAgICBlbmQ6IDUwMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzdGFydDogNTAxLFxyXG4gICAgICAgIGVuZDogMTAwMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzdGFydDogMTAwMSxcclxuICAgICAgICBlbmQ6IDIwMDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3RhcnQ6IDIwMDEsXHJcbiAgICAgICAgZW5kOiA1MDAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0YXJ0OiA1MDAxLFxyXG4gICAgICAgIGVuZDogMTAwMDBcclxuICAgIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKHByb3BzKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGxldCBjYXRlZ29yeSA9IHByb3BzLmNhdGVnb3J5O1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbdG90YWxQYWdlcywgc2V0VG90YWxQYWdlc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtvcGVuRmlsdGVyLCBzZXRPcGVuRmlsdGVyXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IGxpbWl0ID0gMTBcclxuICAgIGNvbnN0IFtyZWxvYWQsIHNldFJlbG9hZF0gPSB1c2VTdGF0ZShwcm9wcy5yZWxvYWQgPyBwcm9wcy5yZWxvYWQgOiAxKTtcclxuICAgIGxldCBwYWdlID0gcm91dGVyLnF1ZXJ5LnBhZ2UgPyBwYXJzZUludChyb3V0ZXIucXVlcnkucGFnZSkgOiAxO1xyXG4gICAgY29uc3QgY3VycmVuY3kgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jb25maWcuY3VycmVuY3kpO1xyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAocGFnZSAtIDEpICogbGltaXRcclxuXHJcbiAgICAgICAgcXVlcnlQYXJhbXMgPSB7IC4uLnF1ZXJ5UGFyYW1zLCAuLi57IGxpbWl0OiBsaW1pdCwgb2Zmc2V0OiBvZmZzZXQgfSB9XHJcbiAgICAgICAgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5UGFyYW1zKVxyXG5cclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH1jYXRlZ29yeS9wcm9kdWN0cy8ke2NhdGVnb3J5LnNsdWd9PyR7cXVlcnlQYXJhbXN9YCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YS5yb3dzKVxyXG4gICAgICAgICAgICBzZXRUb3RhbChyZXNwb25zZS5kYXRhLmNvdW50KVxyXG4gICAgICAgICAgICBzZXRUb3RhbFBhZ2VzKE1hdGguY2VpbChyZXNwb25zZS5kYXRhLmNvdW50IC8gbGltaXQpKTtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbCh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfSwgW3JvdXRlci5xdWVyeS5zdGFydCwgcm91dGVyLnF1ZXJ5LmZpbHRlcnMsIHJvdXRlci5xdWVyeS5zbHVnXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5BUElfVVJMfXN0YXRpYy9maWx0ZXJzYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcnMocmVzLmRhdGEpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgYXBwbHlGaWx0ZXIgPSAoZmlsdGVyVmFsdWUpID0+IHtcclxuICAgICAgICBsZXQgY3VycmVudEZpbHRlcnMgPSByb3V0ZXIucXVlcnkuZmlsdGVycyA/IHJvdXRlci5xdWVyeS5maWx0ZXJzLnNwbGl0KFwifFwiKSA6IFtdO1xyXG4gICAgICAgIGN1cnJlbnRGaWx0ZXJzID0gY3VycmVudEZpbHRlcnMubWFwKGZ2ID0+IHBhcnNlSW50KGZ2KSk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50RmlsdGVycy5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpIHtcclxuICAgICAgICAgICAgY3VycmVudEZpbHRlcnMgPSBjdXJyZW50RmlsdGVycy5maWx0ZXIoZnYgPT4gZnYgIT09IGZpbHRlclZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJyZW50RmlsdGVycy5wdXNoKGZpbHRlclZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhcHBsaWVkRmlsdGVyc1RlbXAgPSB7IC4uLnJvdXRlci5xdWVyeSwgLi4ueyBmaWx0ZXJzOiBjdXJyZW50RmlsdGVycy5qb2luKFwifFwiKSB9IH07XHJcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhhcHBsaWVkRmlsdGVyc1RlbXApO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfT8ke3F1ZXJ5UGFyYW1zfWApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UGFnZSA9IChwYWdlTm8pID0+IHtcclxuICAgICAgICBsZXQgYXBwbGllZEZpbHRlcnNUZW1wID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgICAgIGFwcGxpZWRGaWx0ZXJzVGVtcC5wYWdlID0gcGFnZU5vO1xyXG5cclxuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGFwcGxpZWRGaWx0ZXJzVGVtcClcclxuICAgICAgICByb3V0ZXIucHVzaChgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Z30/JHtxdWVyeVBhcmFtc31gKVxyXG4gICAgICAgIHNldFJlbG9hZChyZWxvYWQgKyAxKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFByaWNlID0gKHN0YXJ0LCBlbmQpID0+IHtcclxuICAgICAgICBsZXQgYXBwbGllZEZpbHRlcnNUZW1wID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgICAgIGFwcGxpZWRGaWx0ZXJzVGVtcFsnc3RhcnQnXSA9IHN0YXJ0O1xyXG4gICAgICAgIGFwcGxpZWRGaWx0ZXJzVGVtcFsnZW5kJ10gPSBlbmQ7XHJcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhhcHBsaWVkRmlsdGVyc1RlbXApO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfT8ke3F1ZXJ5UGFyYW1zfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW5uZXJfbGlzdGluZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX3NlY190cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlDYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9lbXB0eUNhcnQuc3ZnXCIgYWx0PVwiZW1wdHlDYXJ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk5vIHByb2R1Y3QgZm91bmQhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlNob3AgTm93ITwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfZml0dHJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RmlsdGVyPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX2JveHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9fY3VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlRmlsdGVycy5tYXAoKHBmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gc2V0UHJpY2UocGYuc3RhcnQsIHBmLmVuZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGRlZmF1bHRWYWx1ZT17cGYuc3RhcnR9IHJlYWRPbmx5PXt0cnVlfSBjaGVja2VkPXtyb3V0ZXIucXVlcnkuc3RhcnQgJiYgcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnN0YXJ0KSA9PT0gcGYuc3RhcnQgPyB0cnVlIDogZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlc3QxXCI+e2Zvcm1hdEN1cnJlbmN5KHBmLnN0YXJ0LCBjdXJyZW5jeSl9IC0ge2Zvcm1hdEN1cnJlbmN5KHBmLmVuZCwgY3VycmVuY3kpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5tYXAoZmlsdGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIuZmlsdGVyVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfYnhcIiBrZXk9e2ZpbHRlci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVfdHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2ZpbHRlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYmFyIHNlYXJjaF90XzEgY29sbGFwc2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuZmlsdGVyVmFsdWVzLm1hcChmdiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja19jdXNcIiBvbkNsaWNrPXsoKSA9PiBhcHBseUZpbHRlcihmdi5pZCl9IGtleT17ZnYuaWR9Pntmdi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGVmYXVsdFZhbHVlPXtmdi5pZH0gcmVhZE9ubHk9e3RydWV9IGNoZWNrZWQ9e3JvdXRlci5xdWVyeS5maWx0ZXJzICYmIHJvdXRlci5xdWVyeS5maWx0ZXJzLmluY2x1ZGVzKGZ2LmlkKSA/IHRydWUgOiBmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9yaWdodF9wcm9kY3Qgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JfdmlldyBmaWx0ZXJfY3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xfNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PjxpbWcgc3JjPVwiL2ltYWdlcy9zb3J0LmpwZ1wiIGFsdD1cIlwiIC8+PHNwYW4+U29ydDwvc3Bhbj48L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xfNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCI+PGltZyBzcmM9XCIvaW1hZ2VzL2ZpbHRlci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+PHNwYW4+RmlsdGVyPC9zcGFuPjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfcmlnaHRfcHJvZGN0IHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y2F0ZWdvcnkubmFtZX0gLSB7dG90YWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjdXN0b21fY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtNlwiIGtleT17cC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3R0b25fZmFicmljX3NlY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9wcm9kdWN0L1wiICsgcC5zbHVnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwLmZlYXR1cmVkSW1hZ2UgPyBwLmZlYXR1cmVkSW1hZ2UudGh1bWJuYWlsVXJsIDogXCIvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ1wifSBhbHQ9e3AubmFtZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3AubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48R2V0UHJpY2VIdG1sIHByb2R1Y3Q9e3B9IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlciB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tbWQganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+UHJldmlvdXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj48YSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj48YSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjI8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj48YSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPjM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj48YSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBocmVmPVwiI1wiPk5leHQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSA+IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSAtIDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sZWZ0LnBuZ1wiIGFsdD1cInByZXZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlIDwgdG90YWxQYWdlcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlICsgMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3JpZ2h0LnBuZ1wiIGFsdD1cImFycm93XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBtZF9iZ19maWx0ZXJcIiBpZD1cIm15TW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGZpbHRlcl9tcmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5GaWx0ZXI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5IG1haW5fZmlsdGVyX3BvcCBmaWx0ZXJzTW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBuYXYtdGFicy0tdmVydGljYWwgbmF2LXRhYnMtLWxlZnRcIiByb2xlPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtvcGVuRmlsdGVyID09PSAtMSA/IFwibmF2LWxpbmsgYWN0aXZlXCIgOiBcIm5hdi1saW5rXCJ9IG9uQ2xpY2s9eygpID0+IHNldE9wZW5GaWx0ZXIoLTEpfT5QcmljZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLm1hcChmaWx0ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17ZmlsdGVyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtmaWx0ZXIuaWQgPT09IG9wZW5GaWx0ZXIgPyBcIm5hdi1saW5rIGFjdGl2ZVwiIDogXCJuYXYtbGlua1wifSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRmlsdGVyKGZpbHRlci5pZCl9PntmaWx0ZXIubmFtZX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvcGVuRmlsdGVyID09PSAtMSA/IFwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIDogXCJ0YWItcGFuZSBmYWRlIHNob3dcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fdGFnIHByaWNlRmlsdGVyTW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlRmlsdGVycy5tYXAoKHBmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gc2V0UHJpY2UocGYuc3RhcnQsIHBmLmVuZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGRlZmF1bHRWYWx1ZT17cGYuc3RhcnR9IHJlYWRPbmx5PXt0cnVlfSBjaGVja2VkPXtyb3V0ZXIucXVlcnkuc3RhcnQgJiYgcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnN0YXJ0KSA9PT0gcGYuc3RhcnQgPyB0cnVlIDogZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlc3QxXCI+e2Zvcm1hdEN1cnJlbmN5KHBmLnN0YXJ0LCBjdXJyZW5jeSl9IC0ge2Zvcm1hdEN1cnJlbmN5KHBmLmVuZCwgY3VycmVuY3kpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLm1hcChmaWx0ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaWx0ZXIuaWQgPT09IG9wZW5GaWx0ZXIgPyBcInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiA6IFwidGFiLXBhbmUgZmFkZSBzaG93XCJ9IGtleT17ZmlsdGVyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl90YWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJWYWx1ZXMubWFwKGZ2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm9ybWFsVmFsdWVDb250YWluZXIgc2VsZWN0ZWRPcHRpb25cIiBvbkNsaWNrPXsoKSA9PiBhcHBseUZpbHRlcihmdi5pZCl9IGtleT17ZnYuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbUNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJWYWx1ZVwiPntmdi5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlsdGVyVmFsdWVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94SW5kaWNhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlciBmdF9idG5fbGZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBjbHNlX2J0dG5cIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=