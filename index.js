"use strict"


// second larget number in an array
const SecondLargestNumber=(arr)=>{
    arr.sort((a,b)=>b-a) // [ 9, 8, 7, 2 ]
    return arr[1]
}
console.log(SecondLargestNumber([2,8,9,7])) // 8



/*
Null in JavaScript means an empty value and is also a primitive type in JavaScript. 
The variable which has been assigned as null contains no value. Undefined, 
on the other hand, means the variable has been declared, but its value has not been assigned.
*/

let variableDeclaredAssigned=null;
console.log(variableDeclaredAssigned) // null
const vda=null
console.log(vda) // null
console.log(typeof null) // object




let variableDeclaredButNotAssigned;
console.log(variableDeclaredButNotAssigned) // undefined
console.log(typeof undefined) // undefined
/*
In JavaScript, the const keyword is used to declare constants, which are variables that cannot be reassigned. 
However, a const declaration must be initialized when it is declared. If you declare a const variable without initializing it, 
you'll get a SyntaxError: Missing initializer in const declaration.

const v;
console.log(v) // SyntaxError: Missing initializer in const declaration
*/




console.log(null===undefined) // false
console.log(null==undefined) // true



const shortcutDuplicate=(ar)=>{
    return [...new Set(ar)]
}
console.log(shortcutDuplicate([1,2,3,2])) // [ 1, 2, 3 ]
    


/*
The continue and break statements are used within loop constructs 
such as for, while, and do...while loops in JavaScript. 
They cannot be used inside array methods like forEach, map, filter, etc., 
because these methods use callback functions, 
not actual loop constructs.
*/


/*
What is the microservices architecture?
Microservices architecture (often shortened to microservices) 
refers to an architectural style for developing 
applications. Microservices allow a large application to be 
separated into smaller independent parts, with each part having 
its own realm of responsibility.
*/


/*
what is node.js?
->node.js is neither a language nor a framework
->node.js is a runtime environment for executing js code on server sid
->node.js is responsible for converting
high-level code to low-level code(machine understandable code)
->express.js is framework for node.js and the role of
framework is to simplify creation of large applications
by providing many inbuilt and reusable libraries
->express.js is responsible for http server functionalities like sending data to client
->express.js framework built on top of node.js
->express.js framework is designed to simplify
the process of building web apps and Api's by 
providing set of features like simple routing
system,middleware support etc.
*/


/*
how node is a runtime environment on server side? what is V8?
-> javascript languages will run and executed by the browsers(client) like chrome
-> Every browser(chrome) has javascript engine(V8) in it, 
like chrome(browser) has V8 Engine(Javscript engine); edge(browser) had chakra(javascript engine) and 
firefox(browser) has spider monkey(js engine)
-> with node.js(server side) runtime environment javascript
can run outside the browser also
->As browser executes javascript on client side and
we have node.js to execute javascript on server side
*/


/*
Runtime Environment:-
primarily focuses on providing the necessary
infrastructure for code execution,including services
like memory management and I/O operations

Framework:-
primarily focuses on simplifying the development
process by offering a structured set of tools,
libraries and best practices.
*/


/*
Browser(chrome or edge or firefox) <--->  Client-side(React or Angular)  <--->   Server-side(Node.js with Express.js framework) <---> Database(Mongodb or SQLITE)
*/

/*
why node.js or what are 7 main features of node.js?
>single threaded
>asynchronous
>event-driven
>v8 js engine
>cross-platform
>NPM
>Real-Time Capabilities:-Node is good for
handling bi-directional communication like 
chat application,gaming application where
user interact directly
*/


/*
what is single threaded programming?
->when we use other languages other than node
the single threaded programming is a synchronous
programming.
->but by using node.js we can achieve asynchronous
programming even with single threaded
*/


/*
what is synchronous programming?
->synchronous approach is a blocking approach
because until task one is completed task 2
has to be wait.
->synchronous programming focuses on 
order of execution in a sequential
manner
*/


/*
event: signals that something has happened in program
event emitter: create or emit events
event queue: event emitted stored in queue
event handler(event listener): functions that responds to specific events
event loop: event loop picks up an event from event queue and executes them in the order they were added
event driven architecture: operations in node are based on events
*/


/*
Disadvantages of node.js:
->node.js is not good for applications that involve heavy CPU Processing
*/


/*
->node_modules folder contains all the dependencies of the node project.
->npm stands for node package manager which is used to manage dependencies(node_modules folder) of
your node project
->package.json:- metadata of node project
->Module In node: Module contains a specific functionality that can be easily reused within nodejs application
and modules can contain multiple functions and variables
*/


/*
exporting a module in different ways:-
->module.exports object can be used to export the module.
->exports object can be also used directly to export the module.
*/



// in nodejs you can use require function to import a module



/*
Module wrapper function:-
->each module is wrapped in a function called the "module.wrapper function" before it is executed
*/



/*
Types of modules in node:-
1)Built-in Module(core modules):-Already present modules in node.js which provide essential functionalities
example:-fs(file system),http(HTTP server),path(path manipulation),util(utils)

2)Local modules:- user defined modules created by developers for specific functionalities
3)Third-party modules:- external modules or libraries created by community and provide additional 
functionalities for node projects.You can install third-party modules by using "npm install" command
example:-npm install express
*/




/*
Top built-in modules commonly used in node.js projects?
1)fs, 2)path, 3)os, 4)events, 5)http
*/



/*
1)fs module:-
->fs module in node.js provides a set of methods for interacting with the file system, like methods are fs.readFile(),fs.writeFile(),fs.mkdir()
example:-
const fs = require("fs")
fs.readFile("fs.txt","utf8",(err,data)=>{
    if(err){
        return;
    }
    console.log(data)
})

const contentToWrite="some content"
fs.writeFile("fs.txt",contentToWrite,"utf8",(err)=>{
    if(err){
        return;
    }
    console.log("write operation completed")
})
*/



/*
2)path:-path module provide utilities for joining,resolving and manipulating paths
ex:-
const path = require("path");
console.log(path.join("/docs","file.txt")) 
output:- /docs/file.txt
*/



/*
OS module:-set of methods for interacting with operating system
ex-
const os = require("os")
console.log(os.type())
*/




/*
Explain the role of events module? How to handle events in node?
const EventEmitter = require("events");
const myEmitter = new EventEmitter();
myEmitter.on("eventName",()=>{console.log("event occurred")});
myEmitter.emit("eventName");
*/




/*
Event arguments:- additional data that can be passed along with the emitted event
const EventEmitter = require("events")
const myEmitter = new EventEmitter()
myEmitter.on("eventName",(arg1,arg2)=>{console.log(arg1,arg2)})
myEmitter.emit("eventName","Arg 1","Arg 2")
*/




