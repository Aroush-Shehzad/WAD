let text = "Hello";

for (let char of text) {
    console.log(char);
}

let marks = [85, 97, 44, 37, 76, 60];
let sum=0;
for (let val of marks){
    sum += val;
}
let avg = sum / marks.length;
console.log(`Average Marks = ${avg}`);

let items = [250, 127, 344, 237, 256, 195];
let i=0;
for (let val of items){
    console.log(`value of index ${i}= ${val}`);
    i++;
}

let fooditems=["potato","apple","leeche","tomato"];
console.log(fooditems);
console.log(fooditems.toString());
console.log(fooditems);

let marvelheroes=["thor","spiderman","ironman"];
let dcheroes=["superman","batman"];
let heroes=marvelheroes.concat(dcheroes);
console.log(heroes);
 let val = marvelheroes.shift();
 console.log("deleted",val);
 let v = marvelheroes.unshift( "Loki");
 console.log(marvelheroes);

 function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Aroush"));

// arrow functions
const product=(a,b)=>{
    return a*b;
}
console.log(product(2,5));

let nums=[67,66,65,64];
nums.map((val) => {
    console.log(val);
});
let calSquare = (num) => {
    console.log(num*num);
};

//create new array
console.log("Array")
let newArray = nums.map((val) => {
    return val;
});
console.log(newArray);
let calcSquare = (num) => {
    console.log(num*num);
};
