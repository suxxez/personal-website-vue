<template>
  <div class="outer-div">
    <h1 class="animated fadeIn">FINN FENTKER</h1>
    <div class="heading-flex">
      <h2 class="animated fadeInDown software">Software Developer</h2>
      <router-link to="/software"><i class="material-icons animated rotateIn software">desktop_windows</i></router-link>
    </div>
    <div class="heading-flex">
      <h2 class="animated fadeInDown web">Web Developer</h2>
      <router-link to="/web"><i class="material-icons animated rotateIn web">wifi</i></router-link>
    </div>
    <div class="heading-flex">
      <h2 class="animated fadeInDown photo">Photographer</h2>
      <router-link to="/photo"><i class="material-icons animated rotateIn photo">photo_camera</i></router-link>
    </div>
    <div class="heading-flex">
      <h2 class="animated fadeInDown video">Videographer</h2>
      <router-link to="/video"><i class="material-icons animated rotateIn video">live_tv</i></router-link>
    </div>
    <div class="flex-container animated fadeInLeft">
      <a href="https://www.xing.com/profile/Finn_Fentker" target="_blank"><span>xing</span></a>
      <a href="https://www.linkedin.com/in/finn-fentker-1432bb164" target="_blank"><span>linkedin</span></a>
      <a href="https://instagram.com/finn_f" target="_blank"><span>instagram</span></a>
      <a href="https://youtube.com/suxxezhd" target="_blank"><span>youtube</span></a>
      <a href="https://github.com/suxxez" target="_blank"><span>github</span></a>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Headings extends Vue {
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

  .heading-flex, .flex-container{
    width: 50%;
  }
}

h1 {
  text-align: left;
  color: $heading-color;
}

h2 {
  text-align: left;
  color: $subheading-color;
  animation-duration: 1s;
}

span {
  color: #c5c6c7;
  opacity: 0.5;
  margin: 5px;
}

span:hover, i:hover {
  color: $highlight-color;
  opacity: 1;
  cursor: pointer;
}

a, a:link, a:visited, a:focus, a:hover, a:active {
  color: #2c3e50;
  text-decoration: none;
 }

 .outer-div {
   margin: 1rem
 }

 .flex-container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  animation-delay: 1.2s;
  margin-top: 1rem;
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

.software {
  animation-delay: 0.3s;
}

.web {
  animation-delay: 0.6s;
}

.photo {
  animation-delay: 0.9s;
}

.video {
  animation-delay: 1.2s;
}

router-link {
  color: #2c3e50;
}

i {
  animation-duration: 0.5s;
}
</style>