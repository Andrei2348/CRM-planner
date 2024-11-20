<template>
	<div class='modal'>
		<h3 class='modal__text'>
			Вы уверены, что хотите покинуть проект?
		</h3>
		<div class="modal__buttons-wrapper">
			<button 
				class="modal__button-cancel" 
				@click='useModalClose'
			>
				Отмена
			</button>
			<button 
				class="modal__button-suggest"
				@click='suggestLeaveHandler'
			>
				Покинуть проект
			</button>
		</div>
	</div>
</template>

<script lang="ts" src="./ModalLeaveProject.ts"></script>
<style lang="scss" scoped src="./ModalLeaveProject.scss"></style>
