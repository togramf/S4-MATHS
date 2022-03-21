<template>
  <div id="app">
    <img v-if='isVisible' alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-if='isVisible' msg="Welcome to Your Vue.js App"/>
    <button @click="displayDice($event)"> Roll a dice </button>
    <button @click="displayCoin($event)"> Flip a coin </button>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {flip_a_coin, roll_a_dice} from "./back/random.js"

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    displayCoin: function(event){
      var nb = flip_a_coin();
      event.target.innerHTML = "coin : " + nb;
    },
    displayDice: function(event){
      var nb = roll_a_dice();
      event.target.innerHTML = "dice : " + nb;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
