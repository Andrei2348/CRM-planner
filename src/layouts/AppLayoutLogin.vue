<script setup lang="ts">
  import TheNavMenu from "@/components/common/TheNavMenu.vue";
</script>

<template>
  <div>
    <TheNavMenu />
    <main class="app-layout-login-main">
      <div>AppLayoutLogin</div>
      <div class="wrapper w-full h-screen flex justify-center items-center bg-sky-300">
        <slot />
      </div>
    </main>
  </div>
</template>
