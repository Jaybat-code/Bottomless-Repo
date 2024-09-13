//one predefined word array and one user created word array
const avatar = [
    "Water", "Earth",  "Fire",  "Air", 
    "Long", "ago",  "the", "four", "nations", "lived", "together", "in", "harmony", 
    "Then",  "everything", "changed", "when", "the", "Fire", "Nation", "attacked",
    "Only", "the", "Avatar",  "master", "of", "all", "four", "elements",  "could", "stop", "them",
    "But", "when", "the", "world", "needed", "him", "most", "he", "vanished",
    "A", "hundred", "years", "passed", "and", "my", "brother", "and", "I", "discovered", "the", "new", "Avatar", "an", "airbender", "named", "Aang", ,
    "And", "although", "his", "airbending", "skills", "are", "great", "he", "has", "a", "lot", "to", "learn", "before", "he's", "ready", "to", "save", "anyone",
    "But", "I", "believe", "Aang", "can", "save", "the", "world!", 
  ];
//emptry word array
const inputArray=[];
//getting the context of text, the index of the text and a button.
const text = document.getElementById("text");
let textIndex = 0;
const button = document.getElementById("alter");
//for typing a user defined word array
const inputBox = document.getElementById("inputbox");
let currentword ="";
let nextword;


//listens for a button click and decides what it should do based on the text index
button.addEventListener("click",()=>{
    if(textIndex<inputArray.length){
        text.innerHTML=inputArray[textIndex];
        console.log(inputArray[textIndex])
        textIndex++;
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








