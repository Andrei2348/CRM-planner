<template>
  <div 
		v-click-outside="close" 
		class="select" 
  	@click="toggleMenuHandler">
		<p class='select__label'>{{ label }}</p>
    <div class="select__face">
      <div class="dropdown__title" v-if="title != ''"></div>
    </div>
    <div
      v-if="menuIsOpen"
      :class="[
        'select__menu',
        menuPositionTop ? 'select__menu-top' : 'select__menu-bottom',
      ]"
    >
      <ul class="select__menu-items">
        <li
          v-for="item in persons"
          :class="['select__menu-item', { empty: item.username === '' }]"
          :key="item.id"
          @click="handleClick(item.username)"
        >
          {{ item.username }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./SelectMenu.ts"></script>
<style lang="scss" scoped src="./SelectMenu.scss"></style>