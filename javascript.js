const memory = document.querySelector('#Memory');
const containerB = document.querySelector('#Body');

let decPress=false;
let lastPressNum=false;
let pressedNum=false;
let operPressed=false;
let prevNum="0";
let currentNum="0";
let lastOpp="";

const numbers = document.getElementsByClassName("num");
const operators = document.getElementsByClassName("operator");
const dels = document.getElementsByClassName("del");
const finish = document.getElementById("equals");

function operAdd(){
    let result =parseInt(prevNum) + parseInt(currentNum);
    let dec=0;

    if (Math.floor(result) !== result) {
        dec=result.toString().split(".")[1].length || 0;
    }
    if(dec>=10)
        result=result.toFixed(10);

    memory.textContent=result;
    prevNum="0";
    currentNum=result;
    lastOpp="";
}

function operSub(){
    let result =parseInt(prevNum) - parseInt(currentNum);
    let dec=0;

    if (Math.floor(result) !== result) {
        dec=result.toString().split(".")[1].length || 0;
    }
    if(dec>=10)
        result=result.toFixed(10);

    memory.textContent=result;
    prevNum="0";
    currentNum=result;
    lastOpp="";
}

function operMulti(){
    let result =parseInt(prevNum) * parseInt(currentNum);
    let dec=0;

    if (Math.floor(result) !== result) {
        dec=result.toString().split(".")[1].length || 0;
    }
    if(dec>=10)
        result=result.toFixed(10);

    memory.textContent=result;
    prevNum="0";
    currentNum=result;
    lastOpp="";
}

function operDiv(){
    if(parseInt(currentNum)==0){
        alert("Please do not divide by 0");
    }
    else{
        let result =parseInt(prevNum) / parseInt(currentNum);
        let dec=0;
    
        if (Math.floor(result) !== result) {
            dec=result.toString().split(".")[1].length || 0;
        }
        if(dec>=10)
            result=result.toFixed(10);
    
        memory.textContent=result;
        prevNum="0";
        currentNum=result;
        lastOpp="";
    }
}

function operModu(){
    let result =parseInt(prevNum) % parseInt(currentNum);
    let dec=0;

    if (Math.floor(result) !== result) {
        dec=result.toString().split(".")[1].length || 0;
    }
    if(dec>=10)
        result=result.toFixed(10);

    memory.textContent=result;
    prevNum="0";
    currentNum=result;
    lastOpp="";
}

function operExpo(){
    let result =parseInt(prevNum) ^ parseInt(currentNum);
    let dec=0;

    if (Math.floor(result) !== result) {
        dec=result.toString().split(".")[1].length || 0;
    }
    if(dec>=10)
        result=result.toFixed(10);

    memory.textContent=result;
    prevNum="0";
    currentNum=result;
    lastOpp="";
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
    let lastChar = memory.textContent.charAt(memory.textContent.length-1);
    let secondLastChar = memory.textContent.charAt(memory.textContent.length-2);
    

    memory.textContent =memory.textContent.substring(0,memory.textContent.length-1);

    if(memory.textContent.length==0){
        memory.textContent="0";
        decPress=false;
        lastPressNum=false;
        prevNum=0;
        pressedNum=false;
        operPressed=false;
        lastOpp="";
    }
}

function CE(){
    memory.textContent = "0";
    decPress=false;
    lastPressNum=false;
    prevNum=0;
    pressedNum=false;
    operPressed=false;
    lastOpp="";
}


for (const num of numbers){
    num.addEventListener('click',() =>{
        if(memory.textContent=="0"){
            memory.textContent=num.id;
            pressedNum=true;
            lastPressNum=true;
        }
        else{
            memory.textContent+=num.id;
            lastPressNum=true;
            pressedNum=true;
            operPressed=false;
            currentNum=memory.textContent;
        }
    });
}

for (const oper of operators){
    oper.addEventListener('click', () =>{
        if(pressedNum==true){
            prevNum=parseInt(memory.textContent);
            memory.textContent+=oper.id;
            currentNum="";
            lastOpp=oper.id;
            pressedNum==false;
            operPressed=true;
            lastPressNum=false;
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

equals.addEventListener('click', () =>{
    if(lastPressNum==true && operPressed==true){
        operate();
    }
    else{

    }
});







