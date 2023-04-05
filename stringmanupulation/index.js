function manipulation(inputString,callback){
    const manipulatedString = inputString.toUpperCase();

    callback(manipulatedString);
}

function logstring(manipulatedString){
    console.log(`the manipulated string is ${manipulatedString}`);
}

manipulation("hello world",logstring);