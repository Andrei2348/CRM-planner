import { defineComponent, ref, watch } from 'vue' 

export default defineComponent({  
  name: 'TextAreaComponent',  
  props: {  
    name: {  
      type: String,  
      required: true  
    },  
    label: {  
      type: String,  
      required: true  
    },  
    placeholder: {  
      type: String,  
      default: ''  
    },  
    textareaValue: {  
      type: String,  
      default: ''  
    },  
    required: {  
      type: Boolean,  
      default: false  
    }, 
    readonly: {  
      type: Boolean,  
      default: false  
    },  
    maxlength: {  
      type: Number,  
      default: null  
    },  
    autocomplete: {  
      type: String,  
      default: 'off'  
    },  
    error: {  
      type: String,  
      default: ''  
    }  
  },  
  setup(props, { emit }) {  
    const textareaValue = ref(props.textareaValue)

    watch(textareaValue, (newValue) => {  
      emit('update:modelValue', props.name, newValue)
    }) 
 
    watch(() => props.textareaValue, (newValue) => {  
      textareaValue.value = newValue;  
    })  

    return {  
      textareaValue  
    }
  }  
})