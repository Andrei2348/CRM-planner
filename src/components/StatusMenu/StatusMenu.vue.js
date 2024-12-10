/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './StatusMenu.js';
export { default } from './StatusMenu.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleMenuHandler) }, ...{ class: ("dropdown") }, });
    __VLS_directiveAsFunction(__VLS_directives.vClickOutside)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.closeHandler) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dropdown__face") }, ...{ style: (({ background: __VLS_ctx.getColorByStatus(__VLS_ctx.title) })) }, });
    if (__VLS_ctx.title != '') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dropdown__title") }, });
        (__VLS_ctx.getTitleByStatus(__VLS_ctx.title));
    }
    if (__VLS_ctx.menuIsOpen && __VLS_ctx.openPermission) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (([
                    'dropdown__menu',
                    __VLS_ctx.menuPositionTop ? 'dropdown__menu-top' : 'dropdown__menu-bottom',
                ])) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dropdown__menu-items") }, });
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.DROPDOWN_STATUS_MENU))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.menuIsOpen && __VLS_ctx.openPermission)))
                            return;
                        __VLS_ctx.handleClick(item.status);
                    } }, ...{ class: ((['dropdown__menu-item', { empty: item.title === '' }])) }, key: ((item.id)), });
            (item.title);
        }
    }
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['dropdown__face'];
    __VLS_styleScopedClasses['dropdown__title'];
    __VLS_styleScopedClasses['dropdown__menu'];
    __VLS_styleScopedClasses['dropdown__menu-items'];
    __VLS_styleScopedClasses['empty'];
    __VLS_styleScopedClasses['dropdown__menu-item'];
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
//# sourceMappingURL=StatusMenu.vue.js.map