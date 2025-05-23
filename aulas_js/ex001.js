const Btn = document.querySelectorAll('button');

Btn.addEventListener('click', ()=>{
    Btn.forEach(Button=>{
        alert(`Voce apertou no btn ${Button.innerHTML}`);
    })
})