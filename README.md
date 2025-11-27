Claro! Aqui está **todo o texto do README.md**, completo, organizado e pronto para você colar no arquivo que criou.

👉 **Copie tudo exatamente como está abaixo**
e cole dentro do seu `README.md`.

---

# 📄 **README.md (PRONTO PARA COLAR)**

```md
# 🔐 JWT Auth Demo  
Demonstração completa de autenticação JWT com **Node.js/Express** no backend e **React** no frontend.  
O projeto implementa login, geração de token, armazenamento no front, middleware para rota protegida e testes manuais de integração.

````
# 🚀 Como Rodar o Projeto

## 1️⃣ Clonar o repositório
```sh
git clone https://github.com/SEU-USUARIO/jwt-auth-demo.git
cd jwt-auth-demo
````

# 🟦 Backend (server)

## Instalar dependências

```sh
cd server
npm install
```

## Configurar variáveis de ambiente

Crie o arquivo `.env` com base no `.env.example`:

```
PORT=4000
JWT_SECRET=SUA_CHAVE_SECRETA_AQUI
JWT_EXPIRES_IN=1h
```

## Rodar o servidor

```sh
npm start
```

Servidor disponível em:
👉 [http://localhost:4000](http://localhost:4000)

---

# 🟩 Frontend (client)

## Instalar dependências

```sh
cd ../client
npm install
```

## Rodar o React

```sh
npm start
```

Frontend disponível em:
👉 [http://localhost:3000](http://localhost:3000)

---

# 🔑 Credenciais de Teste

Use estas credenciais para logar:

```
username: alice
password: password123
```

---

# 📌 API Endpoints

## 🔸 POST `/login`

Envia:

```json
{
  "username": "alice",
  "password": "password123"
}
```

Retorna:

```json
{
  "token": "<JWT_AQUI>"
}
```

---

## 🔸 GET `/private`

Header obrigatório:

```
Authorization: Bearer <token>
```

Retorna (se válido):

```json
{
  "message": "Access granted",
  "user": { ... }
}
```

---

# ✔ Critérios de Aceitação

### Backend

* `/login` retorna `{ token }`
* Middleware valida JWT
* `/private` só responde com token válido
* `.env.example` incluído

### Frontend

* Formulário de login funcional
* Salva token no `sessionStorage`
* Envia `Authorization: Bearer <token>`
* Mostra estados: loading, erro, sucesso

### Entregáveis

* `/server` e `/client`
* README com todos os comandos

---

# 🧪 Testes Manuais

1. Rodar o backend em `http://localhost:4000`
2. Abrir o frontend em `http://localhost:3000`
3. Inserir credenciais
4. Verificar se o token foi salvo no `sessionStorage`
5. Clicar em **Acessar** para acessar `/private`
6. Conferir o JSON retornado

---

# 🛠 Tecnologias

### Backend

* Node.js
* Express
* JWT
* Dotenv

### Frontend

* React
* Fetch API
* Hooks (useState)

---

# 📜 Licença

Projeto acadêmico — livre para uso.

```

---

# ✅ Pronto para uso!
Se quiser, posso:

📦 Criar o arquivo README.md pronto para download  
📌 Inserir no seu projeto no canvas  
🎨 Criar uma versão estilizada com emojis e badges adicionais  

Quer alguma dessas opções?
```
