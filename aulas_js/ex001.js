/*const Btn = document.querySelectorAll('button');

Btn.addEventListener('click', ()=>{
    Btn.forEach(Button=>{
        alert(`Voce apertou no btn ${Button.innerHTML}`);
    })
})*/

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        console.log(`Ola meu nome é, ${this.nome} e tenho ${this.idade} idade`);
    }
    felizAniversario(){
        this.idade +=1;
        console.log(`Feliz aniversario ${this.nome} agora vc tem ${this.idade} anos`);
    }
}

const pessoa1 = new Pessoa("Noinha", 18);
const pessoa2 = new Pessoa("<DEV_DUDU>", 20);

pessoa1.apresentar();
pessoa1.felizAniversario();

pessoa2.apresentar();
pessoa2.felizAniversario();