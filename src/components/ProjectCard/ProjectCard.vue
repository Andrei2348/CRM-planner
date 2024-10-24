<template>
	<div class='card__wrapper'>
		<h3 class='card__title'>{{project.name}}</h3>
		<p class='card__text'>Участники: {{project.users.length}} человек.</p>
		<div class="card__buttons-wrapper">
			<Router-link to='/' class='card__button'><SvgIcon icon='chevron-right'/></Router-link>
		</div>
	</div>
</template>

<script lang="ts" src="./ProjectCard"></script>
<style lang="scss" scoped src="./ProjectCard.scss"></style>
