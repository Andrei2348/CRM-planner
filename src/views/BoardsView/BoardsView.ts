import { defineComponent, onBeforeMount } from 'vue'
import { useDataStore } from '@/store/data'
import MainLayout from "@/layouts/MainLayout/MainLayout.vue"
import { useRoute } from 'vue-router'
import TaskCard from '@/components/TaskCard/TaskCard.vue'

export default defineComponent({
  name: 'BoardsView',
	components: {
		MainLayout,
    TaskCard
	},
  setup() {
    const route = useRoute()
    const dataStore = useDataStore()

    onBeforeMount(() => {
      dataStore.tasksListRequest(Number(route.params.id))
      dataStore.usersListRequest(Number(route.params.id))
    })

    return {
      dataStore
    }
  },
})