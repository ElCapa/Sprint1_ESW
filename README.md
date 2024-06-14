# Projeto de Monitoramento e Rega Automática

Este é um projeto de monitoramento e rega automática desenvolvido usando Node.js, Express e MongoDB.

## Descrição

Este projeto visa criar uma aplicação para monitorar e controlar o sistema de rega de plantas de forma automática, além de fornecer funcionalidades para gerenciar sensores, configurações de rega e notificações.

## Funcionalidades

- Autenticação de usuários (signup, login, logout)
- CRUD de sensores para monitoramento
- CRUD de configurações de rega
- CRUD de notificações
- Sistema de rega automática com base nas configurações definidas
- Proteção de rotas com autenticação JWT
- Utilização de cookies para gerenciamento de sessão

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens) para autenticação
- bcrypt para hash de senhas
- Mongoose para modelagem de dados MongoDB

## Instalação e Uso

1. Clone este repositório
2. Instale as dependências usando `npm install`
3. Configure as variáveis de ambiente no arquivo `.env`
4. Inicie o servidor com `npm start`
5. Utilize o Postman ou ferramenta similar para testar as rotas API

## Rotas

- `/signup`: Registro de novos usuários
- `/login`: Login de usuários
- `/logout`: Logout de usuários
- `/sensores`: CRUD de sensores
- `/configuracoes`: CRUD de configurações de rega
- `/notificacoes`: CRUD de notificações

## Testando no Postman

- Certifique-se de ter todas as rotas implementadas no seu servidor.
- Inicie seu servidor Node.js.
- Abra o Postman e teste as rotas conforme descrito acima.



