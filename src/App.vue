<template>
  <div id="app" class="container">
    <div class="main">
      
      <div class="container form">
        <div class="code-box">
          <BaseIcon :name="iconName" :size="size"/>
        </div>
      </div>
      
      <div class="container form">
        <h1>Enter Icon Props</h1>
        <div class="code-box">
          <p>Enter Icon Name</p>
          <input v-model="iconName" @change="loader(iconName)">
          <p>Enter Icon Size</p>
          <input v-model="size" @change="loader(iconName)">
        </div>
        <h1>Component Code</h1>
        <div class="code-box">
          <h3>{{code}}</h3>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import BaseIcon from './components/Icons.vue'

export default {
  name: 'App',
  components: {
    BaseIcon,
  },
  data() {
    return {
      iconName: "4k",
      size: "10",
      code: ``
    }
  },
  methods: {
    loader() {
      this.code=`<eosicons name="${this.iconName}" size="${this.size}" />`
      setTimeout(() => {
        this.selected='';
      }, this.value*1000);
    }
  },
    mounted() {
      this.code=`<eosicons name="${this.iconName}" size="${this.size}" />`
      setTimeout(() => {
        this.selected='';
      }, this.value*1000);
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
h1{
    text-align: center;
    padding-bottom: 5px;
    font-family: 'Noto Sans', sans-serif;
}

.form{
  width: 50%;
  margin: 20px auto;
  padding: 20px 20px 20px 20px;
  background-color: rgb(75, 106, 163);
  border-radius: 15px;
  box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.75);
  color: white;
}

.code-box {
  background-color: white;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  color: black;
  text-align: center;
  border-radius: 15px;
  box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.75);
}
</style>
