import { defineComponent, onBeforeMount, watch } from 'vue'
import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'
import { useUserStore } from '@/store/user'
import MainLayout from "@/layouts/MainLayout/MainLayout.vue"
import { useRoute } from 'vue-router'
import CreateTaskComponent from '@/components/CreateTaskComponent/CreateTaskComponent.vue'
import TasksArea from '@/components/TasksArea/TasksArea.vue'
import CreateWidget from '@/components/CreateWidget/CreateWidget.vue'
import { DROPDOWN_STATUS_MENU } from '@/config/menu'

export default defineComponent({
  name: 'BoardsView',
	components: {
		MainLayout,
    CreateTaskComponent,
    TasksArea,
    CreateWidget
	},
  setup() {
    const route = useRoute()
    const dataStore = useDataStore()
    const uxuiStore = useUxuiStore()
    const userStore = useUserStore()

    // Определение, являетесь ли тимлидом
    watch( [() => userStore.getUserInfo, () => dataStore.getSelectedProject], ([newUserInfo, newSelectedProject]) => { 
      if (newUserInfo && newSelectedProject) { 
        userStore.setIsTeamLead(newUserInfo.id === newSelectedProject.teamLead) 
      } else { 
        userStore.setIsTeamLead(false) 
      } 
    }, {deep: true})

    onBeforeMount(async () => {
      await Promise.all([
        dataStore.projectInfoRequest(Number(route.params.id)),
        dataStore.tasksListRequest(Number(route.params.id)),  
        dataStore.usersListRequest(Number(route.params.id)),  
      ]);
    });

    return {
      uxuiStore,
      dataStore,
      DROPDOWN_STATUS_MENU
    }
  },
})