/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './CreateLinkComponent.js';
export { default } from './CreateLinkComponent.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('links__wrapper') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ('links__title') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.createLinkHandler) }, ...{ class: ("links__container") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:modelValue': {} }, label: ('Введите ссылку'), type: ('text'), placeholder: ("Введите ссылку"), name: ('link'), modelValue: ((__VLS_ctx.blankDataLink.link)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:modelValue': {} }, label: ('Введите ссылку'), type: ('text'), placeholder: ("Введите ссылку"), name: ('link'), modelValue: ((__VLS_ctx.blankDataLink.link)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
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
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onUpdate:modelValue': {} }, label: ('Введите описание ссылки'), type: ('text'), placeholder: ('Введите описание ссылки'), name: ('description'), modelValue: ((__VLS_ctx.blankDataLink.description)), }));
    const __VLS_10 = __VLS_9({ ...{ 'onUpdate:modelValue': {} }, label: ('Введите описание ссылки'), type: ('text'), placeholder: ('Введите описание ссылки'), name: ('description'), modelValue: ((__VLS_ctx.blankDataLink.description)), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_14;
    const __VLS_15 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    let __VLS_11;
    let __VLS_12;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ('links__button-create') }, type: ("submit"), disabled: ((__VLS_ctx.isSubmitDisabled)), });
    (__VLS_ctx.editFlag ? 'Редактировать' : 'Создать');
    __VLS_styleScopedClasses['links__wrapper'];
    __VLS_styleScopedClasses['links__title'];
    __VLS_styleScopedClasses['links__container'];
    __VLS_styleScopedClasses['links__button-create'];
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
//# sourceMappingURL=CreateLinkComponent.vue.js.map