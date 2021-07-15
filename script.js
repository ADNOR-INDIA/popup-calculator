
const screen = document.getElementById('screen')
const button0 = document.getElementById('0');
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const buttonAC = document.getElementById('AC');
const buttonDEL = document.getElementById('DEL');
const buttonplus = document.getElementById('+');
const buttonminus = document.getElementById('-');
const buttonmultiply = document.getElementById('X');
const buttondivide = document.getElementById('/');
const buttonequals = document.getElementById('equal');
const buttonpoint = document.getElementById('.');
let screenValue = '';

buttonAC.addEventListener("click", function(){
    screen.value='';
    screenValue='';
})
button0.addEventListener("click", function(){
    screenValue+=0;
    screen.value = screenValue;
   
})
button1.addEventListener("click", function(){
    screenValue+=1;
     screen.value= screenValue;
})
button2.addEventListener("click", function(){
    screenValue+=2;
     screen.value= screenValue;
})
button3.addEventListener("click", function(){
    screenValue+=3;
     screen.value= screenValue;
})
button4.addEventListener("click", function(){
    screenValue+=4;
     screen.value= screenValue;
})
button5.addEventListener("click", function(){
    screenValue+=5;
     screen.value= screenValue;
})
button6.addEventListener("click", function(){
    screenValue+=6;
     screen.value= screenValue;
})
button7.addEventListener("click", function(){
    screenValue+=7;
     screen.value= screenValue;
})
button8.addEventListener("click", function(){
    screenValue+=8;
     screen.value= screenValue;
})
button9.addEventListener("click", function(){
    screenValue+= 9;
     screen.value = screenValue;
})
buttonplus.addEventListener("click", function(){ 
    screenValue+='+'; 
    screen.value = screenValue;
})
buttonminus.addEventListener("click", function(){
    screenValue+='-';
    screen.value = screenValue;
})
buttonmultiply.addEventListener("click", function(){
    screenValue+='*';
    screen.value = screenValue;
})
buttondivide.addEventListener("click", function(){
    screenValue+='/';
    screen.value = screenValue;
})
buttonpoint.addEventListener("click", function(){
    screenValue+='.';
    screen.value = screenValue;
})
buttonequals.addEventListener("click", function(){
    screen.value = eval(screenValue); 
})
buttonDEL.addEventListener("click", function(){
    screenValue= screenValue.substr(0, screenValue.length-1);
    screen.value = screenValue;
})
