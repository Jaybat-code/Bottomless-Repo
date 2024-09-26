
//Creates a h1 element that will display the text that we define
function createElement(){ 
    const helloWorld = document.createElement("h1");
    helloWorld.setAttribute("class","hello");
    helloWorld.innerText="Hello World"
    document.body.appendChild(helloWorld);
} 
createElement();