 //Task1
let num=[2,3,4,5,6,7];
for(let val of num){
    if(val%2===0){
        console.log(`${val} is even number`);
    }
    else{
        console.log(`${val} is odd number`);
    }
}

 // Task2
let arr=[12,33,14,25,36,27];
console.log(arr);
let max=0;
let min=100;
for(let val of arr){
    if(val>max){
        max=val;
    }
    if(val<min){
        min=val;
    }
}
console.log(`Max Num = ${max}`);
console.log(`Min Num = ${min}`);

// Task3
let ar=["abc","def","ghi"];
console.log(ar);
for(let char of ar){
    let c=char.toUpperCase();
    console.log(c);
}

// Task4
let array = ["Abc", "Xyx", "Qwe", "Jkl", "Fgh"];

console.log("Array = ", array);
array.shift(); 
console.log("Remove first name = ", array);

let middleIndex = Math.floor(array.length / 2);
array.splice(middleIndex, 1, "Lmn");
console.log("Replace middle name:", array);

array.push("Zxc");
console.log("Add at end:", array);

// Task5
function vowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(vowels("This is Tsak five of Lab six"));

// Task6
const vowel =  str => (str.match(/[aeiouAEIOU]/g) ).length;

console.log(vowels("This is task six of lab six"));

// Task7
let numb = [2, 3, 4, 5, 6];
console.log(`Array for square ${numb}`)
numb.forEach(num => console.log(num * num));

// Task8
let marks = [64, 43, 52, 34, 65, 45, 74];

let pass = marks.filter(mark => mark > 50);
console.log(pass);

// Task9
let number= parseInt(prompt("Enter the number of elements:")); 
let arrays = [];

for (let i = 0; i < number; i++) {
    arrays.push(parseInt(prompt(`Enter number ${i + 1}:`)));
}

console.log("Array:",arrays);

// Task10
let numbers = [12, 43, 23, 32];

let product = numbers.reduce((acc, num) => acc * num, 1);

console.log("Product :", product);

