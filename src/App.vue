<template>
  <MyNav />
  <router-view />
</template>

<script setup>
import MyNav from "@/components/MyNav.vue";
</script>
<style lang="scss">
#app {
  font-family: Rakkas, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
  color: #2c3e50;

  input[type="submit"] {
    background-color: #051c31;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