/*
Difference b/w function and event?
function:- function is a reusable piece of code that performs a specific task when invoked or called.
events:- events represent actions that can be observed and responded to,events will call functions internally
*/



/*
http module:-
->HTTP module can create http server that listens to server ports and gives a response back
to the client.
->createServer() method is used to create an http server

example:-
const http = require("http");
const server = http.createServer();
const port=9872;
server.listen(port,()=>console.log(`server running at port number ${port}`))
*/


console.log(10+"10") // 1010
console.log(10-"10") // 0




// shallow copy 
const arrScDc1 = [1,23,4]
const arrScDc2 = arrScDc1 // shallow copy
arrScDc2[1] = 2
console.log(arrScDc1) // [1,2,4]
console.log(arrScDc2) // [1,2,4]


// deep copy
const ardc1 = [1,23,4]
const ardc2 = [...ardc1] // deep copy
ardc2[1] = 2
console.log(ardc1) // [1,23,4]
console.log(ardc2) // [1,2,4]






const rd=(arr)=>{
    let wd=[]
    arr.forEach((each)=>{
        if(wd.includes(each)) return
        wd.push(each)
    })
    return wd
}
console.log(rd([1,2,3,1,2,3])) // [ 1, 2, 3 ]
       



/*
for...in loop is used to loop through the properties of an object
*/
const personOb = {
    name:"rohith",age:22,gender:"male"
}
for(let key in personOb){
    console.log(personOb[key])
}
/*
output:
rohith
22
male
*/


/*
Reconciliation is React's way of diffing the virtual DOM tree with the updated 
virtual DOM to determine the most efficient way to update the real DOM. 
This process allows React to apply only the necessary changes to the DOM, 
avoiding the costly operation of updating the entire DOM tree.
*/




// hoisting
console.log(aging) // undefined
var aging = 10
console.log(aging) // 10


console.log(typeof [])// object
console.log(typeof {})// object
const checkArray = (el)=>{
    return Array.isArray(el)
}
console.log(checkArray([])) // true
console.log(checkArray({})) // false


// how to swap two variables without using the third variable
let as = 1;
let bs = 2;
[as, bs] = [bs, as];
console.log(`as: ${as}  bs: ${bs}`); // as: 2  bs: 1



// sort an array by even and odd numbers
const sortByEvenAndOdd = (arr)=>{
    const sortedArray = arr.sort((a,b)=>{
        if(a%2!==b%2){
            return a%2===0?-1:1
        }
        return a-b
    })
    return sortedArray
}
console.log(sortByEvenAndOdd([9,8,6,5,2,4,1,10])) // [2,4,6,8,10,1,5,9]




// find the missing number from the given array of input based on the count
const misingNumber = (arr,count)=>{
    let m=[]
    for(let i = 1;i<=count;i++){
        // console.log(i)
        if(arr.includes(i)) continue
        m.push(i)
    }
    return m
}
console.log(misingNumber([1,2,3,5],10)) // [ 4, 6, 7, 8, 9, 10 ]



/*
Callback Hell, also known as "Pyramid of Doom", refers to a situation where 
multiple nested callbacks make the code more difficult to read and understand. 
This often occurs when dealing with asynchronous operations, such as handling 
events, making HTTP requests, or reading files.
*/



// find the missing number from the given array of input
const misingNum = (arr)=>{
    return arr
}
console.log(misingNum([1,2,3,5]))



// remove all whitespace characters from string
const removeWhiteSpaceChar = (str)=>{
    const arr = str.split("")
    let removedStr=""
    for(let i of arr){
        if(i===" ") continue
        removedStr+=i
    }
    return removedStr
}
console.log(removeWhiteSpaceChar(" interview,   Happy ")) 



const factorialOfANum = (n)=>{
    let fact=1
    for(let i=1;i<=n;i++){
        fact=fact*i
    }
    return fact
}
console.log(factorialOfANum(5)) // 120



const factorialOfANumber = (number)=>{
    if(number===1){
        return 1
    }
    return number*factorialOfANumber(number-1)
}
console.log(factorialOfANumber(5))


// prime or not
const isPrimeOrNot = (number)=>{
    if(number<2) return false
    for(let i=2;i<number;i++){
        if(number%i===0) return false
    }
    return true
}
console.log(isPrimeOrNot(1)) // false
console.log(isPrimeOrNot(10)) // false
console.log(isPrimeOrNot(7)) // true
console.log(isPrimeOrNot(2)) // true


const largestNumInArray = (arr)=>{
    let largestNum=null
    for(let i of arr){
        largestNum=largestNum<i?i:largestNum
    }
    return largestNum
}
console.log(largestNumInArray([2,4,6,9,3])) // 9



// number of vowels in a string
const countOfVowels = (str)=>{
    const vowels=["a","e","i","o","u"]
    let count = 0
    for(let i of str.toLowerCase()){
        vowels.includes(i)?count++:count
    }
    return count
}
console.log(countOfVowels("Hello, world!")) // 3




// whether two strings are anagrams or not.
// anagram is a word formed by rearranging the letters of another word.
const AnagramOrNot = (str1,str2)=>{
    return str1.split("").sort().join("")===str2.split("").sort().join("")
}
console.log(AnagramOrNot("listen","silent"))


// using set object method in js remove duplicate elements in an array
const duplicateElsRemoval = (arr)=>{
    return [...new Set(arr)]
} 
console.log(duplicateElsRemoval([1,2,3,4,4,5,6,6])) // [ 1, 2, 3, 4, 5, 6 ]


// duplicate values removeing
const RemovingDuplicateElsWithInternalJs = (arr)=>{
    let arrayWithoutDuplicateElements = []
    for(let i of arr){
        arrayWithoutDuplicateElements.includes(i)?arrayWithoutDuplicateElements:arrayWithoutDuplicateElements.push(i)
    }
    return arrayWithoutDuplicateElements
}
console.log(RemovingDuplicateElsWithInternalJs([1,2,3,4,4,5,6,6]))// [ 1, 2, 3, 4, 5, 6 ]






// palindrom or not
const isPalindromeOrNotWithoutInternalJs = (str)=>{
    let reversedStr = ""
    for(let i=str.length-1;i>-1;i--){
        reversedStr+=str[i]
    }
    return reversedStr===str
}
console.log(isPalindromeOrNotWithoutInternalJs("radar")) // true
console.log(isPalindromeOrNotWithoutInternalJs("racer")) // false



// palindrom or not
const isPalindromeOrNot = (str)=>{
    return str.split("").reverse().join("")===str
}
console.log(isPalindromeOrNot("radar")) // true
console.log(isPalindromeOrNot("racer")) // false


