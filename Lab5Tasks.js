//Task 1
let bigIntValue = 12345678901234567890n; 
let symbolValue = Symbol("unique"); 

console.log(typeof bigIntValue); 
console.log(typeof symbolValue);

//Task 2
const Product = {
    name: "PakWheels Waterless & Glass Cleaner",
    items: [
        {
            name: "Glass Cleaner",
            description: "Streak-free glass cleaner for home, office, and car use."
        },
        {
            name: "Waterless Car Wash",
            description: "No-scratch formula, lifts dirt and road grime, wash in minutes."
        }
    ],
    price: {
        beforeDiscount: 1198,
        afterDiscount: 958,
        discountPercentage: 20
    },
    saleEvent: "Wheel Engine Sale",
    brand: "PakWheels",
    orderNow: true
};

console.log(Product);

//Task 3
const pinterestProfile = {
    username: "aroushshehzad",
    fullName: "Aroush Shehzad",
    profilePictureURL: "Aa.jpg", 
    bio: "Perfectly Imperect! ✨",
    followers: 5,
    following: 7,
    boards: [
      {
        name: "All pins",
        description: "Everything!", 
      },
      {
        name: "Jewels Of Life",
        description: "Beauty in Everything.",
      },
      {
        name: "Yumilicious",
        description: "Food.",
      }
    ],
    activity: [
      {
        type: "followed",
        user: "another_user",
        timestamp: "2024-10-27T10:00:00Z"
      },
      {
        type: "pinned",
        board: "Home Decor Ideas",
        pin: "Rustic Kitchen",
        timestamp: "2024-10-27T12:30:00Z"
      }
    ]
  };
  
//   console.log("Pinterest Username:", pinterestProfile.username);
//   console.log("Followers:", pinterestProfile.followers);
//   console.log("First board name:", pinterestProfile.boards[0].name);
//   console.log("First travel pin title:", pinterestProfile.boards[0].pins[0].title);
  
//   pinterestProfile.followers = 10;
//   console.log("Updated Followers:", pinterestProfile.followers);


//task 4
let a = 2  ;

console.log("a = ", a);

console.log("Post-increment (a++):", a++); 
console.log("After post-increment:", a); 

console.log("Pre-increment (++a):", ++a); 

console.log("Post-decrement (a--):", a--); 
console.log("After post-decrement:", a); 

console.log("Pre-decrement (--a):", --a);

//Task 5
let number = parseInt(prompt("Enter a number:"));

if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else if (number % 3 === 0) {
    console.log(`${number} is a multiple of 3.`); 
} else {
    console.log(`${number} is not a multiple of 3.`); 
}


//Task 6
function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A";
    } else if (score >= 70 && score <= 89) {
        return "B";
    } else if (score >= 60 && score <= 69) {
        return "C";
    } else if (score >= 50 && score <= 59) {
        return "D";
    } else if (score >= 0 && score <= 49) {
        return "F";
    } else {
        return "Invalid score";
    }
}

let score = parseInt(prompt("Enter your score:"));

if (isNaN(score)) {
    console.log("Please enter a valid number.");
} else {
    console.log(`Your grade is: ${getGrade(score)}`); // Corrected line
}


