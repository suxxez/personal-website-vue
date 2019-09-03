<template>
<div class="outer-div">
    <h1>Software Developer</h1>
  <h2>Java</h2>
  <h2>Spring Boot</h2>
  <h2>SQL</h2>
  <h2>Maven</h2>
  <h2>SAP / ABAP</h2>
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