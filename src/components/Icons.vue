<template>
  <component :is="iconComponent"  style="height: 10em; width: 10em;"/>
</template>

<script>
const icons = {}
const requireComponents = require.context('../../svg', false, /.svg$/)
requireComponents.keys().forEach(fileName => {
  const iconName = fileName.replace(/^\.\/(.+)\.svg$/, '$1')
  const componentConfig = requireComponents(fileName)
  icons[iconName] = componentConfig.default || componentConfig
})

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      }
    }
  },

  computed: {
    iconComponent() {
      return icons[this.name]
    },
  }
}
</script>>
