<template>
  <div id="app">
    <AppPage/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AppPage from './components/AppPage'

export default {
  name: 'App',
  components: {
    AppPage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.blue-color {
  color: rgb(53, 132, 154) !important;
}

.bg-blue-color {
  background-color:rgb(53, 132, 154) !important;
}

.dark-blue-color {
  color: rgb(0, 82, 103) !important;
}

.bg-dark-blue-color {
  background-color:rgb(0, 82, 103) !important;
}

.free-resume {
  font-family: 'Roboto', sans-serif;
  color: #545E6C;
}

@media screen {
  .free-resume {
    background: #f5f5f5;
    background-color: #f5f5f5;
  }
}
</style>
