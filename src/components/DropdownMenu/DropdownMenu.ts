import { defineComponent, ref, watch } from 'vue'
import { MenuItemDropdown } from '@/types/common'
import clickOutside from '@/directives/clickOutside'

export default defineComponent({
  name: 'DropdownMenu',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    menuItems: {
      type: Array<MenuItemDropdown>,
      required: true,
    },
    menuIcon: {
      type: String,
			default: '',
    },
    menuOpen: {
      type: Boolean,
      default: false,
    },
		color: {
      type: String,
      default: '#000000',
    },
  },
  directives: {
    clickOutside,
  },
  setup(props) {
    const menuIsOpen = ref<boolean>(props.menuOpen)
    const clickY = ref<number>(0)
    const windowHeight = ref<number>(window.innerHeight)
    const menuPositionTop = ref<boolean>(false)

    const toggleMenuHandler = (event: MouseEvent): void => {
      menuIsOpen.value = !menuIsOpen.value
      clickY.value = event.clientY
      menuPositionTop.value = windowHeight.value / 2 < clickY.value
    }

    const close = (): void => {
      if (menuIsOpen.value) {
        menuIsOpen.value = false
      }
    }

    const handleClick = (status: string): void => {
      console.log(status)
      close()
    }

    watch(
      () => props.menuOpen,
      (newValue) => {
        menuIsOpen.value = newValue
      },
    )

    return {
      close,
      toggleMenuHandler,
      menuIsOpen,
      menuPositionTop,
      handleClick,
    }
  },
})