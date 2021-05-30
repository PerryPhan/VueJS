// Temaplate Syntax
var yesno = {
  active: true,
    'text-danger': false
}
var dai = {
  name: "Phan Dai",
  email: "daiphan308@gmail.com",
  age: 22,
  hobbies: ["Swim", "Anime", "Work"],
  rawHTML: '<h1>Thuy Duong</h1>',
  // yesno,
  isActive: true,
  error: null,
};
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
var config = {
  el: "#app",
  data: dai,
  // data: {
  //   activeClass: 'active',
  //   errorClass: 'text-danger'
  // },
  computed: {
    yesno_computed: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  },
}
var app = new Vue({
  ...config,

});
