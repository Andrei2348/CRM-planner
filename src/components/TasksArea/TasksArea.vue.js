/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './TasksArea.js';
export { default } from './TasksArea.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('tasks__container') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tasks__header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ('tasks__title') }, });
    (__VLS_ctx.taskArea.title);
    if (__VLS_ctx.filteredTasks.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('tasks__count') }, });
        (__VLS_ctx.declensionOfTasks(__VLS_ctx.filteredTasks.length));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tasks__wrapper") }, });
    for (const [task] of __VLS_getVForSourceType((__VLS_ctx.filteredTasks))) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.TaskCard;
        /** @type { [typeof __VLS_components.TaskCard, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((task.id)), task: ((task)), }));
        const __VLS_2 = __VLS_1({ key: ((task.id)), task: ((task)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    __VLS_styleScopedClasses['tasks__container'];
    __VLS_styleScopedClasses['tasks__header'];
    __VLS_styleScopedClasses['tasks__title'];
    __VLS_styleScopedClasses['tasks__count'];
    __VLS_styleScopedClasses['tasks__wrapper'];
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
//# sourceMappingURL=TasksArea.vue.js.map