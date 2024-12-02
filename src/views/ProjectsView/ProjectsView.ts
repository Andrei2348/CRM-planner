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
      uxuiStore.setSelectedPage(1)
      const userInfo = userStore.getUserInfo
      const requests = [dataStore.projectsListRequest()]
      if (userInfo && userInfo.id) {
        requests.push(dataStore.getProjectsParticipationRequest(userInfo.id, 'invitationId'))
        requests.push(dataStore.getProjectsParticipationRequest(userInfo.id, 'teamleadId'))
      }
      await Promise.all(requests)
    })
    
    return {
      dataStore,
      uxuiStore
    }
  },
})