<template>  
	<div class='menu__wrapper'>  
		<router-link   
			v-for='item in MENU_DATA'   
			:key="item.name"   
			:to="item.url"  
		>  
			<SvgIcon :icon='item.icon' />  
			{{ item.name }}  
		</router-link>  
	</div>  
</template>  

<script lang="ts" src="./MenuComponent.ts"></script>  
<style lang="scss" scoped src="./MenuComponent.scss"></style>