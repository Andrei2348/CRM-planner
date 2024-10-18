// import { defineStore } from 'pinia'
// import { ref } from 'vue'
// import axiosClient from '@/composables/axiosClient'
// import { User, UsersResponse, DataUser, DataUserResponse } from '@/types/user'

// export const useUserStore = defineStore('user', () => {
//   const users = ref<User[] | null>(null)
//   const userInfo = ref<DataUser | null>(null)
//   const isLoading = ref(false)
//   const userIsLoading = ref(false)

//   const setIsLoading = (payload: boolean) => {
//     isLoading.value = payload
//   }

//   const setUserIsLoading = (payload: boolean) => {
//     userIsLoading.value = payload
//   }

//   const setUserInfo = (payload: DataUser | null) => {
//     userInfo.value = payload
//   }

//   const asyncGetUsers = async () => {
//     try {
//       setIsLoading(true)
//       const response: UsersResponse = await axiosClient.get('api/get-users')
//       users.value = response.data.users
//       if(users.value.length > 0){
//         await asyncGetUser(users.value[0])
//       }
//     } catch (error) {
//       console.error(error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const asyncGetUser = async (payload: User) => {
//     try {
//       setUserIsLoading(true)
//       const response: DataUserResponse = await axiosClient.get(`/api/get-user?user_id=${payload.id}`)
//       setUserInfo(response.data)
//     } catch (error) {
//       console.error(error)
//     } finally {
//       setUserIsLoading(false)
//     }
//   }

//   return {
//     users,
//     isLoading,
//     userIsLoading,
//     asyncGetUsers,
//     asyncGetUser,
//     userInfo
//   }
// })