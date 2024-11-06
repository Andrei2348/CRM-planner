import { defineComponent, onBeforeMount, computed, ref, watch } from 'vue'  
import { DROPDOWN_STATUS_MENU } from '@/config/menu'  
import { Task, TasksStatuses } from '@/types/projects'  
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
    const blankDataTask = ref<Task>({  
      projectId: Number(route.params.id),   
      executorId: null,  
      task: '',  
      timeCreate: '',  
      deadline: '',  
      comment: '',  
      color: '#FF5733',
      status: 'inProgress'  
    })

    const resetForm = (): void => {  
      blankDataTask.value.projectId = Number(route.params.id)
      blankDataTask.value.task = ''
      blankDataTask.value.timeCreate = new Date().toLocaleDateString('en-CA') 
      blankDataTask.value.deadline = ''  
      blankDataTask.value.comment = ''  
      blankDataTask.value.color = '#FF5733'  
      blankDataTask.value.status = 'inProgress' 
    }
    
    const changeSelectHandler = (status: TasksStatuses): void => {  
      blankDataTask.value.status = status  
    }

    const changeExecutorHandler = (user: User): void => {
      blankDataTask.value.executorId = user.id
    } 

    const getInputData = (key: keyof Task, value: string | number): void => {   
      (blankDataTask.value[key] as string | number) = value  
    } 

    const createTaskHandler = (): void => {
      if(blankDataTask.value.id){
        dataStore.taskPatchRequest(blankDataTask.value)
      } else {
        dataStore.taskCreateRequest(blankDataTask.value)
      }
      resetForm()
      useCloseCreatePanelHandler()
    }  

    const getTitleById = (id: number | null) => {   
      if(dataStore.usersList){  
        const getTitle = dataStore.usersList.find(item => item.id === id)   
        return getTitle ? getTitle.username : null  
      }  
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
      resetForm()
      if(dataStore.getTaskForEdit === null){
        blankDataTask.value.projectId = Number(route.params.id);  
        blankDataTask.value.timeCreate = new Date().toLocaleDateString('en-CA')
      } else {
        blankDataTask.value = {...dataStore.getTaskForEdit}
        editFlag.value = true
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
      editFlag
    }  
  },  
})