(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Record.vue?vue&type=template&id=59adb7f0&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Record.vue?vue&type=template&id=59adb7f0& ***!
  \**********************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v("Новая запись")]),
      ]),
      _vm._v(" "),
      _c("form", { staticClass: "form" }, [
        _c("div", { staticClass: "input-field" }, [
          _c("select", [_c("option", [_vm._v("name cat")])]),
          _vm._v(" "),
          _c("label", [_vm._v("Выберите категорию")]),
        ]),
        _vm._v(" "),
        _c("p", [
          _c("label", [
            _c("input", {
              staticClass: "with-gap",
              attrs: { name: "type", type: "radio", value: "income" },
            }),
            _vm._v(" "),
            _c("span", [_vm._v("Доход")]),
          ]),
        ]),
        _vm._v(" "),
        _c("p", [
          _c("label", [
            _c("input", {
              staticClass: "with-gap",
              attrs: { name: "type", type: "radio", value: "outcome" },
            }),
            _vm._v(" "),
            _c("span", [_vm._v("Расход")]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-field" }, [
          _c("input", { attrs: { id: "amount", type: "number" } }),
          _vm._v(" "),
          _c("label", { attrs: { for: "amount" } }, [_vm._v("Сумма")]),
          _vm._v(" "),
          _c("span", { staticClass: "helper-text invalid" }, [
            _vm._v("amount пароль"),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-field" }, [
          _c("input", { attrs: { id: "description", type: "text" } }),
          _vm._v(" "),
          _c("label", { attrs: { for: "description" } }, [_vm._v("Описание")]),
          _vm._v(" "),
          _c("span", { staticClass: "helper-text invalid" }, [
            _vm._v("description пароль"),
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
            _vm._v("\n      Создать\n      "),
            _c("i", { staticClass: "material-icons right" }, [_vm._v("send")]),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/views/Record.vue":
/*!*********************************************!*\
  !*** ./resources/js/admin/views/Record.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Record_vue_vue_type_template_id_59adb7f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Record.vue?vue&type=template&id=59adb7f0& */ "./resources/js/admin/views/Record.vue?vue&type=template&id=59adb7f0&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Record_vue_vue_type_template_id_59adb7f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Record_vue_vue_type_template_id_59adb7f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Record.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Record.vue?vue&type=template&id=59adb7f0&":
/*!****************************************************************************!*\
  !*** ./resources/js/admin/views/Record.vue?vue&type=template&id=59adb7f0& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_template_id_59adb7f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Record.vue?vue&type=template&id=59adb7f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Record.vue?vue&type=template&id=59adb7f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_template_id_59adb7f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_template_id_59adb7f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);