// write a function that returns the longest word in the sentence?
const withoutInternalJsLongestWord = (str)=>{
    let longest=""
    for(let i of str.split(" ")){
        longest = longest.length>i.length?longest:i
    }
    return longest
}
console.log(withoutInternalJsLongestWord("I love coding in javascript"))
console.log(withoutInternalJsLongestWord("I love coding in dsa"))



// write a function that returns the longest word in the sentence?
const findLogestword = (strs) => {
    const arrStr = strs.split(" ")
    const long= arrStr.reduce((a,c)=>{
        // console.log(a,c)
        if(a.length>c.length){
            return a
        }
        return c
    })
    return long
}
console.log(findLogestword("I love coding in javascript")); // javascript
console.log(findLogestword("I love coding in dsa")); // coding





// write a function that returns the reverse of a string without using internal js?
const withoutInternalJsReverseString = (strs)=>{
    let reversedStr = "";
    for(let i = strs.length-1; i>-1; i--){
        // console.log(i)
        reversedStr+=strs[i]
    }
    return reversedStr
}
console.log(withoutInternalJsReverseString("Interview, Happy"))// yppaH ,weivretnI



// write a function that returns the reverse of a string with internal js?
const ReturnsReverseOfAString=(str)=>{
    const strToArr = str.split("")
    const reverseStrArr = strToArr.reverse()
    const reveseStr = reverseStrArr.join("")
    return reveseStr
}
console.log(ReturnsReverseOfAString("Love is toxic")) // cixot si evoL 
console.log(ReturnsReverseOfAString("interview, Happy")) // yppaH ,weivretni






/*
You might have seen a “login with Google” or “login with Facebook” 
button on the login/signup page of a website that makes easier to 
get using the service or website by simply logging into one of the 
services and grant the client application permission to access your 
data without giving Password. This is done with the OAuth.
*/


/*
To make invisible the border of search input:-
example:-

index.js:-
<input type="search" placeholder="search" className="search-box" />

index.css:-
.search-box{
    outline-width:0;
    border:none;
}
*/

/*
Material UI makes it very easy to write CSS-in-JS code enabling us 
to make more CSS changes to our taste. To better change the styling 
of what we already have, we can use the makeStyles function from 
Material UI, which allows us to create CSS classes with JavaScript.
*/

/*
Flex Grow:-
The flex-grow property specifies how flex items Scale Up their size based on the available space.
Flex Grow property has the following values:
0(default)
+ve values

Flex Shrink:-
The flex-shrink property specifies how flex items Scale Down their size based on the available space.
Flex Shrink property has the following values:
1(default)
0
+ve values
*/


/*
useEffect will run after render of the component

useMemo will run during render of the component

Hooks are reusable functions.
When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
Custom Hooks start with "use". Example: useFetch.
*/


// pass by value:
let xa = 1
let ya = xa
ya=ya+1
console.log(xa) // 1
console.log(ya) // 2


// pass by reference:
let ax = [1,2]
let ay = ax
ay[2]=3
console.log(ax) // [ 1, 2, 3 ]
console.log(ay) // [ 1, 2, 3 ]



/*
Dynamic programming is all about breaking down a problem into smaller 
subproblems and solving each subproblem only once, storing the 
solutions for future reference. This approach can significantly 
improve the efficiency of our algorithms by avoiding redundant 
calculations.
*/


/*
Climbing StairCase:where as n=number of steps
-count the number of distinct way to climb the top
n=1,climbingstaircase(1)=1 | (1)
n=2,climbingstaircase(2)=2 | (1,1) and (2)
n=3,climbingstaircase(3)=3 | (1,1,1) (1,2) and (2,1)
n=4,climbingstaircase(4)=5 | (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) and (2,2)
*/
// climbingstaircase example: 
const climbingstaircase=(n)=>{
    let noOfWays = [1,2]
    for(let i = 2;i<=n;i++){
        noOfWays[i]=noOfWays[i-1]+noOfWays[i-2]
    }
    return noOfWays[n-1]
}
console.log(climbingstaircase(1)) // 1
console.log(climbingstaircase(2)) // 2
console.log(climbingstaircase(3)) // 3
console.log(climbingstaircase(4)) // 5
console.log(climbingstaircase(5)) // 8



/* 
Cartesian Product:
if A=[1,2] and B=[3,4] then,AXB=[[1,3],[1,4],[2,3],[2,4]]
*/
// cartesian prooduct example: 
// time complexity:-  Big-O = O(mn)
const cartesianProduct=(A,B)=>{
    let result = []
    for(let i=0;i<A.length;i++){
        for(let j=0;j<B.length;j++){
            result.push([A[i],B[j]])
        }
    }
    return result
}
console.log(cartesianProduct([1,2],[3,4])) // [ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ]
console.log(cartesianProduct([1,2],[3,4,5])) // [ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]




// bubble sort example: compare adjacent elements and swap them:
// Big-O = O(n2)
const sortUsingBubbleSort=(unsortedArray)=>{
    let swapped
    do{
        for(let i=0;i<unsortedArray.length-1;i++){
            // console.log(i)
            swapped=false
            if(unsortedArray[i]>unsortedArray[i+1]){
                let temp=unsortedArray[i]
                unsortedArray[i]=unsortedArray[i+1]
                unsortedArray[i+1]=temp
                swapped=true // Set flag if swap occurs
            }
        }
    }while(swapped)
    return unsortedArray
}
console.log(sortUsingBubbleSort([-6,20,8,-2,4]))




const test = [1,0,3,4]
test[1]=2
console.log(test) // [ 1, 2, 3, 4 ]


// binary search only works on a sorted array
//Binary search is more efficient than the linear search in the case of large data sets.
// take middle element and if target element is greater than middle element get rid of first half and vice versa
// time complexity is O(logn)
const indexOfTargetElementBinarySearch = (arrTar,tar)=>{
    let leftIndex = 0
    let rightIndex = arrTar.length-1
    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(arrTar[middleIndex]===tar){
            return middleIndex
        }
        if(tar<arrTar[middleIndex]){
            rightIndex= middleIndex-1
        }
        if(tar>arrTar[middleIndex]){
            leftIndex= middleIndex+1
        }
    }
    return -1
}
console.log(indexOfTargetElementBinarySearch([-5,2,4,6,10],10))// 4
console.log(indexOfTargetElementBinarySearch([-5,2,4,6,10],1))// -1
console.log(indexOfTargetElementBinarySearch([-5,2,4,6,10],2))// 1
console.log(indexOfTargetElementBinarySearch([-5,2,4,6,10],4))// 2




