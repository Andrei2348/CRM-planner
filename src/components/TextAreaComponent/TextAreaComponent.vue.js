/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './TextAreaComponent.js';
export { default } from './TextAreaComponent.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('textarea__wrapper') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ('textarea__label') }, for: ((__VLS_ctx.name)), });
    (__VLS_ctx.label);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("textarea__area-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ ...{ onInput: (__VLS_ctx.adjustHeight) }, ...{ class: ('textarea__area') }, id: ((__VLS_ctx.name)), placeholder: ((__VLS_ctx.placeholder)), value: ((__VLS_ctx.textareaValue)), required: ((__VLS_ctx.required)), readonly: ((__VLS_ctx.readonly)), maxlength: ((__VLS_ctx.maxlength)), autocomplete: ((__VLS_ctx.autocomplete)), ref: ("textarea"), });
    // @ts-ignore navigation for `const textarea = ref()`
    __VLS_ctx.textarea;
    __VLS_styleScopedClasses['textarea__wrapper'];
    __VLS_styleScopedClasses['textarea__label'];
    __VLS_styleScopedClasses['textarea__area-wrapper'];
    __VLS_styleScopedClasses['textarea__area'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "textarea": __VLS_nativeElements['textarea'],
    };
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
//# sourceMappingURL=TextAreaComponent.vue.js.map