/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './TaskCard.js';
export { default } from './TaskCard.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('task__wrapper') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('task__span') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ('task__title') }, });
    (__VLS_ctx.task.task);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('task__color-underline') }, ...{ style: (({ backgroundColor: __VLS_ctx.task.color })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('task__text') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('task__span') }, });
    (__VLS_ctx.task.executorId !== null ? __VLS_ctx.fetchUserById(__VLS_ctx.task.executorId) : 'Не назначен');
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('task__text') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('task__span') }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.StatusMenu;
    /** @type { [typeof __VLS_components.StatusMenu, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onChangeSelectHandler': {} }, ...{ class: ('task__dropdown-status') }, ...{ class: (({ "active": __VLS_ctx.userStore.getIsTeamLead })) }, title: ((__VLS_ctx.task.status)), openPermission: ((__VLS_ctx.userStore.getIsTeamLead)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onChangeSelectHandler': {} }, ...{ class: ('task__dropdown-status') }, ...{ class: (({ "active": __VLS_ctx.userStore.getIsTeamLead })) }, title: ((__VLS_ctx.task.status)), openPermission: ((__VLS_ctx.userStore.getIsTeamLead)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onChangeSelectHandler: (__VLS_ctx.changeStatusHandler)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (__VLS_ctx.daysUntilDeadline !== '') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('task__text') }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('task__span') }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('task__deadline') }, });
        (__VLS_ctx.daysUntilDeadline);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('task__button-area') }, ...{ class: (({ active: __VLS_ctx.infoIsVisible })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('task__subtitle') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.showInfoHandler) }, ...{ class: ('task__button') }, });
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
    /** @type { [typeof __VLS_components.SvgIcon, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ class: ('task__icon-button') }, ...{ class: (({ active: __VLS_ctx.infoIsVisible })) }, icon: ('chevron-right'), }));
    const __VLS_10 = __VLS_9({ ...{ class: ('task__icon-button') }, ...{ class: (({ active: __VLS_ctx.infoIsVisible })) }, icon: ('chevron-right'), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('task__hidden-info') }, ...{ class: (({ visible: __VLS_ctx.infoIsVisible, teamlead: __VLS_ctx.userStore.getIsTeamLead })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('task__text') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('task__span') }, });
    (__VLS_ctx.getFormatDate(__VLS_ctx.task.timeCreate));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('task__text') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('task__span') }, });
    (__VLS_ctx.getFormatDate(__VLS_ctx.task.deadline));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('task__comment-wrapper') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('task__comment') }, });
    (__VLS_ctx.task.comment);
    if (__VLS_ctx.userStore.getIsTeamLead) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('task__button-wrapper') }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.userStore.getIsTeamLead)))
                        return;
                    __VLS_ctx.deleteTaskHandler(__VLS_ctx.task);
                } }, ...{ class: ('task__button-edit') }, });
        const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, ] } */
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ class: ('task__button-icon') }, icon: ("trash"), }));
        const __VLS_16 = __VLS_15({ ...{ class: ('task__button-icon') }, icon: ("trash"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.userStore.getIsTeamLead)))
                        return;
                    __VLS_ctx.useOpenCreatePanelHandler("CreateTaskComponent", __VLS_ctx.task);
                } }, ...{ class: ('task__button-edit') }, });
        const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, ] } */
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ class: ('task__button-icon') }, icon: ("edit"), }));
        const __VLS_22 = __VLS_21({ ...{ class: ('task__button-icon') }, icon: ("edit"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    }
    __VLS_styleScopedClasses['task__wrapper'];
    __VLS_styleScopedClasses['task__span'];
    __VLS_styleScopedClasses['task__title'];
    __VLS_styleScopedClasses['task__color-underline'];
    __VLS_styleScopedClasses['task__text'];
    __VLS_styleScopedClasses['task__span'];
    __VLS_styleScopedClasses['task__text'];
    __VLS_styleScopedClasses['task__span'];
    __VLS_styleScopedClasses['task__dropdown-status'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['task__text'];
    __VLS_styleScopedClasses['task__span'];
    __VLS_styleScopedClasses['task__deadline'];
    __VLS_styleScopedClasses['task__button-area'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['task__subtitle'];
    __VLS_styleScopedClasses['task__button'];
    __VLS_styleScopedClasses['task__icon-button'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['task__hidden-info'];
    __VLS_styleScopedClasses['visible'];
    __VLS_styleScopedClasses['teamlead'];
    __VLS_styleScopedClasses['task__text'];
    __VLS_styleScopedClasses['task__span'];
    __VLS_styleScopedClasses['task__text'];
    __VLS_styleScopedClasses['task__span'];
    __VLS_styleScopedClasses['task__comment-wrapper'];
    __VLS_styleScopedClasses['task__comment'];
    __VLS_styleScopedClasses['task__button-wrapper'];
    __VLS_styleScopedClasses['task__button-edit'];
    __VLS_styleScopedClasses['task__button-icon'];
    __VLS_styleScopedClasses['task__button-edit'];
    __VLS_styleScopedClasses['task__button-icon'];
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
//# sourceMappingURL=TaskCard.vue.js.map