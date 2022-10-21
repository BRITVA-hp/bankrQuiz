(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Categories.vue?vue&type=template&id=447898bb&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Categories.vue?vue&type=template&id=447898bb& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "page-title" }, [
        _c("h3", [_vm._v("Категории")]),
      ]),
      _vm._v(" "),
      _c("section", [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col s12 m6" }, [
            _c("div", [
              _c("div", { staticClass: "page-subtitle" }, [
                _c("h4", [_vm._v("Создать")]),
              ]),
              _vm._v(" "),
              _c("form", [
                _c("div", { staticClass: "input-field" }, [
                  _c("input", { attrs: { id: "name", type: "text" } }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Название")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "helper-text invalid" }, [
                    _vm._v("Введите название"),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-field" }, [
                  _c("input", { attrs: { id: "limit", type: "number" } }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "limit" } }, [_vm._v("Лимит")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "helper-text invalid" }, [
                    _vm._v("Минимальная величина"),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn waves-effect waves-light",
                    attrs: { type: "submit" },
                  },
                  [
                    _vm._v("\n              Создать\n              "),
                    _c("i", { staticClass: "material-icons right" }, [
                      _vm._v("send"),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col s12 m6" }, [
            _c("div", [
              _c("div", { staticClass: "page-subtitle" }, [
                _c("h4", [_vm._v("Редактировать")]),
              ]),
              _vm._v(" "),
              _c("form", [
                _c("div", { staticClass: "input-field" }, [
                  _c("select", [_c("option", [_vm._v("Category")])]),
                  _vm._v(" "),
                  _c("label", [_vm._v("Выберите категорию")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-field" }, [
                  _c("input", { attrs: { type: "text", id: "name" } }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Название")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "helper-text invalid" }, [
                    _vm._v("TITLE"),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-field" }, [
                  _c("input", { attrs: { id: "limit", type: "number" } }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "limit" } }, [_vm._v("Лимит")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "helper-text invalid" }, [
                    _vm._v("LIMIT"),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn waves-effect waves-light",
                    attrs: { type: "submit" },
                  },
                  [
                    _vm._v("\n              Обновить\n              "),
                    _c("i", { staticClass: "material-icons right" }, [
                      _vm._v("send"),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/views/Categories.vue":
/*!*************************************************!*\
  !*** ./resources/js/admin/views/Categories.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_447898bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=447898bb& */ "./resources/js/admin/views/Categories.vue?vue&type=template&id=447898bb&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Categories_vue_vue_type_template_id_447898bb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_447898bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Categories.vue?vue&type=template&id=447898bb&":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/views/Categories.vue?vue&type=template&id=447898bb& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_447898bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=447898bb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Categories.vue?vue&type=template&id=447898bb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_447898bb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_447898bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);