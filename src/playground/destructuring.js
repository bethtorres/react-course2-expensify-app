// object destruct
// const person = {
//     name: 'Beth',
//     age: 57,
//     location: {
//         city: 'Fremont',
//         temp: 55
//     }
// };

// const {name: firstName  = 'Anonymous', age } = person;
// console.log(firstName+' is '+age);

// const {city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log("it's "+temperature+" in "+city);
// }

// const book = {
//     title: 'ego is the enemy',
//     author: "ryan Holiday",
//     publisher: {
//         //name: 'penguin'
//     }
// }

// const { name: publisherName = 'self-Published'} = book.publisher;
// console.log (publisherName); //Pengqui, self-Published

// array destruct

// const address = []; //['3800 BC', 'Fremont', 'CA', '94536'];

// const [, city=' nowhere', state = 'NewYork'] = address;  // match by position

// console.log ('you are in '+ city + ','+ state);

const item = ['coffee (iced)','$2.00','$3.50','$2.75'];

console.log('A medium coffee (hot) costs $2.50');

const [ drink,,mediumCost] = item;

console.log('A medium '+drink+' costs '+mediumCost);


