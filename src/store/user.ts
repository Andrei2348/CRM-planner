import { defineStore } from 'pinia'
import { ref } from 'vue'
import useApiCall from '@/composables/useApiCall'
import { UserLoginItem, UserItem, UserApiResponse } from '@/types/user'
import { useRouter } from 'vue-router'
import { setStorageItemWithExpiry } from '@/helpers/localStorageHelpers'

export const useUserStore = defineStore('user', () => {
  const isLoginStatus = ref(false)
  const userId = ref<number | null>(null)
  const router = useRouter()

  const setIsLoginStatus = (payload: boolean) => {
    isLoginStatus.value = payload
  }

	const handleResponse = (status: number, response: UserApiResponse) => {
		if (status === 201) {
			userId.value = response.data.id
			setIsLoginStatus(true)
			setStorageItemWithExpiry(response.token)
			router.push('/')
		} else {
			userId.value = null
			setIsLoginStatus(false)
		}
	}
	 

  const userLoginRequest = async (url: string, user: UserLoginItem): Promise<void> => {
    try {
      const { status, data } = await useApiCall.post(url, user);
    		handleResponse(status, data);
    } catch (error) {
      console.log(error)
    }
  }

  const userRegisterRequest = async (url: string, user: UserItem): Promise<void> => {
    try {
      const { status, data } = await useApiCall.post(url, user);
    		handleResponse(status, data);
    } catch (error) {
      console.log(error)
    }
  }

  return {
    isLoginStatus,
    userLoginRequest,
    setIsLoginStatus,
    userRegisterRequest
  }
})
