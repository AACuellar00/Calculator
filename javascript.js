const memory = document.querySelector('#Memory');
const containerB = document.querySelector('#Body');

let decPress=false;
let lastPressNum=false;
let pressedNum=false;
let operPressed=false;
let prevNum=0;
let currentNum=0;

const numbers = document.getElementsByClassName("num");
const operators = document.getElementsByClassName("operator");
const dels = document.getElementsByClassName("del");

function operAdd(){

}
function operSub(){

}
function operMulti(){

}
function operDiv(){

}
function operModu(){

}
function operExpo(){

}
function operate(){

}

function backspace(){
//modify all bools and such based on last character
    memory.textContent =memory.textContent.substring(0,memory.textContent.length-1);
    if(memory.textContent.length==0){
        memory.textContent="0";
        decPress=false;
        lastPressNum=false;
        prevNum=0;
        pressedNum=false;
        operPressed=false;
}
}

function CE(){
    memory.textContent = "0";
    decPress=false;
    lastPressNum=false;
    prevNum=0;
    pressedNum=false;
    operPressed=false;
}


for (const num of numbers){
    num.addEventListener('click',() =>{
        if(memory.textContent=="0"){
                memory.textContent=num.id;
        }
        else{
            memory.textContent+=num.id;
            lastPressNum=true;
            pressedNum=true;
            
            operPressed=false;
        }
    });
}

for (const oper of operators){
    oper.addEventListener('click', () =>{
        if(pressedNum==true){
            prevNum=parseInt(memory.textContent);
            memory.textContent+=oper.id;
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
            
        }
        else{
            
        }
    });
}







/*
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (button.id !="backspace" && button.id !="CE" && button.id !="equals" && button.id !="."){

            if(memory.textContent=="0")
                memory.textContent=button.id;
            else if(button.id =="+" || button.id =="-" || button.id =="*" || button.id =="/"){
                if(lastPressNum){
                    memory.textContent+=button.id;
                    lastPressNum=false;
                }
                else
                    console.log("No good");
            }
                
            else{
                memory.textContent+=button.id;
                lastPressNum=true;
            }
        }


        //logic of lastpressnum for CE/Backspace

        else if(button.id == "backspace"){
            memory.textContent =memory.textContent.substring(0,memory.textContent.length-1);
            if(memory.textContent.length==0)
                memory.textContent="0";
        }

        else if(button.id == "CE")
            memory.textContent = "0";
        else if(button.id == "equals"){
            
        }

        else{
            if(decPress==true || lastPressNum==false){
                console.log("No good");
            }
            else{
                decPress=true;
                lastPressNum=false;
                memory.textContent+=button.id;
            }
        }
    });

});



*/

