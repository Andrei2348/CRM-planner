import { defineComponent, watch, ref } from 'vue';
import { MENU_DATA } from '@/config/menu';
import { useUxuiStore } from '@/store/uxui';
import { useDataStore } from '@/store/data';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
    name: 'MenuComponent',
    setup() {
        const uxuiStore = useUxuiStore();
        const dataStore = useDataStore();
        const route = useRoute();
        const router = useRouter();
        const selectedId = ref(Number(route.params.id));
        const navigateToHandler = (item) => {
            const url = item.prefix !== null ? `${item.url}/${selectedId.value}` : item.url;
            router.push(url);
        };
        watch(() => route.params.id, (newId) => {
            selectedId.value = Number(newId) || null;
        });
        const checkIsDisabled = (item) => {
            if (item.id == uxuiStore.getSelectedPage) {
                return true;
            }
            if (uxuiStore.getSelectedPage === 1 ||
                uxuiStore.getSelectedPage === 5) {
                dataStore.setSelectedProject(null);
                return item.in_project;
            }
        };
        return {
            MENU_DATA,
            uxuiStore,
            navigateToHandler,
            checkIsDisabled
        };
    },
});
//# sourceMappingURL=MenuComponent.js.map