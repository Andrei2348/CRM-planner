<template>
	<div class='task__wrapper'>
		<span class='task__span'>Задание:</span>
		<h3 class='task__title'>{{task.task}}</h3>
		<div class='task__color-underline' :style='{ backgroundColor: task.color }'></div>
		<p class='task__text'>  
			<span class='task__span'>Исполнитель:</span>   
			{{ task.executorId !== null ? fetchUserById(task.executorId) : 'Не назначен' }}  
		</p>  
		<p class='task__text'><span class='task__span'>Статус:</span>
		<StatusMenu 
			class='task__dropdown-status'
			:class='{"active": userStore.getIsTeamLead}'
			:title='task.status'
			:openPermission='userStore.getIsTeamLead'
			@changeSelectHandler='changeStatusHandler'
		/>
		</p>
		<div class='task__text' v-if="daysUntilDeadline !== ''">  
			<span class='task__span'>До дедлайна:</span> 
			<span class='task__deadline'>{{ daysUntilDeadline }}</span> 
		</div> 
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
		<div 
			class='task__hidden-info' 
			:class="{ visible: infoIsVisible, teamlead: userStore.getIsTeamLead }"
			>
			<p class='task__text'><span class='task__span'>Выдано:</span>{{ getFormatDate(task.timeCreate) }}</p>
			<p class='task__text'><span class='task__span'>Дедлайн:</span>{{ getFormatDate(task.deadline) }}</p>
			<div class='task__comment-wrapper'>
				<p class='task__comment'>
					{{ task.comment }}
				</p>
			</div>
			<div 
				v-if='userStore.getIsTeamLead'
				class='task__button-wrapper'
			>
				<button 
					class='task__button-edit' 
					@click='deleteTaskHandler(task)'
				>
					<SvgIcon class='task__button-icon' icon="trash" />
				</button> 
				<button 
					class='task__button-edit' 
					@click='useOpenCreatePanelHandler("CreateTaskComponent", task)'
				>
					<SvgIcon class='task__button-icon' icon="edit" />
				</button>  
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./TaskCard.ts"></script>
<style lang="scss" scoped src="./TaskCard.scss"></style>
