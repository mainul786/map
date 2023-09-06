// find je prothome match korbe seta dibe abong akta matro element return korbe.. abong protome jeta pabe seta return korbe

const numbers = [45, 22, 36, 63, 99, 88, 23, 22, 20, 55, 8];
const number = numbers.find(num => num % 5 === 0);
console.log(number);


const products = [
    {id:1, name:'hp laptop', price:36000},
    {id:2, name:'lenevo laptop', price:2000},
    {id:3, name:'asus laptop', price:26000},
    {id:4, name:'samsung', price:16000},
    {id:5, name:'watch', price:33000},
    {id:6, name:'sunglass', price:3000},
    {id:7, name:'dell laptop', price:306000},
];

const product = products.find(pro => pro.price > 10000);
console.log(product);
