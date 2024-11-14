import { defineComponent, onBeforeMount, computed } from 'vue'
import { useDataStore } from '@/store/data'
import { useUxuiStore } from '@/store/uxui'
import { useUserStore } from '@/store/user'
import { useRoute } from 'vue-router'
import MainLayout from "@/layouts/MainLayout/MainLayout.vue"
import UserCard from '@/components/UserCard/UserCard.vue'
import { UserItemResponse } from '@/types/user'

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

    const filteredUsersList = computed(() => { 
      const userInfo = userStore.getUserInfo 
      const usersList = dataStore.getUsersList 
      if (usersList && userInfo) { 
        return usersList.filter(user => user.id !== userInfo.id) 
      } 
      return [] 
    })

    onBeforeMount(async () => {
      await dataStore.usersListRequest(Number(route.params.id))
    })

    return {
      dataStore,
      uxuiStore,
      userStore,
      filteredUsersList
    }
  },
})