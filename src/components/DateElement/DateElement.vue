<template>
  <div>
    <label class="date__label" v-if="label">{{ label }}</label>
    <VueDatePicker
      id="datePicker"
      class="picker dp__theme_dark"
      v-model="date"
      :format="format"
      :text-input="textInputOptions"
      locale="ru-RU"
      :space-confirm="true"
      position="center"
      auto-apply
      required
      :ui="uiOptions"
      :day-class="getDayClass"
      :enable-time-picker="false"
      :six-weeks="true"
      :placeholder="placeholder"
      :year-range="[2024, 2040]"
      :disabled="disabled"
      :inline="inline"
      dark
    >
      <template #input-icon>
        <SvgIcon icon="calendar" class="picker__icon" />
      </template>
    </VueDatePicker>
  </div>
</template>

<script lang="ts" src="./DateElement.ts"></script>
<style lang="scss" src="./DateElement.scss"></style>
