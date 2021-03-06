/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('categoria', require('./components/Categoria.vue'));
Vue.component('editorial', require('./components/Editorial.vue'));
Vue.component('idioma', require('./components/Idioma.vue'));
Vue.component('pais', require('./components/Pais.vue'));
Vue.component('autor', require('./components/Autor.vue'));
Vue.component('libro', require('./components/Libro.vue'));
Vue.component('prestamo', require('./components/Prestamo.vue'));
Vue.component('persona', require('./components/Persona.vue'));


const app = new Vue({
    el: '#app',
    data: {
        menu: 0
    }
});