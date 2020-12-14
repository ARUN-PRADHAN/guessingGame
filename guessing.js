'use strict';
var actuall=Math.floor(Math.random()*20)+1;
var time=10;
console.log(actuall);
document.querySelector('.check').addEventListener('click',function(){
    const num=Number(document.querySelector('.guess').value);
    if(!time){
        document.querySelector('.startGuess').textContent='You have no life...please click again buttom';

    }
    else{
    if(!num){
        document.querySelector('.startGuess').textContent='No Number Inserted .....';
        document.querySelector('.enterNum').textContent=num;
        document.querySelector('.chance').textContent=time;
        time--;
        document.querySelector('.chance').textContent=time;
    }
    else if(num>20){
        document.querySelector('.startGuess').textContent='Too high';
        document.querySelector('.enterNum').textContent=num;
        time--;
        document.querySelector('.chance').textContent=time;
    }
    else if(num<actuall){
        document.querySelector('.startGuess').textContent='Too Low';
        document.querySelector('.enterNum').textContent=num;
        time--;
        document.querySelector('.chance').textContent=time;
    }
    else if(num > actuall){
        document.querySelector('.startGuess').textContent='Too High';
        document.querySelector('.enterNum').textContent=num;
        time--;
        document.querySelector('.chance').textContent=time;

    }
    else if(num == actuall){
        document.querySelector('.startGuess').textContent='You win';
        document.querySelector('.enterNum').value=num;
        document.querySelector('.score').textContent=time;
        time=0;
        
    }
}   
})
document.querySelector('.again').addEventListener('click',function(){
    actuall=Math.floor(Math.random()*20)+1;
    console.log(actuall);
    document.querySelector('.score').textContent=time;
    document.querySelector('.startGuess').textContent="start guessing";
    document.querySelector('.chance').textContent=10;

    time=10;
})