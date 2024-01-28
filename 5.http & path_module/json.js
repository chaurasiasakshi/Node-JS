// const data = {
//     name :"sakshi",
//     age: 20,
//     location:"lucknow"
// };
// console.log(data)

// const jsonData = JSON.stringify(data);
// const objData = JSON.parse(jsonData);

// console.log(objData);
// console.log("JSON DATA",jsonData);

// { name: 'sak', age: 20, location: 'luck' }
// JSON DATA {"name":"sak","age":20,"location":"luck"}

const fs = require("fs");
const data = {
    name :"sakshi",
    age: 20,
    location:"lucknow"
};

// 1 . Accessing the property of an object using dot notation
console.log(`Name is ${data.name}`);
// 2 . Using bracket notation to access properties 
console.log(`Age is ${data['age']}`);


const jsonDATA = JSON.stringify(data);
// fs.writeFile('json.json',jsonDATA,(err)=>{
//     console.log("done");
// });

fs.readFile('json.json','utf-8',(err,data)=>{
console.log(data); 
const orgData = JSON.parse(data);
console.log(orgData); 

});
