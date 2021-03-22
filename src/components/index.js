import Vue from "vue";
import Icons from "./Icons.vue";

const Components = {
    Icons
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;