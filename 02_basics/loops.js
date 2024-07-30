
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
    // console.log(key , value);
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}


const coding = ["java", "ruby", "java", "python", "cpp"];
// coding.forEach((item) => console.log(item));

const myCoading = [
    {
        language: "Javascript",
        languageFileName: "JS"
    },
    {
        language: "Python",
        languageFileName: "PHY"
    },
    {
        language: "Java",
        languageFileName: "JV"
    },
    {
        language: "c++",
        languageFileName: "CPP"
    },
    {
        language: "Ruby",
        languageFileName: "rb"
    },
]


// myCoading.forEach((item) => console.log(item.language))




// const nums = [1,2,3,4,5,6,7,8,9,10];


// const newNums = nums.filter((num) => {
//     return num > 4
// });

// console.log(newNums);



const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers
// .map((num) => num * 10)
// .map((num) => num + 1)
// .filter((num) => num >= 40);
// console.log(newNums);


const myTotal = myNumbers.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval;
}, 0)

console.log(myTotal);