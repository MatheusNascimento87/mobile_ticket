# ⚡ Quick Start - Mobile Ticket

Guia rápido para começar a usar o projeto em *5 minutos*.

## 🎯 Pré-requisitos Mínimos

- Node.js 16+ instalado
- npm 8+ instalado

## 🚀 Instalação Rápida

bash
# 1. Clonar repositório
git clone https://github.com/seu-usuario/mobile_ticket.git
cd mobile_ticket

# 2. Instalar dependências
npm install

# 3. Executar no navegador
ionic serve


Pronto! O app estará rodando em http://localhost:8100 🎉

## 📱 Páginas Disponíveis

Após executar, acesse:

- *Home*: / ou /home - Menu principal
- *Totem*: /totem - Emitir senhas
- *Atendente*: /atendente - Interface de atendimento
- *Painel*: /painel - Painel de chamadas
- *Relatórios*: /relatorios - Visualizar relatórios

## 🎮 Como Usar

### 1. Emitir Senhas (Totem)

1. Vá para /totem
2. Clique em um dos botões:
   - *Prioritária* (SP)
   - *Atendimento Geral* (SG)
   - *Retirada de Exames* (SE)
3. Senha será gerada e exibida

### 2. Chamar Senhas (Atendente)

1. Vá para /atendente
2. Selecione seu guichê (botão de configuração)
3. Clique em "Chamar Próxima Senha"
4. Atenda o cliente
5. Clique em "Finalizar Atendimento"

### 3. Ver Painel (Monitor/TV)

1. Vá para /painel
2. Deixe aberto em tela cheia
3. Painel atualiza automaticamente a cada 3 segundos

### 4. Ver Relatórios

1. Vá para /relatorios
2. Selecione tipo: Diário ou Mensal
3. Selecione data/mês
4. Clique em "Gerar Relatório"
5. Opcionalmente, exporte em JSON ou CSV

## 📊 Fluxo Completo de Teste

bash
# Terminal 1: Servidor
ionic serve

# Navegador 1: Totem (http://localhost:8100/totem)
# - Emitir 3 senhas SP
# - Emitir 3 senhas SG
# - Emitir 3 senhas SE

# Navegador 2: Atendente (http://localhost:8100/atendente)
# - Chamar e atender as senhas

# Navegador 3: Painel (http://localhost:8100/painel)
# - Observar chamadas em tempo real

# Navegador 4: Relatórios (http://localhost:8100/relatorios)
# - Gerar relatório do dia


## 🔧 Comandos Úteis

bash
# Executar em modo desenvolvimento
ionic serve

# Build para produção
ionic build --prod

# Executar testes
npm test

# Verificar código
npm run lint

# Limpar e reinstalar
rm -rf node_modules
npm install


## 📱 Testar em Dispositivo Android

bash
# 1. Build
ionic build

# 2. Adicionar plataforma (primeira vez)
ionic cap add android

# 3. Sincronizar
ionic cap sync android

# 4. Abrir no Android Studio
ionic cap open android

# 5. Executar no dispositivo conectado


## 🎨 Personalização Rápida

### Mudar Cores

Edite src/theme/variables.scss:

scss
:root {
  --ion-color-primary: #3880ff;  // Sua cor aqui
}


### Mudar Nome do App

Edite capacitor.config.ts:

typescript
appName: 'Seu Nome Aqui'


### Ajustar Horário de Expediente

Edite src/app/services/queue.service.ts:

typescript
const horaInicio = 7;  // Seu horário
const horaFim = 17;    // Seu horário


## 🐛 Problemas Comuns

### Erro: "ionic: command not found"

bash
npm install -g @ionic/cli


### Erro: SQLite não funciona

bash
npm install @capacitor-community/sqlite


### Porta 8100 em uso

bash
ionic serve --port=8200


### Build falha

bash
rm -rf node_modules package-lock.json
npm install
ionic build


## 📚 Próximos Passos

1. ✅ Teste todas as funcionalidades
2. ✅ Leia o [README.md](README.md) completo
3. ✅ Consulte [INSTALLATION.md](INSTALLATION.md) para detalhes
4. ✅ Veja [TODO.md](TODO.md) para melhorias futuras
5. ✅ Configure para seu caso de uso

## 💡 Dicas

- Use Chrome DevTools para debug
- Pressione F12 no navegador para ver console
- Banco de dados fica em IndexedDB (navegador)
- Use ionic serve -l para testar diferentes dispositivos
- Live reload funciona automaticamente

## 🎯 Objetivos do Sistema

O Mobile Ticket gerencia:

- ✅ Emissão de 3 tipos de senhas (SP, SG, SE)
- ✅ Priorização inteligente de atendimento
- ✅ Alternância automática de tipos
- ✅ Painel de chamadas em tempo real
- ✅ Relatórios detalhados diários e mensais
- ✅ Banco de dados local (offline-first)

## 📞 Ajuda

- Documentação: Veja README.md
- Problemas: Abra uma issue no GitHub
- Dúvidas: Consulte a documentação do Ionic

---

*Divirta-se usando o Mobile Ticket!* 🎉

Para documentação completa, veja [README.md](README.md)
