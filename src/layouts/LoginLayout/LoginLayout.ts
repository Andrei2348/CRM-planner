import { defineComponent, onBeforeMount, ref } from 'vue'
import { BACKGROUNDS } from '@/config/user'

export default defineComponent({
  name: 'LoginLayout',
  setup() {
    const backgroundImage = ref<string>('')
    
    onBeforeMount(() => {
      const randomIndex = Math.floor(Math.random() * BACKGROUNDS.length) 
      backgroundImage.value = BACKGROUNDS[randomIndex] 
    })
    return {
      backgroundImage
    }
  },
})