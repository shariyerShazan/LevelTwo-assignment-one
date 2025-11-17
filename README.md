# TypeScript Blog

এই ব্লগে আমরা দুটি বিষয় একসাথে দেখব:  

- Interface এবং Type এর মধ্যে পার্থক্য  
- any, unknown, এবং never টাইপের পার্থক্য  

TypeScript এ interface এবং type উভয়ই অবজেক্টের structure define করতে ব্যবহার করা হয়, কিন্তু তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে। Interface সাধারণত অবজেক্ট বা ক্লাসের জন্য, type আরও flexible এবং union, intersection, primitive, tuple define করতে পারে। Interface declaration merge করতে পারে, type করতে পারে না।  

উদাহরণ সহ টেবিল:

| বৈশিষ্ট্য               | Interface                       | Type                          |
|------------------------|---------------------------------|-------------------------------|
| Declaration merging     | Supported                       | Not supported                 |
| Extend/Implement        | Supported                       | Direct extend unsupported     |
| Use case                | অবজেক্ট বা ক্লাস structure      | Primitive, Union, Intersection|

```ts
// Interface Example
interface Person {
    name: string;
    age: number;
}

// Interface Merging
interface Person {
    gender: string;
}

const p: Person = {
    name: "John",
    age: 30,
    gender: "Male"
};

// Type Example
type Employee = Person & { salary: number };

const emp: Employee = {
    name: "Alice",
    age: 25,
    gender: "Female",
    salary: 5000
};
 ```





# TypeScript - any, unknown, এবং never টাইপের পার্থক্য

TypeScript এ তিনটি বিশেষ ধরনের টাইপ আছে যা runtime safety এবং flexibility নির্ধারণে ব্যবহার হয়। এগুলো হল: `any`, `unknown`, এবং `never`।  

---

## 1. any

TypeScript এ `any` টাইপ এমন একটি টাইপ যা সব ধরনের মান নিতে পারে এবং কোন ধরনের type checking হয় না। এটি `unknown` এর মতো flexible কিন্তু unsafe।  

---

## বৈশিষ্ট্য

- সব ধরনের value গ্রহণ করতে পারে।  
- Type checking হয় না → runtime error হতে পারে।  
- দ্রুত prototype code বা migration এর জন্য ব্যবহার করা যেতে পারে।  

---

**উদাহরণ:**
```ts
let value: any;
value = 10;
value = "Hello";
value = true;

// কোন টাইপের operations করলে error দিবে না
console.log(value.toUpperCase()); // কোন error নেই
console.log(value.toFixed(2));    // কোন error নেই
```



## 2. unknown
TypeScript এ `unknown` টাইপ এমন একটি টাইপ যা সব ধরনের মান নিতে পারে, কিন্তু ব্যবহার করার আগে টাইপ চেক করতে হবে। এটি `any` টাইপের মতো flexible কিন্তু অনেক বেশি safe।  


## বৈশিষ্ট্য

- সব ধরনের value গ্রহণ করতে পারে।  
- কোন operation ব্যবহার করার আগে টাইপ চেক করা আবশ্যক।  
- Runtime errors কমাতে সাহায্য করে।  

---

## উদাহরণ
```ts
let unknownValue: unknown;
unknownValue = "Hello";
unknownValue = 123;

// Type check না করলে operations ব্যবহার করা যাবে না
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // Safe
}

if (typeof unknownValue === "number") {
    console.log(unknownValue.toFixed(2)); // Safe
}
```

---

## 3. never

TypeScript এ `never` টাইপ এমন একটি টাইপ যা কখনো কোনো মান return করে না। এটি সাধারণত ফাংশনে ব্যবহার হয় যা সবসময় error throw করে বা infinite loop এ থাকে।  

---

## বৈশিষ্ট্য

- কখনো কোনো value return করে না।  
- Error throw করা ফাংশন বা infinite loop ফাংশনের জন্য ব্যবহার হয়।  
- ফাংশন কখনো normal execution শেষ করবে না এমন ক্ষেত্রে ব্যবহার করা হয়।  

---

## উদাহরণ
```ts
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while(true) {}
}
```