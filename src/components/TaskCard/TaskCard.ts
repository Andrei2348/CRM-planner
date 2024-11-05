import { defineComponent, PropType, ref } from 'vue'
import { Task } from '@/types/projects'
import { useUserStore } from '@/store/user'
import { useDataStore } from '@/store/data'
import { getFormatDate } from '@/helpers/dateFormatter'
import {useOpenCreatePanelHandler} from '@/composables/useTaskPanelOpen'
import { TasksStatuses } from '@/types/projects'

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

		const changeStatusHandler = (status: TasksStatuses): void => {
			if(props.task.id){
				dataStore.taskPatchRequest({'id': props.task.id, 'status': status})
			}
		}

    return {
      userStore,
		fetchUserById,
		showInfoHandler,
		infoIsVisible,
		changeStatusHandler,
		getFormatDate,
		useOpenCreatePanelHandler
    }
  },
})