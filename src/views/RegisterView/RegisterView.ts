import { defineComponent } from 'vue'
import LoginLayout from "@/layouts/LoginLayout/LoginLayout.vue";
import LoginForm from '@/components/LoginForm/LoginForm.vue'

export default defineComponent({
  name: 'RegisterView',
	components: {
		LoginLayout,
    LoginForm
	},
  setup() {
    return {}
  },
})