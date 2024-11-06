import { defineComponent, onBeforeMount } from 'vue'
import MainLayout from "@/layouts/MainLayout/MainLayout.vue"
import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'
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

    onBeforeMount(() => {
      dataStore.projectsListRequest()
    })
    return {
      dataStore,
      uxuiStore
    }
  },
})