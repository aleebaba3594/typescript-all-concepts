
# Major Difference between js and ts
* Js uses "dynamic types"(resolved at runtime) but ts uses "static types"(set during development).

* The core primitive types in TypeScript are all lowercase!
* Important: It is string and number (etc.), NOT String, Number etc.

* errors can be seen on compilation time rather than on runtime(execution).
* Js checks types during runtime(execution) but Ts checks types during compilation time 
   which means ts types only helps during development before code gets compiled.
* Ts is a superset of JS (with js all features + advanced features)
* Ts is a programming language made by microsoft.
* ts is programming language because we have a compiler(tsc) which converts tsc to js.
* browser and node cant run typescript, it can run js, so, we write ts and the typescript compiler(tsc)
   will convert all ts code into plain js. So, we can run that code.
* Interfaces and Generics are non-js features can only be used in ts files.
* ts also provides Meta-programming features like decorators.
* ts also provides Tuple type which is a special type in ts.A tuple type is a type that represents an
   array with a fixed number of elements of specific types,defined using square brackets [].
   types of the elements are separated by commas. 
   example  let value: [string, number] = ["hello", 123];
* if a function does not return anything than its return type would be void. example 13 and 14.
* if we do not specify void and function is not returning anything, type void by default there.
* the ? operator is used to mark a property as optional, while the ! operator is used to assert that a value
   is not null or undefined. 
* In TypeScript, you can define a generic type by using angle brackets (< >) and placing the type variable inside them.
   anything < > in angle brackets would be called generic of that component or variable or function etc.
#  difference between interface and type: 
* interface is used to define an object type, while type can be used to create an alias for any type example
   i) interface User{age:number}  ii) type NumberOrString = number | string;
* Interfaces can be merged, but types cannot. This means that if you define
   two interfaces with the same name, their properties will be merged into a single interface example  
   interface User{name:string},interface User{age:number} overall it will be treated like interface User{name:string;age:number}
* interface can be extended by other interfaces, while type cannot. example interface User {name: string; age: number;}   and 
   we have another interface which can extends this interface example  interface Admin extends User {role: string;}

# Type casting:
Type casting can be done in two ways in TypeScript
* let someValue: any = "hello";
   let strLength: number = (someValue as string).length;
* let someValue: any = "hello";
   let strLength: number = (<string>someValue).length;



# Core Types (supported TS)
number,string,boolean,object,Array,Tuple,Enum,any,unknown,never

* enums are supported by many programming languages,Js do not.(ts supports enums)
* void return type is in ts but not in js

# packages 
* whatever package we install we also install their types as well, npm i --save-dev @types/node 
example npm i express, npm i --save-dev @types/express  install both 

* npm install -g ts-node
* tsc --init
* npm i --save express body parser 
* npm i -D concurrently nodemon
* npm i --save-dev @types/express
* npm i --save-dev @types/node
* npm install -g ts-node
* npm install -D tslib @types/node


# -----------with express--------
install all the packages 
in tsconfig.json make some changes like mentioned.
* "target": "es2018"
* "module": "commonjs"
* "moduleResolution": "node", 
* "outDir": "./dist",
* "rootDir": "./src", 
* "include": ["src/**/*"] add this in tsconfig.json 
after that paste this script in package.json
resource:  https://blog.logrocket.com/how-to-set-up-node-typescript-express/

 # "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon dist/index.js\""
  }

  or 

    "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  }

then run your server at dev



# -----------with react--------
initialize the project by this command 
npx create-react-app my-app --template typescript

# ----------redux toolkit-----------
npm i @reduxjs/toolkit react-redux
npm i typescript @types/react-redux @types/react-dom @types/react @types/node @types/jest

