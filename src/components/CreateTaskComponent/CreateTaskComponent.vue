<template>
	<div 
		class='task__wrapper'
		:class='{"visible": uxuiStore.getIsCreateTaskPanelVisible}'
		>
		<button class='task__show-button' @click='uxuiStore.setIsCreateTaskPanelVisible(true)'>Add</button>
		<h2 class='task__title'>Создание задачи</h2>
	
		<InputComponent 
			label='Задание' 
			name='task' 
			type='text'
			placeholder='Введите задание'
			@update:modelValue='getInputData'
			:modelValue='blankDataTask.task'
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
			:textareaValue='blankDataTask.comment'
		/>

		<SelectMenu   
			label='Выберите исполнителя'  
			:title='getTitleById(blankDataTask.executorId)'  
			:persons='dataStore.usersList || []'
			@changeSelectHandler='changeExecutorHandler' 
		/>

		<StatusMenu 
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
