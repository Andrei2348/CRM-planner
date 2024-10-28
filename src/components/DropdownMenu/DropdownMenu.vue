<template>
  <div 
  v-click-outside="close" 
  class="dropdown" 
  @click="toggleMenuHandler">
    <div 
      class="dropdown__face"
      :style="{ background: color }"
      >
      <SvgIcon class="dropdown__icon" :icon="menuIcon" v-if="menuIcon != ''" />
      <div class="dropdown__title" v-if="title != ''">{{ title }}</div>
    </div>
    <div
      v-if="menuIsOpen"
      :class="[
        'dropdown__menu',
        menuPositionTop ? 'dropdown__menu-top' : 'dropdown__menu-bottom',
      ]"
    >
      <ul class="dropdown__menu-items">
        <li
          v-for="item in menuItems"
          :class="['dropdown__menu-item', { empty: item.title === '' }]"
          :key="item.id"
          @click="handleClick(item.status)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./DropdownMenu.ts"></script>
<style lang="scss" scoped src="./DropdownMenu.scss"></style>