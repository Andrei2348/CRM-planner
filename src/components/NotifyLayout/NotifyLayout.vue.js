/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './NotifyLayout.js';
export { default } from './NotifyLayout.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('notify__layout') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.closeNotifyHandler) }, ...{ class: ("notify__close-button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("notify__content-wrapper") }, });
    for (const [data] of __VLS_getVForSourceType((__VLS_ctx.dataStore.getNotifyProjectList))) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.NotifyMessage;
        /** @type { [typeof __VLS_components.NotifyMessage, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((data.id)), data: ((data)), }));
        const __VLS_2 = __VLS_1({ key: ((data.id)), data: ((data)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    __VLS_styleScopedClasses['notify__layout'];
    __VLS_styleScopedClasses['notify__close-button'];
    __VLS_styleScopedClasses['notify__content-wrapper'];
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
//# sourceMappingURL=NotifyLayout.vue.js.map