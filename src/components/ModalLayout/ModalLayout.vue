<template>
	<div class='modal__layout'>
		<div class="modal__wrapper">
      <button 
				class='modal__close-button'
				@click="useModalClose"
			>
				<p class="modal__close-button--text">+</p>
			</button>
      <component :is="currentSuggestComponent" class="modal__content" />
    </div>
	</div>
</template>

<script lang="ts" src="./ModalLayout.ts"></script>
<style lang="scss" scoped src="./ModalLayout.scss"></style>
