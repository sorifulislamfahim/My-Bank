// step- 1
document.getElementById('deposite-btn').addEventListener('click', function(){
    // step- 2
   const depositeFiled = document.getElementById('deposite-filed');
   const newDepositeAmountString = depositeFiled.value;
   const newDepositeAmount = parseFloat(newDepositeAmountString);

    // step- 7
    depositeFiled.value = '';
   if(isNaN(newDepositeAmount)){
    return alert('Please Enter Your Deposite')
   }

    // step - 3 
    const depositeTotalElement = document.getElementById('deposite-total');
    const priviousDepositeTotalString = depositeTotalElement.innerText;
    const priviousDepositeTotal = parseFloat(priviousDepositeTotalString);
    // step - 4
    const currentDepositeTotal = priviousDepositeTotal +  newDepositeAmount;
    // step - 4.5
    depositeTotalElement.innerText = currentDepositeTotal;

    // step- 5
    const balanceTotalElement = document.getElementById('balance-total');
    const priviousBalanceString = balanceTotalElement.innerText;
    const priviousBalance = parseFloat(priviousBalanceString);

    // step - 6
    const curentBalanceTotal = priviousBalance + newDepositeAmount;
    // step - 6.5 
    balanceTotalElement.innerText = curentBalanceTotal;

   
})