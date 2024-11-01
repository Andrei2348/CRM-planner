import { defineComponent, PropType, reactive, ref } from 'vue'
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
		const readonlyFlag = ref(true)
		const commentValue = reactive(  
			{'comment': props.task.comment || ''}  
		)  

		const showInfoHandler = (): void => {
			infoIsVisible.value = !infoIsVisible.value
			if(infoIsVisible.value && !readonlyFlag.value){
				editCommentHandler()
			}
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

		const getInputData = (key: string, value: string): void => {
			if (key === 'comment') {  
				commentValue.comment = value
			} 
		}

		const editCommentHandler = () :void => {
			readonlyFlag.value = !readonlyFlag.value
		}

		const changeCommentHandler = () :void => {
			editCommentHandler()
			if(props.task.id){
				dataStore.taskPatchRequest(props.task.id, commentValue)
			}
		}

    return {
      userStore,
			fetchUserById,
			showInfoHandler,
			infoIsVisible,
			changeStatusHandler,
			getFormatDate,
			getInputData,
			readonlyFlag,
			editCommentHandler,
			changeCommentHandler,
			commentValue
    }
  },
})