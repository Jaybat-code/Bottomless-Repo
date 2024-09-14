let counter = 0;
const numScreen = document.getElementById("screen");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

incrementBtn.addEventListener("click",()=>{
    counter++
    console.log(counter);
    numScreen.innerHTML=counter;
    }
)
decrementBtn.addEventListener("click",()=>{
    counter--;
    console.log(counter);
    numScreen.innerHTML=counter;
    }
)
resetBtn.addEventListener("click",()=>{
    counter=0;
    console.log(counter);
    numScreen.innerHTML=counter;
})







