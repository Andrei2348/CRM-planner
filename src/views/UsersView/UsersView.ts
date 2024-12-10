import { defineComponent, onBeforeMount, computed, ref } from 'vue'
import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'
import { useUserStore } from '@/store/user'
import { useRoute } from 'vue-router'
import MainLayout from "@/layouts/MainLayout/MainLayout.vue"
import UserCard from '@/components/UserCard/UserCard.vue'
import { Project } from '@/types/projects'

export default defineComponent({
  name: 'UsersView',
	components: {
		MainLayout,
    UserCard
	},
  setup() {
    const route = useRoute()
    const dataStore = useDataStore()
    const uxuiStore = useUxuiStore()
    const userStore = useUserStore()
    const projectInfo = ref<Project | null>(null)

    const deleteUserHandler = async (id: number) => {  
      try {  
        await dataStore.projectInfoRequest(Number(route.params.id)) 
        projectInfo.value = dataStore.getSelectedProject   
        if (  
          projectInfo.value &&   
          projectInfo.value.users &&   
          Array.isArray(projectInfo.value.users) &&   
          projectInfo.value.users.length > 1  
        ) 
        {  
          projectInfo.value.users = projectInfo.value.users.filter(user => user.id !== id)  
          
          await dataStore.projectPatchRequest(projectInfo.value)  
          await dataStore.usersListRequest(Number(route.params.id))  
        } 
      } catch (error) {  
        console.error('Ошибка при удалении пользователя:', error)  
      }  
    }

    const filteredUsersList = computed(() => { 
      const userInfo = userStore.getUserInfo 
      const usersList = dataStore.getUsersList 
      if (usersList && userInfo) { 
        return usersList.filter(user => user.id !== userInfo.id) 
      } 
      return [] 
    })

    onBeforeMount(async () => {
      uxuiStore.setSelectedPage(3)
      await userStore.checkIfTeamLead()
      await dataStore.usersListRequest(Number(route.params.id))
    })

    return {
      dataStore,
      uxuiStore,
      userStore,
      filteredUsersList,
      deleteUserHandler
    }
  },
})