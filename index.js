let buttons=document.querySelectorAll(".btn");
let input=document.querySelector(".myInput");

const gotClicked=()=>{
    buttons.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            if(btn.innerText==='C'){
                input.value='0';
            }
            if(btn.innerText !== '=' && btn.innerText !== 'C' &&btn.innerText !== 'D' ){
                if(btn.innerText!=="0" && input.value==='0'){
                    input.value=btn.innerText;
                }else{
                        input.value+=btn.innerText;
                }
            }
            if(btn.innerText=== "D"){
                if (input.value.length > 0) {
                    input.value = input.value.slice(0, -1);
                }
            }
            if(btn.innerText=== "="){
                getValues(input.value);
            }
            
        });
    });
}
const getValues=(inputStr)=>{
let operand1='';
let operator='';
let operand2='';
let operatorFound=false;
for (let val of inputStr){
    if(val!=="+" && val!=="-" && val!=="X" && val!=="/" && val!=="%"){
        if(operatorFound===false){
            operand1+=val;
        }else if(operatorFound===true){
            operand2+=val;
        }
    }else{
        operatorFound=true;
        operator=val;
    }
}
calculate(operand1,operator,operand2);
}

const calculate=(opr1,op,opr2)=>{
    opr1=Number(opr1);
    opr2=Number(opr2);
    switch(op){
        case '+': input.value=opr1+opr2;
                  break;
        case '-': input.value=opr1-opr2;
                  break;
        case 'X': input.value=opr1*opr2;
                  break;
        case '/': if(opr2===0){
            input.value=0;
        }else{
                input.value=opr1/opr2;
            }
                  break;
        case '%': input.value=opr1%opr2;
                  break;
        default: input.value="error";
                  break;
    }
}
gotClicked();
