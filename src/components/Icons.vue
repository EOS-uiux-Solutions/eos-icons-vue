<template>
  <div class="icon"
    v-html="require(`../../svg/${name}.svg`)"
    :style="{'height': size+'em','width':  size+'em',}"
  />
</template>

<script>
export default {
  name: 'EosIcons',
  props: {
    name: {
      type: String,
      required: true,
    },
     size: {
      type: String,
      required: false,
      default: '10'
    },
  }
}
</script>

<style scoped>
.icon {
  margin: 0 auto;
}
</style>

