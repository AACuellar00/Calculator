const memory = document.querySelector('#Memory');
const containerB = document.querySelector('#Body');

let decPress=false;
let lastPressNum=false;

const buttons = document.querySelectorAll('button');
const numbers = document.getElementsByClassName("num");

for (const num of numbers){
    num.addEventListener('click',() =>{
        if(memory.textContent=="0")
                memory.textContent=num.id;
        else{
            memory.textContent+=num.id;
            lastPressNum=true;
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

