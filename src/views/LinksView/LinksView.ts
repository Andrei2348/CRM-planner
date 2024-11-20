import { defineComponent, onBeforeMount } from 'vue'
import MainLayout from "@/layouts/MainLayout/MainLayout.vue"
import { useUxuiStore } from '@/store/uxui'

export default defineComponent({
  name: 'LinksView',
  components: {
		MainLayout
	},
  setup() {
    const uxuiStore = useUxuiStore()

    onBeforeMount(() => {
      uxuiStore.setSelectedPage(4)
    })

    return {
      uxuiStore
    }
  },
})