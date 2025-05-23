const letraUser = document.getElementById('letra');
const senhaUser = document.getElementById('numero');
const btnValidar = document.getElementById('btn');


let user = letraUser.value
let password = senhaUser.value

if(isNaN(password)){
    alert('erro');
    return;
}