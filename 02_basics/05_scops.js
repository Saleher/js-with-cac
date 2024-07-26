// let a = 300;

// if(true){
//     let a = 10;
//     const b = 12
//     var c = 30;   
//     console.log(a); 
// }
// console.log(a);



/*
Clouser: function bundled togather , with reference of its lexical surrounding 


*/





// function one(){
//     const userName = "Username";

//     function two(){
//         const website = "website";
//         console.log(userName);
//     }

//     // console.log(website);
//     two();
// }

// one();


function outer() {
    var name = "Mozilla"; 
    function innerOne() {      
      console.log(name);       
    }
    function innerTwo() {      
        console.log(name);          
      }
    innerOne();
    innerTwo();
  }
outer();



// This function will call imitiatly , even without clicking the body tag
// function clickHandler(color){
//     document.body.style.backgroundColor = `${color}`;
// }
// document.body.onclick = clickHandler('black');



// This function will call after click, and here Clouser came to work as our inner function can access the our argumment
// function clickHandler(color){
//     return function(){
//         document.body.style.backgroundColor = `${color}`;
//     }
// }
// document.body.onclick = clickHandler('green');

function addOne(num){
    return num + 1
}

addOne(5);

addTwo(1);
const addTwo = function(num){
    return num + 2;
}











  