import { defineComponent, onBeforeMount, computed, ref } from 'vue'
import { useUxuiStore } from '@/store/uxui'
import { useUserStore } from '@/store/user'
import { useDataStore } from '@/store/data'
import { Link } from '@/types/projects'
import { useRoute } from 'vue-router'
import { validateLinks } from '@/helpers/validateLinks'
import { useCloseCreatePanelHandler } from '@/composables/useTaskPanelOpen'


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

    const editFlag = ref(false)
    const blankDataLink = ref<Link>(defaultLinkData())

    const resetForm = (): void => {
      blankDataLink.value = defaultLinkData()
    }

    const getInputData = (key: keyof Link, value: string): void => {
      if (key in blankDataLink.value) {
        (blankDataLink.value[key] as string) = value
      }
    }

    const isSubmitDisabled = computed(() => { 
      return !(blankDataLink.value.link && blankDataLink.value.description && validateLinks(blankDataLink.value.link))
    })

    const createLinkHandler = async (): Promise<void> => {
      if (blankDataLink.value.id) {
        await dataStore.linkPatchRequest(blankDataLink.value)
      } else {
        await dataStore.linkCreateRequest(blankDataLink.value)
      }
      resetForm()
      useCloseCreatePanelHandler()
    }

    onBeforeMount(() => {
      if (dataStore.getLinkForEdit) {
        blankDataLink.value = { ...dataStore.getLinkForEdit }
        editFlag.value = true
      } else {
        resetForm()
      }
    })
    return {
      uxuiStore,
      getInputData,
      resetForm,
      createLinkHandler,
      isSubmitDisabled,
      blankDataLink,
      editFlag
    }
  }
})
