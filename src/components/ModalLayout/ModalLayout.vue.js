/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './ModalLayout.js';
export { default } from './ModalLayout.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('modal__layout') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal__wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.useModalClose) }, ...{ class: ('modal__close-button') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("modal__close-button--text") }, });
    const __VLS_0 = ((__VLS_ctx.currentSuggestComponent));
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("modal__content") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("modal__content") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_styleScopedClasses['modal__layout'];
    __VLS_styleScopedClasses['modal__wrapper'];
    __VLS_styleScopedClasses['modal__close-button'];
    __VLS_styleScopedClasses['modal__close-button--text'];
    __VLS_styleScopedClasses['modal__content'];
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
//# sourceMappingURL=ModalLayout.vue.js.map