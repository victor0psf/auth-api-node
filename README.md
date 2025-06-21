# 🔐 API de Autenticação com Node.js, JWT e MongoDB

Esta é uma API desenvolvida com **Node.js** que implementa um sistema completo de autenticação com rotas públicas e privadas, utilizando **JWT** para segurança, **Prisma ORM** e banco de dados **MongoDB**.

---

##  Funcionalidades

- Cadastro de usuário com criptografia de senha (bcrypt)
- Login com geração de token JWT
- Middleware de autenticação para proteger rotas privadas
- Rota GET privada para listar usuários (apenas com token válido)
- Validações e tratamento de erros

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [JWT (jsonwebtoken)](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Prisma ORM](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 💻 Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- MongoDB rodando localmente ou URI de conexão Mongo Atlas

### Instalação

```bash
# Clone o repositório
git clone https://github.com/victor0psf/auth-api-node.git

# Acesse a pasta do projeto
cd nome-do-repo

# Instale as dependências
npm install
```

### Configuração
- Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```bash
DATABASE_URL="sua_string_do_mongodb"
JWT_SECRET="um_segredo_seguro"
```
### Executar 

```bash
node server.js
```
- A API estará rodando em: http://localhost:3000

---

## Autor

Desenvolvido por [Paulo Victor dos Santos Fonseca](https://github.com/victor0psf)  
Email: pvictorsf07@outlook.com


