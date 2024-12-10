/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export * from './UsersView.js';
export { default } from './UsersView.js';
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ('users') }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ('users') }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.filteredUsersList.length > 0 && !__VLS_ctx.dataStore.getIsLoadingUsers) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("users__wrapper") }, ...{ class: (({ "visible": __VLS_ctx.uxuiStore.getShowAsidePanel })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ('users__title') }, });
        for (const [user] of __VLS_getVForSourceType((__VLS_ctx.filteredUsersList))) {
            const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.UserCard;
            /** @type { [typeof __VLS_components.UserCard, ] } */
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onDeleteUserHandler': {} }, key: ((user.id)), user: ((user)), }));
            const __VLS_8 = __VLS_7({ ...{ 'onDeleteUserHandler': {} }, key: ((user.id)), user: ((user)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            let __VLS_12;
            const __VLS_13 = {
                onDeleteUserHandler: (__VLS_ctx.deleteUserHandler)
            };
            let __VLS_9;
            let __VLS_10;
            const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        }
    }
    if (__VLS_ctx.filteredUsersList.length === 0 && !__VLS_ctx.dataStore.getIsLoadingUsers) {
        const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.EmptyListComponent;
        /** @type { [typeof __VLS_components.EmptyListComponent, ] } */
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ message: ('Список участников пока пуст'), }));
        const __VLS_16 = __VLS_15({ message: ('Список участников пока пуст'), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['users'];
    __VLS_styleScopedClasses['users__wrapper'];
    __VLS_styleScopedClasses['visible'];
    __VLS_styleScopedClasses['users__title'];
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
//# sourceMappingURL=UsersView.vue.js.map