

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
const num1=4
const num2= 3.4
function add(n1:number,n2:number){
return n1+n2
}
console.log(add(num1,num2))
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
// function concatenateAndCountStrings(str1: string, str2: string): [string, number] {
//   const concatenatedString = str1 + str2;
//   const stringLength = concatenatedString.length;
//   return [concatenatedString, stringLength];
// }
// const result = concatenateAndCountStrings("hello", "world");
// console.log(result); // output: ["helloworld", 10]
// // TODO:The result variable contains the tuple returned by the function
// -----7th end------


// -----8th Tuple------
// function doSomething(stringHash: [string, number]) {
//   //we can destructure tuple as well as push something
//   const [first, second] = stringHash;
//   console.log(stringHash)
//   console.log(first,second)
//   stringHash.push("admin")
//   console.log(stringHash)
// }
// doSomething(["firstValue",2])
// // TODO:The stringHash is a tuple contains exact number of defined elements
// -----8th end------


// -----9th Enums------
// enum Role{
//   ADMIN,USER,AUTHOR="author",READ_ONLY=10,CLIENT="client_user"
// }
// // hover the enum values,by default we get numbers,but we can customize like readonly and client
// const person = {
//   name:"ali",
//   age:30,
//   role:Role.AUTHOR
// }
// if(person.role===Role.AUTHOR){
//   console.log("its author")
// }
// // TODO:enums are like global constants, not supported by js but we can use in the form of obj and arr
// -----9th end------


// ----------------FIXME: Unions--------------------


// -----10th Enums------
// function combine(inp1:number|string,inp2:number|string){
//   if(typeof inp1==="number" && typeof inp2==="number"){
//     return inp1+inp2
//   }else{
//     return inp1.toString()+inp2.toString()
//   }
// }
// console.log(combine(10,20))
// console.log(combine("asad","ali"))
// // TODO:if condition is to separate the types
// -----10th end------


// -----11th Type Aliases & Object Types------
// type User = { name: string; age: number };
// function greet(user: User) {
//   console.log('Hi, I am ' + user.name + ' and my age is '+ user.age);
// }
// greet({ name: "Ali", age: 25 })
// // TODO:User object as type aliases
// -----11th end------


// -----12th Type Aliases & Object Types------
// type User = { name: string; age: number };
// function greet(user: User) {
//   console.log('Hi, I am ' + user.name + ' and my age is '+ user.age);
// }
// const user = { name: "Ali", age: 25 }
// greet(user)
// // TODO:User object as type aliases,other side of example 11th
// -----12th end------


// -----13th Function return types and void------
// type User = { num1: number; num2: number };
// function greet(user: User) :void{
//   console.log( user.num1 + user.num2);
// }
// const user = { num1: 12, num2: 13 }
// greet(user)
// // TODO:this function is not returning anything so by default void would be there
// -----13th end------


// -----14th Function return types and void------
// function add(n1:number,n2:number):number{
//   return n1+n2
// }
// function result(value:number):void{
//   console.log(value);
// }
// result(add(10,20))
// // TODO:add function returns number after adding them, by default ts can do it if same types
// // will bw there, if function not return anything than type would be void by default
// -----14th end------


// -----15th Type function------
// type AddFunction = (a: number, b: number) => number;
// const add: AddFunction = (a, b) => {
//   return a + b
// }
// console.log(add(1, 2)); 
// // TODO:AddFunction is a type of function 
// -----15th end------


// -----16th Type functions------
// // Define the function type
// type MathOperation = (a: number, b: number) => number;
// // Define functions that match the function type
// function add(a: number, b: number): number {
//   return a + b;
// }
// function subtract(a: number, b: number): number {
//   return a - b;
// }
// function multiply(a: number, b: number): number {
//   return a * b;
// }
// // Declare a variable that is a function type
// let mathOp: MathOperation;
// // Assign the add function to the variable
// mathOp = add;
// // Call the function and log the result
// console.log(mathOp(3, 4)); // Output: 7
// // Assign the subtract function to the variable
// mathOp = subtract;
// // Call the function and log the result
// console.log(mathOp(6, 2)); // Output: 4
// // Assign the multiply function to the variable
// mathOp = multiply;
// // Call the function and log the result
// console.log(mathOp(5, 8))
// // TODO: understand the above example carefully 
// -----16th end------


// -----17th function types and callbacks-----
// function add(a:number, b:number,cb:(c:number)=>void){
//   const result= a + b
//   cb(result)
// }
// add(1, 2,(result)=>{
//   console.log(result)
// })
// // TODO:cb is callback 
// -----17th end------


// -----18th type Guards-----
// // if checks are type guards here
// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('Start Date: ' + emp.startDate);
//   }
// }
// printEmployeeInformation({ name: 'Manu', startDate: new Date() });
// // TODO:emp takes return type as UnknownEmployee which takes Employee | Admin types which ends up with
// // that UnknownEmployee takes all the types of Employee and Admin.
// -----18th end------


// -----19th Discriminated unions-----
// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }
// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//   }
//   console.log('Moving at speed: ' + speed);
// }
// // moveAnimal({type: 'horse', runningSpeed: 50});
// moveAnimal({type: 'bird', flyingSpeed: 10});
// // TODO:one common property in every object interface which basically is (type: 'bird' and type: 'horse')
// // which describes that object and by this we are able to get all properties of that object
// -----19th end------





