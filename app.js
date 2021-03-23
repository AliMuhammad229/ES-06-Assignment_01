// destructuring in an nested array
// If we destructure and skip in this so we cant add this skip value in rest operator
const myArray = [
    [10, 20, 30, 40],
    [50, 60]
];
const [a, ...rest] = myArray;
console.log(a, rest);


// Iterate on object:
const name = "Ali Muhammad";
const profession = "Engineer";
const person = {
    name, //name: 'Ali Muhammad'
    profession
}
const keys = Object.keys(person)
console.log(keys)
for (let i = 0; i < keys.length; i++) {
    console.log(person[keys[i]]);

}















// destructuring of Objects
// const person = {
//     name: 'Ali',
//     profession: "Engineer",
//     nestedObject:{
//         myValue: "this is my value"
//     }
// }
// const {name, profession,nestedObject:{myValue}} = person
// console.log(name, profession, myValue)



// One more thing we can do without changing an actual objects 
// const myString  = JSON.stringify(person)
// JSON.parse(myString)



// destructuring in an array
// const myArray = ['ali','muhammad', 'full stack developer'];
// const [firstName, lastName, profession] = myArray;
// console.log(firstName, lastName, profession)


// destructuring in an array and skip a specific value in array and then destructured it
// const myArray = ['ali','muhammad', 'full stack developer'];
// const [firstName,, profession] = myArray;
// console.log(firstName, profession)




// Rest Operator on objects:
// const myObject = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40
// }
// const {a, c, ...rest} = myObject;
// console.log(a, c, rest);




// Rest Operator on arrays:
// const myArray = [10,20,30,40] 
// const [a, ...rest] = myArray;
// console.log(a,rest);







// Template Literals: `${variable/object.property}`
// It used when we concatenate our each string with strings and number
// const person = {
//     name: 'Ali',
//     profession: 'Engineer'
// };
// const message = `My Name is ${person.name} and my profession is ${person.profession}`
// console.log(message);




// Template literals with destructuring an object
// if break a line in ES6 so ENTER will automatically get this is break line
// const person = {
//     name: 'Ali',
//     profession: 'Engineer'
// };
// const {name, profession} = person
// const message = `My Name is ${name} and 
// my profession is ${profession}`
// console.log(message);






// Object Literal short hand
// const name = "Ali Muhammad";
// const profession = "Engineer";
// const person = {
//     name : name,
//     profession: profession
// }

// Second way is
// const name = "Ali Muhammad";
// const profession = "Engineer";
// const person = {
//     name, //name: 'Ali Muhammad'
//     profession
// }
// console.log(person)
// // We get only the values of an object
// console.log(...Object.values(person));
// // We get only the keys of an object
// console.log(...Object.keys(person));
// We get only the entries of an object entries is person{name: 'Ali', ---> 1 entry profession: 'Engineer' ---> 2 entry}
// console.log(...Object.entries(person));







//Try Catch()
// try{
// aler('Hi this is ali')
// } 
// catch(error){
// It generates an error message
//     console.log("Catch Block",error.message)
// }

// try{

// //Throw a error message directly
// throw 'My Custom Error Message'
// } 
// catch(error){
//     console.log("Catch Block",error)
// }

// We used error constructor
// try{
// throw new Error('My Custom Error Message')
// } 
// catch(error){
//     console.log("Catch Block",error.message)
// }

// function alertMyName(){
//     try{
//         // It stops all the statements after the syntax error
//         aler("Ali Muhammad");
//         console.log('It works');
//     }
//     catch (error){
//         alert(error.message);

//     }
// }
// alertMyName();