import { defineComponent, PropType, ref } from 'vue'
import { Task } from '@/types/projects'
import { useUserStore } from '@/store/user'
import { useDataStore } from '@/store/data'
import { DROPDOWN_STATUS_MENU } from '@/config/menu'
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu.vue'

export default defineComponent({
  name: 'TaskCard',
	components: {
		DropdownMenu,
	},
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

		const getTitleByStatus = (status: string) => {  
			const foundStatus = DROPDOWN_STATUS_MENU.find(item => item.status === status) 
			return foundStatus ? foundStatus.title : null
		}  
	
		const getColorByStatus = (status: string) => {  
			const foundColor = DROPDOWN_STATUS_MENU.find(item => item.status === status) 
			return foundColor ? foundColor.color : '#000000'
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
			infoIsVisible,
			getTitleByStatus,
			getColorByStatus,
			DROPDOWN_STATUS_MENU
    }
  },
})