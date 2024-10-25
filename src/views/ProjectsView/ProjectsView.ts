import { defineComponent, onBeforeMount, onBeforeUnmount } from 'vue'
import MainLayout from "@/layouts/MainLayout/MainLayout.vue"
import { useDataStore } from '@/store/data'
import ProjectCard from '@/components/ProjectCard/ProjectCard.vue'

export default defineComponent({
  name: 'ProjectsView',
	components: {
		MainLayout,
    ProjectCard
	}, 
  setup() {
    const dataStore = useDataStore()

    onBeforeMount(() => {
      dataStore.projectsListRequest()
    })

    // onBeforeUnmount(() => {
    //   dataStore.setProjectList(null)
    // })
    return {
      dataStore
    }
  },
})