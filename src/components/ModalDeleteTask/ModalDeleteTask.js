import { defineComponent } from 'vue';
import { useDataStore } from '@/store/data';
import { useModalClose } from '@/composables/useModalClose';
export default defineComponent({
    name: 'ModalDeleteTask',
    setup() {
        const dataStore = useDataStore();
        const suggestDeleteHandler = async () => {
            await dataStore.taskDeleteRequest();
            useModalClose();
        };
        return {
            useModalClose,
            suggestDeleteHandler
        };
    },
});
//# sourceMappingURL=ModalDeleteTask.js.map