const numbers = [2, 3, 4, 6];
function doubles(numbers){
    let newArray = [];
    for(const number of numbers){
      const double = number * 2;
         newArray.push(double);
    }
    return newArray;
}
const result = doubles(numbers);
// console.log(result);


// map function example--- it`s return a new array
const num =  numbers.map(number => number * 2);
// console.log(num);


// map return a new array
const friends = ['najiya islam','mainul islam', 'arif', 'najir', 'romio'];
const fristElement = friends.map(friend => friend[0]);
// console.log(fristElement);


// object map
const actors = [
  {id: 1, name:'salman khan', job:'actor', salary:20000},
  {id: 2, name:'sakib khan', job:'actor', salary:20000},
  {id: 3, name:'saruk khan', job:'actor', salary:20000},
  {id: 4, name:'amir khan', job:'actor', salary:20000},
  {id: 5, name:'kadir khan', job:'actor', salary:20000},
  {id: 6, name:'sohel khan', job:'actor', salary:20000}
];

const actorss = actors.map(actor => actor.name);
 console.log(actorss);

