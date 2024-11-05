import { defineComponent } from 'vue'
import MenuComponent from '@/components/MenuComponent/MenuComponent.vue'
import { useUxuiStore } from '@/store/uxui'

export default defineComponent({
  name: 'AsideComponent',
  components: {
    MenuComponent,
  },
  emits: ['logoutUserHandler',],
  setup() {
    const uxuiStore = useUxuiStore()
    
    return {
      
      uxuiStore
    }
  },
})