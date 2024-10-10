<script setup lang="ts">
  // import { useLifecycleLogger } from "@/common/hooks/lifecycleLogger";
  import AppLayoutLogin from "@/layouts/AppLayoutLogin.vue";

  const name = "Page three";
  // useLifecycleLogger({ name });
</script>

<template>
  <AppLayoutLogin>
    <div class="page">
      {{ name }}
    </div>
  </AppLayoutLogin>
</template>

<style scoped></style>
