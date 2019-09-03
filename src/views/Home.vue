<template>
  <div class="home">
    <headings />
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
  created() {
    console.log(`%c ________________________________________
< mooooooooooooooooooooooooooooooooooooo >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
|| ||`, "font-family:monospace")
  }
}
</script>