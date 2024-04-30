// spread operators: unpack an iterable array as comma seperated values
const add = (a,b)=>( // a,b are parameters
    console.log(a+b) // 4
)
const els = [2,2,3]
add(...els) // here are arguments


// rest parameter : pack multiple values into an array.
const log = (...rest)=>( // parameters
    console.log(rest) // [2,2,3]
)
log(2,2,3) // here are arguments

const logging = (a,b,...rest)=>( // parameters
    console.log(rest) // [3]
)
logging(2,2,3) // here are arguments


// Mutable
/*
both x and y are pointing to the same object whose value property
has been modified, and z remains unchanged.
*/
let x = {value:20}
let y = x
let z = {value:10}
y.value = 10
console.log(x,y,z) // { value: 10 } { value: 10 } { value: 10 }


/*
even though b was created by copying a, it's a separate object,
so changing b does not affect a, and c remains unchanged.
*/
let a = {value:20}
let b = {...a} // creates a new object b and copies all the properties of object a into it using the spread syntax (...).
let c = {value:10}
b.value = 10
console.log(a,b,c)  // { value: 20 } { value: 10 } { value: 10 }


const example =()=>{
    if(true){
        var x = 10;
    }
    console.log(x)
}
example()




// synchronous start
// JavaScript executes code line by line
console.log("1")
console.log("2")
console.log("3")
/*
Output:
1
2
3
*/
// synchronous end


// Asynchronous start
console.log("1st")
setTimeout(()=>(console.log("2nd")),1000) // the asynchronous nature of setTimeout, which allows code to continue executing without waiting for the timer to finish.
console.log("3rd")
/*
Output:
1st
3rd
2nd
*/
// Asynchronous end






const myPromise =()=>(
    new Promise((resolveFunction,rejectFunction)=>(
        setTimeout(()=>(
            resolveFunction("successfully resolved")
        ),1000)
    ))   
) 
console.log(myPromise()) // Promise { <pending> } When you call myPromise(), it returns a Promise object immediately. Since the Promise takes 1000 milliseconds to resolve, when you log the returned value, it shows Promise { <pending> } because the Promise is still pending.
myPromise().then((fromResolve)=>(
    console.log(fromResolve) // successfully resolved
))// when you use .then() to handle the resolved value of the Promise, it waits for the Promise to resolve. When the Promise resolves successfully, the then callback is invoked with the resolved value, which in this case is "successfully resolved".




const MyPromiseHandlingReject = ()=>(
    new Promise((resolveFunction,rejectFunction)=>(
        rejectFunction("rejected")
    ))
)
MyPromiseHandlingReject().then((res)=>(
    console.log(res)
)).catch((fromReject)=>(
    console.log(fromReject) // rejected
))





/*
.then() does not make the asynchronous operation run synchronously. 
It merely provides a way to handle the result of the asynchronous 
operation once it completes.

async/await provides a way to handle the result of the asynchronous 
operation  and also make asynchronous operations run synchronously
*/
const delay = (ms)=>(
    new Promise((resolve,reject)=>(
        setTimeout(()=>{
            console.log(ms)
            resolve()
        },ms)
    ))
)
const asyncAwaitExample = async ()=>{
    await delay(2000)
    await delay(1000)
}
asyncAwaitExample()
/*
output:
2000
1000
*/

/*
Immutable method:-
slice() method extracts a section of a string 
and returns it as a new string, without modifying 
the original string.

Syntax : string.slice(start, end)
*/
const text = "I'm a MERN stack developer"
console.log(text.slice(6,10)) // MERN


/*
The split() method is used to split a string into an array 
of substrings and returns the new array.

Syntax : string.split(separator, limit)
limit - the maximum number of substrings to include
in the resulting array
*/
const textValue = "I'm a MERN stack developer-Hyderabad-Native Place is Mncl"
console.log(textValue.split("-"))// [ "I'm a MERN stack developer", 'Hyderabad', 'Native Place is Mncl' ]
console.log(text.split("-",1)) // [ "I'm a MERN stack developer" ]


const replaceText = "I'm a MERN stack developer-Hyderabad-Native Place is Mncl"
console.log(replaceText.replace("MERN stack","Web")) // I'm a Web developer-Hyderabad-Native Place is Mncl


/*
includes()
The includes() method determines whether a string contains the characters of a specified string.

It returns true if the string contains the value, otherwise it returns false.

Syntax : string.includes(searchvalue, start)
start :- optional parameter, specifies the position within the string at which to begin the search. If not specified, the search starts at the beginning of the string.
*/
const includeStr = "I'm a web developer or mern stack developer"
console.log(includeStr.includes("mern")) // true
console.log(includeStr.includes("web",10)) // false
console.log(includeStr.includes("web",5)) // true


/*
Immutable method:-
The map() method also iterates over each element in an array, 
but it creates a new array by calling a provided function on every 
element in the calling array.
It returns a new array containing the results of calling the 
provided function on each element in the original array.
It's typically used when you want to transform each element 
of an array in some way and create a new array with the 
transformed elements.

array.map(callback(currentValue, index, arr))
*/
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => {
    return number * number; // Return the square of each number
});
console.log(numbers) // [ 1, 2, 3, 4, 5 ]
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]




/*
Immutable method:- forEach() Function:
The forEach() method iterates over each element in an array 
and executes a provided callback function once for each element.
It doesn't return a new array; instead, it just iterates over 
the array and executes the provided callback function for each element.
It's typically used when you want to perform some operation or 
side effect on each element of the array, such as logging each 
element or updating a variable.

Syntax : array.forEach(callback(currentValue, index, arr))
*/
let fruits = ["apple", "orange", "cherry"];
fruits.forEach((fruit) => console.log(fruit));


/*
Immutable method:- filter()
The filter() method creates a new array filled with all elements that pass the test (provided as a function).

A new array with the elements that pass the test will be returned. If no elements pass the test, an empty array will be returned.

Syntax : array.filter(function(currentValue, index, arr))
*/
const numb = [1, -2, 3, -4];
const positiveNumbers = numb.filter((number) => number > 0);
console.log(positiveNumbers); // [1, 3]



/*
Immutable method:- reduce()
The reduce() method executes a reducer function (that you provide) 
on each element of the array, resulting in single output value.

Syntax : array.reduce(function(accumulator, currentValue, index, arr), initialValue)

Here accumulator is the initialValue or the previously returned value 
of the function and currentValue is the value of the current element, 
index and arr are optional arguments.
*/
const numbersReduce = [1, 2, 3, 4, 5];
const addNums = numbersReduce.reduce((a,c)=>(
    a+c
))
console.log(addNums) // 15



/*
 every()
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

Syntax : array.every(function(currentValue, index, arr))
*/
const numbersEvery = [11, 21, 31, 41, 51];
const addNumsEvery = numbersEvery.every((currentValue)=>(
    currentValue>15
))
console.log(addNumsEvery) // false


/*
Immutable method:- some()
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

Syntax : array.some(function(currentValue, index, arr))
*/
const numbersSome = [11, 21, 31, 41, 51];
const addNumsSome = numbersSome.some((currentValue)=>(
    currentValue>15
))
console.log(addNumsSome) // true


/*
reverse() is a Mutable method.
The reverse() method reverses the order of the elements in an array.The first array element becomes the last, and the last array element becomes the first.
Syntax : array.reverse()
*/
const reverseOfNums = [11, 21, 31, 41, 51];
const reverseOf = reverseOfNums.reverse()
console.log(reverseOfNums) // [ 51, 41, 31, 21, 11 ]
console.log(reverseOf)// [ 51, 41, 31, 21, 11 ]