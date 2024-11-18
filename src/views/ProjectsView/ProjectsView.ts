import { defineComponent, onBeforeMount } from 'vue'
import MainLayout from "@/layouts/MainLayout/MainLayout.vue"
import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'
import { useUserStore } from '@/store/user'
import ProjectCard from '@/components/ProjectCard/ProjectCard.vue'
import CreateWidget from '@/components/CreateWidget/CreateWidget.vue'

export default defineComponent({
  name: 'ProjectsView',
	components: {
		MainLayout,
    ProjectCard,
    CreateWidget
	}, 
  setup() {
    const uxuiStore = useUxuiStore()
    const dataStore = useDataStore()
    const userStore = useUserStore()

    onBeforeMount(async () => {
      const userInfo = userStore.getUserInfo
      const requests = [dataStore.projectsListRequest()]
      if (userInfo) {
        requests.push(dataStore.getProjectsParticipationRequest(userInfo.id))
      }
      await Promise.all(requests)
    })
    
    return {
      dataStore,
      uxuiStore
    }
  },
})