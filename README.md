# Curso de ES6 - Rocketseat

## Babel
Babel é a principal ferramenta usada para pré-processar JavaScript. Babel é um parser altamente configurável que permite que usemos features experimentais e extensões, compilando de volta para o JavaScript antigo que pode ser suportado em uma ampla quantidade de plataformas. Se uma plataforma não suporta nativamente uma feature ES6 como Map(), o Babel não será capaz de ajudar completamente — mas em muitos casos ele pode replicar as APIs que faltam para prover essa funcionalidade.

## Const & let
Foi pensando em trazer o escopo de bloco (tão conhecido em outras linguagens) que o ECMAScript 6 destinou-se a disponibilizar essa mesma flexibilidade (e uniformidade) para a linguagem. Através da palavra-chave let podemos declarar variáveis com escopo de bloco.

Embora o let garanta o escopo, ainda assim, existe a possibilidade de declararmos uma variável com let e ela ser undefined. Supondo que temos uma variável que queremos garantir sua inicialização com um determinado valor, como podemos fazer isso no JavaScript sem causar uma inicialização default com undefined?

Para termos esse tipo de comportamento em uma variável no JavaScript, podemos declarar constantes por meio da palavra-chave const. Assim como as variáveis declaradas com a palavra-chave let, constantes também tem escopo de bloco. Além disso, constantes devem ser inicializadas obrigatoriamente no momento de sua declaração.

## Arrow functions
Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

## Desestruturação
A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

## Operadores rest/spread
A sintaxe de propagação (Spread) permite que um objeto iterável, como um array ou string, seja expandida em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) sejam esperados ou uma expressão de objeto seja expandida em locais onde zero ou mais pares de chave-valor (para literais de objeto) são esperados.

A sintaxe de rest parameter (parâmetros rest)  nos permite representar um número indefinido de argumentos como um array. Se o último argumento nomeado de uma função tiver prefixo com  ..., ele irá se tornar um array em que os elemento de 0 (inclusive) até theArgs.length (exclusivo) são disponibilizados pelos argumentos atuais passados à função.

## Template Literals
Template literals são literais string que permitem expressões embutidas. Você pode usar string multi-linhas e interpolação de string com elas. Elas eram chamadas "template strings" nas versões anteriores à especificação ES2015.

## Classes
Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

## WebPack
webpack (com “w” minúsculo, respeitando a grafia do site oficial) é um empacotador de código para projetos web, como o browserify. O que ele se propõe a fazer de diferente é focar em módulos da sua aplicação. Nem sempre ter todo e qualquer JavaScript/CSS do seu projeto num único arquivo é bom, por isso o webpack tem a ideia de code splitting, onde você modulariza partes reaproveitáveis do seu projeto, facilitando o desenvolvimento independente, por exemplo, ter uma equipe trabalhando em um módulo X e outra num módulo Y, mas ambos de um mesmo projeto.