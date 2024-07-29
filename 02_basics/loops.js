
let index = 0;
while(index <= 10){
    console.log(`Value of index is ${index}`);
    index = index + 2
}

let score = 11;

do{
    console.log(`Score is ${score}`)
}while(score <= 10);


const arr = [1, 2, 3, 4, 5, 6, 7];

for(const num of arr){
    // console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    // console.log(greet)
}


// Maps
const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United State of Ameica');
map.set('Fr','Franc')

// console.log(map);

for (const [key, value] of map){
    console.log(key , value);
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}