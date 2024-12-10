<template>  
  <div>  
    <p class='color__label'>Выберите цвет</p>  
    <div class="color__palette">  
      <div  
        v-for="color in colors"  
        :key="color"  
        class="color__swatch"  
        :style="{ backgroundColor: color }"  
        @click="selectColor(color)"  
      ></div>  
    </div>  
		<p class="color__info">Выбранный цвет: </p>
    <div class="color__selected" :style="{ backgroundColor: selectedColor }"></div>  
  </div>  
</template>  

<script lang="ts" src="./ColorPicker.ts"></script>
<style lang="scss" scoped src="./ColorPicker.scss"></style>
