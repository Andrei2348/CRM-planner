import { defineComponent, ref, watch, onMounted } from 'vue' 

export default defineComponent({  
  name: 'TextAreaComponent',  
  props: {  
    name: {  
      type: String,  
      required: true  
    },  
    label: {  
      type: String,
      required: false,
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
    const textareaHeight = ref<string>('auto')
    const textarea = ref<HTMLTextAreaElement | null>(null)

    const adjustHeight = () => {
      if (textarea.value) { 
        textarea.value.style.height = 'auto'
        textarea.value.style.height = `${textarea.value.scrollHeight}px`
      } 
    }

    watch(textareaValue, (newValue) => {  
      adjustHeight()  
      emit('update:modelValue', props.name, newValue)
    })   
     
    watch(() => props.textareaValue, (newValue) => {  
      textareaValue.value = newValue
      adjustHeight()
    })

    onMounted(() => {   
      textareaValue.value = props.textareaValue
      adjustHeight()  
    })

    return {  
      textareaValue,
      textareaHeight, 
      textarea,
    }
  }  
})