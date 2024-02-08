import { ans } from "script.js";
let rightGuess = ans.value;

document.addEventListener("click", function () {
    let row = document.getElementById("answer");
    let answer = row.value;                  

    if(answer === rightGuess){
        toastr.success("Правильно!!!");
    
        setTimeout(function(){
            document.getElementById('Complete_btn').style.display='flex';
            document.getElementById('elem').style.display='none';
        },2000);

        return;
    }
    else{
        toastr.error("Попробуй ещё раз... :(");
        return;
    }
});