const usuario = {
    nome: "Roger Bernardo",
    idade: '18',
    endereco: {
        cidade: "São Vicente",
        estado: "São Paulo",
    }
};

const { nome, idade, endereco: {estado} } = usuario;

console.log(nome);
console.log(idade);
console.log(estado);

