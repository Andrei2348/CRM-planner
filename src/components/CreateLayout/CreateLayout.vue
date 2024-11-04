<template>
  <div class="modal__layer">
    <div :class="['modal__wrapper', { 'empty-header': isEmptyHeader }]">
      <div class="modal__header">
        <slot name="modal__header" />
      </div>
      <component :is="currentModalComponent" class="modal__content" />
    </div>
  </div>
</template>

<script lang="ts" src="./CreateLayout.ts"></script>
<style lang="scss" scoped src="./CreateLayout.scss"></style>