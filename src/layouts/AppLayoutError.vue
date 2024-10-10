<script setup lang="ts">
  import TheNavMenu from "@/components/common/TheNavMenu.vue";
</script>

<template>
  <div>
    <TheNavMenu />
    <main class="app-layout-error-main bg-red-600">
      <div>AppLayoutError</div>
      <slot />
    </main>
  </div>
</template>