// Linear search example
// Big-O is O(n)
const arrTar = [-5,2,10,4,6]
const tar = 10
const indexOfTargetEl = (arrTar,tar)=>{
    for(let i=0;i<arrTar.length;i++){
        // console.log(i)
        if(arrTar[i]===tar){
            return i
        }
    }
    return -1
}
console.log(indexOfTargetEl(arrTar,tar))// 2





const arrTarget = [-5,2,10,4,6]
const t = 10
const indexOfTargetElement = (arrTarget,t)=>{
    const indexOfTargetEl = arrTarget.findIndex((each)=>each===t)
    return indexOfTargetEl
}
console.log(indexOfTargetElement(arrTarget,t))




// give a number "n",find the nth element of fibonacci sequence (0,1,1,2,3,5,8,..)
const fibonacciWithRecursion= (nthIndex)=>{
    if(nthIndex<2){
        return nthIndex
    }
    return fibonacciWithRecursion(nthIndex-1)+fibonacciWithRecursion(nthIndex-2)
}
console.log(fibonacciWithRecursion(3)) // 2
console.log(fibonacciWithRecursion(1)) // 1
console.log(fibonacciWithRecursion(0)) // 0
console.log(fibonacciWithRecursion(6)) // 8




// give a number "n",find the nth element of fibonacci sequence (0,1,1,2,3,5,8,..)
const fibonacciWithoutRecursion= (nthIndex)=>{
    if(nthIndex===0){
        return nthIndex
    }
    let fEls = [0,1]
    for(let i=2;i<=nthIndex;i++){
        fEls[i] = fEls[i-1]+fEls[i-2]
    }
    return fEls[fEls.length-1]
}
console.log(fibonacciWithoutRecursion(3)) // 2
console.log(fibonacciWithoutRecursion(1)) // 1
console.log(fibonacciWithoutRecursion(0)) // 0
console.log(fibonacciWithoutRecursion(6)) // 8




/*
-recursion is when a function call itself
-every recursion needs to have a condition to terminate recursion
ex:-
const func = ()=>(
    func()
)
func()
*/
const factorialRecursion = (n)=>{
    if(n===1){
        return n
    }
    return n*factorialRecursion(n-1) 
}
console.log(factorialRecursion(5))// 120
console.log(factorialRecursion(2))// 2




// n should be equal to 2 power x
const isPowerOfTwoBitwise=(n)=>{
    if(n<1){
        return false
    }
    return (n & (n-1))===0
}
console.log(isPowerOfTwoBitwise(8)) // true
console.log(isPowerOfTwoBitwise(5)) // false




// n should be equal to 2 power x
// Big O = O(logn)
const PowerOfTwo=(n)=>{
    if(n<1){
        return false
    }
    // console.log(n/2)
    let quotient=n
    while(quotient!==1){
        if(quotient%2!==0){
            return false
        }
        quotient=quotient/2
        // console.log(quotient,"remainder")
    }
    return true
}
console.log(PowerOfTwo(8)) // true
console.log(PowerOfTwo(5)) // false
console.log(PowerOfTwo(7)) // false






const factorialOfAnInteger = (n)=>{
    let factorialNumber=1;
    for(let i = 1;i<=n;i++){
        // console.log(i)
        factorialNumber= factorialNumber*i
    }
    return factorialNumber
}
console.log(factorialOfAnInteger(2)) // 2
console.log(factorialOfAnInteger(3)) // 6
console.log(factorialOfAnInteger(4)) // 24
console.log(factorialOfAnInteger(0)) // 1
console.log(factorialOfAnInteger(1)) // 1


const fibonacciSequence = (n)=>{
    let f = [0,1]
    for(let i=2;i<n;i++){
        f[i]=f[i-1]+f[i-2]
    }
    return f
}
console.log(fibonacciSequence(2)) // [ 0, 1 ]
console.log(fibonacciSequence(3)) // [ 0, 1, 1 ]
console.log(fibonacciSequence(4)) // [ 0, 1, 1, 2 ]



const assignArr = [1,2,3,4,5]
assignArr[2]=6
console.log(assignArr) // [ 1, 2, 6, 4, 5 ]


const duplicateArray = [2,5,7,9,0,2,4,3,7,10,1,1,6]
let newArray = []
const array = duplicateArray.forEach((eachEl)=>{
    // console.log(eachEl)
    if(newArray.includes(eachEl)){
        return newArray
    }
    newArray.push(eachEl)
})
console.log(newArray)// [2, 5,  7, 9, 0,4, 3, 10, 1, 6]


const secondDuplicateArr = [1,2,1,0,3,4,3]
const withoutDuplicateValues = (arrayWithDuplicateValues)=>{
    let newArr = []
    arrayWithDuplicateValues.forEach((eachEl)=>{
        for(let i of newArr){
            if(i===eachEl){
                return newArr
            }
        }
        newArr.push(eachEl)
    })
    return(
        newArr
    )
}
console.log(withoutDuplicateValues(secondDuplicateArr))



// without using internal js
const duplicateArr = [2,5,7,9,0,2,4,3,7,10,1,1,6]
let newArr = []
const arr = duplicateArr.forEach((eachEl)=>{
    // console.log(eachEl)
    for(let i of newArr){
        if(i===eachEl){
            return newArr
        }
    }
    newArr.push(eachEl)
})
console.log(newArr)// [2, 5,  7, 9, 0,4, 3, 10, 1, 6]




/*
Object.freeze()  vs  const 
*/
const freezeVsConst = "june"
freezeVsConst = "july"
console.log(freezeVsConst) // TypeError: Assignment to constant variable.

const person = {
    name:"rohith"
}
Object.freeze(person)
person.name="appala"
console.log(person) // { name: 'rohith' }


/*
how to sort an given numbered array
*/
const unsortedArray = [10,4,29,34,63,3,87,72]
const sortedArray = unsortedArray.sort((a,b)=>{
    return a-b
})
console.log(sortedArray) // [3,  4, 10, 29,34, 63, 72, 87]



/*
how to sort an given string array
*/
const unsortedArrayStr = ["jan","march","feb","april"]
const sortedArrayStr = unsortedArrayStr.sort()
console.log(sortedArrayStr) 


/*
duplicate array
*/
const d=[14,23,6,6,14,56,87,14]
const returnDuplicateEls = d.filter((el,i,arr)=>
    (
        arr.indexOf(el)!=i
    )
)
console.log(returnDuplicateEls)


/*
remove duplicate values and log unique values in an array
*/
const u=[14,23,6,6,14,56,87,14]
const returnuniqueEls = u.filter((el,i,arr)=>
    (
        arr.indexOf(el)===i
    )
)
console.log(returnuniqueEls) // [ 14, 23, 6, 56, 87 ]


