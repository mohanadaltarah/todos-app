<template>
  <ul>
    <li v-for="route in router.options.routes" :key="route.name">
      <router-link :to="{ name: route.name }"
        >{{ route.meta.title }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #ff3300;
  padding: 30px 0;

  a {
    color: white;
    text-decoration: none;
    font-size: large;
  }
}
</style>
