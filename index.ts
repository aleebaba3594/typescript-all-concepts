

// FIXME: example down are dealing with Core Types, uncomment the whole code with in numbered box

// -----1st------
// const num1=4
// const num2= 3.4
// function add(n1,n2){
// return n1+n2
// }
// console.log(add(num1,num2))
// // TODO:above code will throw error due to type is not given for num1,n2 
// -----1st end------


// -----2nd------
// const num1=4
// const num2= 3.4
// function add(n1:number,n2:number){
// return n1+n2
// }
// console.log(add(num1,num2))
// // TODO:above code will work fine due to given types of parameters
// -----2nd end------


// -----3rd------
// const num1=4
// const num2= 3.4
// const strValue="check"
// const bool=false
// function add(n1:number,n2:number,strValue:string,bool:boolean){
//   if(bool){
//     return n1+n2
//   }
//   else{
//     return "the value of bool is false"
//   }
// }
// console.log(add(num1,num2,strValue,bool))
// // TODO:above code will work on bool condition
// -----3rd end------


// -----4th------
// const person :{
//   name:string,
//   age:number
// } = {
//   name:"ali",
//   age:30
// }
// console.log(person.name)
// // TODO:we can define types of person object like this, not recommended
// -----4th end------


// -----5th------
// const person = {
//   name:"ali",
//   age:30
// }
// console.log(person.name)
// // TODO:we can define types of person object like this, recommended
// -----5th end------


// -----6th object and Array------
// // Of course object types can also be created for nested objects.
// // Let's say you have this JavaScript object:
// const product:Product = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }
// // This would be the interface of such an object:
// interface Product{
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
// // So you have an object type in an object type so to say.
// console.log(product.details.title)
// // TODO:nested objects, So you have an object type in an object type so to say.
// -----6th end------


// -----7th Tuple------
function concatenateAndCountStrings(str1: string, str2: string): [string, number] {
  const concatenatedString = str1 + str2;
  const stringLength = concatenatedString.length;
  return [concatenatedString, stringLength];
}
const result = concatenateAndCountStrings("hello", "world");
console.log(result); // output: ["helloworld", 10]
// // TODO:The result variable contains the tuple returned by the function
// -----7th end------


// -----8th Tuple------
function doSomething(stringHash: [string, number]) {
  //we can destructure tuple as well as push something
  const [first, second] = stringHash;
  console.log(stringHash)
  console.log(first,second)
  stringHash.push("admin")
  console.log(stringHash)
}
doSomething(["firstValue",2])
// -----8th end------