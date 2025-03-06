// DOM - dom objest model

//search elements

// let counterValue = document.querySelector("#counter")

// counterValue.innerText = "TEST";
// counterValue.textContent = 555;

// let minusButton = document.getElementById("decrease")

// minusButton.textContent = "minus"
// minusButton.style.color = "red"

// minusButton.style.border = "4px dashed purple"

// let resetButton = document.getElementsByClassName("resetButton")[0]
// resetButton.textContent = "сброс"

// let plusButton = document.getElementsByTagName ("button")[2]

// plusButton.textContent = "плюс"
// plusButton.style.color = "blue"

// let plusButton = document.querySelector(".buttons button:last-child")
// plusButton.remove();

//YAGNI - YOU AREN'T GONNA NEED IT 
//KISS - KEEP IN SIMPLE AND STUPED
//DRY - 

 let counterValue = document.querySelector ("#counter");
 let minusButton = document.querySelector ("#decrease");
 let reserButton = document.querySelector ("#reset");
 let plusButton = document.querySelector ("#increase");

 function plusContent(){
    let currentValue = Number(counterValue.textContent);
    currentValue += 1;
    counterValue.textContent = currentValue;
    setCounterColor()
 }


function setCounterColor(){
    if(currentValue > 0){
        counterValue.style.color = "green"
    }else if (currentValue < 0){
        counterValue.style.color = "red"
    }else {currentValue.style.colr = "cyan"}
}

function resetCounter (){
    counterValue.textContent = 0;
    setCounterColor()
}
function munisCounter(){
    let currentValue = Number(counterValue.textContent);
    currentValue -= 1;
    counterValue.textContent = currentValue;
    setCounterColor()
}

 plusButton.addEventListener("click", plusContent);
 reserButton.addEventListener("click", resetCounter);
 minusButton.onclick = munisCounter;


