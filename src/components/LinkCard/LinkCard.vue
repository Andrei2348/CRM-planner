<template>  
	<div class='link__wrapper'>  
		<div class="link__context">
			<a class='link__common' :href="data.link" target="_blank">{{ data.description }}</a>  

			<div class="link__info">
				<p class="link__text">Автор: <span class='link__span'>{{ data.author }}</span></p>  
				<p class="link__text">Дата создания: <span class='link__span'>{{ data.date }}</span></p>  
			</div>
		</div>
		<div class="link__button-wrapper">  
			<button   
				class='link__button-edit'   
			>  
				<SvgIcon class='link__button-icon' icon="trash" />  
			</button>   
			<button   
				class='link__button-edit'   
			>  
				<SvgIcon class='link__button-icon' icon="edit" />  
			</button>  
		</div>  
	</div>  
</template>  

<script lang="ts" src="./LinkCard.ts"></script>  
<style lang="scss" scoped src="./LinkCard.scss"></style>