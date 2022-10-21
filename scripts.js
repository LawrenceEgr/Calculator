// Everything created by Lawrence langat 
// email lawrencelangatmi@gmail.com

const data = document.getElementById("data");
const answer = document.getElementById("answer");

//symbols
const shiftLeft = document.getElementById("shiftLeft");
const shiftRight = document.getElementById("shiftRight");
const leftBracket = document.getElementById("leftBracket ");
const rightBracket  = document.getElementById("rightBracket ");

//numbers
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("none");
const zero = document.getElementById("zero");
const point = document.getElementById("point");
const equal = document.getElementById("equal");

//operators


const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const number  =  [1, 2 ,3, 4, 5, 6, 7, 8 ,9, 0];

const showOne = () =>{
    data.innerHTML += number[0];
    liveCalc();

}
const showTwo = () =>{
    data.innerHTML += number[1];
    liveCalc();
}
const showThree = () =>{
    data.innerHTML += number[2];
    liveCalc();
}
const showFour = () =>{
    data.innerHTML += number[3];
    liveCalc();
}
const showFive = () =>{
    data.innerHTML += number[4];
    liveCalc();
}
const showSix = () =>{
    data.innerHTML += number[5];
    liveCalc();
}
const showSeven = () =>{
    data.innerHTML += number[6];
    liveCalc();
}
const showEight = () =>{
    data.innerHTML += number[7];
    liveCalc();
}
const showNine = () =>{
    data.innerHTML += number[8];
    liveCalc();
}
const showZero = () =>{
    data.innerHTML += number[9] ;
    liveCalc();   
    
}
const showPlus = () =>{
    data.innerHTML += '+';
}
const showPoint = () =>{
    data.innerHTML += ".";
}
const showMinus = () =>{
    data.innerHTML += '-';
}
const showMultiply = () =>{
    data.innerHTML += '*';
}
const showDivide = () =>{
    data.innerHTML += '/';
}
const showEqual = () =>{
    document.getElementById("answer").innerHTML = ''
    data.innerHTML = 'Ans = '+ '' + eval(data.innerHTML) ;
}


const clearAll =() => {
    data.innerHTML = '';
    document.getElementById("answer").innerHTML = '';
}
const liveCalc =()=>{
    document.getElementById("answer").innerHTML = eval(data.innerHTML);
}