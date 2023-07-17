<template>
  <div class="home">
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="this.headings"></component>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import headings from '../components/headings.vue';

@Component({
  components: {
    headings
  }
})
export default class Home extends Vue {
  private headings: any = headings;
}
</script>

<style scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
</style>