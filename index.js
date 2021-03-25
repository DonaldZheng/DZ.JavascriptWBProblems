"use strict";

// Problem 1: Hello Reversed String 
function stringReversed () {
    var word = "Hello";
    let newString = "";
    for (let i = word.length -1; i >= 0 ; i-- )
    {
        newString += word[i]
    }
    return newString
}
var test = stringReversed();
console.log(test)


// Problem 2: Capitalize Letter 