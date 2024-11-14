import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import useApiCall from '@/composables/useApiCall'
import { UserLoginItem, UserItem, UserApiResponse, UserItemResponse } from '@/types/user'
import { useRouter } from 'vue-router'
import { setStorageItemWithExpiry } from '@/helpers/localStorageHelpers'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const isLoginStatus = ref(false)
  const userInfo = ref<UserItemResponse | null>(null)
  const isTeamLead = ref(false)

  const setUserInfo = (payload: UserItemResponse | null): void => {
    userInfo.value = payload
  }

  const getUserInfo = computed(() => {  
    return userInfo.value 
  }) 

  const setIsLoginStatus = (payload: boolean): void => {
    isLoginStatus.value = payload
  }

  const setIsTeamLead = (payload: boolean): void => {
    isTeamLead.value = payload
  }

  const getIsTeamLead = computed(() => {  
    return isTeamLead.value 
  }) 

	const handleResponse = (status: number, response: UserApiResponse) => {
		if (status === 200 || status === 201) {
			setUserInfo(response.data)
			setIsLoginStatus(true)
			setStorageItemWithExpiry(response.token)
			router.push('/')
		} else {
			setUserInfo(null)
			setIsLoginStatus(false)
		}
	}
	 
  const preLoginUserStatus = async (): Promise<void> => {
    try {
      const { status, data } = await useApiCall.get('/auth_me')
      if(status === 200 || status === 201){
        setIsLoginStatus(true)
        setUserInfo(data)
      } else {
        setUserInfo(null)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const userLoginRequest = async (url: string, user: UserLoginItem): Promise<void> => {
    try {
      const { status, data } = await useApiCall.post(url, user)
    		handleResponse(status, data)
    } catch (error) {
      console.log(error)
    }
  }

  const userRegisterRequest = async (url: string, user: UserItem): Promise<void> => {
    try {
      const { status, data } = await useApiCall.post(url, user)
    		handleResponse(status, data)
    } catch (error) {
      console.log(error)
    }
  }

  const getUserInfoRequest = async (id: number): Promise<UserItemResponse | null | undefined> => {
    try {
      const { status, data } = await useApiCall.get(`/users/${id}`)
      if(status === 200 || status === 201){
        return data[0]
      } else {
        return
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    getUserInfo,
    isLoginStatus,
    userLoginRequest,
    setIsLoginStatus,
    userRegisterRequest,
    preLoginUserStatus,
    setUserInfo,
    setIsTeamLead,
    getIsTeamLead,
    getUserInfoRequest
  }
})
