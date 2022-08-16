
// step - 1 
document.getElementById('withdrow-btn').addEventListener('click', function(){
    // step- 2
    const withdrowFiled = document.getElementById('withdrow-filed');
    const newWithdrowAmountString = withdrowFiled.value;
    const newWithdorwAmount = parseFloat(newWithdrowAmountString);

    // step- 7
    withdrowFiled.value = '';

    if(isNaN(newWithdorwAmount)){
        return alert('Please Enter Your Withdrow Amount')
    }

    // step- 3 
    const withdrowTotalElement = document.getElementById('withdrow-total');
    const priviousWithdowTotalString = withdrowTotalElement.innerText;
    const priviousWithdrowTotal = parseFloat(priviousWithdowTotalString);

    // step - 5 
    const balanceTotalElement = document.getElementById('balance-total');
    const priviousBalanceString = balanceTotalElement.innerText;
    const priviousBalance = parseFloat(priviousBalanceString);

    if(newWithdorwAmount > priviousBalance){
        return alert('Your Acount Dosn`t have a sufficient Balance')
    }

    // step - 4
    const courentWitdrowTotal = newWithdorwAmount + priviousWithdrowTotal; 
    // step - 4.5 
    withdrowTotalElement.innerText = courentWitdrowTotal;

    // step- 6 
    const courentBalanceTotal = priviousBalance - newWithdorwAmount ;
    // step- 6.5 
    balanceTotalElement.innerText = courentBalanceTotal;

   

    
})