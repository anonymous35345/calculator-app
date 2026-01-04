let textcal = "";
function textcalculating(){
    document.querySelectorAll("button").forEach(btn => {
     btn.addEventListener("click" , () => {
        textcal =  textcal+btn.dataset.value
        console.log(textcal)
        
     })
    })
}
textcalculating();
function resault(){
 let currentres = 0;
let numarr = textcal.split("+");
for(i =0 ; i <numarr.length ; i++){
    currentres= currentres + Number(numarr[i]);
}   
console.log(currentres);
document.querySelector("h1").textContent = currentres;
}

