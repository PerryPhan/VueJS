// Event Handling

var data = {
  counter: 0,
  name: "Dai",
};

var config = {
  el: "#app",
  data: data,
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },  
  },
};

var app = new Vue({
  ...config,
  data: { ...data, name: "Duong" },
});

// app.greet();
