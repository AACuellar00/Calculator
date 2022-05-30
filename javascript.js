const memory = document.querySelector('#Memory');
const containerB = document.querySelector('#Body');
let decPress=false;

theSlider.oninput = function() {
    while(containerB.lastChild){
        containerB.removeChild(containerB.lastChild);
    }
    gridDimension=parseInt(this.value);
}


const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (button.id !="backspace" && button.id !="clear" && button.id !="equals" && button.id !="decimal"){
            memory.textContent+=button.id;
        }
        else if(button.id == "backspace")
            memory.textContent =memory.textContent.substring(0,memory.textContent.length-1);
        else if(button.id == "clear")
            memory.textContent = "";
        else if(button.id == "equals"){
            
        }
        else{
            if(decPress)
                console.log("No good");
            else{
                decPress=true;
            }

        }
    });

});





