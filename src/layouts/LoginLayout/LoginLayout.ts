import { defineComponent, ref, onBeforeMount } from 'vue'  
import { BACKGROUNDS } from '@/config/user'  
import { useCurrentTime } from '@/composables/useCurrentTime'  

export default defineComponent({  
  name: 'LoginLayout',  
  setup() {  
    const backgroundImage = ref<string>('')  
 
    const { weekDay, day, monthName, year, formattedTime } = useCurrentTime()  

    onBeforeMount(() => {  
      const randomIndex = Math.floor(Math.random() * BACKGROUNDS.length)  
      backgroundImage.value = BACKGROUNDS[randomIndex]  
    })  

    return {  
      backgroundImage,  
      weekDay,  
      day,  
      monthName,  
      year,  
      formattedTime,  
    }  
  },  
})