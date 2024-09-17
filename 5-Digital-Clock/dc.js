
const Hourtxt = document.getElementById("Hour");
const MinuteTxt = document.getElementById("Minute");
const SecondTxt = document.getElementById("Second");
const MarideanTxt = document.getElementById("Maridean");
const allText = [Hourtxt,MinuteTxt,SecondTxt];
function getTime(){
    const currentDate = new Date();
    const gets=[currentDate.getHours(),currentDate.getMinutes(),currentDate.getSeconds()]
    
    for(let i = 0;i<allText.length;i++){
        allText[i].innerHTML=gets[i];
    }
    if(currentDate.getHours()>=12){
        MarideanTxt.innerHTML="PM"
    }else{
        MarideanTxt.innerHTML="AM"
    }
}
setInterval(getTime,1000);
getTime();
