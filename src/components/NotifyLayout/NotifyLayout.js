import { defineComponent } from 'vue';
import { useDataStore } from '@/store/data';
import NotifyMessage from '@/components/NotifyMessage/NotifyMessage.vue';
export default defineComponent({
    name: 'NotifyLayout',
    components: {
        NotifyMessage
    },
    setup(_, { emit }) {
        const dataStore = useDataStore();
        const closeNotifyHandler = () => {
            emit('closeNotify');
        };
        return {
            dataStore,
            closeNotifyHandler
        };
    },
});
//# sourceMappingURL=NotifyLayout.js.map