/*
remove duplicate values and log unique values in an array in sorted order
*/
const us=[14,23,6,6,14,56,87,14]
const returnuniqueElsInSortedOrder = us.filter((el,i,arr)=>
    (
        arr.indexOf(el)===i
    )
).sort((a,b)=>(a-b))
console.log(returnuniqueElsInSortedOrder) //  [ 6, 14, 23, 56, 87 ]


/*
remove duplicate values and log unique values in an array in sorted descending order
*/
const usd = [1,2,1,3,4,2,3,56,7,8,9]
const usdSorted = usd.filter((el,i,arr)=>(
    arr.indexOf(el)===i
)).sort((a,b)=>b-a)

console.log(usdSorted)



/*
find maximum value in an array
*/
const arrayValues = [1,2,3,4,56,7,98,9]
const findMaXValueFunc = (arrayValues)=>{
    return (
        arrayValues.reduce((previous,currentValue)=>(
               previous>currentValue?previous:currentValue
            )
        )
    )
}
const maximumValue = findMaXValueFunc(arrayValues)
console.log(maximumValue) // 98


// average of numbered array
const arrayValuesAvg = [1,2,3,4,5]
const totalArrayValuesAvg = arrayValuesAvg.reduce((prev,current)=>(
        prev+current
    ))
const lengthOfArrayValuesAvg = arrayValuesAvg.length
console.log(totalArrayValuesAvg/lengthOfArrayValuesAvg)// 3




// how can you uppercase 1st character in a string array
const strs = ["jan","feb","march","april","may","june"]
const uppperCaseArr = strs.map((el)=>{
    console.log(el.substring(1))
    return(
        el.charAt(0).toUpperCase()+el.substring(1)
    )
})
console.log(uppperCaseArr) // [ 'Jan', 'Feb', 'March', 'April', 'May', 'June' ]

/* Output
a
eb
arch
pril
ay
une
[ 'Jan', 'Feb', 'March', 'April', 'May', 'June' ]
*/


// how to find minimum value in numbered array
const numMinArr = [2,3,1,0,4] 
const minimumValue = numMinArr.reduce((p,c)=>(
       p<c?p:c
    ))
console.log(minimumValue) // 0



// how to make a sentence of a given array
const strArray = ["hi","im","rohit"]
const sentence = strArray.join(" ")
console.log(sentence) // hi im rohit
const sentenceWithHyphen = strArray.join("-")
console.log(sentenceWithHyphen) // hi-im-rohit


const ids = [1,2,3,4]
const tobematch = [1,2]
const resultMatch = ids.some((ele)=>tobematch.includes(ele))
console.log(resultMatch)// true


const idsNot = [3,4]
const tobematchNot  = [1,2]
const resultMatchNot = idsNot.some((ele)=>tobematchNot.includes(ele))
console.log(resultMatchNot) // false



const stdArray = [1,2,3,4,5,6,8]
const stdStr = "King"
console.log(Array.isArray(stdArray)) // true
console.log(Array.isArray(stdStr)) // false


const str = "welcome to js coding"
const strArr = str.split("")
console.log(strArr)
const reversedArr = strArr.reverse()
console.log(reversedArr)
console.log(reversedArr.join(""))
/*
Output:

[
  'w', 'e', 'l', 'c', 'o',
  'm', 'e', ' ', 't', 'o',
  ' ', 'j', 's', ' ', 'c',
  'o', 'd', 'i', 'n', 'g'
]
[
  'g', 'n', 'i', 'd', 'o',
  'c', ' ', 's', 'j', ' ',
  'o', 't', ' ', 'e', 'm',
  'o', 'c', 'l', 'e', 'w'
]
gnidoc sj ot emoclew
*/



// IIFEs :- immediately invoked function expressions
(
    function getData(){
        console.log("Hi I'm inside IIFEs") // Hi I'm inside IIFEs
    }
)();


// how to empty an array

// 1st method:
const filledArray= [1,23,4,5,6,7]
const EmptyArray=filledArray.splice(0,filledArray.length) // splice of method is a mutable method
console.log(filledArray) // []
console.log(EmptyArray) // [ 1, 23, 4, 5, 6, 7 ]


// 2nd method:
const filledArrayels= [1,23,4,5,6,7]
while(filledArrayels.length>0){
    filledArrayels.pop() // pop() removes the last element of an array.
}
console.log(filledArrayels) // []


// 3rd method:
// empty an array
const filledArrayEls = [12,4,5,6]
filledArrayEls.length = 0
console.log(filledArrayEls) // []


// palindrome:- when you change the order of a string then it will remain same in forward and backward, example is "radar","madam"
// check given string is palindrome or not
const stringPl = "Radar"
const lowerStrCase = stringPl.toLowerCase()
console.log(lowerStrCase)
const strSpl = lowerStrCase.split("")
console.log(strSpl) // [ 'r', 'a', 'd', 'a', 'r' ]
const reverseStrSplWithJoin= strSpl.reverse().join("") // "radar"
console.log(reverseStrSplWithJoin===lowerStrCase)// true



// how can you combine 2 arrays in to 3rd array using spread operator
const Firstarr = [1,2,3,4,5,6]
const secondArr = [0,9,8,7]
const ThirdArr = [...Firstarr,...secondArr]
console.log(ThirdArr)


// how can you combine 2 arrays in to 3rd array using spread operator
// sort() method is mutable method which also changes original array
const originalArray = [0,9,8,7]
const SortingArray = [...originalArray]
console.log(originalArray,SortingArray.sort((a,b)=>a-b).reverse())// [ 0, 9, 8, 7 ] [ 9, 8, 7, 0 ]


// how can we replace an element at a specific index in an array?
const arraySpecific = [ 9, 8, 7, 0,5,4,3,2,1 ]
const replaceSpecificEl = arraySpecific.splice(3,1,6)
console.log(arraySpecific) // [ 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(replaceSpecificEl) // [ 0 ]


// how can we insert an element at a specific index in an array?
const arrSpecific = [ 12,45,54,67,2,56,88]
const insertSpecificEl = arrSpecific.splice(2,0,3)
console.log(arrSpecific) // [12, 45,  3, 54,67,  2, 56, 88]
console.log(insertSpecificEl) // []


// how can we delete an element at a specific index in an array?
const arrSpecificDel = [ 10,454,45,767,232,54]
const deleteSpecificEl = arrSpecificDel.splice(1,1)
console.log(arrSpecificDel) // [ 10, 45, 767, 232, 54 ]
console.log(deleteSpecificEl) // [ 454 ]


