<template>
	<div class='card__wrapper'>
		<div class="card__priority" v-if='isTeamLead'>
			<SvgIcon icon="crown" class="card__priority-icon" />
		</div>
		<h3 class='card__title'>{{project.name}}</h3>
		<div class='card__color-underline' :style='{ backgroundColor: project.color }'></div>
		<p class='card__text'>{{project.description}}</p>
		<p class='card__text'>Участники: {{project.users.length}} человек.</p>
		<div class="card__buttons-wrapper" v-if='isUserInProject'>
			<button 
				v-if='isTeamLead'
				class='card__button' 
				@click='useOpenCreatePanelHandler("CreateProjectComponent", project)'
			>
				<SvgIcon icon="edit" />
			</button> 
			<button   
				v-if="isTeamLead && project.id !== undefined"   
				class='card__button'  
				@click='deleteProjectHandler(project)'  
			>  
    		<SvgIcon icon='trash'/>  
			</button>  
			<button 
				v-if='!isTeamLead'
				class='card__button' 
				@click='leaveTheProjectHandler(project)'
			>
				<SvgIcon icon="log-out" />
			</button>
			<button   
				class='card__button'   
				@click="goToProjectHandler(project)"  
			>  
				<SvgIcon icon='chevron-right'/>  
			</button>  
		</div>
		<div v-else class="card__buttons-wrapper">
			<button   
				class='card__button-request' 
				@click='projectRequestHandler(project)'    
			>  
				Подать заявку  
			</button>
		</div>
	</div>
</template>

<script lang="ts" src="./ProjectCard"></script>
<style lang="scss" scoped src="./ProjectCard.scss"></style>
