<script lang='ts' setup>
console.log('loaded')
</script>

<template>
<section class='section'>
<LayoutSidebar />
<div>fsdfdfdsfdsfsdsfsdfdsfd</div>
<slot />
</section>
</template>

<style scoped lang='scss'>
.section{
	display: grid;
	grid-template-columns: 1fr 6fr;
	min-height: 100vh;
}
</style>