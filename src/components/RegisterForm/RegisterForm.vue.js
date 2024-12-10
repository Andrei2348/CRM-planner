/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './RegisterForm.js';
export { default } from './RegisterForm.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('register__wrapper') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ('register__title') }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onFocus': {} }, label: ('Введите ваше имя'), name: ('username'), type: ('text'), error: ((__VLS_ctx.displayErrors.username)), placeholder: ('Введите ваше имя'), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onFocus': {} }, label: ('Введите ваше имя'), name: ('username'), type: ('text'), error: ((__VLS_ctx.displayErrors.username)), placeholder: ('Введите ваше имя'), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    const __VLS_8 = {
        onFocus: (...[$event]) => {
            __VLS_ctx.handleFocus('username');
        }
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_9 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onFocus': {} }, label: ('Введите ваш email'), name: ('email'), type: ('email'), error: ((__VLS_ctx.displayErrors.email)), placeholder: ('Введите ваш email'), }));
    const __VLS_11 = __VLS_10({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onFocus': {} }, label: ('Введите ваш email'), name: ('email'), type: ('email'), error: ((__VLS_ctx.displayErrors.email)), placeholder: ('Введите ваш email'), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    let __VLS_15;
    const __VLS_16 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    const __VLS_17 = {
        onFocus: (...[$event]) => {
            __VLS_ctx.handleFocus('email');
        }
    };
    let __VLS_12;
    let __VLS_13;
    const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11);
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onFocus': {} }, label: ('Введите пароль'), type: ('password'), name: ('password'), error: ((__VLS_ctx.displayErrors.password)), placeholder: ('Введите пароль'), }));
    const __VLS_20 = __VLS_19({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onFocus': {} }, label: ('Введите пароль'), type: ('password'), name: ('password'), error: ((__VLS_ctx.displayErrors.password)), placeholder: ('Введите пароль'), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    let __VLS_24;
    const __VLS_25 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    const __VLS_26 = {
        onFocus: (...[$event]) => {
            __VLS_ctx.handleFocus('password');
        }
    };
    let __VLS_21;
    let __VLS_22;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onFocus': {} }, label: ('Повторите пароль'), type: ('password'), name: ('repassword'), error: ((__VLS_ctx.displayErrors.repassword)), placeholder: ('Повторите пароль'), autocomplete: ('new-password'), }));
    const __VLS_29 = __VLS_28({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onFocus': {} }, label: ('Повторите пароль'), type: ('password'), name: ('repassword'), error: ((__VLS_ctx.displayErrors.repassword)), placeholder: ('Повторите пароль'), autocomplete: ('new-password'), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    let __VLS_33;
    const __VLS_34 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    const __VLS_35 = {
        onFocus: (...[$event]) => {
            __VLS_ctx.handleFocus('repassword');
        }
    };
    let __VLS_30;
    let __VLS_31;
    const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.registerUserHandler) }, ...{ class: ('register__button') }, disabled: ((!__VLS_ctx.disableButtonFlag)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('register__link-text') }, });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ to: ('login'), ...{ class: ('register__link') }, }));
    const __VLS_38 = __VLS_37({ to: ('login'), ...{ class: ('register__link') }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_nonNullable(__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    __VLS_styleScopedClasses['register__wrapper'];
    __VLS_styleScopedClasses['register__title'];
    __VLS_styleScopedClasses['register__button'];
    __VLS_styleScopedClasses['register__link-text'];
    __VLS_styleScopedClasses['register__link'];
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
//# sourceMappingURL=RegisterForm.vue.js.map