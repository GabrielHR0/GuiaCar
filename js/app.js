(function(){
'use strict';

/* ========== SVG ICONS ========== */
function ic(name) {
  var icons = {
    menu: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:28px;height:28px;stroke:#1B4332;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    back: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><polyline points="15 18 9 12 15 6"/></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    pin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><polyline points="20 6 9 17 4 12"/></svg>',
    alert: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    tip: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
    book: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    print: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    play: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;fill:currentColor;stroke:none"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
    stop: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;fill:currentColor;stroke:none"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
    share: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    copy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:20px;height:20px;fill:currentColor;stroke:none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
    house: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:22px;height:22px;stroke:#1B4332;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    minus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    external: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon" style="width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'
  };
  return icons[name] || '';
}

var EMOJI_MAP = {
  '📋': 'check',
  '🔍': 'search',
  '🏠': 'house',
  'ℹ️': 'info',
  '📗': 'book',
  '📙': 'book',
  '📕': 'book',
  '⬛': 'check'
};

function svgIcon(emoji) {
  var key = EMOJI_MAP[emoji];
  if (key) return ic(key);
  return emoji;
}

/* ========== FAQ DATA ========== */
const FAQ = [
  { cat: "Cadastro", q: "O que é o CAR?", r: "CAR é a sigla de Cadastro Ambiental Rural, um registro eletrônico obrigatório para todo imóvel rural. Ele funciona como uma 'identidade ambiental' da sua propriedade. É gratuito e foi criado pelo Código Florestal (Lei 12.651/2012)." },
  { cat: "Cadastro", q: "Quem precisa fazer o CAR?", r: "Todo proprietário ou possuidor de imóvel rural, independentemente do tamanho da área. Pode ser pessoa física (CPF) ou jurídica (CNPJ). Não existe área mínima para ser obrigado a cadastrar." },
  { cat: "Cadastro", q: "Tem prazo para fazer o CAR?", r: "Não. Desde 2019 o sistema está permanentemente aberto. Mas é melhor não adiar: sem CAR você não consegue crédito rural, não pode regularizar a situação ambiental e fica vulnerável a sanções." },
  { cat: "Cadastro", q: "É gratuito mesmo?", r: "Sim, o CAR é totalmente gratuito. Cuidado com pessoas ou sites que cobram para fazer o cadastro — o site oficial é car.gov.br." },
  { cat: "Cadastro", q: "Preciso de um profissional técnico para fazer o CAR?", r: "Para a maioria das propriedades, sim — é recomendável contar com um engenheiro florestal ou agrônomo. Mas para pequenas propriedades (até 4 módulos fiscais), você pode fazer com um croqui simples (desenho à mão)." },
  { cat: "Consulta", q: "Como consultar meu CAR?", r: "Acesse car.gov.br, clique em 'Consultar' e digite o número do Recibo de Inscrição (CAR) ou seu CPF/CNPJ. A consulta pública mostra a situação do cadastro. Para informações completas, use a Central do Proprietário." },
  { cat: "Consulta", q: "O que significa cada status do CAR?", r: "ATIVO: cadastro ok, pode estar em análise ou já analisado. PENDENTE: faltam informações ou documentos. SUSPENSO: foi identificada irregularidade. CANCELADO: cadastro cancelado, pode precisar fazer novo." },
  { cat: "Regularização", q: "O que é Reserva Legal?", r: "É a área dentro do imóvel que deve manter vegetação nativa. O percentual mínimo varia por região: Amazônia Legal 80%, Cerrado na Amazônia Legal 35%, demais regiões 20%." },
  { cat: "Regularização", q: "O que é APP?", r: "APP significa Área de Preservação Permanente. São áreas protegidas por lei como margens de rios, nascentes (raio de 50m), topos de morro e encostas com declividade acima de 45 graus." },
  { cat: "Regularização", q: "O que é PRA?", r: "PRA é o Programa de Regularização Ambiental de cada estado. Ao aderir ao PRA, você assina um Termo de Compromisso com cronograma de recuperação e as multas por infrações até 2008 ficam suspensas." },
  { cat: "Regularização", q: "Sou pequeno produtor, tenho benefícios?", r: "Sim! A lei trata de forma especial propriedades de até 4 módulos fiscais: Reserva Legal 'congelada' em 2008, regras mais leves para APP, croqui simples (sem planta profissional), e procedimentos simplificados." }
];

const GLOSSARIO = [
  { termo: "APP", def: "Área de Preservação Permanente — áreas protegidas por lei como margens de rios, nascentes e topos de morro, que devem ser preservadas ou recuperadas." },
  { termo: "CAR", def: "Cadastro Ambiental Rural — registro eletrônico obrigatório de todo imóvel rural, uma 'identidade ambiental' da propriedade." },
  { termo: "Central do Proprietário", def: "Área restrita do site car.gov.br onde o proprietário pode acompanhar o andamento do cadastro, retificar informações e enviar documentos." },
  { termo: "Código Florestal", def: "Lei 12.651/2012 que define as regras de proteção da vegetação nativa em imóveis rurais, incluindo APP, Reserva Legal e CAR." },
  { termo: "Módulo Fiscal", def: "Unidade de medida agrária que varia de 5 a 110 hectares por município. Usada para classificar o tamanho da propriedade em pequena (até 4), média (4 a 15) ou grande (acima de 15)." },
  { termo: "PRA", def: "Programa de Regularização Ambiental — programa de cada estado que permite ao produtor regularizar seu imóvel com benefícios como suspensão de multas." },
  { termo: "PRAD", def: "Projeto de Recuperação de Área Degradada — plano técnico para recuperar áreas que precisam ser reflorestadas ou restauradas." },
  { termo: "Recibo de Inscrição", def: "Número gerado ao final do cadastro no CAR. É o 'CPF ambiental' da propriedade — guarde com cuidado!" },
  { termo: "Reserva Legal (RL)", def: "Percentual mínimo do imóvel que deve manter vegetação nativa. Varia de 20% a 80% dependendo da região." },
  { termo: "SICAR", def: "Sistema Nacional de Cadastro Ambiental Rural — o sistema onde o CAR é gerenciado. CAR é o registro, SICAR é o sistema." }
];

const CHECKLIST_ITENS = {
  "1.3": [
    "CPF ou CNPJ do proprietário",
    "Documento de identidade (RG)",
    "Comprovante de propriedade ou posse (escritura, matrícula, contrato)",
    "Área total do imóvel em hectares",
    "Informações das áreas de APP, Reserva Legal e uso do solo",
    "Se for pequeno (≤4 módulos fiscais): croqui simples do imóvel"
  ],
  "1.4": [
    "Acessar car.gov.br",
    "Criar conta GOV.BR (CPF + senha) se ainda não tiver"
  ],
  "3.2": [
    "Ter o CAR em dia",
    "Identificar passivo ambiental (APP degradada? RL abaixo do mínimo?)",
    "Aderir ao PRA do seu estado",
    "Assinar o Termo de Compromisso com o órgão ambiental",
    "Executar o PRAD (Projeto de Recuperação)"
  ]
};

const UF_DATA = {
  preenchido: ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SE','SP','TO'],
  modulo: ['AL','AP','AM','CE','GO','MA','MG','PB','PR','PE','PI','RJ','RN','RR','SC','SE','DF'],
  site: ['AC','BA','ES','MT','MS','PA','RS','RO','SP','TO']
};

function ufTemPreenchido(uf) { return UF_DATA.preenchido.includes(uf) }
function ufUsaModulo(uf) { return UF_DATA.modulo.includes(uf) }
function ufUsaSite(uf) { return UF_DATA.site.includes(uf) }

function ufInfoTexto(uf) {
  if (!uf) return '';
  const partes = [];
  if (ufTemPreenchido(uf)) partes.push('CAR Pré-Preenchido disponível no seu estado!');
  else partes.push('CAR Pré-Preenchido ainda não disponível no seu estado.');
  if (ufUsaModulo(uf)) partes.push('Use o Módulo de Cadastro (baixar programa).');
  else if (ufUsaSite(uf)) partes.push('Use o site do órgão ambiental estadual.');
  return partes.join(' ');
}

/* ========== NARRACAO TTS ========== */
var NARRACAO = {
  root: 'Bem-vindo ao GuiaCar. Escolha uma das opções para começar: se você ainda não se cadastrou no CAR, escolha a primeira opção. Se já é cadastrado e quer entender sua situação, escolha a segunda. Se quer regularizar seu imóvel, escolha a terceira. E se quer saber o que é o CAR, escolha a quarta.',
  fluxo1: 'Você escolheu fazer o CAR. Vamos te guiar passo a passo. Nesta seção, você vai entender quem precisa cadastrar, quais documentos são necessários, como fazer o cadastro, e o que fazer depois de cadastrado.',
  fluxo2: 'Você escolheu entender a situação do seu CAR. Vamos explicar os possíveis status: ativo, pendente, suspenso ou cancelado, e o que fazer em cada caso.',
  fluxo3: 'Você escolheu regularizar seu imóvel rural. Vamos falar sobre reserva legal, área de preservação permanente, o programa de regularização ambiental, e os benefícios para pequenos produtores.',
  fluxo4: 'Você quer saber o que é o CAR. Vamos explicar o Cadastro Ambiental Rural, para que serve, quem é obrigado a fazer, e a diferença entre CAR e SICAR.',
  '1.1': 'O CAR é obrigatório para todo imóvel rural. Não importa o tamanho da propriedade. Pode ser feito por pessoa física ou jurídica. E é gratuito.',
  '1.2': 'Para fazer o CAR, você vai precisar de alguns documentos. Vou listar os principais itens que você deve separar antes de começar.',
  '1.3': 'Você precisa dos seguintes documentos: CPF ou CNPJ, identidade, comprovante de propriedade, área total do imóvel, e informações sobre as áreas de preservação. Se for pequeno produtor, pode usar um croqui simples.',
  '1.4': 'Para acessar o SICAR, vá até o site car.gov.br. Você vai precisar criar uma conta GOV.BR se ainda não tiver uma.',
  '1.5': 'Dependendo do seu estado, o CAR pode ser pré-preenchido, o que facilita o processo. Vou verificar a disponibilidade para seu estado.',
  '1.6': 'Com o cadastro feito, você recebe um recibo de inscrição. Guarde esse número com cuidado. Se precisar retificar alguma informação, é possível pela Central do Proprietário.',
  '1.7': 'Agora você já sabe tudo sobre como fazer o CAR. Na próxima tela, você pode conferir sua checklist completa e compartilhar as informações por WhatsApp.',
  '2.1': 'Seu CAR pode aparecer com status ativo, pendente, suspenso ou cancelado. Vou explicar cada um deles.',
  '2.2': 'Status ativo: seu cadastro está registrado no sistema. Pode estar em análise ou já foi analisado pelo órgão ambiental.',
  '2.3': 'Status pendente: faltam informações ou documentos. Você precisa acessar a Central do Proprietário para complementar o cadastro.',
  '2.4': 'Status suspenso: foi identificada alguma irregularidade. Você deve acessar o sistema, verificar o motivo e fazer as correções necessárias.',
  '2.5': 'Status cancelado: o cadastro foi cancelado. Pode ser necessário fazer um novo cadastro. Consulte o órgão ambiental do seu estado.',
  '2.6': 'Se você já entendeu a situação do seu CAR, pode seguir para a próxima etapa. Qualquer dúvida, consulte a FAQ no menu.',
  '3.1': 'A regularização ambiental envolve reserva legal, área de preservação permanente, e o programa de regularização ambiental, o PRA.',
  '3.2': 'Para regularizar, você precisa aderir ao PRA do seu estado. O PRA permite suspender multas e definir um cronograma de recuperação.',
  '3.3': 'A reserva legal é a porcentagem mínima do imóvel que deve manter vegetação nativa. Varia de 20 a 80 porcento dependendo da região.',
  '3.4': 'APP significa Área de Preservação Permanente. São áreas protegidas como margens de rios, nascentes e topos de morro.',
  '3.5': 'Área consolidada é a área rural ocupada até 2008. A lei permite certas atividades nessas áreas, desde que respeitadas as regras.',
  '3.6': 'O PRA varia de estado para estado. Consulte o órgão ambiental do seu estado para saber os detalhes do programa local.',
  '3.7': 'Pequenos produtores têm benefícios especiais: reserva legal congelada em 2008, croqui simples, e procedimentos simplificados.',
  '3.8': 'Módulo fiscal é a unidade que mede o tamanho da propriedade. Varia de 5 a 110 hectares por município. Até 4 módulos é considerado pequena propriedade.',
  '4.1': 'O CAR é o Cadastro Ambiental Rural, um registro eletrônico obrigatório para todo imóvel rural. Funciona como uma identidade ambiental da propriedade.',
  '4.2': 'O CAR serve para regularizar a situação ambiental do imóvel, ter acesso a crédito rural, e evitar sanções ambientais.',
  '4.3': 'O CAR é obrigatório para todo proprietário ou possuidor de imóvel rural, independentemente do tamanho da área.',
  '4.4': 'CAR é o cadastro, SICAR é o sistema onde o cadastro é gerenciado. Um é o registro, o outro é a plataforma.'
};

/* ========== STATE ========== */
let tree = null;
let currentNode = null;
let currentChecklist = [];
let ttsUtterance = null;
let isTTSPlaying = false;
let ufSelecionada = null;

const STORAGE = window.sessionStorage;

function loadState() {
  const h = STORAGE.getItem('navHistory');
  if (h) App.history = JSON.parse(h);
  const c = STORAGE.getItem('checklist');
  if (c) currentChecklist = JSON.parse(c);
  const u = STORAGE.getItem('uf');
  if (u) ufSelecionada = u;
}

function saveHistory() {
  STORAGE.setItem('navHistory', JSON.stringify(App.history));
}

function saveChecklist() {
  STORAGE.setItem('checklist', JSON.stringify(currentChecklist));
}

function saveUF(u) {
  ufSelecionada = u;
  STORAGE.setItem('uf', u);
  var badge = document.getElementById('uf-badge');
  if (badge) badge.textContent = u;
}

/* ========== APP ========== */
const App = {
  history: [],

  async init() {
    loadState();
    await this.loadTree();
    this.setupUI();
    this.setupOfflineDetection();
    this.registerSW();
    this.checkGeolocation();

    /* Update UF badge on load */
    var badge = document.getElementById('uf-badge');
    if (badge && ufSelecionada) badge.textContent = ufSelecionada;

    if (this.history.length > 0) {
      const lastId = this.history[this.history.length - 1];
      this.renderNode(lastId);
    } else {
      this.renderHome();
    }
  },

  async loadTree() {
    try {
      const resp = await fetch('ARVORES_DECISAO.json');
      tree = await resp.json();
    } catch (e) {
      document.getElementById('app-content').innerHTML =
        '<div class="error-screen"><h2>Erro ao carregar os dados</h2><p>Não foi possível carregar as informações. Verifique sua conexão e tente novamente.</p></div>';
      throw e;
    }
  },

  setupUI() {
    document.addEventListener('click', e => {
      var ufTarget = e.target.closest('#uf-badge');
      if (ufTarget) { this.showUFSelector(); return; }
      const action = e.target.closest('[data-action]');
      if (action) {
        const a = action.dataset.action;
        if (a === 'back') this.goBack();
        else if (a === 'home') this.goHome();
        else if (a === 'menu') this.toggleMenu();
      }
    });
  },

  setupOfflineDetection() {
    const bar = document.getElementById('offline-bar');
    function update() {
      bar.style.display = navigator.onLine ? 'none' : 'block';
    }
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    update();
  },

  registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  },

  /* ========== GEOLOCATION ========== */
  checkGeolocation() {
    if (ufSelecionada) return;
    if (!navigator.geolocation) { this.showUFSelector(); return; }

    navigator.geolocation.getCurrentPosition(
      async pos => {
        try {
          const { latitude, longitude } = pos.coords;
          STORAGE.setItem('lat', latitude);
          STORAGE.setItem('lon', longitude);
          const uf = await this.reverseGeocode(latitude, longitude);
          if (uf) saveUF(uf);
          else this.showUFSelector();
        } catch (_) { this.showUFSelector(); }
      },
      () => { this.showUFSelector(); },
      { timeout: 8000, enableHighAccuracy: false }
    );
  },

  async reverseGeocode(lat, lon) {
    try {
      const resp = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=5&accept-language=pt`,
        { headers: { 'User-Agent': APP_CONFIG.USER_AGENT } }
      );
      if (!resp.ok) return null;
      const data = await resp.json();
      if (data && data.address && data.address['ISO3166-2-lvl4']) {
        return data.address['ISO3166-2-lvl4'].replace('BR-', '');
      }
      if (data && data.address && data.address.state) {
        return this.stateToUF(data.address.state);
      }
      return null;
    } catch (_) { return null; }
  },

  stateToUF(state) {
    const map = {
      'Acre':'AC','Alagoas':'AL','Amapá':'AP','Amazonas':'AM','Bahia':'BA','Ceará':'CE',
      'Distrito Federal':'DF','Espírito Santo':'ES','Goiás':'GO','Maranhão':'MA',
      'Mato Grosso':'MT','Mato Grosso do Sul':'MS','Minas Gerais':'MG','Pará':'PA',
      'Paraíba':'PB','Paraná':'PR','Pernambuco':'PE','Piauí':'PI','Rio de Janeiro':'RJ',
      'Rio Grande do Norte':'RN','Rio Grande do Sul':'RS','Rondônia':'RO','Roraima':'RR',
      'Santa Catarina':'SC','São Paulo':'SP','Sergipe':'SE','Tocantins':'TO'
    };
    return map[state] || null;
  },

  showUFSelector() {
    const ufs = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG',
                 'PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
    var overlay = document.createElement('div');
    overlay.className = 'uf-modal-overlay';
    overlay.innerHTML =
      '<div class="uf-modal">' +
        '<div class="uf-modal-header">' +
          '<h3>Selecione seu estado</h3>' +
          '<button class="uf-modal-close" aria-label="Fechar">' + ic('close') + '</button>' +
        '</div>' +
        '<div class="uf-grid">' +
          ufs.map(function(u) {
            var cls = ufSelecionada === u ? 'selecionado' : '';
            return '<button data-uf="' + u + '" class="' + cls + '">' + u + '</button>';
          }).join('') +
        '</div>' +
      '</div>';
    overlay.querySelector('.uf-modal-close').addEventListener('click', function() { overlay.remove(); });
    overlay.querySelectorAll('[data-uf]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        saveUF(btn.dataset.uf);
        overlay.remove();
        if (currentNode) {
          if (currentNode.id === 'root') {
            App.renderHome();
          } else {
            App.renderNode(currentNode.id);
          }
        } else {
          App.renderHome();
        }
      });
    });
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) overlay.remove();
    });
    document.body.appendChild(overlay);
  },

  /* ========== RENDER ========== */
  renderHome() {
    this.history = [];
    saveHistory();
    currentNode = tree ? tree.tela_inicial : null;
    if (!currentNode) return;
    this.render(currentNode, true);
  },

  render(node, isRoot) {
    currentNode = node;
    const container = document.getElementById('app-content');
    const isTerminal = this.isTerminalNode(node);
    let html = '';

    /* Progress bar */
    const progress = this.getProgress(node.id);
    if (progress) {
      html += '<div class="progress-bar">' +
        '<div class="progress-track"><div class="progress-fill" style="width:' + progress.pct + '%"></div></div>' +
        '<span class="progress-label">' + progress.atual + '/' + progress.total + '</span>' +
      '</div>';
    }

    html += '<div class="card">';

    /* Title */
    if (isRoot) {
      html += '<h2 class="home-title">' + node.titulo + '</h2>' +
        '<p class="home-subtitle">Toque em uma opção para começar</p>';
    } else {
      html += '<h2>' + node.titulo + '</h2>';
    }

    /* Content */
    html += this.renderContent(node.conteudo, node.id);

    /* Checklist */
    if (CHECKLIST_ITENS[node.id]) {
      const newItems = CHECKLIST_ITENS[node.id].filter(
        function(i) { return !currentChecklist.includes(i); }
      );
      if (newItems.length > 0) {
        currentChecklist = currentChecklist.concat(newItems);
        saveChecklist();
      }
      html += '<h3>' + ic('check') + ' Itens para sua lista</h3><div class="checklist">';
      CHECKLIST_ITENS[node.id].forEach(function(item) {
        const done = currentChecklist.includes(item);
        html += '<div class="checklist-item"><span class="ck">' + (done ? ic('check') : ic('check')) + '</span> ' + item + '</div>';
      });
      html += '</div>';
    }

    /* Options */
    if (node.opcoes && node.opcoes.length > 0) {
      html += '<div class="opcoes">';
      node.opcoes.forEach(function(opt) {
        const isVoltar = opt.tipo === 'voltar' || opt.id === 'root';
        const cls = isVoltar ? 'voltar' : '';
        var icone = opt.icone || '';
        if (icone) icone = svgIcon(icone) || icone;
        if (!icone) icone = isVoltar ? ic('back') : '';
        if (isTerminal && !isVoltar) {
          html += '<button class="terminal" data-nav="' + opt.id + '">' +
            '<span class="icone">' + icone + '</span>' +
            '<span class="rotulo">' + opt.rotulo + '</span>' +
          '</button>';
        } else {
          html += '<button data-nav="' + opt.id + '" class="' + cls + '">' +
            '<span class="icone">' + icone + '</span>' +
            '<span class="rotulo">' + opt.rotulo + '</span>' +
          '</button>';
        }
      });
      html += '</div>';
    }

    /* Rota alternativa */
    if (node.rota_alternativa) {
      const alt = node.rota_alternativa;
      html += '<div class="opcoes" style="margin-top:8px">' +
        '<button data-nav="' + alt.destino + '" class="terminal">' +
          '<span class="icone">' + ic('share') + '</span>' +
          '<span class="rotulo">' + alt.rotulo + '</span>' +
        '</button>' +
      '</div>';
    }

    /* Actions */
    html += '<div class="acoes">';
    html += '<button class="btn-tts" id="btn-tts" aria-label="Ouvir">' + ic('play') + ' Ouvir</button>';
    if (isTerminal || this.history.length > 3) {
      html += '<button class="btn-whatsapp" id="btn-share" aria-label="Compartilhar">' + ic('share') + ' Compartilhar</button>';
    }
    html += '</div>';

    /* Checklist acumulada no final */
    if (isTerminal && currentChecklist.length > 0) {
      html += '<h3>' + ic('check') + ' Checklist completa</h3><div class="checklist">';
      currentChecklist.forEach(function(item) {
        html += '<div class="checklist-item"><span class="ck">' + ic('check') + '</span> ' + item + '</div>';
      });
      html += '</div>';
      html += '<button class="btn-print" id="btn-print">' + ic('print') + ' Imprimir</button>';
    }

    html += '</div>';
    container.innerHTML = html;

    /* Bind navigation */
    container.querySelectorAll('[data-nav]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        App.stopTTS();
        const targetId = btn.dataset.nav;
        if (!isRoot) {
          if (targetId === 'root') {
            App.goHome();
            return;
          }
          App.history.push(node.id);
          saveHistory();
        } else {
          App.history = [node.id];
          saveHistory();
        }
        App.renderNode(targetId);
      });
    });

    /* TTS */
    const ttsBtn = document.getElementById('btn-tts');
    if (ttsBtn) {
      ttsBtn.addEventListener('click', function() {
        if (isTTSPlaying) App.stopTTS();
        else App.speak(App.getTextContent(node));
      });
    }

    /* Share */
    const shareBtn = document.getElementById('btn-share');
    if (shareBtn) {
      shareBtn.addEventListener('click', function() { App.shareWhatsApp(); });
    }

    /* Print */
    const printBtn = document.getElementById('btn-print');
    if (printBtn) {
      printBtn.addEventListener('click', function() { window.print(); });
    }

    /* Update footer buttons */
    this.updateFooter(isRoot);
  },

  renderNode(id) {
    if (!tree) return;
    if (id === 'root') { this.renderHome(); return; }

    if (tree.fluxos && tree.fluxos[id]) {
      const fluxo = tree.fluxos[id];
      var firstId = (fluxo.rota_padrao && fluxo.rota_padrao[0]) || null;
      if (firstId) {
        const found = this.findNode(firstId);
        if (found) { this.render(found, false); return; }
      }
      this.renderHome();
      return;
    }

    const found = this.findNode(id);
    if (found) {
      this.render(found, false);
    } else {
      this.renderHome();
    }
  },

  findNode(id) {
    for (const key in tree.fluxos) {
      const fluxo = tree.fluxos[key];
      if (fluxo.nos && fluxo.nos[id]) return fluxo.nos[id];
    }
    return null;
  },

  renderContent(c, nodeId) {
    if (!c) return '';
    let html = '';

    if (c.descricao) html += '<p class="descricao">' + c.descricao + '</p>';
    if (c.definicao) html += '<div class="definicao">' + ic('book') + ' ' + c.definicao + '</div>';
    if (c.destaque) html += '<div class="info-text">' + ic('star') + ' ' + c.destaque + '</div>';
    if (c.alerta) html += '<div class="info-text">' + ic('alert') + ' ' + c.alerta + '</div>';

    if (c.topicos && c.topicos.length > 0) {
      html += '<ul>' + c.topicos.map(function(t) { return '<li>' + t + '</li>'; }).join('') + '</ul>';
    }

    if (c.passos && c.passos.length > 0) {
      html += '<ol>' + c.passos.map(function(p) { return '<li>' + p + '</li>'; }).join('') + '</ol>';
    }

    if (c.erros && c.erros.length > 0) {
      html += '<h3>Erros comuns</h3>';
      c.erros.forEach(function(e) {
        html += '<div class="erro-item">' +
          '<div class="erro">' + ic('alert') + ' ' + e.erro + '</div>' +
          '<div class="solucao">' + ic('check') + ' ' + e.solucao + '</div>' +
        '</div>';
      });
    }

    if (c.status && c.status.length > 0) {
      c.status.forEach(function(s) {
        html += '<div class="status-item">' +
          '<span class="status-icon">' + ic('info') + '</span>' +
          '<div>' +
            '<div class="status-nome">' + s.nome + '</div>' +
            '<div class="status-desc">' + s.descricao + '</div>' +
          '</div>' +
        '</div>';
      });
    }

    if (c.exemplos && c.exemplos.length > 0) {
      html += '<div class="exemplos"><strong>Exemplos:</strong><ul>' + c.exemplos.map(function(e) { return '<li>' + e + '</li>'; }).join('') + '</ul></div>';
    }

    if (c.opcoes_regularizacao && c.opcoes_regularizacao.length > 0) {
      html += '<ol>' + c.opcoes_regularizacao.map(function(o) { return '<li>' + o + '</li>'; }).join('') + '</ol>';
    }

    if (c.observacao) html += '<div class="info-text">' + ic('tip') + ' ' + c.observacao + '</div>';

    if (c.link) {
      var isSicar = c.link.indexOf('car.gov.br') !== -1;
      var cls = isSicar ? 'link-card sicar-card' : 'link-card';
      var label = c.link_label || (isSicar ? 'Acessar SICAR' : 'Acessar');
      html += '<a href="' + c.link + '" target="_blank" rel="noopener noreferrer" class="' + cls + '">' + ic('external') + ' ' + label + '</a>';
    }

    /* UF-aware content */
    if (nodeId && ufSelecionada) {
      if (nodeId === '1.4') {
        html += '<div class="info-text">' + ic('pin') + ' Seu estado: ' + ufSelecionada + ' — ' + ufInfoTexto(ufSelecionada) + '</div>';
      }
      if (nodeId === '1.5') {
        if (ufTemPreenchido(ufSelecionada)) {
          html += '<div class="info-text green">' + ic('check') + ' CAR Pré-Preenchido disponível em ' + ufSelecionada + '!</div>';
        } else {
          html += '<div class="info-text">' + ic('info') + ' CAR Pré-Preenchido ainda não está disponível em ' + ufSelecionada + '.</div>';
        }
      }
      if (nodeId === '1.2') {
        html += '<div class="info-text">' + ic('pin') + ' Regras para o estado de ' + ufSelecionada + ': consulte o órgão ambiental estadual para verificar exigências específicas.</div>';
      }
      if (nodeId === '3.6' || nodeId === '3.2') {
        html += '<div class="info-text">' + ic('pin') + ' O PRA (Programa de Regularização Ambiental) varia por estado. Consulte o órgão ambiental do ' + ufSelecionada + ' para detalhes.</div>';
      }
    }

    return html;
  },

  /* ========== NAVIGATION ========== */
  goBack() {
    this.stopTTS();
    if (this.history.length > 0) {
      const prev = this.history.pop();
      saveHistory();
      this.renderNode(prev);
    }
  },

  goHome() {
    this.stopTTS();
    this.history = [];
    saveHistory();
    this.renderHome();
  },

  updateFooter(isRoot) {
    const backBtn = document.getElementById('btn-back');
    const homeBtn = document.getElementById('btn-home');
    if (backBtn) backBtn.style.display = isRoot ? 'none' : 'flex';
    if (homeBtn) homeBtn.style.display = isRoot ? 'none' : 'flex';
  },

  /* ========== PROGRESS ========== */
  getProgress(nodeId) {
    if (!tree) return null;
    for (const key in tree.fluxos) {
      const fluxo = tree.fluxos[key];
      if (fluxo.rota_padrao) {
        const idx = fluxo.rota_padrao.indexOf(nodeId);
        if (idx !== -1) {
          return {
            atual: idx + 1,
            total: fluxo.rota_padrao.length,
            pct: ((idx + 1) / fluxo.rota_padrao.length) * 100
          };
        }
      }
    }
    return null;
  },

  isTerminalNode(node) {
    if (!node || !node.opcoes) return true;
    const hasAdvance = node.opcoes.some(function(o) { return o.id !== 'root' && o.tipo !== 'voltar'; });
    return !hasAdvance;
  },

  /* ========== TTS ========== */
  getTextContent(node) {
    if (!node) return '';
    var nodeId = node.id;
    if (nodeId && NARRACAO[nodeId]) return NARRACAO[nodeId];
    return node.titulo || '';
  },

  speak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'pt-BR';
    u.rate = 0.9;
    u.onstart = function() {
      isTTSPlaying = true;
      const btn = document.getElementById('btn-tts');
      if (btn) { btn.innerHTML = ic('stop') + ' Parar'; btn.classList.add('playing'); }
    };
    u.onend = function() { App.stopTTS(); };
    u.onerror = function() { App.stopTTS(); };
    ttsUtterance = u;
    window.speechSynthesis.speak(u);
  },

  stopTTS() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    isTTSPlaying = false;
    const btn = document.getElementById('btn-tts');
    if (btn) { btn.innerHTML = ic('play') + ' Ouvir'; btn.classList.remove('playing'); }
  },

  /* ========== SHARE ========== */
  shareWhatsApp() {
    if (!currentNode) return;
    var text = '*GuiaCar*';
    text += '\n_Guia do Cadastro Ambiental Rural_\n\n';
    text += '*' + currentNode.titulo + '*\n';

    const c = currentNode.conteudo;
    if (c && c.descricao) {
      text += '\n' + c.descricao + '\n';
    }
    if (c && c.topicos) {
      text += '\n';
      c.topicos.forEach(function(t) { text += '• ' + t + '\n'; });
    }
    if (c && c.passos) {
      text += '\n';
      c.passos.forEach(function(p, i) { text += (i+1) + '. ' + p + '\n'; });
    }
    if (c && c.definicao) {
      text += '\n' + c.definicao + '\n';
    }
    if (currentChecklist.length > 0) {
      text += '\n*Checklist:*\n';
      currentChecklist.forEach(function(item) { text += '✅ ' + item + '\n'; });
    }
    text += '\nFonte: car.gov.br';
    text += '\n' + APP_CONFIG.SITE_URL;

    var overlay = document.createElement('div');
    overlay.className = 'share-overlay';
    overlay.innerHTML =
      '<div class="share-modal">' +
        '<h3 style="margin:0;font-size:1.1rem;color:#1B4332">Compartilhar</h3>' +
        '<div class="share-preview">' + text.replace(/\n/g, '<br>').replace(/\*([^*]+)\*/g, '<strong>$1</strong>').replace(/_([^_]+)_/g, '<em>$1</em>') + '</div>' +
        '<button class="share-btn share-btn-whatsapp" id="share-whatsapp-btn">' + ic('whatsapp') + ' WhatsApp</button>' +
        '<button class="share-btn share-btn-copy" id="share-copy-btn">' + ic('copy') + ' Copiar texto</button>' +
        '<button class="share-close-btn">Cancelar</button>' +
      '</div>';
    overlay.querySelector('#share-whatsapp-btn').addEventListener('click', function() {
      var btn = overlay.querySelector('#share-whatsapp-btn');
      if (navigator.share && /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        navigator.share({
          title: 'GuiaCar',
          text: text,
          url: APP_CONFIG.SITE_URL
        }).catch(function(){}).finally(function(){ overlay.remove(); });
      } else {
        window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
        overlay.remove();
      }
    });
    overlay.querySelector('#share-copy-btn').addEventListener('click', function() {
      navigator.clipboard.writeText(text).then(function() {
        overlay.querySelector('#share-copy-btn').innerHTML = ic('check') + ' Copiado!';
        setTimeout(function() { overlay.remove(); }, 800);
      }).catch(function() { overlay.remove(); });
    });
    overlay.querySelector('.share-close-btn').addEventListener('click', function() { overlay.remove(); });
    overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
  },

  /* ========== MENU ========== */
  toggleMenu() {
    let overlay = document.querySelector('.menu-overlay');
    if (overlay) {
      overlay.classList.toggle('aberto');
      return;
    }

    overlay = document.createElement('div');
    overlay.className = 'menu-overlay aberto';
    overlay.innerHTML =
      '<div class="menu-panel">' +
        '<h3>Menu</h3>' +
        '<button class="menu-item" data-menu="faq">' + ic('tip') + ' Perguntas Frequentes</button>' +
        '<button class="menu-item" data-menu="glossario">' + ic('book') + ' Glossário</button>' +
        '<button class="menu-item" data-menu="uf">' + ic('pin') + ' Mudar estado</button>' +
        '<hr style="border:none;border-top:1px solid #e0e0e0;margin:8px 0">' +
        '<button class="menu-item" data-menu="checklist">' + ic('check') + ' Minha checklist</button>' +
        '<button class="menu-item" data-menu="impressao">' + ic('print') + ' Imprimir checklist</button>' +
      '</div>';

    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) overlay.classList.remove('aberto');
    });

    overlay.querySelectorAll('[data-menu]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        overlay.classList.remove('aberto');
        const m = btn.dataset.menu;
        if (m === 'faq') App.renderFAQ();
        else if (m === 'glossario') App.renderGlossario();
        else if (m === 'uf') App.showUFSelector();
        else if (m === 'checklist') App.renderChecklist();
        else if (m === 'impressao') window.print();
      });
    });

    document.body.appendChild(overlay);
  },

  /* ========== FAQ ========== */
  renderFAQ() {
    this.history = [];
    saveHistory();
    const cats = [...new Set(FAQ.map(function(f) { return f.cat; }))];
    let html = '<div class="card"><h2>' + ic('tip') + ' Perguntas Frequentes</h2>';
    cats.forEach(function(cat) {
      html += '<h3>' + cat + '</h3>';
      FAQ.filter(function(f) { return f.cat === cat; }).forEach(function(f, i) {
        var idx = FAQ.indexOf(f);
        html += '<div class="faq-item">' +
          '<button class="faq-pergunta" data-faq="' + idx + '">' + f.q + ' <span class="seta">' + ic('plus') + '</span></button>' +
          '<div class="faq-resposta">' + f.r + '</div>' +
        '</div>';
      });
    });
    html += '<div class="opcoes" style="margin-top:16px">' +
      '<button data-nav="root"><span class="icone">' + ic('home') + '</span><span class="rotulo">Voltar ao início</span></button>' +
    '</div></div>';

    const container = document.getElementById('app-content');
    container.innerHTML = html;
    var bb = document.getElementById('btn-back'); if (bb) bb.style.display = 'none';
    var bh = document.getElementById('btn-home'); if (bh) bh.style.display = 'flex';

    container.querySelectorAll('.faq-pergunta').forEach(function(btn) {
      btn.addEventListener('click', function() {
        btn.parentElement.classList.toggle('aberto');
        var seta = btn.querySelector('.seta');
        if (seta) {
          seta.innerHTML = btn.parentElement.classList.contains('aberto') ? ic('minus') : ic('plus');
        }
      });
    });
    container.querySelector('[data-nav="root"]').addEventListener('click', function() { App.goHome(); });
  },

  /* ========== GLOSSARIO ========== */
  renderGlossario() {
    this.history = [];
    saveHistory();
    let html = '<div class="card"><h2>' + ic('book') + ' Glossário</h2>';
    GLOSSARIO.forEach(function(g, i) {
      html += '<div class="glossario-item">' +
        '<button class="glossario-termo" data-glossario="' + i + '">' + g.termo + ' <span class="seta">' + ic('plus') + '</span></button>' +
        '<div class="glossario-definicao">' + g.def + '</div>' +
      '</div>';
    });
    html += '<div class="opcoes" style="margin-top:16px">' +
      '<button data-nav="root"><span class="icone">' + ic('home') + '</span><span class="rotulo">Voltar ao início</span></button>' +
    '</div></div>';

    const container = document.getElementById('app-content');
    container.innerHTML = html;
    var bb = document.getElementById('btn-back'); if (bb) bb.style.display = 'none';
    var bh = document.getElementById('btn-home'); if (bh) bh.style.display = 'flex';

    container.querySelectorAll('.glossario-termo').forEach(function(btn) {
      btn.addEventListener('click', function() {
        btn.parentElement.classList.toggle('aberto');
        var seta = btn.querySelector('.seta');
        if (seta) {
          seta.innerHTML = btn.parentElement.classList.contains('aberto') ? ic('minus') : ic('plus');
        }
      });
    });
    container.querySelector('[data-nav="root"]').addEventListener('click', function() { App.goHome(); });
  },

  /* ========== CHECKLIST ========== */
  renderChecklist() {
    this.history = [];
    saveHistory();
    let html = '<div class="card"><h2>' + ic('check') + ' Minha Checklist</h2>';
    if (currentChecklist.length === 0) {
      html += '<p>Nenhum item adicionado ainda. Navegue pelos fluxos para acumular itens.</p>';
    } else {
      html += '<div class="checklist">';
      currentChecklist.forEach(function(item) {
        html += '<div class="checklist-item"><span class="ck">' + ic('check') + '</span> ' + item + '</div>';
      });
      html += '</div>';
      html += '<button class="btn-print" id="btn-print-cl">' + ic('print') + ' Imprimir</button>';
    }
    html += '<div class="opcoes" style="margin-top:16px">' +
      '<button data-nav="root"><span class="icone">' + ic('home') + '</span><span class="rotulo">Voltar ao início</span></button>' +
    '</div></div>';

    const container = document.getElementById('app-content');
    container.innerHTML = html;
    var bb = document.getElementById('btn-back'); if (bb) bb.style.display = 'none';
    var bh = document.getElementById('btn-home'); if (bh) bh.style.display = 'flex';

    const printBtn = document.getElementById('btn-print-cl');
    if (printBtn) printBtn.addEventListener('click', function() { window.print(); });
    container.querySelector('[data-nav="root"]').addEventListener('click', function() { App.goHome(); });
  }
};

/* ========== BOOT ========== */
document.addEventListener('DOMContentLoaded', function() { App.init(); });

})();
