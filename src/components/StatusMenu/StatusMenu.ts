import { defineComponent, ref } from 'vue'
import clickOutside from '@/directives/clickOutside'
import { DROPDOWN_STATUS_MENU } from '@/config/menu'
import { TasksStatuses } from '@/types/projects'

export default defineComponent({
  name: 'StatusMenu',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    openPermission: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  directives: {
    clickOutside,
  },
  setup(_, { emit }) {
    const menuIsOpen = ref<boolean>(false)
    const clickY = ref<number>(0)
    const windowHeight = ref<number>(window.innerHeight)
    const menuPositionTop = ref<boolean>(false)

    const toggleMenuHandler = (event: MouseEvent): void => {
      menuIsOpen.value = !menuIsOpen.value
      clickY.value = event.clientY
      menuPositionTop.value = windowHeight.value / 2 < clickY.value
    }

    const getTitleByStatus = (status: string) => {  
			const foundStatus = DROPDOWN_STATUS_MENU.find(item => item.status === status) 
			return foundStatus ? foundStatus.title : null
		}  
	
		const getColorByStatus = (status: string) => {  
			const foundColor = DROPDOWN_STATUS_MENU.find(item => item.status === status) 
			return foundColor ? foundColor.color : '#000000'
		} 

    const closeHandler = (): void => {
      if (menuIsOpen.value) {
        menuIsOpen.value = false
      }
    }

    const handleClick = (status: TasksStatuses): void => {
      emit('changeSelectHandler', status)
      closeHandler()
    }

    return {
      closeHandler,
      toggleMenuHandler,
      menuIsOpen,
      menuPositionTop,
      handleClick,
      getTitleByStatus,
      getColorByStatus,
      DROPDOWN_STATUS_MENU
    }
  },
})