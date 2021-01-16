# Quetão 3

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
