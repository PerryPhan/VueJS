// List Rendering
// We can use Array 
var data = {
  parentMessage: 'Parent',
  items: [
    { message: 'Foo' },
    { message: 'Bar' },
  ]

// or Object to list item
  ,object: {
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
  }

// Number 
  ,numbers: [ 1, 2, 3, 4, 5]

// 2-way Array 
  ,sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
}
var config = {
  el: "#app",
  data: data,
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }  
};
var app = new Vue({
  ...config,
});

// with Array 
// app.items = app.items.filter(function (item) {
//   return item.message.match(/Foo/)
// })

// console.log(app.items);  // return 0 - index
