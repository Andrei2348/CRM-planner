import { defineComponent, onBeforeMount, ref } from 'vue' 

export default defineComponent({  
  name: 'SvgIcon',  
  props: {  
    icon: {  
      type: String,  
      required: true  
    },
    iconClass: {  
      type: String,  
      default: ''  
    }   
  },  
  setup(props) {   
    const svgPath = ref('')
    const isLoading = ref(true)

    const loadSvg = async () => {
      isLoading.value = true
      try {   
        const { default: path } = await import(`../../assets/icons/${props.icon}.svg`) 
        svgPath.value = path 
      } catch (error) {  
        console.error(`Не удалось загрузить SVG-иконку: ${props.icon}`, error)
        svgPath.value = ''  
      } finally {
        isLoading.value = false
      }
    };  

    onBeforeMount(loadSvg) 
    return { 
      svgPath,
      isLoading
    };  
  }  
});