<template>
	<aside class='aside' :class='{ "visible": uxuiStore.getshowAsidePanel }' >
		<MenuComponent />
		<div class="aside__date-wrapper">
			<DateElement 
				:inline=true
				objectKey=''
				:class='{"visible": uxuiStore.getshowAsidePanel}'
				class='aside__date-picker'
			/>
		</div>
	</aside>
</template>

<script lang="ts" src="./AsideComponent.ts"></script>
<style lang="scss" scoped src="./AsideComponent.scss"></style>
