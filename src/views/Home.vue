<script setup lang="ts">
  // import { useLifecycleLogger } from "@/common/hooks/lifecycleLogger";
  import AppLayoutDefault from "@/layouts/AppLayoutDefault.vue";

  const name = "Page home";
  // useLifecycleLogger({ name });
</script>

<template>
  <AppLayoutDefault>
    <div class="page">
      {{ name }}
    </div>
  </AppLayoutDefault>
</template>

<style scoped></style>
