import Vue from "vue";
import EosIcons from "./Icons.vue";

const Components = {
    EosIcons
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;