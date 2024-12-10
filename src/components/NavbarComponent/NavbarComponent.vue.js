/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './NavbarComponent.js';
export { default } from './NavbarComponent.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ('navbar') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.asideShowHandler) }, ...{ class: ("navbar__burger") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
    /** @type { [typeof __VLS_components.SvgIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ("burger"), ...{ class: ('navbar__burger-svg') }, }));
    const __VLS_2 = __VLS_1({ icon: ("burger"), ...{ class: ('navbar__burger-svg') }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.dataStore.getSelectedProject) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('navbar__name') }, });
        (__VLS_ctx.dataStore.getSelectedProject.project);
    }
    if (__VLS_ctx.uxuiStore.getSelectedPage === 1 ||
        (__VLS_ctx.uxuiStore.getSelectedPage === 3 &&
            __VLS_ctx.userStore.getIsTeamLead)) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.SearchComponent;
        /** @type { [typeof __VLS_components.SearchComponent, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
        const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar__person-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ('navbar__user') }, });
    (__VLS_ctx.userStore.getUserInfo?.username);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar__notify-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleNotify) }, ...{ class: ('navbar__logout-button navbar__notify-button') }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
    /** @type { [typeof __VLS_components.SvgIcon, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ icon: ("message"), }));
    const __VLS_14 = __VLS_13({ icon: ("message"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    if (__VLS_ctx.dataStore.getNotifyProjectList &&
        __VLS_ctx.dataStore.getNotifyProjectList?.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('navbar__notify-span') }, });
        (__VLS_ctx.dataStore.getNotifyProjectList?.length);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.logoutHandler) }, ...{ class: ('navbar__logout-button') }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
    /** @type { [typeof __VLS_components.SvgIcon, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ icon: ("log-out"), }));
    const __VLS_20 = __VLS_19({ icon: ("log-out"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_styleScopedClasses['navbar'];
    __VLS_styleScopedClasses['navbar__burger'];
    __VLS_styleScopedClasses['navbar__burger-svg'];
    __VLS_styleScopedClasses['navbar__name'];
    __VLS_styleScopedClasses['navbar__person-wrapper'];
    __VLS_styleScopedClasses['navbar__user'];
    __VLS_styleScopedClasses['navbar__notify-wrapper'];
    __VLS_styleScopedClasses['navbar__logout-button'];
    __VLS_styleScopedClasses['navbar__notify-button'];
    __VLS_styleScopedClasses['navbar__notify-span'];
    __VLS_styleScopedClasses['navbar__logout-button'];
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
//# sourceMappingURL=NavbarComponent.vue.js.map