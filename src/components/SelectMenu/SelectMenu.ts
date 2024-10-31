import { defineComponent, ref } from 'vue';  
import clickOutside from '@/directives/clickOutside';    
import { User } from '@/types/user'

export default defineComponent({  
  name: 'SelectMenu',  
  props: {  
    label: {  
      type: String,  
      required: false,  
      default: '',  
    },  
    title: {  
      type: String,  
      required: false,  
      default: '',  
    },  
    persons: {  
      type: Array<User>,  
      required: true,    
    }, 
  },  
  directives: {  
    clickOutside,  
  },  
  setup(_, { emit }) {  
    const menuIsOpen = ref<boolean>(false);  
    const clickY = ref<number>(0);  
    const windowHeight = ref<number>(window.innerHeight);  
    const menuPositionTop = ref<boolean>(false);  

    const toggleMenuHandler = (event: MouseEvent): void => {  
      menuIsOpen.value = !menuIsOpen.value;  
      clickY.value = event.clientY;  
      menuPositionTop.value = windowHeight.value / 2 < clickY.value;  
    };  

    const close = (): void => {  
      if (menuIsOpen.value) {  
        menuIsOpen.value = false;  
      }  
    };  

    const handleClick = (item: User): void => {  
      emit('changeSelectHandler', item);  
      close();  
    };  

    return {  
      close,  
      toggleMenuHandler,  
      menuIsOpen,  
      menuPositionTop,  
      handleClick,   
    };  
  },  
});