/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './BoardsView.js';
export { default } from './BoardsView.js';
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.MainLayout;
    /** @type { [typeof __VLS_components.MainLayout, typeof __VLS_components.MainLayout, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ('boards') }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ('boards') }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.dataStore.canProceed &&
        __VLS_ctx.dataStore.tasksList &&
        __VLS_ctx.dataStore.tasksList.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("boards__wrapper") }, ...{ class: (({ "visible": __VLS_ctx.uxuiStore.getShowAsidePanel })) }, });
        for (const [taskArea] of __VLS_getVForSourceType((__VLS_ctx.DROPDOWN_STATUS_MENU))) {
            const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.TasksArea;
            /** @type { [typeof __VLS_components.TasksArea, ] } */
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((taskArea.id)), taskArea: ((taskArea)), tasks: ((__VLS_ctx.dataStore.tasksList)), }));
            const __VLS_8 = __VLS_7({ key: ((taskArea.id)), taskArea: ((taskArea)), tasks: ((__VLS_ctx.dataStore.tasksList)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        }
    }
    if ((!__VLS_ctx.dataStore.tasksList ||
        __VLS_ctx.dataStore.tasksList.length === 0) &&
        __VLS_ctx.dataStore.canProceed) {
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.EmptyListComponent;
        /** @type { [typeof __VLS_components.EmptyListComponent, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ message: ('Список задач пока пуст.'), }));
        const __VLS_14 = __VLS_13({ message: ('Список задач пока пуст.'), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    }
    if (__VLS_ctx.userStore.getIsTeamLead) {
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.CreateWidget;
        /** @type { [typeof __VLS_components.CreateWidget, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: (({ "hidden": !(__VLS_ctx.uxuiStore.getCreatePanelName === "") })) }, ...{ class: ('boards__create-widget') }, componentName: ('CreateTaskComponent'), }));
        const __VLS_20 = __VLS_19({ ...{ class: (({ "hidden": !(__VLS_ctx.uxuiStore.getCreatePanelName === "") })) }, ...{ class: ('boards__create-widget') }, componentName: ('CreateTaskComponent'), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['boards'];
    __VLS_styleScopedClasses['boards__wrapper'];
    __VLS_styleScopedClasses['visible'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['boards__create-widget'];
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
//# sourceMappingURL=BoardsView.vue.js.map