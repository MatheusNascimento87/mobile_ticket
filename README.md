# Sistema de Gestão de Tickets - Laboratório Médico

Sistema móvel para gestão de senhas e atendimento em filas de laboratórios médicos, desenvolvido com Ionic, Angular, Capacitor e SQLite.

---

**Integrantes do grupo:**

* Clailson dos santos silva      |       **Matrícula**:  01689159 
* Gabriel Antônio de Araújo e Sá    |    **Matrícula**: 01672540
* Luiz Eduardo de França Rodrigues   |   **Matrícula**: 01680699
* Matheus Pereira do Nascimento      |   **Matrícula**: 01693563

---

## 📋 Descrição

Sistema de controle de atendimento que gerencia três tipos de senhas com diferentes prioridades:
- *SP* - Senha Prioritária (idosos, gestantes, deficientes)
- *SG* - Senha Geral (atendimento comum)
- *SE* - Senha para Retirada de Exames

## 🚀 Tecnologias

- *Ionic Framework* 7+
- *Angular* 16+
- *Capacitor* 5+
- *SQLite* (via @capacitor-community/sqlite)
- *TypeScript*
- *NgModules*

## 📱 Funcionalidades

### 1. Totem (Emissão de Senhas)
- Emissão de senhas SP, SG e SE
- Numeração automática no formato YYMMDD-PPSQ
- Interface intuitiva para o cliente

### 2. Atendente
- Chamada automática de senhas seguindo ordem de prioridade
- Sistema de alternância: SP → (SE|SG) → SP → (SE|SG)
- Timer de atendimento
- Controle por guichê
- Estatísticas em tempo real da fila

### 3. Painel de Chamadas
- Exibição da senha atual sendo chamada
- Histórico das últimas 5 chamadas
- Atualização automática a cada 3 segundos
- Interface otimizada para TV/monitor

### 4. Relatórios
- Relatórios diários e mensais
- Estatísticas por tipo de senha
- Tempo médio de atendimento
- Exportação em JSON e CSV

## ⚙️ Instalação

### Pré-requisitos
bash
node >= 16.x
npm >= 8.x
ionic cli


### Passos

1. *Clone o repositório*
bash
git clone https://github.com/seu-usuario/mobile_ticket.git
cd mobile_ticket


2. *Instale as dependências*
bash
npm install


3. *Instale plugins do Capacitor*
bash
npm install @capacitor-community/sqlite
npm install @capacitor/core @capacitor/cli
npx cap init


4. *Execute no navegador*
bash
ionic serve


5. *Execute em dispositivo móvel*
bash
# Android
ionic cap add android
ionic cap sync
ionic cap open android

# iOS
ionic cap add ios
ionic cap sync
ionic cap open ios


## 🗂️ Estrutura do Projeto


mobile_ticket/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── ticket.model.ts
│   │   ├── services/
│   │   │   ├── database.service.ts
│   │   │   ├── ticket.service.ts
│   │   │   ├── queue.service.ts
│   │   │   └── report.service.ts
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── totem/
│   │   │   ├── atendente/
│   │   │   ├── painel/
│   │   │   └── relatorios/
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   └── assets/
├── README.md
├── TODO.md
└── LICENSE


## 📊 Regras de Negócio

### Priorização de Senhas
1. *SP (Prioritária)*: Maior prioridade, TM = 15min (±5min)
2. *SE (Exames)*: Atendimento rápido, TM = 1min (95%) ou 5min (5%)
3. *SG (Geral)*: Menor prioridade, TM = 5min (±3min)

### Sequência de Atendimento
- Padrão: *[SP] → [SE|SG] → [SP] → [SE|SG]*
- SE tem prioridade sobre SG no turno SE|SG
- Sempre alternar entre tipos de senha

### Horário de Funcionamento
- *Início*: 07:00
- *Fim*: 17:00
- Senhas não atendidas são descartadas ao fim do expediente

### Formato da Senha
*YYMMDD-PPSQ*
- YY: Ano (2 dígitos)
- MM: Mês (2 dígitos)
- DD: Dia (2 dígitos)
- PP: Tipo (SP, SG ou SE)
- SQ: Sequência diária por tipo (2 dígitos)

Exemplo: 251129-SP01

## 🎯 Características Especiais

- ✅ 5% das senhas emitidas não comparecem (simulação)
- ✅ Qualquer guichê pode atender qualquer tipo de senha
- ✅ Painel mostra apenas últimas 5 senhas chamadas
- ✅ Não exibe próxima senha antes de ser chamada
- ✅ Banco de dados local com SQLite
- ✅ Interface responsiva

## 🔒 Banco de Dados

### Tabelas
- *tickets*: Armazena todas as senhas emitidas
- *configuracoes*: Configurações do sistema
- *historico_chamadas*: Histórico de chamadas
- *sequencia_diaria*: Controle de sequência por dia e tipo

## 📈 Relatórios

### Diário
- Total de senhas emitidas e atendidas
- Breakdown por tipo de senha
- Tempo médio real de atendimento
- Detalhamento completo de cada senha

### Mensal
- Consolidado do mês
- Comparativo diário
- Estatísticas agregadas

## 🛠️ Desenvolvimento

### Comandos úteis
bash
# Desenvolvimento
ionic serve

# Build
ionic build

# Testes
npm test

# Lint
npm run lint


## 📄 Licença

Creative Commons

## 👥 Agentes do Sistema

- *AS (Agente Sistema)*: Emite senhas e responde aos comandos
- *AA (Agente Atendente)*: Chama próximo na fila e realiza atendimento
- *AC (Agente Cliente)*: Emite senha e aguarda chamada

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
3. Commit suas mudanças (git commit -m 'Add some AmazingFeature')
4. Push para a branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request

## 📞 Suporte

Para suporte, abra uma issue no GitHub ou entre em contato através do email do projeto.

---

Desenvolvido como projeto acadêmico para disciplina de desenvolvimento mobile.
