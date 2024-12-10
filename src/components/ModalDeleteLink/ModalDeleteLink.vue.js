/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './ModalDeleteLink.js';
export { default } from './ModalDeleteLink.js';
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('modal') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ('modal__text') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal__buttons-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.useModalClose) }, ...{ class: ("modal__button-cancel") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.suggestDeleteHandler) }, ...{ class: ("modal__button-suggest") }, });
    __VLS_styleScopedClasses['modal'];
    __VLS_styleScopedClasses['modal__text'];
    __VLS_styleScopedClasses['modal__buttons-wrapper'];
    __VLS_styleScopedClasses['modal__button-cancel'];
    __VLS_styleScopedClasses['modal__button-suggest'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
//# sourceMappingURL=ModalDeleteLink.vue.js.map