import { defineComponent } from 'vue';
import { useDataStore } from '@/store/data';
import { useModalClose } from '@/composables/useModalClose';
export default defineComponent({
    name: 'ModalDeleteProject',
    setup() {
        const dataStore = useDataStore();
        const suggestDeleteHandler = async () => {
            await dataStore.projectDeleteRequest();
            useModalClose();
        };
        return {
            useModalClose,
            suggestDeleteHandler
        };
    },
});
//# sourceMappingURL=ModalDeleteProject.js.map