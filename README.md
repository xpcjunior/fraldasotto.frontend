# Fraldas Otto Frontend

Este projeto tem o propósito de exibir análises e insights sobre o consumo de fraldas do meu primeiro filho, Otto,  ao longo de sua jornada até o desfraldamento. Trata-se de um frontend em Angular que consome os serviços de uma base de dados Firestore(serviço de banco de dados do Google Firebase). As informações exibidas nesta aplicação são oriundas do trabalho de outro projeto, um pipeline ETL, que extrai dados brutos de uma planilha do Google Sheets.

## Requisitos:

Para conseguir executar esta aplicação, você precisará de:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://github.com/angular/angular-cli) versão 18+;
- Uma aplicação no [Firebase](https://console.firebase.google.com) com uma base de dados Firestore habilitada;

## Configuração

1. Duplique e renomeie a duplicata do aquivo [environment.example.ts](/src/environments/environment.example.ts) para **environment.ts**. Substitua os valores contidos no arquivo pelos valores obtidos no seu Firebase Console. Este arquivo é responsável pela conexão com sua base de dados Firestore.

2. Execute o seguinte comando abaixo para instalar todas as dependências necessárias para o funcionamento correto do projeto:
```bash
npm install
```

**OBS:** Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.2.3.

## Execução

Utilize o comando abaixo para executar a aplicação:

```bash
npm start
```

## Frontend de uma Pipeline

Este projeto exibe o fruto do trabalho de uma pipeline de engenharia de dados. Você pode conferir o código-fonte desta aplicação [aqui](https://github.com/xpcjunior/fraldasotto.pipeline). 