import { defineComponent, ref, PropType } from 'vue'
import { Colors } from '@/types/projects'

export default defineComponent({  
  name: 'ColorPicker',  
  props: {  
		name: {  
			type: String,  
			required: true  
		}, 
    color: {
      type: String as PropType<Colors>,
      required: false,
      default: '#FF5733'
    }
  },
  emits: ['colorChanged'],  
  setup(props, { emit }) {   
    const colors = ref<Colors[]>([  
      '#FF5733',  
      '#33FF57',  
      '#3357FF',  
      '#F1C40F',  
      '#9B59B6',  
      '#A5260A',  
    ])

    const selectedColor = ref<Colors>(props.color) 

    const selectColor = (color: Colors) => {  
      selectedColor.value = color 
      emit('colorChanged', props.name, color) 
    }  

    return {  
      colors,  
      selectedColor,  
      selectColor,  
    }  
  },  
})