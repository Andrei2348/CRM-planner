/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './NotifyMessage.js';
export { default } from './NotifyMessage.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('notify__message') }, });
    if (__VLS_ctx.data.invitation === "project") {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('notify__text') }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('notify__username') }, });
        (__VLS_ctx.data.username);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('notify__project') }, });
        (__VLS_ctx.data.projectName);
    }
    if (__VLS_ctx.data.invitation === "developer") {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('notify__text') }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('notify__project') }, });
        (__VLS_ctx.data.projectName);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("notify__buttons-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.cancelHandler(__VLS_ctx.data.id);
            } }, ...{ class: ('notify__button') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.approvalHandler(__VLS_ctx.data);
            } }, ...{ class: ('notify__button') }, });
    __VLS_styleScopedClasses['notify__message'];
    __VLS_styleScopedClasses['notify__text'];
    __VLS_styleScopedClasses['notify__username'];
    __VLS_styleScopedClasses['notify__project'];
    __VLS_styleScopedClasses['notify__text'];
    __VLS_styleScopedClasses['notify__project'];
    __VLS_styleScopedClasses['notify__buttons-wrapper'];
    __VLS_styleScopedClasses['notify__button'];
    __VLS_styleScopedClasses['notify__button'];
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
//# sourceMappingURL=NotifyMessage.vue.js.map