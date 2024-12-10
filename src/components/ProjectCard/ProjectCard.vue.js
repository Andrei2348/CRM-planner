/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './ProjectCard.js';
export { default } from './ProjectCard.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('card__wrapper') }, });
    if (__VLS_ctx.isTeamLead) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card__priority") }, });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ("crown"), ...{ class: ("card__priority-icon") }, }));
        const __VLS_2 = __VLS_1({ icon: ("crown"), ...{ class: ("card__priority-icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ('card__title') }, });
    (__VLS_ctx.project.project);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('card__color-underline') }, ...{ style: (({ backgroundColor: __VLS_ctx.project.color })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('card__text') }, });
    (__VLS_ctx.project.description);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('card__text') }, });
    (__VLS_ctx.project.users.length);
    if (__VLS_ctx.isUserInProject) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card__buttons-wrapper") }, });
        if (__VLS_ctx.isTeamLead) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isUserInProject)))
                            return;
                        if (!((__VLS_ctx.isTeamLead)))
                            return;
                        __VLS_ctx.useOpenCreatePanelHandler("CreateProjectComponent", __VLS_ctx.project);
                    } }, ...{ class: ('card__button') }, });
            const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
            /** @type { [typeof __VLS_components.SvgIcon, ] } */
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ("edit"), }));
            const __VLS_8 = __VLS_7({ icon: ("edit"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        }
        if (__VLS_ctx.isTeamLead && __VLS_ctx.project.id !== undefined) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isUserInProject)))
                            return;
                        if (!((__VLS_ctx.isTeamLead && __VLS_ctx.project.id !== undefined)))
                            return;
                        __VLS_ctx.deleteProjectHandler(__VLS_ctx.project);
                    } }, ...{ class: ('card__button') }, });
            const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
            /** @type { [typeof __VLS_components.SvgIcon, ] } */
            // @ts-ignore
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ icon: ('trash'), }));
            const __VLS_14 = __VLS_13({ icon: ('trash'), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        }
        if (!__VLS_ctx.isTeamLead) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isUserInProject)))
                            return;
                        if (!((!__VLS_ctx.isTeamLead)))
                            return;
                        __VLS_ctx.leaveTheProjectHandler(__VLS_ctx.project);
                    } }, ...{ class: ('card__button') }, });
            const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
            /** @type { [typeof __VLS_components.SvgIcon, ] } */
            // @ts-ignore
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ icon: ("log-out"), }));
            const __VLS_20 = __VLS_19({ icon: ("log-out"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.isUserInProject)))
                        return;
                    __VLS_ctx.goToProjectHandler(__VLS_ctx.project);
                } }, ...{ class: ('card__button') }, });
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ icon: ('chevron-right'), }));
        const __VLS_26 = __VLS_25({ icon: ('chevron-right'), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card__buttons-wrapper") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!(!((__VLS_ctx.isUserInProject))))
                        return;
                    __VLS_ctx.projectRequestHandler(__VLS_ctx.project);
                } }, ...{ class: ('card__button-request') }, disabled: ((__VLS_ctx.isDisabled)), });
    }
    __VLS_styleScopedClasses['card__wrapper'];
    __VLS_styleScopedClasses['card__priority'];
    __VLS_styleScopedClasses['card__priority-icon'];
    __VLS_styleScopedClasses['card__title'];
    __VLS_styleScopedClasses['card__color-underline'];
    __VLS_styleScopedClasses['card__text'];
    __VLS_styleScopedClasses['card__text'];
    __VLS_styleScopedClasses['card__buttons-wrapper'];
    __VLS_styleScopedClasses['card__button'];
    __VLS_styleScopedClasses['card__button'];
    __VLS_styleScopedClasses['card__button'];
    __VLS_styleScopedClasses['card__button'];
    __VLS_styleScopedClasses['card__buttons-wrapper'];
    __VLS_styleScopedClasses['card__button-request'];
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
//# sourceMappingURL=ProjectCard.vue.js.map