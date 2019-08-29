<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:300&display=swap');
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Nunito:200&display=swap');

#app {
  font-family: 'Nunito', 'Playfair Display', 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  background-color: #1F2833;
  overflow: auto;
}
</style>
