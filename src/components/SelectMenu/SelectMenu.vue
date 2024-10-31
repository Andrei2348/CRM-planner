<template>
  <div 
		v-click-outside="close" 
		class="select"
  	@click="toggleMenuHandler">
		<p class='select__label'>{{ label }}</p>
    <div class="select__face">
      <div class="select__title" v-if="title != ''">{{ title }}</div>
      <SvgIcon 
					class='select__icon-button' 
					:class="{ active: menuIsOpen }" 
					icon='chevron-right'/>
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
          @click="handleClick(item)"
        >
          {{ item.username }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./SelectMenu.ts"></script>
<style lang="scss" scoped src="./SelectMenu.scss"></style>