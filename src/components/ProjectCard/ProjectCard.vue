<template>
	<div class='card__wrapper'>
		<h3 class='card__title'>{{project.name}}</h3>
		<p class='card__text'>Участники: {{project.users.length}} человек.</p>
		<Router-link to='/' class='card__button'>Перейти к проекту</Router-link>
	</div>
</template>

<script lang="ts" src="./ProjectCard"></script>
<style lang="scss" scoped src="./ProjectCard.scss"></style>
