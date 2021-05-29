// Temaplate Syntax
var dai = {
  name: "Phan Dai",
  email: "daiphan308@gmail.com",
  age: 22,
  hobbies: ["Swim", "Anime", "Work"],
  rawHTML: '<h1>Thuy Duong</h1>',
};
var config = {
  el: "#app",
  data: dai,
};
var app = new Vue({
  ...config,
});
