/* //Copiar essa linha de código para o arquivo Main 
import * as funcoes from './math'

console.log(funcoes.soma(10, 23));
console.log(funcoes.multiplicacao(15, 29));
console.log(funcoes.modulo(13, 28));
console.log(funcoes.divisao(14, 27));
console.log(funcoes.subtracao(18, 25)); */

export function soma(a, b) {
    return (a + b);
}

export function divisao(a, b) {
    return (a / b);
}

export function multiplicacao(a, b) {
    return (a * b);
}

export function modulo(a, b) {
    return (a % b);
}

export function subtracao(a, b) {
    return (a - b);
}