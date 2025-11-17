//! Problem 1:

//? Create a function formatValue that accepts a value which may be a string, number, or boolean, and returns the following based on the value type:
//? If the input is a string → return the string in uppercase
//? If the input is a number → return the number multiplied by 10
//? If the input is a boolean → return the opposite value (true → false, false → true)


//* solution No 1 =>
console.log()
console.log("Output of problem-1 =>")
type Value1 = string | number | boolean

const formatValue = (value : Value1)=> {
   if(typeof value === "string"){
        return value.toUpperCase()
   } else if ( typeof value === "number"){
       return value * 10
   } else if (typeof value === "boolean") {
    return !value
   } else {
    return `Value can't accept ${typeof value} -> this type`
   }
}
console.log(formatValue('hello')); //! output -> HELLO
console.log(formatValue(5)); //! output -> 50
console.log(formatValue(true)); //! output -> false
// console.log(formatValue(null)) //! output -> Value can't accept object -> this type





//! Problem 2:
//? Create a function getLength that accepts a value which may be a string or an array, and returns the length of the value.
//? If the input is a string → return the number of characters.
//? If the input is an array → return the number of elements.


//* solution No 2 =>
console.log()
console.log("Output of problem-2 =>")
type Value2 = string | Array<any>;

const getLength = (value: Value2) => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    } else {
        return `Value can't accept ${typeof value} -> this type`
    }
};
console.log(getLength('typescript')); //! output -> 10
console.log(getLength([10, 20, 30, 40])); //! output -> 4
// console.log(getLength(false)) //! output -> 4  Value can't accept boolean -> this type




//! Problem 3:
//? Create a Person class with name and age properties. Add a method getDetails that returns a string with the person's name and age.


//* solution No 3 =>
console.log()
console.log("Output of problem-3 =>")

class Person {
    name: string;
    age: number;
    constructor( name: string ,  age : number){
        this.name = name; 
        this.age = age;  
    }
        getDetails(): string{
            if (!this.name || !this.age) {
                return "Name and age is required";
            }
             return `'Name: [${this.name}], Age: [${this.age}]'`
        } 
}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails()); //! output -> 'Name: [John Doe], Age: [30]'

const person2 = new Person('Alice', 25);
console.log(person2.getDetails()); //! output -> 'Name: [John Doe], Age: [30]'

// const person3 = new Person('Alice');
// console.log(person3.getDetails()); //! output -> Name and age is required




