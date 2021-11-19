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