<template>
  <AIR />
</template>

<script>
import AIR from "./components/AIR.vue";

export default {
  name: "App",
  components: {
    AIR,
  },
};
</script>

<style lang="css">
@import "./vendors/resetter.min.css";
@import "./styles/app.css";
@import "./styles/font.css";
@import "./styles/basic.css";
@import "./styles/home.css";
</style>
