const pyramid = document.getElementById("pyramid");
const charInput = document.getElementById("charInput");
const heightInput = document.getElementById("heightInput");
const newRow = '\n';
charInput.addEventListener("input",()=>{
    pyramid.innerHTML=charInput.value+newRow;
})

heightInput.addEventListener("input",()=>{
    pyramid.innerHTML=charInput.value.repeat(heightInput.value);
})
