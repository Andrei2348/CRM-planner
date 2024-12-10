<template>  
  <div :class="iconClass"> 
    <img v-if='!isLoading' :src="svgPath" :alt="icon"  />  
  </div>  
  <!-- <div 
    v-html='svgContent'  
    :class='iconClass'
  ></div> -->
</template>

<script lang="ts" src="./SvgIcon.ts"></script>
  