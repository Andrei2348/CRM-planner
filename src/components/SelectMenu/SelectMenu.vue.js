/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './SelectMenu.js';
export { default } from './SelectMenu.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleMenuHandler) }, ...{ class: ("select") }, });
    __VLS_directiveAsFunction(__VLS_directives.vClickOutside)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.close) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('select__label') }, });
    (__VLS_ctx.label);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("select__face") }, });
    if (__VLS_ctx.title != '') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("select__title") }, });
        (__VLS_ctx.title);
    }
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
    /** @type { [typeof __VLS_components.SvgIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ('select__icon-button') }, ...{ class: (({ active: __VLS_ctx.menuIsOpen })) }, icon: ('chevron-right'), }));
    const __VLS_2 = __VLS_1({ ...{ class: ('select__icon-button') }, ...{ class: (({ active: __VLS_ctx.menuIsOpen })) }, icon: ('chevron-right'), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.menuIsOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (([
                    'select__menu',
                    __VLS_ctx.menuPositionTop ? 'select__menu-top' : 'select__menu-bottom',
                ])) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("select__menu-items") }, });
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.persons))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.menuIsOpen)))
                            return;
                        __VLS_ctx.handleClick(item);
                    } }, ...{ class: ((['select__menu-item', { empty: item.username === '' }])) }, key: ((item.id)), });
            (item.username);
        }
    }
    __VLS_styleScopedClasses['select'];
    __VLS_styleScopedClasses['select__label'];
    __VLS_styleScopedClasses['select__face'];
    __VLS_styleScopedClasses['select__title'];
    __VLS_styleScopedClasses['select__icon-button'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['select__menu'];
    __VLS_styleScopedClasses['select__menu-items'];
    __VLS_styleScopedClasses['empty'];
    __VLS_styleScopedClasses['select__menu-item'];
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
//# sourceMappingURL=SelectMenu.vue.js.map