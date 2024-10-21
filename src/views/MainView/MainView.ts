import { defineComponent, onBeforeMount } from 'vue'
import MainLayout from "@/layouts/MainLayout/MainLayout.vue"
import { useDataStore } from '@/store/data'


export default defineComponent({
  name: 'MainView',
	components: {
		MainLayout,
	},
  setup() {
    const dataStore = useDataStore()
    onBeforeMount(() => {
      dataStore.dealsListRequest()
    })
    return {}
  },
})