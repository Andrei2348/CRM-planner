import { defineComponent } from 'vue'
import { MENU_DATA } from '@/config/menu'
import { useUxuiStore } from '@/store/uxui'

export default defineComponent({
  name: 'MenuComponent',
  setup() {
    const uxuiStore = useUxuiStore()
    return {
			MENU_DATA,
      uxuiStore
		}
  },
})