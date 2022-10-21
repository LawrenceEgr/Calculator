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
    (data.value) += number[0];
    liveCalc();

}
const showTwo = () =>{
    (data.value) += number[1];
    liveCalc();
}
const showThree = () =>{
    (data.value) += number[2];
    liveCalc();
}
const showFour = () =>{
    (data.value) += number[3];
    liveCalc();
}
const showFive = () =>{
    (data.value) += number[4];
    liveCalc();
}
const showSix = () =>{
    (data.value) += number[5];
    liveCalc();
}
const showSeven = () =>{
    (data.value) += number[6];
    liveCalc();
}
const showEight = () =>{
    (data.value) += number[7];
    liveCalc();
}
const showNine = () =>{
    (data.value) += number[8];
    liveCalc();
}
const showZero = () =>{
    (data.value) += number[9] ;
    liveCalc();   
    
}
const showPlus = () =>{
    (data.value) += '+';
}
const showPoint = () =>{
    (data.value) += ".";
}
const showMinus = () =>{
    (data.value) += '-';
}
const showMultiply = () =>{
    (data.value) += '*';
}
const showDivide = () =>{
    (data.value) += '/';
}
const showEqual = () =>{
    document.getElementById("answer").value = '';
    (data.value) = 'Ans = '+ '' + eval((data.value)) ;
}


const clearAll =() => {
    (data.value) = '';
    document.getElementById("answer").value = '';
}
const liveCalc =()=>{
    document.getElementById("answer").value = eval((data.value));
}


const btn = document.getElementById('btn');

function handleClick() {
  // 👇️ get length right before clicking button
  const end = data.value.length;

  data.setSelectionRange(end, end);
  data.focus();
};

// const removeCharacter = () => {
    
     
//     newString = data.value.substr(0, position - 1)
//     // + data.value.substr(position, data.value.length);

//     data.value = newString;
//     liveCalc();
// }
const removeCharacter = () => {
    handleClick();
    let originalString = data.value ;     
    let lastCharRemoved =
    originalString.slice(0, originalString.length - 1); 
    data.value.textContent = lastCharRemoved;
    liveCalc();
}