<template>
    <div class="about">
        <p>Dies ist die About View.</p>
        <p> {{ this.counter }} </p>
    </div>
</template>

<script>
export default {
    data: () => ({
        counter: 0
    }),
    methods: {
            
    },
    created: function () {
        window.setInterval(() => {
          this.counter++;
          console.log(this.counter);
      }, 1000);
    }
}
</script>