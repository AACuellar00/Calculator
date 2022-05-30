const memory = document.querySelector('#Memory');
const containerB = document.querySelector('#Body');

let decPress=false;
let lastPressWasANumber=true;
let operPressed=false;
let secndNumberStarted=false;
let prevNum="0";
let currentNum="0";
let lastOpp="";

const numbers = document.getElementsByClassName("num");
const operators = document.getElementsByClassName("operator");
const dels = document.getElementsByClassName("del");
const finish = document.getElementById("equals");
const decimal = document.getElementById(".");

function operAdd(){
    let result =parseFloat(prevNum) + parseFloat(currentNum);
    let dec=0;

    if (Math.floor(result) !== result) {
        dec=result.toString().split(".")[1].length || 0;
        if(dec>=10)
            result=result.toFixed(10);
    }

    memory.textContent=result;
    prevNum="0";
    currentNum=result;
    lastOpp="";
    operPressed=false;
    lastPressWasANumber=true;
}

function operSub(){
    let result =parseFloat(prevNum) - parseFloat(currentNum);
    let dec=0;

    if (Math.floor(result) !== result) {
        dec=result.toString().split(".")[1].length || 0;
        if(dec>=10)
            result=result.toFixed(10);
    }

    memory.textContent=result;
    prevNum="0";
    currentNum=result;
    lastOpp="";
    operPressed=false;
    lastPressWasANumber=true;
}

function operMulti(){
    let result =parseFloat(prevNum) * parseFloat(currentNum);
    let dec=0;

    if (Math.floor(result) !== result) {
        dec=result.toString().split(".")[1].length || 0;
        if(dec>=10)
            result=result.toFixed(10);
    }

    memory.textContent=result;
    prevNum="0";
    currentNum=result;
    lastOpp="";
    operPressed=false;
    lastPressWasANumber=true;
}

function operDiv(){
    if(parseFloat(currentNum)==0){
        alert("Please do not divide by 0");
    }
    else{
        let result =parseFloat(prevNum) / parseFloat(currentNum);
        let dec=0;
    
        if (Math.floor(result) !== result) {
            dec=result.toString().split(".")[1].length || 0;
            if(dec>=10)
                result=result.toFixed(10);
        }
    
        memory.textContent=result;
        prevNum="0";
        currentNum=result;
        lastOpp="";
        operPressed=false;
        lastPressWasANumber=true;
    }
}

function operModu(){
    let result =parseFloat(prevNum) % parseFloat(currentNum);
    let dec=0;

    if (Math.floor(result) !== result) {
        dec=result.toString().split(".")[1].length || 0;
        if(dec>=10)
            result=result.toFixed(10);
    }

    memory.textContent=result;
    prevNum="0";
    currentNum=result;
    lastOpp="";
    operPressed=false;
    lastPressWasANumber=true;
}

function operExpo(){
    let result=Math.pow(parseFloat(prevNum),parseFloat(currentNum));
    let dec=0;

    if (Math.floor(result) !== result) {
        dec=result.toString().split(".")[1].length || 0;
        if(dec>=10)
            result=result.toFixed(10);
    }
    memory.textContent=result;
    prevNum="0";
    currentNum=result;
    lastOpp="";
    operPressed=false;
    lastPressWasANumber=true;
}

function operate(){
    switch(lastOpp){
        case "+":
            operAdd();
            break;
        case "-":
            operSub();
            break;
        case "*":
            operMulti();
            break;
        case "/":
            operDiv();
            break;
        case "%":
            operModu();
            break;
        case "^":
            operExpo();
            break;
    }
}

function backspace(){
    if(memory.textContent.length==1){
        memory.textContent="0";
        decPress=false;
        lastPressWasANumber=true;
        prevNum="0";
        currentNum="0"
        operPressed=false;
        lastOpp="";
    }
    else if(memory.textContent.length==2){
        memory.textContent=memory.textContent.charAt(0);
        lastPressWasANumber=true;
        lastOpp="";
        operPressed=false;
        decPress=false;
    }
    else{
        let lastChar = memory.textContent.charAt(memory.textContent.length-1);
        let secondLastChar = memory.textContent.charAt(memory.textContent.length-2);
        if(lastChar=="+" || lastChar=="-" || lastChar=="*" || lastChar=="/"
                || lastChar=="^"|| lastChar=="%"){
            memory.textContent =memory.textContent.substring(0,memory.textContent.length-1);
            lastPressWasANumber=true;
            lastOpp="";
            operPressed=false;
        }
        else if(lastChar=="."){
            memory.textContent =memory.textContent.substring(0,memory.textContent.length-1);
            decPress=false;
            lastPressWasANumber=true;
        }
        else{
            memory.textContent =memory.textContent.substring(0,memory.textContent.length-1);
        }
    }
}

function CE(){
    memory.textContent = "0";
    decPress=false;
    lastPressWasANumber=true;
    operPressed=false;
    secndNumberStarted=false;
    prevNum="0";
    currentNum="0";
    lastOpp="";
}


for (const num of numbers){
    num.addEventListener('click',() =>{
        if(memory.textContent=="0"){
            memory.textContent=num.id;
            lastPressWasANumber=true;
        }
        else{
            memory.textContent+=num.id;
            lastPressWasANumber=true;
            currentNum+=num.id;
            if(operPressed==true)
                secndNumberStarted=true;
        }
    });
}

for (const oper of operators){
    oper.addEventListener('click', () =>{
        if(operPressed==false){
            prevNum=parseFloat(memory.textContent);
            memory.textContent+=oper.id;
            currentNum="";
            lastOpp=oper.id;
            operPressed=true;
            lastPressWasANumber=false;
            decPress=false;
        }
        else{
            
        }
    });
}

for (const del of dels){
    del.addEventListener('click', () =>{
        if(del.id=="CE"){
            CE();
        }
        else{
            backspace();
        }
    });
}

decimal.addEventListener('click', () =>{
    if(lastPressWasANumber==true && decPress==false){
        memory.textContent+=".";
        lastPressWasANumber=true;
        currentNum+=".";
        decPress=true;
    }
    
    else{
        console.log("Oops");
    }
});

equals.addEventListener('click', () =>{
    if(lastPressWasANumber==true && operPressed==true && secndNumberStarted==true){
        operate();
    }
    else{
        console.log("Oops");
    }
});







