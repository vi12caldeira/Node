const nome = 'Luiz';
const sobrenome = 'Miranda';


const falaNome = () => {
    console.log(nome, sobrenome);
}

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

console.log(exports);