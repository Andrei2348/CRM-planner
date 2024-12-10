/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './ColorPicker.js';
export { default } from './ColorPicker.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('color__label') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("color__palette") }, });
    for (const [color] of __VLS_getVForSourceType((__VLS_ctx.colors))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.selectColor(color);
                } }, key: ((color)), ...{ class: ("color__swatch") }, ...{ style: (({ backgroundColor: color })) }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("color__info") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("color__selected") }, ...{ style: (({ backgroundColor: __VLS_ctx.selectedColor })) }, });
    __VLS_styleScopedClasses['color__label'];
    __VLS_styleScopedClasses['color__palette'];
    __VLS_styleScopedClasses['color__swatch'];
    __VLS_styleScopedClasses['color__info'];
    __VLS_styleScopedClasses['color__selected'];
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
//# sourceMappingURL=ColorPicker.vue.js.map