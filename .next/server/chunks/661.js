"use strict";
exports.id = 661;
exports.ids = [661];
exports.modules = {

/***/ 1307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6959);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1802);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const AdjacentPosts = ({ createdAt , slug  })=>{
    const { 0: adjacentPost , 1: setAdjacentPost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: dataLoaded , 1: setDataLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services__WEBPACK_IMPORTED_MODULE_3__/* .getAdjacentPosts */ .dp)(createdAt, slug).then((result)=>{
            setAdjacentPost(result);
            setDataLoaded(true);
        });
    }, [
        slug
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8",
        children: dataLoaded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                adjacentPost.previous && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${adjacentPost.next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .AdjacentPostCard */ .fo, {
                        post: adjacentPost.previous,
                        position: "LEFT"
                    })
                }),
                adjacentPost.next && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${adjacentPost.previous ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .AdjacentPostCard */ .fo, {
                        post: adjacentPost.next,
                        position: "RIGHT"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdjacentPosts);

});

/***/ }),

/***/ 199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5804);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6959);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1802);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__]);
_components__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const responsive = {
    superLargeDesktop: {
        breakpoint: {
            max: 4000,
            min: 1024
        },
        items: 5
    },
    desktop: {
        breakpoint: {
            max: 1024,
            min: 768
        },
        items: 3
    },
    tablet: {
        breakpoint: {
            max: 768,
            min: 640
        },
        items: 2
    },
    mobile: {
        breakpoint: {
            max: 640,
            min: 0
        },
        items: 1
    }
};
const FeaturedPosts = ()=>{
    const { 0: featuredPosts , 1: setFeaturedPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: dataLoaded , 1: setDataLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services__WEBPACK_IMPORTED_MODULE_4__/* .getFeaturedPosts */ .mH)().then((result)=>{
            setFeaturedPosts(result);
            setDataLoaded(true);
        });
    }, []);
    const customLeftArrow = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-yellow-600 rounded-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6 text-white w-full",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
            })
        })
    });
    const customRightArrow = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-yellow-600 rounded-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6 text-white w-full",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M14 5l7 7m0 0l-7 7m7-7H3"
            })
        })
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mb-8",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
            infinite: true,
            customLeftArrow: customLeftArrow,
            customRightArrow: customRightArrow,
            responsive: responsive,
            itemClass: "px-4",
            children: dataLoaded && featuredPosts.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .FeaturedPostCard */ .Cp, {
                    post: post
                }, index)
            )
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedPosts);

});

/***/ }),

/***/ 7661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* reexport safe */ _AdjacentPosts__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "S": () => (/* reexport safe */ _FeaturedPosts__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _AdjacentPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1307);
/* harmony import */ var _FeaturedPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FeaturedPosts__WEBPACK_IMPORTED_MODULE_1__, _AdjacentPosts__WEBPACK_IMPORTED_MODULE_0__]);
([_FeaturedPosts__WEBPACK_IMPORTED_MODULE_1__, _AdjacentPosts__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



});

/***/ })

};
;