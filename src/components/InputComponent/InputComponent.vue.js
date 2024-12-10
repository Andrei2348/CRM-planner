/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './InputComponent.js';
export { default } from './InputComponent.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('input__wrapper') }, ...{ class: (({ 'error__place-visible': __VLS_ctx.error })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ('input__label') }, for: ((__VLS_ctx.name)), });
    (__VLS_ctx.label);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input__area-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onFocus: (...[$event]) => {
                __VLS_ctx.$emit('focus');
            } }, type: ((__VLS_ctx.isPasswordVisible ? 'text' : __VLS_ctx.type)), ...{ class: ('input__area') }, id: ((__VLS_ctx.name)), placeholder: ((__VLS_ctx.placeholder)), required: ((__VLS_ctx.required)), readonly: ((__VLS_ctx.readonly)), maxlength: ((__VLS_ctx.maxlength)), autocomplete: ((__VLS_ctx.autocomplete)), ...{ class: (({ error: __VLS_ctx.error })) }, });
    (__VLS_ctx.inputValue);
    if (__VLS_ctx.isPasswordField) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.togglePasswordVisibility) }, ...{ class: ('input__password-visible') }, type: ("button"), });
        if (__VLS_ctx.isPasswordVisible) {
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
            /** @type { [typeof __VLS_components.SvgIcon, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ('eye-off'), }));
            const __VLS_2 = __VLS_1({ icon: ('eye-off'), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        }
        else {
            const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
            /** @type { [typeof __VLS_components.SvgIcon, ] } */
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ('eye'), }));
            const __VLS_8 = __VLS_7({ icon: ('eye'), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        }
    }
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("input__error-message") }, });
        (__VLS_ctx.error);
    }
    __VLS_styleScopedClasses['input__wrapper'];
    __VLS_styleScopedClasses['error__place-visible'];
    __VLS_styleScopedClasses['input__label'];
    __VLS_styleScopedClasses['input__area-wrapper'];
    __VLS_styleScopedClasses['input__area'];
    __VLS_styleScopedClasses['error'];
    __VLS_styleScopedClasses['input__password-visible'];
    __VLS_styleScopedClasses['input__error-message'];
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
//# sourceMappingURL=InputComponent.vue.js.map