// let facts = {numPlanets: 8,
//      yearNeptuneDiscovered: 1846};

// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered) //1846


let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); //

    // {yearNeptuneDiscovered: 1846,
    // yearMarsDiscovered: 1659};



function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"}));
console.log(getUserData({firstName: "Melissa"}));
console.log(getUserData({}));



let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first);
console.log(second);
console.log(third);


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops);
console.log(whiskers);
console.log(aFewOfMyFavoriteThings);


let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers);


//ES2015 Object Destructuring

const obj = {
    numbers:{
        a:1,
        b:2
    }
}

const {a, b} = obj.numbers;


//  ES5 Array Swap

let arr = [1,2];

[arr[0], arr[1]] = [arr[1],arr[0]];


//raceResults()

const raceResults = ([first,second,third, ...rest]) => ({
    first,
    second,
    third,
    rest
});



