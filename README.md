<h1 align="center">API Rocketlog</h1>

<p align="center">
API REST criada com Node.js, Express, Prisma, PostgreSQL, dentre outras tecnologias.
Essa API tem como objetivo gerenciar o envio de mercadorias, gerenciar usuários e autenticação.
<br/>
<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node.js
- TypeScript
- Express
- Prisma
- Docker
- PostgreSQL
- JSON Web Tokens
- Postman
- Jest (Para testes automatizados)

## 💻 Projeto

Desenvolvi o projeto com a finalidade de aprofundar meus conhecimentos em API REST.

## 💻 Usage

1.      Instale as dependencias do node: npm install
2.      Rodar em modo desenvolvimento: npm run dev
3.      Rodando com Docker: docker-compose up --D
4.      A aplicação estará disponível em: http://localhost:5434
## 🔖 Rotas da API

[POST] /users
```json
// Cria um novo usuário
// Body (JSON):
{
  "name": "teste",
  "email": "teste@gmail.com",
  "password": "123456"
}
// Resposta: 
{
  "id": 1,
  "name": "teste",
  "email": "teste@gmail.com"
}
```
🔐 [POST] /login
Autentica um usuário e retorna um token

```json
// Body (JSON):
{
  "email": "teste@gmail.com",
  "password": "123456"
}

// Resposta:
{
  "token": "jwt.token.aqui"
}
```
🔒 [GET] /users
Lista todos os usuários (Requer autenticação com Bearer Token)
```json
// Header:
// Authorization: Bearer seu_token_aqui

// Resposta:
  {
    "id": 1,
    "name": "teste",
    "email": "teste@gmail.com"
  }
```
## :memo: Licença

Esse projeto está sob a licença MIT.

---
