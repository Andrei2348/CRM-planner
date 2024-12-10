<template>
	<aside class='aside' :class='{ "visible": uxuiStore.getShowAsidePanel }' >
		<div class="aside__container">
		
		<MenuComponent />
		<div class="aside__date-wrapper">
			<DateElement 
				:inline=true
				objectKey=''
				:class='{"visible": uxuiStore.getShowAsidePanel}'
				class='aside__date-picker'
			/>
		</div>

	</div>
	</aside>
</template>

<script lang="ts" src="./AsideComponent.ts"></script>
<style lang="scss" scoped src="./AsideComponent.scss"></style>
