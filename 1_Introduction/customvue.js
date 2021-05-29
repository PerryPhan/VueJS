// Create one simple Child component
Vue.component("todo-item", {
    props: ["todo"],
    template: "<li>{{ todo.text }}</li>",
  });

var app = new Vue({
  el: "#app",
  data: {
    // String 
    message: "Hello class! My full name is Phan Dai",
    // String 
    type: "text",
    // Type
    yes: false,
    // Array : Str
    todos: ["This is todo#1", "This is todo#2", "This is todo#3"],
    // Array : Obj
    groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
  },
  methods: {
    changeMessage: function () {
      this.message = this.message + ", I'm 22 years old ";
    },
  },
});

