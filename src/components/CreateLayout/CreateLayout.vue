<template>
  <div class="layout">
    <div class='layout__wrapper'>
			<button 
				class='layout__close-button'
				@click="useCloseCreatePanelHandler"
			>
				<p class="layout__close-button--text">+</p>
			</button>
      <component :is="currentCreateComponent" class="layout__content" />
    </div>
  </div>
</template>

<script lang="ts" src="./CreateLayout.ts"></script>
<style lang="scss" scoped src="./CreateLayout.scss"></style>