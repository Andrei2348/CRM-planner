/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './PasswordChanger.js';
export { default } from './PasswordChanger.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('settings__wrapper') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ('settings__title') }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onFocus': {} }, label: ('Введите ваш новый пароль'), type: ('password'), name: ('password'), placeholder: ('Введите новый пароль'), error: ((__VLS_ctx.displayErrors.password)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onFocus': {} }, label: ('Введите ваш новый пароль'), type: ('password'), name: ('password'), placeholder: ('Введите новый пароль'), error: ((__VLS_ctx.displayErrors.password)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    const __VLS_8 = {
        onFocus: (...[$event]) => {
            __VLS_ctx.handleFocus('password');
        }
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_9 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onFocus': {} }, label: ('Повторите ваш новый пароль'), type: ('password'), name: ('repassword'), placeholder: ('Повторите новый пароль'), autocomplete: ('new-password'), error: ((__VLS_ctx.displayErrors.repassword)), }));
    const __VLS_11 = __VLS_10({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onFocus': {} }, label: ('Повторите ваш новый пароль'), type: ('password'), name: ('repassword'), placeholder: ('Повторите новый пароль'), autocomplete: ('new-password'), error: ((__VLS_ctx.displayErrors.repassword)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    let __VLS_15;
    const __VLS_16 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    const __VLS_17 = {
        onFocus: (...[$event]) => {
            __VLS_ctx.handleFocus('repassword');
        }
    };
    let __VLS_12;
    let __VLS_13;
    const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.saveButtonHandler) }, ...{ class: ('settings__button') }, disabled: ((__VLS_ctx.disableButtonFlag)), });
    __VLS_styleScopedClasses['settings__wrapper'];
    __VLS_styleScopedClasses['settings__title'];
    __VLS_styleScopedClasses['settings__button'];
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
//# sourceMappingURL=PasswordChanger.vue.js.map