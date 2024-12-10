import { defineComponent, onBeforeMount, ref, computed } from 'vue'
import { Project, Colors } from '@/types/projects'
import { useDataStore } from '@/store/data'
import { useUserStore } from '@/store/user'
import { useCloseCreatePanelHandler } from '@/composables/useTaskPanelOpen'

export default defineComponent({
  name: 'CreateProjectComponent',
  
  setup() {
    const dataStore = useDataStore()
    const userStore = useUserStore()

    const defaultProjectData = (): Project => ({
      project: '',
      description: '',
      users: [
        {
          id: userStore.getUserInfo?.id ?? 0,
          username: userStore.getUserInfo?.username ?? '',
        },
      ],
      color: '#FF5733' as Colors,
    })

    const blankDataProject = ref<Project>(defaultProjectData())
    const editFlag = ref(false)

    const resetForm = () => {
      blankDataProject.value = defaultProjectData()
    }

    const getInputData = (key: keyof Project, value: string | number) => {
      if (key === 'project' || key === 'description' || key === 'color') {
        blankDataProject.value[key] = value as Colors
      } else if (key === 'users') {
        blankDataProject.value[key] = value as any
      }
    }

    const createProjectHandler = async (): Promise<void> => {
      if (blankDataProject.value.id) {
        await dataStore.projectPatchRequest(blankDataProject.value)
      } else {
        await dataStore.projectCreateRequest(blankDataProject.value)
      }
      resetForm()
      useCloseCreatePanelHandler()
    }

    const disableButtonFlag = computed(() => {
      return !(blankDataProject.value.project && blankDataProject.value.description)
    })

    onBeforeMount(() => {
      const projectForEdit = dataStore.getProjectForEdit
      if (projectForEdit) {
        blankDataProject.value = { ...projectForEdit }
        editFlag.value = true
      } else {
        editFlag.value = false
      }
    })

    return {
      getInputData,
      createProjectHandler,
      userStore,
      blankDataProject,
      disableButtonFlag,
      editFlag,
      resetForm
    }
  },
})
