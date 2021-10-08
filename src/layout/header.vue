<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="p-2">
      <b-navbar-brand href="/">HOME</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/menu1">menu1</b-nav-item>
          <b-nav-item href="/menu2">menu2</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import routes from "../router/router.js";

export default {
  name: "Nav",
  data() {
    return {
      routes
    };
  },
  created() {
    console.log(this.routes, "-------");
  }
};
</script>
