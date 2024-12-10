import { defineStore } from 'pinia';
import { watch, computed, ref } from 'vue';
import { useLockBodyScroll } from '@/composables/useLockBodyScroll';
export const useUxuiStore = defineStore('uxui', () => {
    const { enableBodyScroll, disableBodyScroll } = useLockBodyScroll();
    const createPanelName = ref('');
    const showAsidePanel = ref(false);
    const modalName = ref('');
    const selectedPage = ref(1);
    const setCreatePanelName = (payload) => {
        createPanelName.value = payload;
    };
    const getCreatePanelName = computed(() => {
        return createPanelName.value;
    });
    const setShowAsidePanel = (payload) => {
        showAsidePanel.value = payload;
    };
    const getShowAsidePanel = computed(() => {
        return showAsidePanel.value;
    });
    const setModalName = (payload) => {
        modalName.value = payload;
    };
    const getModalName = computed(() => {
        return modalName.value;
    });
    const setSelectedPage = (payload) => {
        selectedPage.value = payload;
    };
    const getSelectedPage = computed(() => {
        return selectedPage.value;
    });
    // Сюда добавить признаки для блокировки скролла
    watch(() => [createPanelName.value, modalName.value], ([newCreatePanelName, newModalName]) => {
        newCreatePanelName !== '' || newModalName !== ''
            ? disableBodyScroll()
            : enableBodyScroll();
    });
    return {
        setCreatePanelName,
        getCreatePanelName,
        setShowAsidePanel,
        getShowAsidePanel,
        setModalName,
        getModalName,
        setSelectedPage,
        getSelectedPage
    };
});
//# sourceMappingURL=uxui.js.map