<script setup lang="ts">
  import TheHeader from "@/components/common/TheHeader.vue";
  import TheFooter from "@/components/common/TheFooter.vue";
  import TheNavMenu from "@/components/common/TheNavMenu.vue";
  import Sidebar from "@/components/common/Sidebar.vue"
</script>

<template>
  <TheHeader />
  <main class="app-layout-default-main p-2 bg-amber-50">
    <TheNavMenu />
    <Sidebar />
    <div>AppLayoutDefault</div>
    <slot />
  </main>
  <TheFooter />
</template>

<style lang="scss">
</style>
