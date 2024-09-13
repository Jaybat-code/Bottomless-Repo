//empty word array to be filled
const inputArray=[];
//getting the context of text, the index of the text and a button.
const text = document.getElementById("text");
let textIndex = 0;
const button = document.getElementById("alter");
//for typing a user defined word array
const inputBox = document.getElementById("inputbox");
let currentword ="";


//listens for a button click and decides what it should do based on the text index
button.addEventListener("click",()=>{
    if(textIndex<inputArray.length){
        text.innerHTML=inputArray[textIndex];
        console.log(inputArray[textIndex])
        textIndex++;
    }else{
        text.innerHTML="Type More Text To Continue";
    }
});
   
function keyButtonInputs(){
    inputBox.addEventListener('keypress',function(e){
        if(e.key==="Enter"){
            for(let i = 0;i<inputBox.value.length;i++){
                if(inputBox.value[i]==" "){
                    inputArray.push(currentword);
                    currentword=""
                }else{currentword+=inputBox.value[i]}
            }
            if(currentword.length>0){
                inputArray.push(currentword);
            }
            currentword="";
            inputBox.value="";
            console.log(inputArray);
        }
        if(e.key==="/"){
            inputArray.length=0;
            console.log("Array Cleared!");
        }
    })
}
keyButtonInputs();








