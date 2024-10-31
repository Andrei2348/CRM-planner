import { defineComponent, onBeforeMount } from 'vue'
import { useDataStore } from '@/store/data'
import MainLayout from "@/layouts/MainLayout/MainLayout.vue"
import { useRoute } from 'vue-router'
import CreateTaskComponent from '@/components/CreateTaskComponent/CreateTaskComponent.vue'
import TasksArea from '@/components/TasksArea/TasksArea.vue'
import { DROPDOWN_STATUS_MENU } from '@/config/menu'

export default defineComponent({
  name: 'BoardsView',
	components: {
		MainLayout,
    CreateTaskComponent,
    TasksArea
	},
  setup() {
    const route = useRoute()
    const dataStore = useDataStore()

    onBeforeMount(async () => {  
      await Promise.all([  
        dataStore.tasksListRequest(Number(route.params.id)),  
        dataStore.usersListRequest(Number(route.params.id)),  
      ]);  
    });

    return {
      dataStore,
      DROPDOWN_STATUS_MENU
    }
  },
})