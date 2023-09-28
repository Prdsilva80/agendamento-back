<h1>Aplicação de Agendamento de Consultas</h1>
Esta é uma aplicação simples de agendamento de consultas desenvolvida em Node.js e TypeScript. Permite que os usuários criem, atualizem, excluam e visualizem consultas médicas.<br><br>

<h2>Funcionalidades</h2><br>

- Listagem de consultas agendadas.
- Criação de novas consultas.
- Atualização de informações de consultas.
- Exclusão de consultas existentes.
<h2>Pré-requisitos</h2>

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js
- npm (gerenciador de pacotes do Node.js)
- TypeScript
  
<h2>Como Usar</h2>

Siga estas etapas para copiar e executar a aplicação em sua máquina:

1. Clone este repositório para o seu sistema local:

```
git clone https://github.com/seu-usuario/agendamento-consulta-api.git

```
2. Navegue até o diretório do projeto:

````
cd agendamento-consulta-api

````
3. Instale as dependências do projeto:

````
npm install

````
4. Inicie o servidor:

````
npm start

````
5. O servidor estará em execução em http://localhost:3000.

<h2>Uso da API</h2>

Acesse as rotas da API usando uma ferramenta de teste de API como Postman ou Insomnia.<br> 
Aqui estão algumas rotas de exemplo:

- **Listar Consultas** (GET): http://localhost:3000/api/consultations
- **Criar Consulta** (POST): http://localhost:3000/api/consultations
- Corpo da solicitação (JSON):
  
````
{
  "patientName": "Nome do Paciente",
  "date": "Data da Consulta",
  "doctor": "Nome do Médico",
  "diagnosis": "Diagnóstico",
  "prescription": "Prescrição Médica"
}
````
- **Atualizar Consulta** (PUT): http://localhost:3000/api/consultations/{id}
- Corpo da solicitação (JSON):
````
{
  "patientName": "Novo Nome do Paciente",
  "date": "Nova Data da Consulta",
  "doctor": "Novo Nome do Médico",
  "diagnosis": "Novo Diagnóstico",
  "prescription": "Nova Prescrição Médica"
}
````
- **Excluir Consulta** (DELETE): http://localhost:3000/api/consultations/{id}
  
<h2>Contribuições</h2>

Contribuições são bem-vindas! Se você quiser melhorar esta aplicação ou adicionar novos recursos, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie um branch para suas alterações: git checkout -b minha-feature.
3. Faça as alterações e adicione commits descritivos.
4. Envie suas alterações: git push origin minha-feature.
5. Abra um pull request descrevendo suas alterações.
   
<h2>Licença</h2>

Este projeto está licenciado sob a Licença **MIT**. Consulte o arquivo **LICENSE** para obter mais detalhes.
