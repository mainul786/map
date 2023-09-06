// filter --- jegulo condition ar sathe match korbe segulo ke return korbe.. filter jegulo match korbe sob guloke dibe... akta new array dibe
const numbers = [96, 12,30, 20, 114, 56, 89, 88, 77, 45, 12, 10, 8, 5, 3, 2];
const number = numbers.filter(num => num > 20);
console.log(number);
const numb = numbers.filter(n => n < 20);
console.log(numb);

const actors = [
    {id: 1, name:'salman khan', job:'actor', salary:20000},
    {id: 2, name:'sakib khan', job:'actor', salary:2000},
    {id: 3, name:'saruk khan', job:'actor', salary:10000},
    {id: 4, name:'amir khan', job:'actor', salary:15000},
    {id: 5, name:'kadir khan', job:'actor', salary:11000},
    {id: 6, name:'sohel khan', job:'actor', salary:1000}
  ];
  
  const actor = actors.filter(act => act.salary > 1000);
  console.log(actor);
