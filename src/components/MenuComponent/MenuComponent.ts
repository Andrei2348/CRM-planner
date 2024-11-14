import { defineComponent, ref } from 'vue'
import { MENU_DATA } from '@/config/menu'
import { useUxuiStore } from '@/store/uxui'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'MenuComponent',
  setup() {
    const uxuiStore = useUxuiStore()
    const route = useRoute()
    const selectedId = ref<number>(Number(route.params.id))

    return {
			MENU_DATA,
      uxuiStore,
      selectedId
		}
  },
})