import { defineStore } from 'pinia'
import { ref } from 'vue'
import useApiCall from '@/composables/useApiCall'
import { UserLoginItem } from '@/types/user'
import { useRouter } from 'vue-router'
import { setStorageItemWithExpiry } from '@/helpers/localStorageHelpers'

export const useUserStore = defineStore('user', () => {
	const isLoginStatus = ref(false)
	const userId = ref<number | null>(null)
	const router = useRouter()

	const setIsLoginStatus = (payload: boolean) => {
		isLoginStatus.value = payload
	}

	const userLoginRequest = async (url: string, user: UserLoginItem): Promise<void> => {
		try{
			const response = await useApiCall.post(url, user);
			if (response.status === 201){
				userId.value = response.data.data.id
				setIsLoginStatus(true)
				setStorageItemWithExpiry(response.data.token)
				router.push('/')
			} else {
				userId.value = null
				setIsLoginStatus(false)
			}
		} catch (error) {
			console.log(error)
		}
	}
  return {
		isLoginStatus,
    userLoginRequest,
		setIsLoginStatus
  }
})