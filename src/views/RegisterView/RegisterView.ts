import { defineComponent } from 'vue'
import LoginLayout from "@/layouts/LoginLayout/LoginLayout.vue";
import RegisterForm from '@/components/RegisterForm/RegisterForm.vue'

export default defineComponent({
  name: 'RegisterView',
	components: {
		LoginLayout,
    RegisterForm
	},
  setup() {
    return {}
  },
})