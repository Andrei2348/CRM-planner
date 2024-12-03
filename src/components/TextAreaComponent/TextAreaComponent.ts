import { defineComponent, onMounted, ref, watch } from 'vue' 

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
      default: 500 
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
    const textarea = ref<HTMLTextAreaElement | null>(null) 

    const adjustHeight = (event: Event) => {  
      const textAreaElement = event.target as HTMLTextAreaElement;  
      textAreaElement.style.height = 'auto' 
      textAreaElement.style.height = `${textAreaElement.scrollHeight}px` 
    }  

    onMounted(() => {  
      if (textarea.value) {  
        textarea.value.style.height = 'auto'  
        textarea.value.style.height = `${textarea.value.scrollHeight}px`
      }  
    }) 

    watch(textareaValue, (newValue) => {  
      emit('update:modelValue', props.name, newValue)
    }) 
 
    watch(() => props.textareaValue, (newValue) => {  
      textareaValue.value = newValue;  
    })  

    return {  
      textareaValue,
      adjustHeight,  
      textarea 
    }
  }  
})
