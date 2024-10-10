<script setup lang="ts">
  // import { useLifecycleLogger } from "@/common/hooks/lifecycleLogger";
  import AppLayoutError from "@/layouts/AppLayoutError.vue";

  const name = "Page five";
  // useLifecycleLogger({ name });
</script>

<template>
  <AppLayoutError>
    <div class="page">
      {{ name }}
    </div>
  </AppLayoutError>
</template>

<style scoped></style>
