const textBox=document.getElementById("textbox");
const toFahreinheit=document.getElementById("toFahreinheit");
const toCelcius=document.getElementById("toCelcius");
const result=document.getElementById("result");
let temp;

function convert(){
    if(toFahreinheit.checked){
        temp=Number(textBox.value);
        temp=temp * 9 / 5 + 32;
        result.textContent=temp.toFixed(1)+"°F";
    }

    
    else if(toCelcius.checked){
        temp=Number(textBox.value);
        temp=(temp-32)* (5/9);
        result.textContent=temp.toFixed(1)+"°C";

    }
    else{
        result.textContent="select a unit";
    }
}