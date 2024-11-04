import { defineComponent, PropType, ref } from 'vue'
import { Task } from '@/types/projects'
import { useUserStore } from '@/store/user'
import { useDataStore } from '@/store/data'
import { getFormatDate } from '@/helpers/dateFormatter'

export default defineComponent({
  name: 'TaskCard',
  props: {  
		task: {  
			type: Object as PropType<Task>,  
			required: true  
		},
  }, 
  setup(props) {
    const userStore = useUserStore()
		const dataStore = useDataStore()
		const infoIsVisible = ref(false)

		const showInfoHandler = (): void => {
			infoIsVisible.value = !infoIsVisible.value
		}
   
		const fetchUserById = (id: number): string | undefined => {  
			if (dataStore.usersList) {  
				const user = dataStore.usersList.find(u => u.id === id)
				return user ? user.username : undefined  
			}  
			return undefined  
		}

		const changeStatusHandler = (status: string): void => {
			if(props.task.id){
				dataStore.taskPatchRequest(props.task.id, {'status': status})
			}
		}

		const editCardHandler = (task: Task): void => {
			dataStore.setTaskForEdit(task)
		}

    return {
      userStore,
			fetchUserById,
			showInfoHandler,
			infoIsVisible,
			changeStatusHandler,
			getFormatDate,
			editCardHandler
    }
  },
})