# Eos-icons-vue

## Project setup for running the component locally
```
npm install
npm run serve
```

## Project setup for building the component
```
npm install
npm run build-bundle
```

Upon running the `npm run build-bundle` command it will build component package in the dist folder which will published on npm. 

## After publishing the package on Npm

### Installation

```bash
# use yarn
yarn add eos-icons-vue
# use npm
npm install --save eos-icons-vue
```

## Usage

In your main.js
```js
import EosIcons from "eos-icons-vue";

Vue.use(EosIcons);
```

In your template
```vue
<template>
  <EosIcons name="4k" size="10" />
</template>
```

## Props
| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| name | string | '4k' | To select the different types of icons |
| size | string | '10' | To set the height and width of the icon |