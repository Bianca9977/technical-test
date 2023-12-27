<template>
  <nav-bar />
  <router-view />
  <footer-section /> 
</template>

<script>
import NavBar from './partials/NavBar.vue';
import FooterSection from './partials/FooterSection.vue';

export default {
  name: 'App',
  components: {
    NavBar, FooterSection
  }
}
</script>

<style>
</style>
