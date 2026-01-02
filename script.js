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
  