

document.getElementById('submite-button').addEventListener('click', function(){
    const emailFiled = document.getElementById('email-filed');
    const email = emailFiled.value;
    // console.log(email);

    const passwordFiled = document.getElementById('pass-filed');
    const password = passwordFiled.value;
    // console.log(password);

    if(email === '' ){
        return alert('Please Enter Your Email')
    }
    else if(password === ''){
        return alert('Please Enter Your Passward')
    }

    else if(email === 'islamsoriful248@gmail.com' && password === 'fahimjannat290'){
       window.location.href = 'bank.html';
    }
    else{
        return alert('Incorect Your Information')
    }
    
})