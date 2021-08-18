


//function 
function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputBalance= parseFloat(inputValue.value);
    inputValue.value='';
   return inputBalance;

}

function getUpdateBalance(totalId,inputId,flag){
     
    const inputBalance = getInputValue(inputId);
    const totalBalanceText = document.getElementById(totalId);
    const totalBalancePrivious = parseFloat(totalBalanceText.innerText);
    

    const AvailableAccountBalanceText = document.querySelector('#available-balance');
    const AvailableAccountBalance = parseFloat(AvailableAccountBalanceText.innerHTML);

    if (flag==true && inputBalance > 0){
    
        totalBalanceText.innerText = totalBalancePrivious + inputBalance;

        AvailableAccountBalanceText.innerText = AvailableAccountBalance + inputBalance;
       
    }
    else if (flag==false && inputBalance > 0){

        if (inputBalance > AvailableAccountBalance){
            alert("your account haven't anough money");
        }
        else {
            totalBalanceText.innerText = totalBalancePrivious + inputBalance;

            
        AvailableAccountBalanceText.innerText = AvailableAccountBalance -  inputBalance;
        }
    }
    else {
        alert('give valid input ');
    }

}

//deposit
document.addEventListener('click',()=>{

    document.querySelector('#deposite').onclick=function(){
   
        getUpdateBalance('deposit-balance','deposit-input',true);

    }
})

//withdrow
document.querySelector('#withdrow').addEventListener('click',()=>{
   getUpdateBalance('withdrow-balance','withdrow-input',false);
}) 


