<template>
	<div class='search'>
		<input
      class="search__input"
      type="text"
      placeholder="Начать поиск..."
      @input="searchProjectHandler"
    />
    <SvgIcon icon="search" />
	</div>
</template>

<script lang="ts" src="./SearchComponent.ts"></script>
<style lang="scss" scoped src="./SearchComponent.scss"></style>
