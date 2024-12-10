/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './ProfileEdit.js';
export { default } from './ProfileEdit.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings__profile") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ('settings__title') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings__container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings__side") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ label: ('Ваше имя'), name: ('username'), type: ('text'), placeholder: ('Ваше имя'), modelValue: ((__VLS_ctx.userStore.getUserInfo?.username)), readonly: (true), }));
    const __VLS_2 = __VLS_1({ label: ('Ваше имя'), name: ('username'), type: ('text'), placeholder: ('Ваше имя'), modelValue: ((__VLS_ctx.userStore.getUserInfo?.username)), readonly: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onUpdate:modelValue': {} }, label: ('Введите ваш email'), name: ('email'), type: ('email'), placeholder: ('Введите ваш email'), modelValue: ((__VLS_ctx.userStore.getUserInfo?.email)), }));
    const __VLS_8 = __VLS_7({ ...{ 'onUpdate:modelValue': {} }, label: ('Введите ваш email'), name: ('email'), type: ('email'), placeholder: ('Введите ваш email'), modelValue: ((__VLS_ctx.userStore.getUserInfo?.email)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    let __VLS_9;
    let __VLS_10;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.TextAreaComponent;
    /** @type { [typeof __VLS_components.TextAreaComponent, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ 'onUpdate:modelValue': {} }, label: ('О себе'), name: ('description'), type: ('text'), placeholder: ('О себе'), textareaValue: ((__VLS_ctx.userStore.getUserInfo?.description)), }));
    const __VLS_16 = __VLS_15({ ...{ 'onUpdate:modelValue': {} }, label: ('О себе'), name: ('description'), type: ('text'), placeholder: ('О себе'), textareaValue: ((__VLS_ctx.userStore.getUserInfo?.description)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    let __VLS_20;
    const __VLS_21 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    let __VLS_17;
    let __VLS_18;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings__side") }, });
    const __VLS_22 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{ 'onUpdate:modelValue': {} }, label: ('Введите ваш telegram'), name: ('telegram'), type: ('text'), placeholder: ('Введите ваш email'), modelValue: ((__VLS_ctx.userStore.getUserInfo?.telegram)), }));
    const __VLS_24 = __VLS_23({ ...{ 'onUpdate:modelValue': {} }, label: ('Введите ваш telegram'), name: ('telegram'), type: ('text'), placeholder: ('Введите ваш email'), modelValue: ((__VLS_ctx.userStore.getUserInfo?.telegram)), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    let __VLS_28;
    const __VLS_29 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    let __VLS_25;
    let __VLS_26;
    const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onUpdate:modelValue': {} }, label: ('Введите ваш номер телефона'), name: ('phone'), type: ('text'), placeholder: ('Введите ваш номер телефона'), modelValue: ((__VLS_ctx.userStore.getUserInfo?.phone)), }));
    const __VLS_32 = __VLS_31({ ...{ 'onUpdate:modelValue': {} }, label: ('Введите ваш номер телефона'), name: ('phone'), type: ('text'), placeholder: ('Введите ваш номер телефона'), modelValue: ((__VLS_ctx.userStore.getUserInfo?.phone)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    let __VLS_36;
    const __VLS_37 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    let __VLS_33;
    let __VLS_34;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.InputComponent;
    /** @type { [typeof __VLS_components.InputComponent, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onUpdate:modelValue': {} }, label: ('Введите ваш GitHub'), name: ('github'), type: ('text'), placeholder: ('Введите ваш GitHub'), modelValue: ((__VLS_ctx.userStore.getUserInfo?.github)), }));
    const __VLS_40 = __VLS_39({ ...{ 'onUpdate:modelValue': {} }, label: ('Введите ваш GitHub'), name: ('github'), type: ('text'), placeholder: ('Введите ваш GitHub'), modelValue: ((__VLS_ctx.userStore.getUserInfo?.github)), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    let __VLS_44;
    const __VLS_45 = {
        'onUpdate:modelValue': (__VLS_ctx.getInputData)
    };
    let __VLS_41;
    let __VLS_42;
    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings__right-side") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings__stack") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ('settings__stack-title') }, });
    if (__VLS_ctx.safeTechnologies && !__VLS_ctx.dataStore.getIsLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('settings__stack-wrapper') }, });
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.safeTechnologies))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('settings__checkbox-group') }, key: ((item.id)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (...[$event]) => {
                        if (!((__VLS_ctx.safeTechnologies && !__VLS_ctx.dataStore.getIsLoading)))
                            return;
                        __VLS_ctx.handleCheckboxChange(item);
                    } }, type: ("checkbox"), id: ((`checkbox-${item.id}`)), value: ((item.id)), checked: ((__VLS_ctx.isSelected(item))), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ('settings__stack-button') }, for: ((`checkbox-${item.id}`)), });
            (item.name);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.saveButtonHandler) }, ...{ class: ('settings__button') }, disabled: ((__VLS_ctx.disableButtonFlag)), });
    __VLS_styleScopedClasses['settings__wrapper'];
    __VLS_styleScopedClasses['settings__profile'];
    __VLS_styleScopedClasses['settings__title'];
    __VLS_styleScopedClasses['settings__container'];
    __VLS_styleScopedClasses['settings__side'];
    __VLS_styleScopedClasses['settings__side'];
    __VLS_styleScopedClasses['settings__right-side'];
    __VLS_styleScopedClasses['settings__stack'];
    __VLS_styleScopedClasses['settings__stack-title'];
    __VLS_styleScopedClasses['settings__stack-wrapper'];
    __VLS_styleScopedClasses['settings__checkbox-group'];
    __VLS_styleScopedClasses['settings__stack-button'];
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
//# sourceMappingURL=ProfileEdit.vue.js.map