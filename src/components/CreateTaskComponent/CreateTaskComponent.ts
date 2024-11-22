import { defineComponent, onBeforeMount, ref, computed, watch } from 'vue'
import { DROPDOWN_STATUS_MENU } from '@/config/menu'
import { Task, TasksStatuses, Colors } from '@/types/projects'
import { User } from '@/types/user'
import { useRoute } from 'vue-router'
import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'
import SelectMenu from '@/components/SelectMenu/SelectMenu.vue'
import { useCloseCreatePanelHandler } from '@/composables/useTaskPanelOpen'

export default defineComponent({
  name: 'CreateTaskComponent',
  components: {
    SelectMenu,
  },
  setup() {
    const route = useRoute()
    const dataStore = useDataStore()
    const uxuiStore = useUxuiStore()
    const editFlag = ref(false)

    const defaultTaskData = (): Task => ({
      projectId: Number(route.params.id),
      executorId: null,
      task: '',
      timeCreate: new Date().toLocaleDateString('en-CA'),
      deadline: '',
      comment: '',
      color: '#FF5733' as Colors,
      status: 'inProgress' as TasksStatuses,
    })

    const blankDataTask = ref<Task>(defaultTaskData())

    const resetForm = (): void => {
      blankDataTask.value = defaultTaskData()
    }

    const getInputData = (key: keyof Task, value: string | number): void => {
      if (key === 'projectId' || key === 'executorId' || key === 'task' || key === 'timeCreate' || key === 'deadline' || key === 'comment' || key === 'color' || key === 'status') {
        blankDataTask.value[key] = value as never
      }
    }

    const createTaskHandler = async (): Promise<void> => {
      if (blankDataTask.value.id) {
        await dataStore.taskPatchRequest(blankDataTask.value)
      } else {
        await dataStore.taskCreateRequest(blankDataTask.value)
      }
      resetForm()
      useCloseCreatePanelHandler()
    }

    const changeSelectHandler = (status: TasksStatuses): void => {
      blankDataTask.value.status = status
    }

    const changeExecutorHandler = (user: User): void => {
      blankDataTask.value.executorId = user.id
    }

    const getTitleById = (id: number | null): string | null => {
      if (dataStore.usersList) {
        const user = dataStore.usersList.find(item => item.id === id)
        return user ? user.username : null
      }
      return null
    }

    const disableButtonFlag = computed(() => {
      return !(blankDataTask.value.projectId &&
               blankDataTask.value.executorId &&
               blankDataTask.value.task &&
               blankDataTask.value.deadline)
    })

    watch(() => dataStore.usersList, (newUsersList) => {
      if (newUsersList && newUsersList.length > 0) {
        blankDataTask.value.executorId = newUsersList[0].id
      } else {
        blankDataTask.value.executorId = null
      }
    }, { immediate: true })

    watch(() => uxuiStore.getCreatePanelName, (newValue) => {
      if (newValue) {
        resetForm()
      }
    })

    onBeforeMount(() => {
      if (dataStore.getTaskForEdit) {
        blankDataTask.value = { ...dataStore.getTaskForEdit }
        editFlag.value = true
      } else {
        resetForm()
      }
    })

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
    }
  },
})
