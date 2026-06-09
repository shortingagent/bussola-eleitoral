# Bússola Eleitoral Brasil 2026

Descubra qual partido político mais se alinha com suas opiniões para as eleições presidenciais de outubro de 2026.

## Como rodar localmente

1. Clone o repositório
   ```
   git clone https://github.com/shortingagent/bussola-eleitoral.git
   cd bussola-eleitoral
   ```

2. Crie um arquivo `.env` com sua chave da API Anthropic (obtenha em console.anthropic.com):
   ```
   ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
   ```

3. Inicie o servidor
   ```
   node server.js
   ```

4. Abra http://localhost:8080 no navegador

## Deploy (Render / Railway)

1. Faça fork deste repositório
2. Conecte ao Render.com ou Railway.app via GitHub
3. Adicione a variável de ambiente `ANTHROPIC_API_KEY` no dashboard
4. Deploy automático — sem configuração adicional

## Tecnologia

- Frontend: HTML/CSS/JS puro (sem frameworks)
- Backend: Node.js (sem dependências externas)
- IA: Claude claude-sonnet-4-6 via API Anthropic (para análise aprofundada)
