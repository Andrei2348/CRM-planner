import { defineComponent, onBeforeMount, ref, computed, watch } from 'vue';
import { DROPDOWN_STATUS_MENU } from '@/config/menu';
import { useRoute } from 'vue-router';
import { useDataStore } from '@/store/data';
import { useUxuiStore } from '@/store/uxui';
import SelectMenu from '@/components/SelectMenu/SelectMenu.vue';
import { useCloseCreatePanelHandler } from '@/composables/useTaskPanelOpen';
export default defineComponent({
    name: 'CreateTaskComponent',
    components: {
        SelectMenu,
    },
    setup() {
        const route = useRoute();
        const dataStore = useDataStore();
        const uxuiStore = useUxuiStore();
        const editFlag = ref(false);
        const defaultTaskData = () => ({
            projectId: Number(route.params.id),
            executorId: null,
            task: '',
            timeCreate: new Date().toLocaleDateString('en-CA'),
            deadline: '',
            comment: '',
            color: '#FF5733',
            status: 'inProgress',
        });
        const blankDataTask = ref(defaultTaskData());
        const resetForm = () => {
            blankDataTask.value = defaultTaskData();
        };
        const getInputData = (key, value) => {
            if (key === 'projectId' ||
                key === 'executorId' ||
                key === 'task' ||
                key === 'timeCreate' ||
                key === 'deadline' ||
                key === 'comment' ||
                key === 'color' ||
                key === 'status') {
                blankDataTask.value[key] = value;
            }
        };
        const createTaskHandler = async () => {
            if (blankDataTask.value.id) {
                await dataStore.taskPatchRequest(blankDataTask.value);
            }
            else {
                await dataStore.taskCreateRequest(blankDataTask.value);
            }
            resetForm();
            useCloseCreatePanelHandler();
        };
        const changeSelectHandler = (status) => {
            blankDataTask.value.status = status;
        };
        const changeExecutorHandler = (user) => {
            blankDataTask.value.executorId = user.id;
        };
        const getTitleById = (id) => {
            if (dataStore.usersList) {
                const user = dataStore.usersList.find(item => item.id === id);
                return user ? user.username : null;
            }
            return null;
        };
        const disableButtonFlag = computed(() => {
            return !(blankDataTask.value.projectId &&
                blankDataTask.value.executorId &&
                blankDataTask.value.task &&
                blankDataTask.value.deadline);
        });
        watch(() => dataStore.usersList, (newUsersList) => {
            if (newUsersList && newUsersList.length > 0) {
                blankDataTask.value.executorId = newUsersList[0].id;
            }
            else {
                blankDataTask.value.executorId = null;
            }
        }, { immediate: true });
        watch(() => uxuiStore.getCreatePanelName, (newValue) => {
            if (newValue) {
                resetForm();
            }
        });
        onBeforeMount(() => {
            if (dataStore.getTaskForEdit) {
                blankDataTask.value = { ...dataStore.getTaskForEdit };
                editFlag.value = true;
            }
            else {
                resetForm();
            }
        });
        return {
            DROPDOWN_STATUS_MENU,
            changeSelectHandler,
            getInputData,
            blankDataTask,
            dataStore,
            disableButtonFlag,
            createTaskHandler,
            getTitleById,
            changeExecutorHandler,
            uxuiStore,
            editFlag,
            resetForm,
        };
    },
});
//# sourceMappingURL=CreateTaskComponent.js.map