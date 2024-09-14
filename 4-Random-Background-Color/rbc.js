const fullText = document.getElementById("colorDisplay");
const colorOne = document.getElementById("color1");
const colorTwo = document.getElementById("color2");
console.log(colorOne.innerHTML);
console.log(colorTwo.innerHTML);
console.log(fullText.innerHTML);
let colorValues = [0,0,0,0,0,0];

fullText.addEventListener("click",()=>{
    generateRandomColorValues();      
})

function generateRandomColorValues(){
    for(let i = 0; i<colorValues.length;i++){
        colorValues[i]=Math.floor(Math.random()*256);
    }
    let degree = Math.floor(Math.random()*360)+"deg";
    let rgbColorOne="RGB("+colorValues[0]+","+colorValues[1]+","+colorValues[2]+")"
    let rgbColorTwo="RGB("+colorValues[3]+","+colorValues[4]+","+colorValues[5]+")"

    colorOne.innerHTML=rgbColorOne;
    colorTwo.innerHTML=rgbColorTwo;

    document.body.style.background=`linear-gradient(${degree}, ${rgbColorOne}, ${rgbColorTwo})`;
}


