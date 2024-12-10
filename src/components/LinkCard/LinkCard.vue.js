/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './LinkCard.js';
export { default } from './LinkCard.js';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('link__wrapper') }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("link__context") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ('link__common') }, href: ((__VLS_ctx.data.link)), target: ("_blank"), });
    (__VLS_ctx.data.description);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("link__info") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("link__text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('link__span') }, });
    (__VLS_ctx.data.author);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("link__text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ('link__span') }, });
    (__VLS_ctx.getFormatDate(__VLS_ctx.data.date));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("link__button-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.deleteLinkHandler(__VLS_ctx.data);
            } }, ...{ class: ('link__button-edit') }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
    /** @type { [typeof __VLS_components.SvgIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ('link__button-icon') }, icon: ("trash"), }));
    const __VLS_2 = __VLS_1({ ...{ class: ('link__button-icon') }, icon: ("trash"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.useOpenCreatePanelHandler("CreateLinkComponent", __VLS_ctx.data);
            } }, ...{ class: ('link__button-edit') }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
    /** @type { [typeof __VLS_components.SvgIcon, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ('link__button-icon') }, icon: ("edit"), }));
    const __VLS_8 = __VLS_7({ ...{ class: ('link__button-icon') }, icon: ("edit"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_styleScopedClasses['link__wrapper'];
    __VLS_styleScopedClasses['link__context'];
    __VLS_styleScopedClasses['link__common'];
    __VLS_styleScopedClasses['link__info'];
    __VLS_styleScopedClasses['link__text'];
    __VLS_styleScopedClasses['link__span'];
    __VLS_styleScopedClasses['link__text'];
    __VLS_styleScopedClasses['link__span'];
    __VLS_styleScopedClasses['link__button-wrapper'];
    __VLS_styleScopedClasses['link__button-edit'];
    __VLS_styleScopedClasses['link__button-icon'];
    __VLS_styleScopedClasses['link__button-edit'];
    __VLS_styleScopedClasses['link__button-icon'];
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
//# sourceMappingURL=LinkCard.vue.js.map