<template>
	<div class='card__wrapper'>
		<h3 class='card__title'>{{project.name}}</h3>
		<p class='card__text'>Участники: {{project.users.length}} человек.</p>
		<div class="card__buttons-wrapper">
			<button v-if="isTeamLead" class='card__button'>
				<SvgIcon icon='trash'/>
			</button>
			<button   
				class='card__button'   
				@click="goToProjectHandler"  
			>  
				<SvgIcon icon='chevron-right'/>  
			</button>  
		</div>
	</div>
</template>

<script lang="ts" src="./ProjectCard"></script>
<style lang="scss" scoped src="./ProjectCard.scss"></style>
