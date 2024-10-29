<template>
	<div class='task__wrapper'>
		<h2 class='task__title'>Создание задачи</h2>

		<InputComponent 
			label='Задание' 
			name='task' 
			type='text'
			placeholder='Введите задание'
			@update:modelValue='getInputData'
		/>

		<InputComponent 
			label='Дедлайн' 
			name='deadline' 
			type='date'
			placeholder='Дедлайн'
			@update:modelValue='getInputData'
		/>

		<TextAreaComponent 
			label='Комментарий' 
			name='comment' 
			type='text'
			placeholder='Введите комментарий'
			@update:modelValue='getInputData'
		/>
		<SelectMenu 
		
		/>
		{{ dataStore.usersList }}
		<DropdownMenu 
			:title='blankDataTask.status'
			@changeSelectHandler='changeSelectHandler'
		/>
		<button 
			class='task__button-create'
			:disabled='disableButtonFlag'
			@click='createTaskHandler'
			>
			Создать
		</button>
	
	</div>
</template>

<script lang="ts" src="./CreateTaskComponent.ts"></script>
<style lang="scss" scoped src="./CreateTaskComponent.scss"></style>
