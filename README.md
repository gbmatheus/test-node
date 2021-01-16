# Port Louis - Teste básico de Javascript

## Quetão 1 - Q1

Implementer a função `removeProperty` que tem comzo entrada um objeto e o nomeda
propriedade e faz o seguinte: Se o objeto obj tem a propriedade prop, a função
remove a propriedade do objecto e retorna `true`, caso contrário retorna `false`.

## Quetão 2 - Q2

Escreva uma função que converte a entrada do usuário no formato **M/D/YYYY**
para o formato requirido **YYYYMMDD**. O parametro `userDate` e o retorno são strings.
Exemplo `"12/31/2014"` para `"20141231"`

## Quetão 3 - Q3

Considere o seguinte package.json para uma aplicação Node.js:

```
{
  "name": "skill-measure-app",
  "private": true,
  "version": "1.0.0",
  "main": "lib/main.js",
  "scripts": {
    "build": "npm run cleanup & npm run test * npm run publish",
    "cleanup": "rm -rf ./lib",
    "test": "jest",
    "publish": "npm pusblish lib"
  },
  "dependencies": {
    "jest": "^23.0.1",
    "custom-package": "file:../custom-package"
  }
}
```

Selecione as alternativas corretas:

[x] - Adicionando novas dependências no package.json pode ser feito com o
comando `npm install <dependency-name>` com o flag `--save`

[ ] - Dependências package.json podem apontar para caminhos locais e urls git.

[ ] - O NPM vai recursar publicar esse pacote porque a propriedade private está
setada como true.

[x] - Pela especificação das dependências o jest versão 24.0.0 pode ser usado no
projeto.

## Quetão 4 - Q4

Escreva uma função que simule uma chamada assíncrona de entrada e saída.
A função vai se chamar ping. Deve aceitar um argumento chamado delay que será o
tempo para a função retornar uma resposta (pong). Se não passar nenhum argumento
deve retornar imediatamente. Se o argumento é maior que 3 deve retornar um erro.

## Quetão 5 - Q5

Use a função criada anteriormente, crie um array de valores para o delay de
forma aleatória e chame a função usando a biblioteca async. Imprima cada resultado
em tela.
