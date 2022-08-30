let pass = document.getElementById('password');
let message = document.querySelector('.message');
let letter = document.getElementById('letter');
let capital = document.getElementById('capital');
let number = document.getElementById('number');
let leng = document.getElementById('length');

pass.addEventListener('focus',function(){
    message.style.display = 'block'
})
pass.addEventListener('blur', function(){
    message.style.display = 'none'
})

pass.addEventListener('keyup', function(){
    let lowerLetter = /[a-z]/g;
    if(pass.value.match(lowerLetter)){
        letter.classList.add('valid');
        letter.classList.remove('invalid')
    }else{
        letter.classList.add('invalid')
        letter.classList.remove('valid')
    }

    let upperLetter = /[A-Z]/g;
    if(pass.value.match(upperLetter)){
        capital.classList.add('valid');
        capital.classList.remove('invalid')
    }else{
        capital.classList.add('invalid')
        capital.classList.remove('valid')
    }

    let numberLetter = /[0-9]/g;
    if(pass.value.match(numberLetter)){
        number.classList.add('valid');
        number.classList.remove('invalid')
    }else{
        number.classList.add('invalid');
        number.classList.remove('valid')
    }


    if(pass.value.length >= 8){
        leng.classList.add('valid')
        leng.classList.remove('invalid')
    }else{
        leng.classList.add('invalid')
        leng.classList.remove('valid')
    }
})