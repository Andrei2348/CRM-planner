import { defineComponent, onBeforeMount, computed, reactive } from 'vue'
import { DROPDOWN_STATUS_MENU } from '@/config/menu'
import { Task, TasksStatuses } from '@/types/projects'
import { useRoute } from 'vue-router'
import { useDataStore } from '@/store/data'
import SelectMenu from '@/components/SelectMenu/SelectMenu.vue'

export default defineComponent({
  name: 'CreateTaskComponent',
  components: {
    SelectMenu,
  },
  setup() {
    const blankDataTask = reactive<Task>({
      projectId: 0,
      executorId: 0,  
      task: '',  
      timeCreate: '',
      deadline: '',  
      comment: '',
      status: 'inProgress' 
    })
    const route = useRoute()
    const dataStore = useDataStore()

    const changeSelectHandler = (status: TasksStatuses) => {
      blankDataTask.status = status
    }

    const getInputData = (key: keyof Task, value: string | number): void => {   
      (blankDataTask[key] as string | number) = value
    }

    const createTaskHandler = (): void => {
      console.log(blankDataTask)
    }

    const disableButtonFlag = computed(() => {  
      return !(blankDataTask.projectId && blankDataTask.executorId && blankDataTask.task && blankDataTask.deadline)
    })

    onBeforeMount(() => {  
      blankDataTask.projectId = Number(route.params.id)
      blankDataTask.timeCreate = new Date().toISOString()
    })  

    return {
      DROPDOWN_STATUS_MENU,
      changeSelectHandler,
      getInputData,
      blankDataTask,
      dataStore,
      disableButtonFlag,
      createTaskHandler
    }
  },
})