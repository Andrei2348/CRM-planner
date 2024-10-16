import { defineComponent } from 'vue'
import { MENU_DATA } from '@/config/menu'

export default defineComponent({
  name: 'MenuComponent',
  setup() {
    return {
			MENU_DATA
		}
  },
})