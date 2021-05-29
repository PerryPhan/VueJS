// Data and Methods
var dai = {
    name: "Phan Dai",
    email: "daiphan308@gmail.com",
    age : 22,
    hobby: [
        'Swim',
        'Anime',
        'Work'
    ]
}
// Nếu dùng config này thì button có thể thực hiện thay đổi được 
var config = {
    el: '#app',
    data : dai
}

// Object.freeze(dai); // mean not change 
// dùng ở trên thay vì 
const dais = dai;


var app = new Vue({
    
    // el: '#app',
    // data: dais,
    ...config

})


console.log( app.name)

