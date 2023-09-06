// reduce return of array element
const numbers = [20, 10, 30, 40];
const result = numbers.reduce((previous, current)=>{
    return previous + current;
}, 0);
console.log(result);

const obj = [
    {n:5},
    {n:3},
    {n:7},
    {n:9},
    {n:2}
];
const sum = obj.reduce((previous, current) =>{
    return previous + current.n;
}, 0);
console.log(sum);