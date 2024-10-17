<template>  
	<div class='menu__wrapper'>  
		<router-link   
			v-for='item in MENU_DATA'   
			:key="item.name"   
			:to="item.url"
			class="menu__router-link"
		>  
			<SvgIcon :icon='item.icon' iconClass='menu__svg-image'/>
			<p class='menu__router-text'>{{ item.name }}</p>  
			  
		</router-link>  
	</div>  
</template>  

<script lang="ts" src="./MenuComponent.ts"></script>  
<style lang="scss" scoped src="./MenuComponent.scss"></style>