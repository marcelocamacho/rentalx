# CADASTRO DE CARRO

**REQUISITOS FUNCIONAIS**
- Deve ser possível cadastrar um novo carro.
- Deve ser possível listar todas as categorias.

**REGRAS DE NEGÓCIOS**
- Não deve ser possível cadastrar um carro com uma placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- O carro deve ser cadastrado com disponibilidade por padrão.
- O usuário responsável pelo cadastro deve ser um administrador.

# LISTAGEM DE CARROS

**REQUISITOS FUNCIONAIS**
- Deve ser possível listar os carros disponíveis.
- Deve ser possível listar todos os carros pelo nome da categoria, marca e modelo do carro.
**REGRAS DE NEGÓCIOS**
- O usuário não precisa estar logado no sistema.

# CADASTRO DE ESPECIFICAÇÃO DO CARRO

**REQUISITOS FUNCIONAIS**
- Deve ser possível cadastrar uma especificação para o carro.
- Deve ser possível listar todas as especificações.
**REGRAS DE NEGÓCIOS**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um administrador.

# CADASTRO DA IMAGEM DO CARRO

**REQUISITOS FUNCIONAIS**
- Deve ser possível cadastrar a imagem do carro.

**REQUISITOS NÃO FUNCIONAIS**
- Utilizar o multer para upload de arquivos.

**REGRAS DE NEGÓCIO**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo usuário.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# AGENDAMENTO DE ALUGUEL DE CARRO

**REQUISITO FUNCIONAL**
- Deve ser possível cadastrar um aluguel.

**REGRA DE NEGÓCIO**
- O aluguel deve ter duração mínima de uma 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário;
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro;

**COMO EXECUTAR**
```
# Baixar as dependências
yarn

# Levantar os containers
docker-compose up -d

# Criar as tabelas da aplicação
yarn typeorm migration:run

# Criar o usuário admin da aplicação para executar operações que exigem privilégios
yarn seed:admin

# Criar a sessão para o usuário
curl --request POST \
  --url http://localhost:3333/sessions \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "admin@rentalx.com.br",
	"password": "admin"
}'

# O token retornado pode ser utilizado em outras requisições. Por exemplo:
curl --request POST \
  --url http://localhost:3333/categories \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTA1NjMyMjMsImV4cCI6MTY1MDY0OTYyMywic3ViIjoiZTE2Y2FmZDUtNTdhZS00MzE2LWFmZTctODdmZDllNTQ2ZWQ4In0.eSojNBUG3IODG_AC236UwTvyiXJfc2ej2GJpeu4y8pM' \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Utilitários",
	"description": "Carros para o trabalho"
}'

```

** EXECUTAR TESTES **

Acesse o SGBD que está rodando no docker e execute a seguinte query SQL:

```
CREATE DATABASE rentx_test;

```