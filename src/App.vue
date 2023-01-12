<template>
  <header-navbar></header-navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNavbar from "@/components/HeaderNavbar.vue"
export default {
  components: {
    HeaderNavbar
  }
}
</script>

<style  scoped>
.app {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap:20px;
}
</style>