// how can we delete an element in an array?
const arrSpecificDelEl = [ 1,2,3,4,5]
const toBeDeleteElement = 3
const deleteSpecificElInArr=arrSpecificDelEl.filter((each)=>toBeDeleteElement!==each)
console.log(arrSpecificDelEl) // [ 1, 2, 3, 4, 5 ]
console.log(deleteSpecificElInArr) // [ 1, 2, 4, 5 ]



// how can we clone an object?
const objectToBeClone = {
    id:10,
    name:"Ram",
    dept:"Computer Science"
}
const cloneObject = {...objectToBeClone}
console.log(cloneObject) // { id: 10, name: 'Ram', dept: 'Computer Science' }


// how to add an element at beginning of an array ?
const idsNums = [5,4,34,45,34,45]
const addFirstEl = idsNums.unshift(2)
console.log(idsNums) // [2,5,4,34,45,34,45]
console.log(addFirstEl) // 3


// how to remove an element at end of an array ?
const idsNumsend = [5,4,34,45,34,45]
const addFirstElend = idsNumsend.pop()
console.log(idsNumsend) // [ 5, 4, 34, 45, 34 ]
console.log(addFirstElend) // 45


// how to split a sentence in to array
const s = "welcome to  msd world"
const splitS = s.split(" ")
console.log(splitS)// [ 'welcome', 'to', '', 'msd', 'world' ]


// how can you replace an existing element and add new element in an object?
const Ob = {
    street:"1 banglore street",
    city:"banglore",
    state:"KA",
    zip:433434
}
Ob.zip = 55555
Ob.country="india"
console.log(Ob) // { street: '1 banglore street', city: 'banglore', state: 'KA', zip: 55555,country: 'india'}


// how to remove element at begining of an array?
const eles = [45,4,32,23,56,6767]
const newELES = eles.splice(0,1)
console.log(eles)// [ 4, 32, 23, 56, 6767 ]
console.log(newELES) // [ 45 ]

// syntax:- array.slice(start,end)
const eless = [45,4,32,23,56,6767]
const newELESs = eless.slice(1)
console.log(eless) // [ 45, 4, 32, 23, 56, 6767 ]
console.log(newELESs) //[ 4, 32, 23, 56, 6767 ]


// write a method which takes x number of parameters?
const xNum = (...xNumOfParameters)=>{
    console.log(xNumOfParameters)
}
xNum(1,2,3,4,6,7,8,9,4,2)


// convert a given number into exact decimal points to right side?
const num = 5465.3456789
const n = num.toFixed(3)
console.log(n)// 5465.346


// how can you return a character from a string at a specific index?
const charStr = "welcome to ARC Tutorials";
const letterSpecific =charStr.charAt(0)
console.log(letterSpecific) // w


// write an add method using javascript currying concept?
const addingValue =x=>y=>console.log(x+y)
const addingValue20 = addingValue(10)
addingValue20(20)


// how to replace a given string in a given array?
const arrR = ["ban","banglore","banned","banaras"];
const joinArrR = arrR.join(" ")
console.log(joinArrR)
const replaceWithBen = joinArrR.replace("ban","ben") // ban banglore banned banaras
const arrayR = replaceWithBen.split(" ")
console.log(arrayR) // [ 'ben', 'banglore', 'banned', 'banaras' ]


// how to create an array out of a sentence?
const Sentences = "welcome to india"
const arrSen = Sentences.split(" ")
console.log(arrSen) // [ 'welcome', 'to', 'india' ]


/*
find duplicate count
const d=[23,6,6,14,56,87,14]
*/


// The Type of a js class is a function

/*
Inheritance in JS Classes
The Inheritance is a mechanism by which a class inherits methods and properties from another class.

2.1 Extends
The extends keyword is used to inherit the methods and properties of the superclass.

2.2 Super
Calling super() makes sure that SuperClass constructor() gets called and initializes the instance.

Syntax :

class SuperClass {
}
class SubClass extends SuperClass{
  constructor(property1, property2){
    super(property1);
    this.property2 = property2;
  }
  method1() {  }
}
let myObject = new SubClass(property1, property2);

Here, SubClass inherits methods and properties from a SuperClass.

2.3 Method Overriding
Here the constructor method is overridden. If we write the SuperClass methods in SubClass, it is called method overriding.

Syntax :
class SuperClass {
}
class SubClass extends SuperClass{
  constructor(property1, property2){
    super(property1);
    this.property2 = property2;
  }
}
let myObject = new SubClass(property1, property2);


*/

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
The indexOf() method of Array instances returns the first index at which a given 
element can be found in the array, or -1 if it is not present.
*/
const fruitsArray = ["Banana", "Orange", "Apple", "Mango"];
let index = fruitsArray.indexOf("Apple");



/*
The split() method is used to split a string into an array 
of substrings and returns the new array.

Syntax : string.split(separator, limit)
limit - the maximum number of substrings to include
in the resulting array
*/
const textValue = "I'm a MERN stack developer-Hyderabad-Native Place is Mncl"
console.log(textValue.split("-"))// [ "I'm a MERN stack developer", 'Hyderabad', 'Native Place is Mncl' ]
console.log(textValue.split("-",1)) // [ "I'm a MERN stack developer" ]


const replaceText = "I'm a MERN stack developer-Hyderabad-Native Place is Mncl"
console.log(replaceText.replace("MERN stack","Web")) // I'm a Web developer-Hyderabad-Native Place is Mncl


/*
includes()
The includes() method determines whether a 
string contains the characters of a specified string.

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
The filter() method creates a new array filled with all elements that pass 
the test (provided as a function).

A new array with the elements that pass the test will be returned.
If no elements pass the test, an empty array will be returned.

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
The every() method tests whether all elements in the array pass the 
test implemented by the provided function. It returns a Boolean value.

Syntax : array.every(function(currentValue, index, arr))
*/
const numbersEvery = [11, 21, 31, 41, 51];
const addNumsEvery = numbersEvery.every((currentValue)=>(
    currentValue>15
))
console.log(addNumsEvery) // false


