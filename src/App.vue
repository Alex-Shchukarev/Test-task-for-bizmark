<template>
  <div class="main-container">
    <side-bar></side-bar>
    <nav-bar></nav-bar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
export default {
  setup() {
    const store = useStore()
    onMounted( async () => await store.dispatch('load') )
  },
  components: { SideBar, NavBar }
}
</script>
