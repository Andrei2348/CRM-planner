<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <component :is="getLayout(route)">
        <Component />
      </component>
    </router-view>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

export default {
  name: 'App',
  methods: {
    getLayout(route) {
      if (route.meta.layout === 'Main') {
        return MainLayout;
      } else {
        return AuthLayout;
      }
    },
  },
};
</script>

<style>

</style>
