<template>  
	<div class='menu__wrapper'>  
		<button  
			v-for='item in MENU_DATA'  
			:key="item.name"  
			@click="navigateToHandler(item)"  
			class="menu__router-link"  
			:class='{"visible": uxuiStore.getShowAsidePanel}'  
			:disabled='checkIsDisabled(item)'
		>  
			<SvgIcon :icon='item.icon' iconClass='menu__svg-image'/>  
			<p   
				:class='{"visible": uxuiStore.getShowAsidePanel}'  
				class='menu__router-text'  
				:style='{ color: item.color }'  
			>  
				{{ item.name }}  
			</p> 
			<div 
				v-if='uxuiStore.getSelectedPage === item.id'
				class="menu__button-span" 
				:style='{ background: item.color }'
			>
			</div>
		</button>  
	</div>  
</template>  

<script lang="ts" src="./MenuComponent.ts"></script>
<style lang="scss" scoped src="./MenuComponent.scss"></style>