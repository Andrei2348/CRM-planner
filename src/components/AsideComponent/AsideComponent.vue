<template>
	<aside class='aside'>
		<button class='aside__logout-button' @click='logoutHandler'>
		<SvgIcon icon="log-out" />
		</button>
		<MenuComponent />
		<div class="aside__date-wrapper">
			<DateElement 
				:inline=true
				objectKey=''
				class='aside__date-picker'
			/>
		</div>
	</aside>
</template>

<script lang="ts" src="./AsideComponent.ts"></script>
<style lang="scss" scoped src="./AsideComponent.scss"></style>
