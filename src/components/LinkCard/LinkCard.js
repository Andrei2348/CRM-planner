import { defineComponent } from 'vue';
import { useDataStore } from '@/store/data';
import { useUxuiStore } from '@/store/uxui';
import { useOpenCreatePanelHandler } from '@/composables/useTaskPanelOpen';
import { getFormatDate } from '@/helpers/dateFormatter';
export default defineComponent({
    name: 'LinkCard',
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    setup() {
        const dataStore = useDataStore();
        const uxuiStore = useUxuiStore();
        const deleteLinkHandler = (payload) => {
            dataStore.setLinkForEdit(payload);
            uxuiStore.setModalName('ModalDeleteLink');
        };
        return {
            deleteLinkHandler,
            useOpenCreatePanelHandler,
            getFormatDate
        };
    }
});
//# sourceMappingURL=LinkCard.js.map