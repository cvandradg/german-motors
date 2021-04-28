<template>
  <main>
    <navbar></navbar>
    <router-view></router-view>
  </main>
</template>

<script>
import navbar from "./components/navbar.vue";

export default {
  name: "App",

  components: {
    navbar,
  },

  data: () => ({
    //
  }),
};
</script>
