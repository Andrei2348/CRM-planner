/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './CreateTaskComponent.js';
export { default } from './CreateTaskComponent.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task__wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ('task__title') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.createTaskHandler) }, ...{ class: ("task__container") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:modelValue': {} }, label: ('Задание'), name: ('task'), type: ('text'), placeholder: ('Введите задание'), modelValue: ((__VLS_ctx.blankDataTask.task)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:modelValue': {} }, label: ('Задание'), name: ('task'), type: ('text'), placeholder: ('Введите задание'), modelValue: ((__VLS_ctx.blankDataTask.task)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.DateElement;
    /** @type { [typeof __VLS_components.DateElement, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onDataChanged': {} }, ...{ class: ("task__datapicker") }, placeholder: ("Дата подписания"), objectKey: ("deadline"), value: ((__VLS_ctx.blankDataTask.deadline)), label: ("Дедлайн"), }));
    const __VLS_10 = __VLS_9({ ...{ 'onDataChanged': {} }, ...{ class: ("task__datapicker") }, placeholder: ("Дата подписания"), objectKey: ("deadline"), value: ((__VLS_ctx.blankDataTask.deadline)), label: ("Дедлайн"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_14;
    const __VLS_15 = {
        onDataChanged: (__VLS_ctx.getInputData)
    };
    let __VLS_11;
    let __VLS_12;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    const __VLS_16 = __VLS_resolvedLocalAndGlobalComponents.SelectMenu;
    /** @type { [typeof __VLS_components.SelectMenu, ] } */
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{ 'onChangeSelectHandler': {} }, label: ('Выберите исполнителя'), title: ((__VLS_ctx.getTitleById(__VLS_ctx.blankDataTask.executorId))), persons: ((__VLS_ctx.dataStore.usersList || [])), }));
    const __VLS_18 = __VLS_17({ ...{ 'onChangeSelectHandler': {} }, label: ('Выберите исполнителя'), title: ((__VLS_ctx.getTitleById(__VLS_ctx.blankDataTask.executorId))), persons: ((__VLS_ctx.dataStore.usersList || [])), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    let __VLS_22;
    const __VLS_23 = {
        onChangeSelectHandler: (__VLS_ctx.changeExecutorHandler)
    };
    let __VLS_19;
    let __VLS_20;
    const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task__status-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("task__label") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.StatusMenu;
    /** @type { [typeof __VLS_components.StatusMenu, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onChangeSelectHandler': {} }, ...{ class: ('task__status-dropdown') }, title: ((__VLS_ctx.blankDataTask.status)), }));
    const __VLS_26 = __VLS_25({ ...{ 'onChangeSelectHandler': {} }, ...{ class: ('task__status-dropdown') }, title: ((__VLS_ctx.blankDataTask.status)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    let __VLS_30;
    const __VLS_31 = {
        onChangeSelectHandler: (__VLS_ctx.changeSelectHandler)
    };
    let __VLS_27;
    let __VLS_28;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.TextAreaComponent;
    /** @type { [typeof __VLS_components.TextAreaComponent, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onUpdate:modelValue': {} }, label: ('Комментарий'), name: ('comment'), type: ('text'), placeholder: ('Введите комментарий'), textareaValue: ((__VLS_ctx.blankDataTask.comment)), }));
    const __VLS_34 = __VLS_33({ ...{ 'onUpdate:modelValue': {} }, label: ('Комментарий'), name: ('comment'), type: ('text'), placeholder: ('Введите комментарий'), textareaValue: ((__VLS_ctx.blankDataTask.comment)), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    let __VLS_38;
    const __VLS_39 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    let __VLS_35;
    let __VLS_36;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    const __VLS_40 = __VLS_resolvedLocalAndGlobalComponents.ColorPicker;
    /** @type { [typeof __VLS_components.ColorPicker, ] } */
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onColorChanged': {} }, name: ('color'), color: ((__VLS_ctx.blankDataTask.color)), }));
    const __VLS_42 = __VLS_41({ ...{ 'onColorChanged': {} }, name: ('color'), color: ((__VLS_ctx.blankDataTask.color)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    let __VLS_46;
    const __VLS_47 = {
        onColorChanged: (__VLS_ctx.getInputData)
    };
    let __VLS_43;
    let __VLS_44;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ('task__button-create') }, disabled: ((__VLS_ctx.disableButtonFlag)), });
    (__VLS_ctx.editFlag ? 'Редактировать' : 'Создать');
    __VLS_styleScopedClasses['task__wrapper'];
    __VLS_styleScopedClasses['task__title'];
    __VLS_styleScopedClasses['task__container'];
    __VLS_styleScopedClasses['task__datapicker'];
    __VLS_styleScopedClasses['task__status-wrapper'];
    __VLS_styleScopedClasses['task__label'];
    __VLS_styleScopedClasses['task__status-dropdown'];
    __VLS_styleScopedClasses['task__button-create'];
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
//# sourceMappingURL=CreateTaskComponent.vue.js.map