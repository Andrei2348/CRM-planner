import { App } from 'vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import InputComponent from '@/components/InputComponent/InputComponent.vue'
import TextAreaComponent from '@/components/TextAreaComponent/TextAreaComponent.vue'
import StatusMenu from '@/components/StatusMenu/StatusMenu.vue'
import DateElement from '@/components/DateElement/DateElement.vue'

const globalComponents = (app: App) => {
  app.component('SvgIcon', SvgIcon)
  app.component('InputComponent', InputComponent)
  app.component('TextAreaComponent', TextAreaComponent)
  app.component('StatusMenu', StatusMenu)
  app.component('DateElement', DateElement)
}
export default globalComponents
