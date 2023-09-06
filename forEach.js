// forEach can`t new array
const friends = ['najiya islam','mainul islam', 'arif', 'najir', 'romio'];
friends.forEach(friend => console.log(friend));


// forEach use object
const products = [
    {id:1, name:'hp laptop', price:36000},
    {id:2, name:'lenevo laptop', price:2000},
    {id:3, name:'asus laptop', price:26000},
    {id:4, name:'samsung', price:16000},
    {id:5, name:'watch', price:33000},
    {id:6, name:'sunglass', price:3000},
    {id:7, name:'dell laptop', price:306000},
];

products.forEach(product => console.log(product.name));