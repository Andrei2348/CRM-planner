/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './DateElement.js';
export { default } from './DateElement.js';
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
    if (__VLS_ctx.label) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("date__label") }, });
        (__VLS_ctx.label);
    }
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VueDatePicker;
    /** @type { [typeof __VLS_components.VueDatePicker, typeof __VLS_components.VueDatePicker, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ id: ("datePicker"), ...{ class: ("picker dp__theme_dark") }, modelValue: ((__VLS_ctx.date)), format: ((__VLS_ctx.format)), textInput: ((__VLS_ctx.textInputOptions)), locale: ("ru-RU"), spaceConfirm: ((true)), position: ("center"), autoApply: (true), required: (true), ui: ((__VLS_ctx.uiOptions)), dayClass: ((__VLS_ctx.getDayClass)), enableTimePicker: ((false)), sixWeeks: ((true)), placeholder: ((__VLS_ctx.placeholder)), yearRange: (([2024, 2040])), disabled: ((__VLS_ctx.disabled)), inline: ((__VLS_ctx.inline)), dark: (true), }));
    const __VLS_2 = __VLS_1({ id: ("datePicker"), ...{ class: ("picker dp__theme_dark") }, modelValue: ((__VLS_ctx.date)), format: ((__VLS_ctx.format)), textInput: ((__VLS_ctx.textInputOptions)), locale: ("ru-RU"), spaceConfirm: ((true)), position: ("center"), autoApply: (true), required: (true), ui: ((__VLS_ctx.uiOptions)), dayClass: ((__VLS_ctx.getDayClass)), enableTimePicker: ((false)), sixWeeks: ((true)), placeholder: ((__VLS_ctx.placeholder)), yearRange: (([2024, 2040])), disabled: ((__VLS_ctx.disabled)), inline: ((__VLS_ctx.inline)), dark: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { "input-icon": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ("calendar"), ...{ class: ("picker__icon") }, }));
        const __VLS_8 = __VLS_7({ icon: ("calendar"), ...{ class: ("picker__icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['date__label'];
    __VLS_styleScopedClasses['picker'];
    __VLS_styleScopedClasses['dp__theme_dark'];
    __VLS_styleScopedClasses['picker__icon'];
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
//# sourceMappingURL=DateElement.vue.js.map