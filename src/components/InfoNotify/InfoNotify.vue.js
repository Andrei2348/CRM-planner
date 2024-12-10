/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './InfoNotify.js';
export { default } from './InfoNotify.js';
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
    if (__VLS_ctx.dataStore.getInfoNotify !== null) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ "alert": __VLS_ctx.dataStore.getInfoNotify.type === "alert" })) }, ...{ class: ("notify__wrapper") }, });
        (__VLS_ctx.dataStore.getInfoNotify.message);
    }
    __VLS_styleScopedClasses['alert'];
    __VLS_styleScopedClasses['notify__wrapper'];
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
//# sourceMappingURL=InfoNotify.vue.js.map