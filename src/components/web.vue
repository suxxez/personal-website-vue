<template>
<div class="outer-div">
    <h1>Web Developer</h1>
  <h2>Angular</h2>
  <h2>Vue.js</h2>
  <h2>TypeScript</h2>
  <h2>JavaScript</h2>
  <h2>Sass</h2>
  <h2>Git</h2>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Software extends Vue {
}

</script>

<style lang="scss" scoped>
@import '../variables.scss';

@media only screen and (min-width: 600px) {
  .outer-div {
    text-align: center;
    margin: auto;
    width: 50%;
    position: absolute;
    top: 25%;
    left: 25%;
  }

  .flex-container {
    width: 50%;
  }
}

h2 {
  text-align: left;
  color: $subheading-color;
  animation-duration: 1s;
}
</style>