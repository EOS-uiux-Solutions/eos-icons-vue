<template>
  <div class="main">
    <BaseIcon :name="iconName" />
    <input v-model="iconName">
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
      iconName: "4k"
    }
  }
}
</script>

<style scoped>
.main {
  margin: 0 auto;
}
</style>
