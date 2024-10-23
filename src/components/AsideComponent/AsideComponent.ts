import { defineComponent } from 'vue'
import MenuComponent from '@/components/MenuComponent/MenuComponent.vue'

export default defineComponent({
  name: 'AsideComponent',
  components: {
    MenuComponent,
  },
  emits: ['logoutUserHandler',],
  setup(_, { emit }) {
    const logoutHandler = () => {
      emit('logoutUserHandler')
    }
    return {
      logoutHandler
    }
  },
})