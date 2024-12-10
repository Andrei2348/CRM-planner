/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './CreateProjectComponent.js';
export { default } from './CreateProjectComponent.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("projects__wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ('projects__title') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.createProjectHandler) }, ...{ class: ("projects__container") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:modelValue': {} }, label: ('Название проекта'), name: ('project'), type: ('text'), placeholder: ('Введите название проекта'), modelValue: ((__VLS_ctx.blankDataProject.project)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:modelValue': {} }, label: ('Название проекта'), name: ('project'), type: ('text'), placeholder: ('Введите название проекта'), modelValue: ((__VLS_ctx.blankDataProject.project)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.TextAreaComponent;
    /** @type { [typeof __VLS_components.TextAreaComponent, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onUpdate:modelValue': {} }, label: ('Описание проекта'), name: ('description'), type: ('text'), placeholder: ('Введите описание проекта'), textareaValue: ((__VLS_ctx.blankDataProject.description)), }));
    const __VLS_10 = __VLS_9({ ...{ 'onUpdate:modelValue': {} }, label: ('Описание проекта'), name: ('description'), type: ('text'), placeholder: ('Введите описание проекта'), textareaValue: ((__VLS_ctx.blankDataProject.description)), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_14;
    const __VLS_15 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    let __VLS_11;
    let __VLS_12;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    const __VLS_16 = __VLS_resolvedLocalAndGlobalComponents.ColorPicker;
    /** @type { [typeof __VLS_components.ColorPicker, ] } */
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{ 'onColorChanged': {} }, name: ('color'), color: ((__VLS_ctx.blankDataProject.color)), }));
    const __VLS_18 = __VLS_17({ ...{ 'onColorChanged': {} }, name: ('color'), color: ((__VLS_ctx.blankDataProject.color)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    let __VLS_22;
    const __VLS_23 = {
        onColorChanged: (__VLS_ctx.getInputData)
    };
    let __VLS_19;
    let __VLS_20;
    const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ('projects__button-create') }, disabled: ((__VLS_ctx.disableButtonFlag)), });
    (__VLS_ctx.editFlag ? 'Редактировать' : 'Создать');
    __VLS_styleScopedClasses['projects__wrapper'];
    __VLS_styleScopedClasses['projects__title'];
    __VLS_styleScopedClasses['projects__container'];
    __VLS_styleScopedClasses['projects__button-create'];
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
//# sourceMappingURL=CreateProjectComponent.vue.js.map