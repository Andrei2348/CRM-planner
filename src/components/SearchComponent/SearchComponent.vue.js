/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './SearchComponent.js';
export { default } from './SearchComponent.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('search') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.searchHandler) }, ...{ class: ("search__input") }, type: ("text"), placeholder: ("Начать поиск..."), });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
    /** @type { [typeof __VLS_components.SvgIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ("search"), ...{ class: ('search__icon') }, }));
    const __VLS_2 = __VLS_1({ icon: ("search"), ...{ class: ('search__icon') }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_styleScopedClasses['search'];
    __VLS_styleScopedClasses['search__input'];
    __VLS_styleScopedClasses['search__icon'];
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
//# sourceMappingURL=SearchComponent.vue.js.map