/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './UserCard.js';
export { default } from './UserCard.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('user__wrapper') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('user__moreinfo-title-wrapper') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("user__moreinfo-label user__moreinfo-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("user__moreinfo-title") }, });
    (__VLS_ctx.user.username);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user__info-buttons-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.getUserInfoHandler) }, ...{ class: ('user__info-button') }, disabled: ((__VLS_ctx.disabledFlag)), });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
    /** @type { [typeof __VLS_components.SvgIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ('info'), }));
    const __VLS_2 = __VLS_1({ icon: ('info'), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.userStore.getIsTeamLead && __VLS_ctx.checkContainsUser(__VLS_ctx.user)) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.userStore.getIsTeamLead && __VLS_ctx.checkContainsUser(__VLS_ctx.user))))
                        return;
                    __VLS_ctx.deleteUserInfoHandler(__VLS_ctx.user.id);
                } }, ...{ class: ('user__info-button') }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ('trash'), }));
        const __VLS_8 = __VLS_7({ icon: ('trash'), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    }
    if (__VLS_ctx.userStore.getIsTeamLead && !__VLS_ctx.checkContainsUser(__VLS_ctx.user)) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.userStore.getIsTeamLead && !__VLS_ctx.checkContainsUser(__VLS_ctx.user))))
                        return;
                    __VLS_ctx.projectRequestHandler(__VLS_ctx.user);
                } }, ...{ class: ('user__info-button') }, disabled: ((__VLS_ctx.buttonAddFlag)), });
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ icon: ('add'), }));
        const __VLS_14 = __VLS_13({ icon: ('add'), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    }
    if (__VLS_ctx.userInfo &&
        (__VLS_ctx.userInfo.telegram ||
            __VLS_ctx.userInfo.phone ||
            __VLS_ctx.userInfo.description ||
            __VLS_ctx.userInfo.github ||
            (__VLS_ctx.userInfo.stack && __VLS_ctx.userInfo.stack?.length > 0) ||
            __VLS_ctx.userInfo.email)) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user__moreinfo") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user__moreinfo-header--content") }, });
        if (__VLS_ctx.userInfo?.telegram) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user__moreinfo-context") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("user__moreinfo-label") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("user__moreinfo-text") }, });
            (__VLS_ctx.userInfo?.telegram);
        }
        if (__VLS_ctx.userInfo?.github) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user__moreinfo-context") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("user__moreinfo-label") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("user__moreinfo-text") }, });
            (__VLS_ctx.userInfo?.github);
        }
        if (__VLS_ctx.userInfo?.email) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user__moreinfo-context") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("user__moreinfo-label") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("user__moreinfo-text") }, });
            (__VLS_ctx.userInfo?.email);
        }
        if (__VLS_ctx.userInfo?.phone) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user__moreinfo-context") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("user__moreinfo-label") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("user__moreinfo-text") }, });
            (__VLS_ctx.userInfo?.phone);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user__moreinfo-footer--content") }, });
        if (__VLS_ctx.userInfo?.description) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user__moreinfo-context") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("user__moreinfo-label") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("user__moreinfo-text") }, });
            (__VLS_ctx.userInfo?.description);
        }
        if (__VLS_ctx.userInfo?.stack &&
            __VLS_ctx.userInfo?.stack?.length > 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user__moreinfo-container") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("user__moreinfo-label") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user__stack-wrapper") }, });
            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.userInfo?.stack))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('user__stack-item') }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('user__stack') }, });
                (item.name);
            }
        }
    }
    __VLS_styleScopedClasses['user__wrapper'];
    __VLS_styleScopedClasses['user__moreinfo-title-wrapper'];
    __VLS_styleScopedClasses['user__moreinfo-label'];
    __VLS_styleScopedClasses['user__moreinfo-header'];
    __VLS_styleScopedClasses['user__moreinfo-title'];
    __VLS_styleScopedClasses['user__info-buttons-wrapper'];
    __VLS_styleScopedClasses['user__info-button'];
    __VLS_styleScopedClasses['user__info-button'];
    __VLS_styleScopedClasses['user__info-button'];
    __VLS_styleScopedClasses['user__moreinfo'];
    __VLS_styleScopedClasses['user__moreinfo-header--content'];
    __VLS_styleScopedClasses['user__moreinfo-context'];
    __VLS_styleScopedClasses['user__moreinfo-label'];
    __VLS_styleScopedClasses['user__moreinfo-text'];
    __VLS_styleScopedClasses['user__moreinfo-context'];
    __VLS_styleScopedClasses['user__moreinfo-label'];
    __VLS_styleScopedClasses['user__moreinfo-text'];
    __VLS_styleScopedClasses['user__moreinfo-context'];
    __VLS_styleScopedClasses['user__moreinfo-label'];
    __VLS_styleScopedClasses['user__moreinfo-text'];
    __VLS_styleScopedClasses['user__moreinfo-context'];
    __VLS_styleScopedClasses['user__moreinfo-label'];
    __VLS_styleScopedClasses['user__moreinfo-text'];
    __VLS_styleScopedClasses['user__moreinfo-footer--content'];
    __VLS_styleScopedClasses['user__moreinfo-context'];
    __VLS_styleScopedClasses['user__moreinfo-label'];
    __VLS_styleScopedClasses['user__moreinfo-text'];
    __VLS_styleScopedClasses['user__moreinfo-container'];
    __VLS_styleScopedClasses['user__moreinfo-label'];
    __VLS_styleScopedClasses['user__stack-wrapper'];
    __VLS_styleScopedClasses['user__stack-item'];
    __VLS_styleScopedClasses['user__stack'];
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
//# sourceMappingURL=UserCard.vue.js.map