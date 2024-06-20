#### Criando Projeto NodeJS para ler Excel

#### 1. Criando projeto NodeJS
* criar um projeto NodeJS
```
npm init -y
```

#### 2. Dependências
* nodemon para recarregar o projeto
* express construir endpoints
* xlsx para manipular excel
* lodash para transpilar excel para json

```
npm i nodemon express xlsx lodash
```

#### 3. Configurar nosso packege.json
* abaixo do main

```
 "scripts": {
    "start": "nodemon index.js"
  },
```

* exemplo
```
{
  "name": "excel",
  "version": "1.0.0",
  "description": "* criar um projeto NodeJS\r npm init -y",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2",
    "loadash": "^1.0.0",
    "lodash": "^4.17.21",
    "nodemon": "^3.1.4",
    "xlsx": "^0.18.5"
  }
}
```

#### 4. Rodar nosso projeto
```
npm start
```

