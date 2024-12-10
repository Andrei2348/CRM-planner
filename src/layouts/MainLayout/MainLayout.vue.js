/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './MainLayout.js';
export { default } from './MainLayout.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ onMousedown: (__VLS_ctx.onMouseDown) }, ...{ onMouseup: (__VLS_ctx.onMouseUp) }, ...{ class: ("main") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.AsideComponent;
    /** @type { [typeof __VLS_components.AsideComponent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.NavbarComponent;
    /** @type { [typeof __VLS_components.NavbarComponent, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onLogoutUserHandler': {} }, }));
    const __VLS_8 = __VLS_7({ ...{ 'onLogoutUserHandler': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onLogoutUserHandler: (__VLS_ctx.logoutUserHandler)
    };
    let __VLS_9;
    let __VLS_10;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    var __VLS_14 = {};
    const __VLS_15 = __VLS_resolvedLocalAndGlobalComponents.transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ name: ("fade"), }));
    const __VLS_17 = __VLS_16({ name: ("fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    if (__VLS_ctx.uxuiStore.getCreatePanelName !== '') {
        const __VLS_21 = ((__VLS_ctx.CreateLayout));
        // @ts-ignore
        const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({}));
        const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
    }
    __VLS_nonNullable(__VLS_20.slots).default;
    const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
    const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({}));
    const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
    if (__VLS_ctx.uxuiStore.getModalName !== '') {
        const __VLS_33 = ((__VLS_ctx.ModalLayout));
        // @ts-ignore
        const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
        const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
    }
    __VLS_nonNullable(__VLS_32.slots).default;
    const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
    if (__VLS_ctx.showNotifyPermission) {
        const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.NotifyLayout;
        /** @type { [typeof __VLS_components.NotifyLayout, ] } */
        // @ts-ignore
        const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ ...{ 'onCloseNotify': {} }, ...{ class: ("navbar__notify-area") }, }));
        const __VLS_41 = __VLS_40({ ...{ 'onCloseNotify': {} }, ...{ class: ("navbar__notify-area") }, }, ...__VLS_functionalComponentArgsRest(__VLS_40));
        let __VLS_45;
        const __VLS_46 = {
            onCloseNotify: (__VLS_ctx.closeNotify)
        };
        let __VLS_42;
        let __VLS_43;
        const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41);
    }
    const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.InfoNotify;
    /** @type { [typeof __VLS_components.InfoNotify, ] } */
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ ...{ class: ('main__notify') }, }));
    const __VLS_49 = __VLS_48({ ...{ class: ('main__notify') }, }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    __VLS_styleScopedClasses['main'];
    __VLS_styleScopedClasses['navbar__notify-area'];
    __VLS_styleScopedClasses['main__notify'];
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
//# sourceMappingURL=MainLayout.vue.js.map