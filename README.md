# GuiaCar

Guia interativo passo a passo sobre o Cadastro Ambiental Rural (CAR). Aplicação web mobile-first, zero dependências, feita para produtores rurais, técnicos e qualquer pessoa que precise entender o CAR.

## Funcionalidades

- Roteiro interativo com árvore de decisão
- Texto narrado por tela (TTS) com explicações contextuais
- Seletor de estado (UF) com informações específicas por região
- Checklist personalizável por etapa
- FAQ e Glossário embutidos
- Compartilhamento por WhatsApp com preview
- Suporte offline (Service Worker)
- Interface responsiva e acessível

## Tecnologias

- HTML5 + CSS3 puro
- JavaScript vanilla
- Service Worker para cache offline
- Ícones SVG inline

## Estrutura

```
GuiaCar/
├── index.html          # Shell da aplicação
├── sw.js               # Service Worker
├── manifest.json       # PWA manifest
├── js/
│   ├── app.js          # Lógica completa
│   └── config.js       # Configurações (copie de config.example.js)
├── css/
│   └── style.css       # Design system e componentes
├── data/
│   └── ARVORES_DECISAO.json
├── images/
│   ├── capa.png
│   └── icons/
├── .env.example
├── LICENSE
└── README.md
```

## Como usar

1. Copie `js/config.example.js` para `js/config.js` e edite as URLs
2. Sirva a pasta com qualquer servidor HTTP estático:
   ```
   python -m http.server 8080
   ```
3. Abra `http://localhost:8080` no navegador

## Como contribuir

1. Faça um fork do projeto
2. Crie uma branch a partir da `develop`:
   ```
   git checkout -b feat/minha-feature
   ```
3. Faça commits atômicos e descritivos
4. Abra um Pull Request para a branch `develop`
5. Após revisão, o PR será mergeado e publicado na `main`

### Diretrizes

- Mantenha o código em JS vanilla, sem dependências externas
- Siga o design system existente (variáveis CSS em `css/style.css`)
- Não adicione comentários ao código
- Teste manualmente navegação e TTS antes de abrir o PR

## Licença

MIT — veja o arquivo [LICENSE](LICENSE).
