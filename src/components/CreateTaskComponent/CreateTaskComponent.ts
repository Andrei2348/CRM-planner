import { defineComponent, onBeforeMount, computed, reactive, watch } from 'vue'  
import { DROPDOWN_STATUS_MENU } from '@/config/menu'  
import { Task, TasksStatuses } from '@/types/projects'  
import { User } from '@/types/user'
import { useRoute } from 'vue-router'  
import { useDataStore } from '@/store/data'  
import { useUxuiStore } from '@/store/uxui'
import SelectMenu from '@/components/SelectMenu/SelectMenu.vue'  

export default defineComponent({  
  name: 'CreateTaskComponent',  
  components: {  
    SelectMenu,  
  },  
  setup() {  
    const route = useRoute()  
    const dataStore = useDataStore() 
    const uxuiStore = useUxuiStore() 

    const blankDataTask = reactive<Task>({  
      projectId: Number(route.params.id),   
      executorId: null,  
      task: '',  
      timeCreate: '',  
      deadline: '',  
      comment: '',  
      status: 'inProgress'  
    })

    const resetForm = () => {  
      blankDataTask.projectId = Number(route.params.id)
      blankDataTask.task = ''
      blankDataTask.timeCreate = new Date().toLocaleDateString('en-CA') 
      blankDataTask.deadline = ''  
      blankDataTask.comment = ''  
      blankDataTask.status = 'inProgress' 
    }
    
    const changeSelectHandler = (status: TasksStatuses): void => {  
      blankDataTask.status = status  
    }

    const changeExecutorHandler = (user: User): void => {
      blankDataTask.executorId = user.id
      console.log(blankDataTask)
    } 

    const getInputData = (key: keyof Task, value: string | number): void => {   
      (blankDataTask[key] as string | number) = value  
    } 

    const createTaskHandler = (): void => {   
      dataStore.taskCreateRequest(blankDataTask)
      resetForm()
    }  

    const getTitleById = (id: number | null) => {   
      if(dataStore.usersList){  
        const getTitle = dataStore.usersList.find(item => item.id === id)   
        return getTitle ? getTitle.username : null  
      }  
    }  

    const disableButtonFlag = computed(() => {  
      return !(blankDataTask.projectId && 
        blankDataTask.executorId && 
        blankDataTask.task && 
        blankDataTask.deadline)  
    })  

    onBeforeMount(() => {  
      resetForm()
      blankDataTask.projectId = Number(route.params.id);  
      blankDataTask.timeCreate = new Date().toLocaleDateString('en-CA')
    })

    watch(() => dataStore.usersList, (newUsersList) => {  
      if (newUsersList && newUsersList.length > 0) {  
        blankDataTask.executorId = newUsersList[0].id  
      } else {  
        blankDataTask.executorId = null  
      }  
    }, { immediate: true })

    watch(() => uxuiStore.getIsCreateTaskPanelVisible, (newValue) => {  
      if (newValue) {  
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
    }  
  },  
})