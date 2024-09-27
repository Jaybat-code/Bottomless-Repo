const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

let cleanedString = "";

const cleanText = (text) => {
    return text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};

const checkIfEmpty=()=>{
    if(textInput.value===""){
        alert("Please input a value");
    }else{
        cleanedString=cleanText(textInput.value);
        evaluateTextLength();
    }
}
const evaluateTextLength=()=>{
    let textLength = cleanedString.length;
    if(textLength%2==0){
        checkEvenPalindrome();
    }else if(textLength%2==1){
        checkOddPalindrome();
    }
}
//we need to split the array in half, take the last half, put it all in lower case, reverse it and see if it is equal to the lowercase of the first part
const checkEvenPalindrome = ()=>{
    //getting the length of text, divding this even length by two and splitting it into an array of letters and numbers
    let textLength = cleanedString.length;
    let halfOfEvenPalindrome = textLength/2;
    let textArray = cleanedString.split("");
    //empty arrays for pushing
    let lastHalfOfString = [];
    let firstHalfOfString = [];
    //pushes the last half of the string in the last array
    for(let i = halfOfEvenPalindrome;i<textLength;i++){
        lastHalfOfString.push(textArray[i])
    }
    //pushes the first half of the string in the first array
    for(let i = 0;i<halfOfEvenPalindrome;i++){
        firstHalfOfString.push(textArray[i])
    }
    //compares the two strings and inputs a result using a string literal
    if(firstHalfOfString.toString()===lastHalfOfString.reverse().toString()){
        result.innerHTML=`${textInput.value} is a palindrome`
    }else{
        result.innerHTML=`${textInput.value} is not a palindrome`
    }
}
const checkOddPalindrome = ()=>{
    let textLength = cleanedString.length;
    let halfOfOddPalindrome = (textLength-1)/2;
    let textArray = cleanedString.split("");
    
    let lastHalfOfString = [];
    let firstHalfOfString = [];

    for(let i =halfOfOddPalindrome+1;i<textLength;i++){
        lastHalfOfString.push(textArray[i]);
    }

    for(let i=0;i<halfOfOddPalindrome;i++){
        firstHalfOfString.push(textArray[i]);
    }
    if(firstHalfOfString.toString()===lastHalfOfString.reverse().toString()){
        result.innerHTML=`${textInput.value} is a palindrome`
    }else{
        result.innerHTML=`${textInput.value} is not a palindrome`
    }
}
    
checkBtn.addEventListener("click",checkIfEmpty);