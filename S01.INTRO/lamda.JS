function add(a, b){
    return a + b
}
const fruits = ["Kiwi", "Apple", "Raisin", "Melon"];
//fonction lamda
(a,b) => {return a+b; }

const resulta = add(7,9);
const resultLamda = add(7,9);




const resultFilter = fruits.filter(
    (fruit) => {return resultat = (fruit.includes("a") || fruit.includes("A")) ? true : false}
)
resultFilter.forEach((fruit) => { console.log(fruit)});

const numbers = [1, 34, 67 , 41 , 21, 52];
const MULTIPLIER = 3;
let newNumbers;

const numbersFois3 = numbers.map(number =>  number * MULTIPLIER)
console.log(numbersFois3)
const chainLmda = numbersFois3
        .filter(n => n > 100)
        .map(n => n*7 +2 -9 % 4)
        .forEach(n => console.log(n))