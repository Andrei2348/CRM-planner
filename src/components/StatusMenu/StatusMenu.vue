<template>
  <div 
  v-click-outside="closeHandler" 
  class="dropdown" 
  @click="toggleMenuHandler">
    <div 
      class="dropdown__face"
      :style="{ background: getColorByStatus(title) }"
      >
      <div class="dropdown__title" v-if="title != ''">{{ getTitleByStatus(title) }}</div>
    </div>
    <div
      v-if="menuIsOpen && openPermission"
      :class="[
        'dropdown__menu',
        menuPositionTop ? 'dropdown__menu-top' : 'dropdown__menu-bottom',
      ]"
    >
      <ul class="dropdown__menu-items">
        <li
          v-for="item in DROPDOWN_STATUS_MENU"
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

<script lang="ts" src="./StatusMenu.ts"></script>
<style lang="scss" scoped src="./StatusMenu.scss"></style>