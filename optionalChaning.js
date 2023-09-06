const post = {
    name: 'mainul Islam',
    address: {
        city: 'bhagwangola',
        street: {
            para:'danes Mondaler para'
        }
    }
};
console.log(post.address?.street?.para);

const numbers = [
    {id:1, name:'mainul Islam', age:20, salary:15000},
    {id:2, name:'Arif hossain', age:30, salary:15000},
    {id:3, name:'Najir Hossan', age:33, salary:20000}
];

console.log(numbers[0]?.name);
