import { App } from 'vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import InputComponent from '@/components/InputComponent/InputComponent.vue'
import TextAreaComponent from '@/components/TextAreaComponent/TextAreaComponent.vue'
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu.vue'

const globalComponents = (app: App) => {
  app.component('SvgIcon', SvgIcon)
  app.component('InputComponent', InputComponent)
  app.component('TextAreaComponent', TextAreaComponent)
  app.component('DropdownMenu', DropdownMenu)
}
export default globalComponents
