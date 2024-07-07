// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=hello
// 
// 

let qr = document.querySelector('#qrImage');
let code = document.querySelector('#inputText');

function getQR(){

    if (code.value === '') {
        alert('Please enter the TEXT or URL')
        code.focus();
    }else{
    qr.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + code.value;
    qr.classList.add('showimg');
    code.value = '';
    code.focus();
    }

}

code.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        getQR();
    }
});