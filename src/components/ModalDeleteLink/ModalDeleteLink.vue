<template>
	<div class='modal'>
		<h3 class='modal__text'>
			Вы уверены, что хотите удалить эту ссылку?
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
				@click='suggestDeleteHandler'
			>
				Удалить
			</button>
		</div>
	</div>
</template>

<script lang="ts" src="./ModalDeleteLink.ts"></script>
<style lang="scss" scoped src="./ModalDeleteLink.scss"></style>
