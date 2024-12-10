/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './AsideComponent.js';
export { default } from './AsideComponent.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({ ...{ class: ('aside') }, ...{ class: (({ "visible": __VLS_ctx.uxuiStore.getShowAsidePanel })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside__container") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.MenuComponent;
    /** @type { [typeof __VLS_components.MenuComponent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside__date-wrapper") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.DateElement;
    /** @type { [typeof __VLS_components.DateElement, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ inline: ((true)), objectKey: (''), ...{ class: (({ "visible": __VLS_ctx.uxuiStore.getShowAsidePanel })) }, ...{ class: ('aside__date-picker') }, }));
    const __VLS_8 = __VLS_7({ inline: ((true)), objectKey: (''), ...{ class: (({ "visible": __VLS_ctx.uxuiStore.getShowAsidePanel })) }, ...{ class: ('aside__date-picker') }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_styleScopedClasses['aside'];
    __VLS_styleScopedClasses['visible'];
    __VLS_styleScopedClasses['aside__container'];
    __VLS_styleScopedClasses['aside__date-wrapper'];
    __VLS_styleScopedClasses['visible'];
    __VLS_styleScopedClasses['aside__date-picker'];
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
//# sourceMappingURL=AsideComponent.vue.js.map