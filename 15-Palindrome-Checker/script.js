const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

let cleanedString = "";

const cleanText = (text) => {
    return text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};
function checkIfPalindrome(){
    if(textInput.value===""){
        alert("Please enter in valid text!");
        return;
    }else{
        cleanedString = cleanText(textInput.value)
    }
    //reversing a string manually
    let normalString = cleanedString;
    let reversedString = "";

    for(let i =normalString.length;i>0;i--){
        reversedString+=normalString[i-1];
    }
    if(normalString===reversedString){
        result.innerHTML=`${normalString} is a palindrome!`
    }else if(normalString!==reversedString){
        result.innerHTML=`${normalString} is not a palindrome!`
    }
}


    
checkBtn.addEventListener("click",checkIfPalindrome);