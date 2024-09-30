const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
let cleanedString = "";
const cleanText = (text) => {return text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();};
function checkIfPalindrome(){
    if(textInput.value===""){
        alert("Please enter in valid text!");
        return;
    }else{
        cleanedString = cleanText(textInput.value)
    }
    let reversedString = "";
    for(let i =cleanedString.length;i>0;i--){
        reversedString+=cleanedString[i-1];}
    if(cleanedString===reversedString){result.innerHTML=`${cleanedString} is a palindrome!`}
    else if(cleanedString!==reversedString){result.innerHTML=`${cleanedString} is not a palindrome!`}
}
checkBtn.addEventListener("click",checkIfPalindrome);

console.log(Math.floor(Math.random()*30-6))