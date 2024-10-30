<template>
	<div class='task__wrapper'>
		<span class='task__span'>Задание:</span>
		<h3 class='task__title'>{{task.task}}</h3>
		<p class='task__text'>  
			<span class='task__span'>Исполнитель:</span>   
			{{ task.executorId !== null ? fetchUserById(task.executorId) : 'Не назначен' }}  
		</p>  
		<p class='task__text'><span class='task__span'>Статус:</span>
		<StatusMenu 
			:title='task.status'
			@changeSelectHandler='changeStatusHandler'
		/>
		</p>
		<div class='task__button-area' :class="{ active: infoIsVisible }">
			<p class='task__subtitle'>Инфо:</p>
			<button 
				class='task__button' 
				@click='showInfoHandler'
			>
				<SvgIcon 
					class='task__icon-button' 
					:class="{ active: infoIsVisible }" 
					icon='chevron-right'/>
			</button>
		</div>
		<div class='task__hidden-info' :class="{ visible: infoIsVisible }">
			<p class='task__text'><span class='task__span'>Выдано:</span>{{ getFormatDate(task.timeCreate) }}</p>
			<p class='task__text'><span class='task__span'>Дедлайн:</span>{{ getFormatDate(task.deadline) }}</p>
			<div class='task__comment-wrapper'>
				<span class='task__span'>Примечание:</span>
				<p class='task__comment-text'>{{ task.comment }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./TaskCard.ts"></script>
<style lang="scss" scoped src="./TaskCard.scss"></style>
