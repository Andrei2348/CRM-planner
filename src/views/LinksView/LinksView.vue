<template>  
	<MainLayout class='links'>  
		<div 
			class="links__list" 
			:class='{"visible": uxuiStore.getShowAsidePanel}'
			v-if='dataStore.getLinksList && dataStore.getLinksList.length > 0'>
			<LinkCard   
				v-for="link in dataStore.getLinksList"   
				:key="link.id"   
				:data="link"  
			/>  
		</div>

		<EmptyListComponent   
			v-if="!dataStore.getLinksList || dataStore.getLinksList.length === 0"  
			message="Список ссылок пока пуст."  
		/>  
		  
		<CreateWidget   
			:class="{ 'hidden': uxuiStore.getCreatePanelName !== '' }"  
			class="links__create-widget"   
			componentName="CreateLinkComponent"  
		/>  
		
	</MainLayout>  
</template>  

<script lang="ts" src="./LinksView.ts"></script>  
<style lang="scss" scoped src="./LinksView.scss"></style>