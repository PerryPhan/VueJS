//Computed Properties and Watchers
var dai = {
  message: "Hi I am Phan Dai",
  firstName: 'Foo',
  lastName: 'Bar',
  // fullName: 'Foo Bar'
};
var config = {
  el: "#app",
  data: dai,
  computed: {
    reversedMessage: function(){
      return this.message.split('').reverse().join('');
    },

    now: function () {
      return Date.now()
    },

    // fullName: function () {
    //   return this.firstName + ' ' + this.lastName
    // }
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
        console.log(this.firstName+" : "+this.lastName)
      }
    }
  },
  methods: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  // watch: {
  //   firstName: function (val) {
  //     this.fullName = val + ' ' + this.lastName
  //   },
  //   lastName: function (val) {
  //     this.fullName = this.firstName + ' ' + val
  //   }
  // }
};

var app = new Vue({
  ...config,
  data: {
    message: "Hi I am Thuy Duong",
    firstName: 'foo',
    lastName: 'bar',
  }
})
app.fullName = "Phan Dai"
