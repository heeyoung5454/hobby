<template>
  <div id="app">
    <Head />
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import Head from './layout/header';

export default {
  name: 'App',
  components: {
    Head,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
