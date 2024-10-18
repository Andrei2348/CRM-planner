import { defineComponent, ref, watch } from 'vue' 

export default defineComponent({  
	name: 'InputComponent',  
	props: {  
		name: {  
			type: String,  
			required: true  
		},  
		label: {  
			type: String,  
			required: true  
		},  
		type: {  
			type: String,  
			default: 'text'  
		},  
		placeholder: {  
			type: String,  
			default: ''  
		},  
		modelValue: {  
			type: String,  
			default: ''  
		},  
		required: {  
			type: Boolean,  
			default: false  
		},  
		disabled: {  
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
		const inputValue = ref<string>(props.modelValue) 
 
		watch(inputValue, (newValue) => {  
			emit('update:modelValue', newValue)
		})  
 
		watch(() => props.modelValue, (newValue) => {  
			inputValue.value = newValue;  
		})

		return {  
			inputValue,  
		}
	}  
})
