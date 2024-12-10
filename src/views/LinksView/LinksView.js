import { defineComponent, onBeforeMount } from 'vue';
import MainLayout from "@/layouts/MainLayout/MainLayout.vue";
import { useUxuiStore } from '@/store/uxui';
import { useDataStore } from '@/store/data';
import { useRoute } from 'vue-router';
import LinkCard from '@/components/LinkCard/LinkCard.vue';
import CreateWidget from '@/components/CreateWidget/CreateWidget.vue';
export default defineComponent({
    name: 'LinksView',
    components: {
        MainLayout,
        LinkCard,
        CreateWidget
    },
    setup() {
        const route = useRoute();
        const uxuiStore = useUxuiStore();
        const dataStore = useDataStore();
        onBeforeMount(async () => {
            uxuiStore.setSelectedPage(4);
            await dataStore.linksListRequest(Number(route.params.id));
        });
        return {
            uxuiStore,
            dataStore
        };
    }
});
//# sourceMappingURL=LinksView.js.map