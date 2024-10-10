<script lang='ts' setup></script>
<template>
	<button class='button'>Send</button>
</template>
<style scoped lang='scss'>
.button {
	border: none;
	border-radius: 8px;
	background-color: $gray;
	padding: 12px 20px;
	cursor: pointer;
	height: 30px;
	width: 100px;
	color: $white;
	@include textRegular(14);
}
</style>