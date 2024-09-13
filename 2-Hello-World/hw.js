//whenever the page loads append an h1 element with the class hello to the document.
document.addEventListener("DOMContentLoaded",()=>{
    const helloWorld = document.createElement("h1");
    helloWorld.setAttribute("class","hello");
    helloWorld.innerText="Hello World"
    document.body.appendChild(helloWorld)
})
    