/*
Immutable method:- some()
The some() method tests whether at least one element in the 
array passes the test implemented by the provided function. 
It returns a Boolean value.

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


const fruitsValue = ["Banana", "Orange", "Apple", "Mango"];
// At position 2,delete 1 element and  add 2 elements: 
fruitsValue.splice(2, 1, "Lemon", "Kiwi");
console.log(fruitsValue)


console.log(typeof NaN) // number
console.log(typeof -"9") // number
console.log(typeof +"9") // number


// if "+" is used concatenate will done, if remaining like  -,*,/ the math will be used
console.log(7+"5")// 75
console.log(7*"5")// 35
console.log(7-"5")// 2


// in javascript the true boolean is 1 and false boolean is 0


const f = [1,2,4,6,7,8]
const findElement=f.find((element)=>(
    element===7
))
console.log(findElement)


const fel = [1,2,4,6,7,8]
const findIndexVal=fel.findIndex((element)=>(
    element===8
))
console.log(findIndexVal) // 5




// to create private variables closures are used
const outer = (name)=>{ // closure has access to outer function parameter
    const greet = "Hi" // closure has access to outer function scope
    return ()=>{
        console.log(greet,"greet") // Hi greet
        console.log(name,"name") // Rohith name
    }
}
const result =  outer("Rohith")
console.log(result) // [Function (anonymous)]
result()



const outering = (innerFunctionScope)=>{
    const outerFunctionScope = "outer function scope"
    return ()=>{
        console.log(outerFunctionScope) // outer function scope
        console.log(innerFunctionScope) // closure can access outer function parameter
    }
}
const resulting = outering("closure can access outer function parameter")
resulting()



// call and apply are used to set context of this during function call
// bind is used to set context of this during defining function expression
const func = function(){
    console.log(this)
}
func()



/* event loop :
-event loop is responsible asynchronous programming in js
-event loop is a program which runs continously until the page closes
-tiny component in js runtime
-in js an activity is done continously then it is known as event loop
*/



// currying functions
const addFunctionCurrying = x => y =>console.log(x+y)
const add20 = addFunctionCurrying(20)
add20(100) // 120
const add50 = addFunctionCurrying(50)
add50(100) // 150

 

// higher order function: a fubction which accepts another function as an argument, ex:- map(),reduce()
// In below example  "displayHof" is  higher order function and "addFunction","mulFunction" are callback functions
const addFunction = (x,y)=>x+y
const mulFunction =(m,n)=>m*n

const displayHof=(a,b,operation)=>{
    return operation(a,b)
}
console.log(displayHof(10,5,addFunction)) // 15
console.log(displayHof(10,5,mulFunction)) // 50




// event delegation: adding an event listener to a single(parent) element and perform actions on child elements if you want instead of attaching event listeners to all elements

/* 
-strict mode: useful for writing js in more secure manner, it prevents bugs from 
happening and throw exception errors
-"use strict" --> this piece of code should be at top of javascript script file
-"use strict" --> If this piece of code should not be at the top of javascript 
script file then strict mode principles not work
ex:-1:
"use strict"
x = 10
console.log(x)
output:-
ReferenceError: x is not defined

ex:-2
console.log("without strict mode")
"use strict"
x = 10
console.log(x)
output:-
without strict mode
10

*/

console.log(typeof null)// object
console.log(typeof NaN)// number
console.log(typeof undefined) // undefined
console.log(typeof []) // object


/* Ajax: -asynchronous javascript xml, we can send data to server and get data without refreshing page
-initially or in olden days web servers used to send data in XML format
-but now a days the JSON format is recieving to client as response
*/
// dom: document object model, which can change content,style,structure of web page by using js ex:todo list

/* box model: wraps around every html elements
margin:- area or space outside the border
border:- goes around padding and content
padding :- area or space around the content
content :- text and image appears
*/

/*
css sprite:combine multiple images in to one single larger image,
without css sprite each image send as individual server request
*/

/*
css preprocessors:more readable
Sass
{less}
*/

/*
css specificity:
style attribute,id,class name,elements
*/

/*
visibility:none --> hides element but occupies space
display:none -->hides element but not occupies space
*/

/*
-box-sizing:The box-sizing property allows us to include the padding and border 
in an element's total width and height.
-border-box and content-box are the two different values of box-sizing. 
-content-box: This is the default value of box-sizing. The dimension of element 
only includes 'height' and 'width' and does not include 'border' and 'padding'
given to element.Padding and Border take space outside the element.
-If you set box-sizing: border-box; on an element, padding and border 
are included in the width and height
-by using universal selector we specify border-box value for box-sizing property
*/



/*
pseudo element:-
-allows you to select and manipulate parts of element
-keyword added after a selector that's
used to style a specific parts of an element

syntax:- selector::pseudo-element

note:-to get keyboard in vs code click  "windows+;"

examples:
.wish::first-letter{
    color: aqua;
    font-size: 2em;
}
.wish-text::first-line{
    color: red;
}
.wish-text::selection{
    color: aqua;
}

#sports li::before{
    content: "🏅";
}

#ball::after{
    content: "⚽";
}
#bat::after{
    content: "🏏";
}
#shoes::after{
    content: "👟";
}
#sports li::marker{
    content: "";
}
*/


/*
Pseudo-classes:-Pseudo-classes are the keywords added to a selector 
they modify behaviour of an element when they are in a certain state
and Pseudo-classes are used to create drop down menus.

Pseudo-classes example:-
a:hover {
    color: red;
  }

-active is pseudo class when an item is currently selected,like when left click the mouse and hold it then the color is red for below example:
a:active{
    color:blue
}

.click-btn:hover{
    background-color: aquamarine;
    font-size: 2em;
}
.click-btn:active{
    background-color: rgb(221, 255, 0);
}
a:link{
    color: skyblue;
}
a:hover{
    color: blue;
    font-size: 1.1em;
}
a:visited{
    color: green;
} 
li:hover{
    background-color: yellow;
}
li:not(:hover){
    background-color: rgb(227, 222, 222);
}

li:hover:nth-child(odd){
    background-color: blueviolet;
}
*/


/*
flexbox:
-1D layout to create either row or column layout
-we set display property to flex in css file to use flexbox in to our web application
-we use flex-direction,align-items,justify-content to specify positions in 1D

grid: 
-2D layout that can handle both row and column layout
-we set display property to grid in css file to use grid in to our web application
-we use grid-template-columns,grid-template-rows to specify positions in 2D
*/ 


/*

-The transition property in CSS allows you to control 
the speed of changes to CSS properties.  
-The transform property in CSS allows you to modify the appearance 
and layout of an element in various ways, such as rotating, scaling, 
skewing, or translating (moving) it. It's a powerful tool for visually 
transforming elements on a webpage without affecting the layout of 
surrounding elements.
- in below example the transition: transform 1s; 
line specifies that any changes to the transform property (like rotation in this case) 
should take 1 second to complete.

.box1{
    background-color: red;
    height: 200px;
    width: 200px;
    position: sticky;
    top: 0px;
    transition: transform 1s; 
    cursor: pointer;
}

.box1:hover{ pseudo class 
    transform:rotate(45deg) 
}
*/



