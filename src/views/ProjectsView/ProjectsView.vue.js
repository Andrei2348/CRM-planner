/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './ProjectsView.js';
export { default } from './ProjectsView.js';
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.dataStore.projectList &&
        !__VLS_ctx.dataStore.getIsLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('projects__list') }, ...{ class: (({ "visible": __VLS_ctx.uxuiStore.getShowAsidePanel })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ('projects__title') }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("projects__list-wrapper") }, });
        for (const [project] of __VLS_getVForSourceType((__VLS_ctx.dataStore.projectList))) {
            const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ProjectCard;
            /** @type { [typeof __VLS_components.ProjectCard, ] } */
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((project.id)), project: ((project)), }));
            const __VLS_8 = __VLS_7({ key: ((project.id)), project: ((project)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        }
    }
    if ((!__VLS_ctx.dataStore.projectList ||
        __VLS_ctx.dataStore.projectList.length === 0) &&
        !__VLS_ctx.dataStore.getIsLoading) {
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.EmptyListComponent;
        /** @type { [typeof __VLS_components.EmptyListComponent, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ('projects__empty-list') }, message: ('Список проектов пока пуст.'), }));
        const __VLS_14 = __VLS_13({ ...{ class: ('projects__empty-list') }, message: ('Список проектов пока пуст.'), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    }
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.CreateWidget;
    /** @type { [typeof __VLS_components.CreateWidget, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: (({ "hidden": !(__VLS_ctx.uxuiStore.getCreatePanelName === "") })) }, ...{ class: ('projects__create-widget') }, componentName: ('CreateProjectComponent'), }));
    const __VLS_20 = __VLS_19({ ...{ class: (({ "hidden": !(__VLS_ctx.uxuiStore.getCreatePanelName === "") })) }, ...{ class: ('projects__create-widget') }, componentName: ('CreateProjectComponent'), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['projects__list'];
    __VLS_styleScopedClasses['visible'];
    __VLS_styleScopedClasses['projects__title'];
    __VLS_styleScopedClasses['projects__list-wrapper'];
    __VLS_styleScopedClasses['projects__empty-list'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['projects__create-widget'];
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
//# sourceMappingURL=ProjectsView.vue.js.map