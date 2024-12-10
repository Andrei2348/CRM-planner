/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './MenuComponent.js';
export { default } from './MenuComponent.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('menu__wrapper') }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.MENU_DATA))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.navigateToHandler(item);
                } }, key: ((item.name)), ...{ class: ("menu__router-link") }, ...{ class: (({ "visible": __VLS_ctx.uxuiStore.getShowAsidePanel })) }, disabled: ((__VLS_ctx.checkIsDisabled(item))), });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ((item.icon)), iconClass: ('menu__svg-image'), ...{ class: (({ "visible": __VLS_ctx.uxuiStore.getShowAsidePanel })) }, }));
        const __VLS_2 = __VLS_1({ icon: ((item.icon)), iconClass: ('menu__svg-image'), ...{ class: (({ "visible": __VLS_ctx.uxuiStore.getShowAsidePanel })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: (({ "visible": __VLS_ctx.uxuiStore.getShowAsidePanel })) }, ...{ class: ('menu__router-text') }, ...{ style: (({ color: item.color })) }, });
        (item.name);
        if (__VLS_ctx.uxuiStore.getSelectedPage === item.id) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu__button-span") }, ...{ style: (({ background: item.color })) }, });
        }
    }
    __VLS_styleScopedClasses['menu__wrapper'];
    __VLS_styleScopedClasses['menu__router-link'];
    __VLS_styleScopedClasses['visible'];
    __VLS_styleScopedClasses['visible'];
    __VLS_styleScopedClasses['visible'];
    __VLS_styleScopedClasses['menu__router-text'];
    __VLS_styleScopedClasses['menu__button-span'];
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
//# sourceMappingURL=MenuComponent.vue.js.map