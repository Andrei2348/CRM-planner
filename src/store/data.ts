import { defineStore } from 'pinia'
import useApiCall from '@/composables/useApiCall'

export const useDataStore = defineStore('data', () => {
	
	const dealsListRequest = async (): Promise<void> => {
		try{
			const response = await useApiCall.get('deals');
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}
  return {
		dealsListRequest
  }
})