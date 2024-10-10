<template>
  <div>
    <header>
      <h1>My App</h1>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2024 My App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>

<style scoped>
header, footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
main {
  padding: 20px;
}
</style>