/*
semantic tags:-header tags,nav tags read by search engines
meta tags:-describes what the web page is about, we usually specify 
meta tags in inside of html head tag
*/


/*
web workers:page->server->database
*/

/*
data-attributes:-Data attributes are a powerful and flexible 
feature of HTML that allow you to attach custom metadata to 
any HTML element, providing additional information that can 
be easily accessed and manipulated using JavaScript.
*/


/*
Unit testing is a software development process in which the smallest testable parts
of an application, called units, are individually scrutinized for proper operation. 
Software developers and sometimes QA staff complete unit tests during the development process.

unit testing for js is done by jest library
*/


/*
Js provides multi-line string or not?
-yes js provide multi-line string in 3 ways:
1)using backtrick 2)using + operator i.e by concatenating 3)using \(backslash)


// in below example when i use multi-line string it is not working
const str = "hi im rohith
appala"  

*/
const strBacktrick = `hi im rohith
appala
from hyderabad
`
const strConcatenate = str+"rohith"


var alphabets = ["a","b","b","c","d","e"]
delete alphabets[2] 
console.log(alphabets) // [ 'a', 'b', <1 empty item>, 'c', 'd', 'e' ]
console.log(alphabets.length) // 6


/*
Break statement is used to comeout of current loop

The continue statement continues the current
loop with a new recurrence
*/
// continue example:-
const continueExampleNums = [1,2,3,4,56,7,8,9]
for (const i of continueExampleNums){
    if (i===56) continue
    console.log(i)
}
/*
output:-
1
2
3
4
7
8
9
*/


const breakExampleNums = [1,2,3,4,56,7,8,9]
for (const i of breakExampleNums){
    if (i===56){
        console.log(i) 
        break
    } 
}
// output:- 56


/*
what are the boolean operators can be used in js?
-Operators which always result in 
either true or false are called as
boolean operators
examples of boolean operators:-
-Greater Than >
-Less Than <
-The 'And' Operator - &&
-The 'Not' Operator - !
*/


/*
is js case sensitive give an example?
-yes, js is case sensitive
-for js built-in methods it is camel case
-example:-
a function parseInt is not same as the 
function Parseint
*/

/*
event delegation: adding an event listener to a single(parent) element and 
perform actions on child elements if you want instead of attaching event 
listeners to all elements
*/


/*
define event bubbling?
-js allows DOM elements to be nested inside each other,
-in such a case , if the event handler
of the child is clicked,the
handler of parent will also
work as if it were clicked too,but if you want 
disable that bubbling up then you 
have to explicitly mention eventBubbling to false because 
by default event bubbling is true.

<div>
   parent
   <div>
     child
     <div onclick="grandChildClicked()">
       grand child
     </div>
   </div>
</div>
*/


/*
explain window.onload and
onDocumentReady?
-onload function will wait
for all the information on
the page to be rendered which
leads to delay because if you
making multiple asynchronous
calls or AJAX calls which takes time and so entire
page should be wait

-In onDocumentReady whenever DOM is loaded,
this allows early manipulation
of code
*/


/*
examples for dom event listener in js:-
-mouseover: This event is triggered when the mouse pointer moves over the 
specified element. 
-click: This event is triggered when the specified element is clicked. 
-mouseout: This event is triggered when the mouse pointer moves out of the 
specified element. 
-resize: This event is triggered when the browser window is resized. 
-DOMContentLoaded: This event is triggered when the initial HTML 
document has been completely loaded and parsed, without waiting for stylesheets, 
images, and subframes to finish loading. 
*/


/*
How are object properties assigned?
*/
const obj = {
    age:1
}
obj["name"]="rohith" // bracket notation
obj.profession="web developer" // dot notation
console.log(obj) // { age: 1, name: 'rohith', profession: 'web developer' }


/*
what is variable typing?
-used to assign different
value of a different/same datatype
to an already existing variable
-js is not a strictly typed language
*/
let variableTypingExample = 10
variableTypingExample = "ten"
console.log(variableTypingExample)// ten


/*
z-index:-
-using z-index we can place the elements on top of each other
-z-index default value is 0, can be +ve or -ve
example:-dashboards in mobile view
*/
 


/*
comments in html:-<!-- -->
comments in js:- //
*/


/*
keywords used to handle exception:-
try{

}catch(exp){

}Finally{
    Code runs either it finishes successfully or after catch
}
*/


/*
why is @import only at the top?
-to avoid overriding rules
-for following ranking order
*/


/*
Doctype in html:-
Doctype tells browser which version of html
standard is used and how to render
the page
*/

/*
svg:-
-scalar vector graphics
-we can easily customize svg like color,size
-image doesn't loose quality
when zoom in or zoom out
*/


/*
sessionStorage is available
only when a browser's tab is open 
ex-user login details

localStorage is available even after closing and opening
the browser window
*/


/*
HTML5 new tags:-
<header>
<nav>
<section>
<footer>
<aside>
<article>
*/

/*
table tags:-
<table> -->define table in html page
<thead> -->table header
<tr> --> table row
<td> --> table column
<tfoot> --> table footer
*/


/*
meta data in html:-
-additional information about web page
-meta data is very helpful for SEO optimization
*/


/*
canvas:-
-easy and powerful way to draw diagrams in html
-used for drawing graphs,create animations
-use js for drawing
*/


/*
web worker:- 
- a piece of js code runs in background
- client>server>database
*/

/*
various ways to integrate css in web pages:-
inline method:-<div style="solid red"></div>
internal method:-:- by using <style></style> tag
linked method
*/


/*
css and scss:-
css:
-cascading style sheet
-css is scripting language used for designing web pages

scss:
-syntactically awesome style sheet is superset of css
-SCSS have file extension of .scss
-knowing scss helps you to customize bootstrap 4
*/


console.log(!0)// true
console.log(!1)// false



// conditional variables
const userName = {
    name:"rohith"
}
const conditionalStatement = user.name || ""


// convert number in to string
const numStr = 10+""
console.log(typeof numStr) // string


// convert string in to number
const Strnum = +"20"
console.log(typeof Strnum) // number




const person = {
    name:"ram",
    age:30
}
console.log(Object.keys(person)) // [ 'name', 'age' ]
console.log(Object.entries(person)) // [ [ 'name', 'ram' ], [ 'age', 30 ] ]
const getObjectEntries = (obj)=>{
    const key = Object.keys(obj);
    console.log(key) // [ 'name', 'age' ]
    const finalEntries = key.map((eachKey)=>[eachKey,obj[eachKey]])
    return finalEntries
}
const returnedObjectEntries=getObjectEntries(person)
console.log(returnedObjectEntries) // [ [ 'name', 'ram' ], [ 'age', 30 ] ]
