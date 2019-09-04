<template>
<div class="outer-div">
    <h1>Web Developer</h1>
  <div class="heading-flex">
    <h2>Angular</h2>
    <router-link to="/"><i class="material-icons">arrow_back</i></router-link>
  </div>
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

  .flex-container, .heading-flex {
    width: 50%;
  }
}

h2 {
  text-align: left;
  color: $subheading-color;
  animation-duration: 1s;
}

 .outer-div {
   margin: 1rem
 }

 .heading-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -0.5rem;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 2.5rem;
  cursor: pointer;
}

 a, a:link, a:visited, a:focus, a:hover, a:active {
  color: #2c3e50;
  text-decoration: none;
 }

i:hover {
  color: $highlight-color;
  cursor: pointer;
}

h1 {
    text-align: left;
  }
</style>