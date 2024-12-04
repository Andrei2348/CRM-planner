<template>
	<div 
    v-if='dataStore.getInfoNotify !== null'
    :class='{ "alert": dataStore.getInfoNotify.type === "alert" }'
    class="notify__wrapper" 
  >
    {{ dataStore.getInfoNotify.message }}
  </div>
</template>

<script lang="ts" src="./InfoNotify.ts"></script>
<style lang="scss" scoped src="./InfoNotify.scss"></style>
