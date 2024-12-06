<template>
	<div class='search'>
		<input
      class="search__input"
      type="text"
      placeholder="Начать поиск..."
      @input="searchHandler"
    />
    <SvgIcon icon="search" class='search__icon' />
	</div>
</template>

<script lang="ts" src="./SearchComponent.ts"></script>
<style lang="scss" scoped src="./SearchComponent.scss"></style>
