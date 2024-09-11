console.log("hello")
const display=document.querySelector("#display")
function calculate(input){
    display.value=display.value+input;

}

function calcu(){
display.value=eval(display.value);
} 

function clearDisplay(){
    display.value="";
}