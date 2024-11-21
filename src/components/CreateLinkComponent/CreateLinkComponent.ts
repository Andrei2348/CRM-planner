import { defineComponent, onBeforeMount, computed, ref } from 'vue'
import { useUxuiStore } from '@/store/uxui'
import { useUserStore } from '@/store/user'
import { useDataStore } from '@/store/data'
import { Link } from '@/types/projects'
import { useRoute } from 'vue-router'
import { validateLinks } from '@/helpers/validateLinks'

export default defineComponent({
  name: 'CreateLinkComponent',
  setup() {
    const route = useRoute()
    const uxuiStore = useUxuiStore()
    const userStore = useUserStore()
    const dataStore = useDataStore()


    const defaultLinkData = (): Link => ({
      link: '',
      description: '',
      date: new Date().toLocaleDateString('en-CA'),
      user_id: userStore.getUserInfo?.id ?? 0,
      author: userStore.getUserInfo?.username ?? '',
      projectId: Number(route.params.id)
    })

    const linkData = ref<Link>(defaultLinkData())

    const resetForm = (): void => {
      linkData.value = defaultLinkData()
    }

    const getInputData = (key: keyof Link, value: string): void => {
      if (key in linkData.value) {
        (linkData.value[key] as string) = value
      }
    }

    const isSubmitDisabled = computed(() => { 
      return !(linkData.value.link && linkData.value.description && validateLinks(linkData.value.link))
    })

    const createLinkHandler = async (): Promise<void> => { 
      await dataStore.linkCreateRequest(linkData.value)
      resetForm()
    }

    onBeforeMount(async () => {
      uxuiStore.setSelectedPage(4)
      await dataStore.linksListRequest(Number(route.params.id))
    })

    return {
      uxuiStore,
      linkData,
      getInputData,
      resetForm,
      createLinkHandler,
      isSubmitDisabled
    }
  }
})
