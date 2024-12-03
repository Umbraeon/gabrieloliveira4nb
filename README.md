
# BarberSHOP

## Índice
- [Visão Geral](#visão-geral)
- [Escopo](#escopo)
- [Arquitetura do Sistema](#arquitetura-do-sistema)
- [Requisitos Funcionais](#requisitos-funcionais)
- [Requisitos Não Funcionais](#requisitos-não-funcionais)
- [Casos de Uso](#casos-de-uso)
- [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
- [Plano de Testes](#plano-de-testes)
- [Cronograma](#cronograma)
- [Referências](#referências)
- [Configuração e Uso](#configuração-e-uso)

---

## Visão Geral
BarberSHOP é um sistema simples de agendamento online para uma barbearia. O objetivo é permitir que os clientes agendem serviços diretamente pelo site, escolhendo o barbeiro e o horário desejado.

---

## Escopo
O projeto incluirá:
- Um sistema básico de agendamento de serviços.
- Cadastro e autenticação de usuários.
- Escolha de barbeiros e horários.
- Verificação de disponibilidade de horários.
- Um painel simples para os barbeiros visualizarem seus agendamentos.

---

## Arquitetura do Sistema
A arquitetura do sistema será monolítica, focando em um servidor backend que gerenciará todas as funcionalidades da aplicação. Será utilizado TypeScript com Node.js para desenvolver o servidor, e um banco de dados relacional para armazenar os dados.

### Componentes Principais
- **Servidor Backend**: Desenvolvido em TypeScript com Node.js e Express, ele será responsável por todas as operações do sistema, como gerenciamento de usuários, agendamentos e integração com o banco de dados.
- **Banco de Dados**: MySQL será utilizado para armazenar informações sobre usuários, barbeiros, serviços e agendamentos.

---

## Requisitos Funcionais

| ID   | Descrição                                            | Prioridade | Responsável  |
|------|----------------------------------------------------|------------|--------------|
| RF01 | O sistema deve permitir que os usuários se cadastrem e façam login. | Alta       | Gabriel O.   |
| RF02 | O sistema deve permitir que os usuários agendem serviços.          | Alta       | Gabriel O.   |
| RF03 | O sistema deve permitir que os usuários escolham um barbeiro.      | Alta       | Gabriel O.   |
| RF04 | O sistema deve mostrar os horários disponíveis para agendamento.  | Alta       | Gabriel O.   |
| RF05 | O sistema deve permitir o cancelamento de agendamentos.           | Média      | Gabriel O.   |

---

## Requisitos Não Funcionais

| ID    | Descrição                                                      | Prioridade | Responsável  |
|-------|----------------------------------------------------------------|------------|--------------|
| RNF01 | O sistema deve responder a 90% das requisições em até 3 segundos. | Alta       | Gabriel O.   |
| RNF02 | O sistema deve ser simples de usar, com uma interface de API RESTful. | Alta       | Gabriel O.   |
| RNF03 | O sistema deve ser fácil de manter e entender, com código bem documentado. | Alta       | Gabriel O.   |

---

## Casos de Uso

### Caso de Uso 1: Cadastro de Usuário
**Descrição**: Permitir que novos usuários se cadastrem no sistema.
**Ator Principal**: Cliente

**Fluxo Principal**:
1. O usuário acessa a rota de cadastro.
2. O usuário fornece nome, e-mail e senha.
3. O sistema salva os dados no banco de dados.
4. O sistema confirma o cadastro ao usuário.

### Caso de Uso 2: Agendar Serviço
**Descrição**: O usuário agenda um serviço de barbearia escolhendo um barbeiro e um horário.
**Ator Principal**: Cliente

**Fluxo Principal**:
1. O usuário faz login no sistema.
2. O usuário seleciona um serviço e um barbeiro.
3. O sistema mostra os horários disponíveis.
4. O usuário seleciona um horário e confirma o agendamento.
5. O sistema salva o agendamento no banco de dados.

### Caso de Uso 3: Cancelar Agendamento
**Descrição**: O usuário cancela um agendamento previamente marcado.
**Ator Principal**: Cliente

**Fluxo Principal**:
1. O usuário faz login no sistema.
2. O usuário acessa seus agendamentos.
3. O usuário escolhe o agendamento que deseja cancelar.
4. O sistema remove o agendamento do banco de dados.

---

## Ambiente de Desenvolvimento

### Tecnologias Utilizadas
- **Linguagem de Programação**: TypeScript para o backend.
- **Banco de Dados**: MySQL para armazenamento de dados.

---

## Plano de Testes
O objetivo deste plano de testes é garantir que as funcionalidades principais do sistema BarberSHOP estejam funcionando corretamente, com foco nas operações de cadastro de usuários, agendamento de serviços e integração com o banco de dados.

### Tipos de Testes
- **Teste Unitário**: Testar funções individuais no backend, como o cadastro de usuários e o agendamento de serviços.
- **Teste de Integração**: Verificar se as rotas e o banco de dados estão se comunicando corretamente.

---

## Cronograma

| Fase            | Data de Início | Data de Término | Responsável  |
|------------------|---------------|-----------------|--------------|
| Planejamento     | 28/08/2024    | 28/08/2024      | Gabriel O.   |
| Desenvolvimento  | 01/09/2024    | ??/11/2024      | Gabriel O.   |
| Testes           | 01/12/2024    | ??/12/2024      | Gabriel O.   |

---

## Referências
- GPT
- Documentação do Node.js
- Documentação do MySQL

---

## Configuração e Uso

### Pré-requisitos
- Node.js instalado
- Banco de dados MySQL configurado

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Umbraeon/gabrieloliveira4nb.git
   ```
2. Navegue para o diretório do projeto:
   ```bash
   cd gabrieloliveira4nb
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   DB_CONNECTION_STRING=postgres://postgres:senha@localhost:5432/barbershop
   JWT_SECRET=gegflad7k3nLD-JSSpUX9BbublIXNZt0SYUEhmA3sIU
   ```

### Testes

1. Sincronizar o banco de dados:
   ```bash
   node src/test_sync.js
   ```
2. Validar funcionalidades:
   - Inicie o servidor:
     ```bash
     node src/server.js
     ```
   - Em outro terminal, execute o script de teste:
     ```bash
     node src/test_script.js
     ```

---

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
