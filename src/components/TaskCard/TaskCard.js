import { defineComponent, ref, computed } from 'vue';
import { useUserStore } from '@/store/user';
import { useDataStore } from '@/store/data';
import { useUxuiStore } from '@/store/uxui';
import { getFormatDate } from '@/helpers/dateFormatter';
import { useOpenCreatePanelHandler } from '@/composables/useTaskPanelOpen';
export default defineComponent({
    name: 'TaskCard',
    props: {
        task: {
            type: Object,
            required: true
        },
    },
    setup(props) {
        const userStore = useUserStore();
        const dataStore = useDataStore();
        const uxuiStore = useUxuiStore();
        const infoIsVisible = ref(false);
        const showInfoHandler = () => {
            infoIsVisible.value = !infoIsVisible.value;
        };
        const fetchUserById = (id) => {
            if (dataStore.usersList) {
                const user = dataStore.usersList.find(u => u.id === id);
                return user ? user.username : undefined;
            }
            return undefined;
        };
        const changeStatusHandler = (status) => {
            if (props.task.id) {
                dataStore.taskPatchRequest({ 'id': props.task.id, 'status': status });
            }
        };
        const deleteTaskHandler = (payload) => {
            dataStore.setTaskForEdit(payload);
            uxuiStore.setModalName('ModalDeleteTask');
        };
        const daysUntilDeadline = computed(() => {
            const currentDate = new Date();
            const deadlineDate = new Date(props.task.deadline);
            const timeDiff = deadlineDate.getTime() - currentDate.getTime();
            const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (daysDiff <= 2 && daysDiff >= 0) {
                const form = daysDiff === 1 ? 'день' : daysDiff > 1 && daysDiff < 5 ? 'дня' : 'дней';
                return `${daysDiff} ${form}!`;
            }
            else {
                return '';
            }
        });
        return {
            userStore,
            fetchUserById,
            showInfoHandler,
            infoIsVisible,
            changeStatusHandler,
            getFormatDate,
            useOpenCreatePanelHandler,
            deleteTaskHandler,
            daysUntilDeadline
        };
    },
});
//# sourceMappingURL=TaskCard.js.map