import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
import InputComponent from '@/components/InputComponent/InputComponent.vue';
import TextAreaComponent from '@/components/TextAreaComponent/TextAreaComponent.vue';
import StatusMenu from '@/components/StatusMenu/StatusMenu.vue';
import DateElement from '@/components/DateElement/DateElement.vue';
import ColorPicker from '@/components/ColorPicker/ColorPicker.vue';
import EmptyListComponent from '@/components/EmptyListComponent/EmptyListComponent.vue';
const globalComponents = (app) => {
    app.component('SvgIcon', SvgIcon);
    app.component('InputComponent', InputComponent);
    app.component('TextAreaComponent', TextAreaComponent);
    app.component('StatusMenu', StatusMenu);
    app.component('DateElement', DateElement);
    app.component('ColorPicker', ColorPicker);
    app.component('EmptyListComponent', EmptyListComponent);
};
export default globalComponents;
//# sourceMappingURL=globalComponents.js.map