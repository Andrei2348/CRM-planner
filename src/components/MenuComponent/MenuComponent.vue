<template>  
	<div class='menu__wrapper'>  
		<Router-link   
			v-for='item in MENU_DATA'   
			:key="item.name"   
			:to="item.url"
			class="menu__router-link"
			:class='{"visible": uxuiStore.getshowAsidePanel}'
		>  
			<SvgIcon :icon='item.icon' iconClass='menu__svg-image'/>
			<p 
				:class='{"visible": uxuiStore.getshowAsidePanel}'
				class='menu__router-text'
			>
				{{ item.name }}
			</p>  
		</Router-link>  
	</div>  
</template>  

<script lang="ts" src="./MenuComponent.ts"></script>  
<style lang="scss" scoped src="./MenuComponent.scss"></style>