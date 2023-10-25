const minHand=document.querySelector(".min-hand");
console.log(minHand);

const secHand=document.querySelector(".sec-hand");
console.log(secHand);

const msHand=document.querySelector(".ms-hand");
console.log(msHand);
let count=0;


const ctrBtn=document.querySelector(".ctrBtn");
console.log(ctrBtn);

const refreshBtn=document.querySelector(".refreshBtn");
console.log(refreshBtn);

t=0;
let I;

function updateChrono() {
    let m,s,ms;
    m=(10 *t )/ (60*1000);
    s=(10 * t )/ 1000;
    ms = t / 10;

    t += 10;
    console.log(m);
    minHand.style.transform = `rotate(${m * 6}deg)`;
    secHand.style.transform = `rotate(${s * 6}deg)`;

    /*(t % 1000) >= 100 ? msHand.textContent=`${t % 1000}` : (t % 1000) >= 10? msHand.textContent=`0${t % 1000}`:msHand.textContent=`00${t % 1000}`;*/

    (ms % 1000) >= 100 ? msHand.textContent=`${ms % 1000}` : 
    (ms % 1000) >= 10? msHand.textContent=`0${ms % 1000}`:msHand.textContent=`00${ms % 1000}`;
}

// click on ctrBtn
let start=false; 
const icon=document.querySelector("button.ctrBtn i");


ctrBtn.addEventListener("click",(e)=> {
    start=!start;
    if(start) {
        I=setInterval(updateChrono, 10);
        icon.setAttribute("class","fa-solid fa-pause");
    }else {
        clearInterval(I);
        console.log(e.target.getElementsByTagName("i")[0]);
        icon.setAttribute("class","fa-solid fa-play");
    }
});


//click on refreshBtn
refreshBtn.addEventListener("click",(e)=> {
    clearInterval(I);
    t=0;
    updateChrono();
    // msHand.textContent="000";
    icon.setAttribute("class","fa-solid fa-play");
    start=false;
});
