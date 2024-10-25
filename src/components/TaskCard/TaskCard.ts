import { defineComponent, PropType, ref } from 'vue'
import { Task } from '@/types/projects'
import { useUserStore } from '@/store/user'
import { useDataStore } from '@/store/data'

export default defineComponent({
  name: 'TaskCard',
  props: {  
		task: {  
			type: Object as PropType<Task>,  
			required: true  
		},
  }, 
  setup() {
    const userStore = useUserStore()
		const dataStore = useDataStore()
		const infoIsVisible = ref(false)

		const showInfoHandler = () => {
			infoIsVisible.value = !infoIsVisible.value
		}
   
		const fetchUserById = (id: number): string | undefined => {  
			if (dataStore.usersList) {  
				const user = dataStore.usersList.find(u => u.id === id)
				return user ? user.username : undefined  
			}  
			return undefined  
		}

    return {
      userStore,
			fetchUserById,
			showInfoHandler,
			infoIsVisible
    }
  },
})