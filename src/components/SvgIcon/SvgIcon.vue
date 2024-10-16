<template>  
  <div :class="iconClass"> 
    <img v-if='!isLoading' :src="svgPath" :alt="icon"  />  
  </div>  
</template>

<script lang="ts" src="./SvgIcon.ts"></script>