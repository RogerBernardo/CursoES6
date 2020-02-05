// REST: Captura o resto das propriedades
const usuario = {
    nome: "Roger Bernardo",
    idade: '18',
    endereco: {
        cidade: "São Vicente",
        estado: "São Paulo",
    }
};

const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);


function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 4, 5354));


//SPREAD: Repassa as informações de um lugar para outro
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);


const usuario2 = {...usuario, nome: "Roger Bernardo de Melo Lima"};
console.log(usuario2);