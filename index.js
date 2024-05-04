"use strict"


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
The filter() method creates a new array filled with all elements that pass the test (provided as a function).

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
console.log(typeof (7+"5")) // string


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


