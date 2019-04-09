import Vue from "vue";
import App from "./App.vue";
import "./assets/sass/reset.scss";
import "./assets/sass/icon.css";

import title from './components/title/title.vue';
import Star from './components/star/star.vue';
Vue.component(title.name,title)
Vue.component(Star.name,Star)
new Vue({
    el:"#app",
    data:{
        str:"abc"
    },
    template:'<App/>',
    components:{App}
})