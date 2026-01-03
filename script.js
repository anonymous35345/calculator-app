let textcal = "";
function textcalculating(){
    document.querySelectorAll("button").forEach(btn => {
     btn.addEventListener("click" , () => {
        textcal =  textcal+btn.dataset.value
        console.log(textcal)
        let resault = parseFloat(textcal);
        console.log(resault);
        
     })
    })
}
textcalculating();
  



let username = "15*88+66"
rere = username.replaceAll("*" , "multiplicatiopn")
console.log(rere);

