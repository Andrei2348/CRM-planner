/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './LoginForm.js';
export { default } from './LoginForm.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('login__wrapper') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ('login__title') }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:modelValue': {} }, label: ('Ваша почта'), name: ('email'), type: ('email'), placeholder: ('Введите ваш email'), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:modelValue': {} }, label: ('Ваша почта'), name: ('email'), type: ('email'), placeholder: ('Введите ваш email'), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onUpdate:modelValue': {} }, label: ('Пароль'), type: ('password'), name: ('password'), placeholder: ('Введите пароль'), }));
    const __VLS_10 = __VLS_9({ ...{ 'onUpdate:modelValue': {} }, label: ('Пароль'), type: ('password'), name: ('password'), placeholder: ('Введите пароль'), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_14;
    const __VLS_15 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    let __VLS_11;
    let __VLS_12;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.loginUserHandler) }, ...{ class: ('login__button') }, disabled: ((__VLS_ctx.disableButtonFlag)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('login__link-text') }, });
    const __VLS_16 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ to: ('register'), ...{ class: ('login__link') }, }));
    const __VLS_18 = __VLS_17({ to: ('register'), ...{ class: ('login__link') }, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    __VLS_nonNullable(__VLS_21.slots).default;
    const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    __VLS_styleScopedClasses['login__wrapper'];
    __VLS_styleScopedClasses['login__title'];
    __VLS_styleScopedClasses['login__button'];
    __VLS_styleScopedClasses['login__link-text'];
    __VLS_styleScopedClasses['login__link'];
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
//# sourceMappingURL=LoginForm.vue.js.map