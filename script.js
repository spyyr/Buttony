var counterValue = 0;

 

window.onload = function(){

    document.getElementById("valueSpan").innerText = counterValue;

}

 

function updateCounterValue()

{

    if(counterValue != 10)

        document.getElementById("valueSpan").innerText = counterValue;

    else

        document.getElementById("valueSpan").innerText = "KURWAAAAAA 10?!";

}

 

function changeCounterValue(flag)

{

    switch(flag){

        case '+':

            counterValue += 1;

            break;

        case '-':

            counterValue -= 1;

            break;

        case '0':

            counterValue = 0;

            break;

    }

    updateCounterValue();

}