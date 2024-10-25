<template>
	<div class='card__wrapper'>
		<h3 class='card__title'>{{project.name}}</h3>
		<p class='card__text'>Участники: {{project.users.length}} человек.</p>
		<div class="card__buttons-wrapper">
			<button v-if='project.teamLead === userStore.userInfo?.id' class='card__button'>
				<SvgIcon icon='trash'/>
			</button>
			<router-link 
				class='card__button'
				:to="`/project/${project.id}`"
			>  
    		<SvgIcon icon='chevron-right'/>  
			</router-link> 
		</div>
	</div>
</template>

<script lang="ts" src="./ProjectCard"></script>
<style lang="scss" scoped src="./ProjectCard.scss"></style>
