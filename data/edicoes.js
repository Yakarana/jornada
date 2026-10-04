/* ══════════════════════════════════════════════════════════════════
   EDIÇÕES DA JORNADA — fonte única de verdade
   ══════════════════════════════════════════════════════════════════

   Este é o ÚNICO arquivo que você precisa editar para mudar as
   jornadas que aparecem no site. O contador do topo, a janela de
   escolha e a seção "Próximas Jornadas" leem tudo daqui.

   ── COMO EDITAR ───────────────────────────────────────────────────

   Para ADICIONAR uma jornada: copie um bloco inteiro { ... },
   cole depois do último, e troque os valores. Não esqueça a
   vírgula entre um bloco e outro.

   Para TIRAR uma jornada do site: não precisa fazer nada.
   Jornada com data passada some sozinha.

   ── O QUE CADA CAMPO FAZ ──────────────────────────────────────────

   id ............ apelido curto, sem espaço e sem acento.
                   Vai no link para o Analytics saber qual jornada
                   a pessoa escolheu. Precisa ser diferente em cada.

   nome .......... o que aparece no card. Ex: "Jornada 03"

   data_inicio ... primeiro dia, no formato ANO-MES-DIA
   data_fim ...... último dia, mesmo formato
                   O site escreve a data por extenso sozinho.

   hora_inicio ... hora que começa, formato 24h. Usada pelo contador.
   horario ....... o texto do horário que aparece no card.

   local ......... o texto do local que aparece no card.

   status ........ UM dos quatro abaixo, escrito igualzinho:
                   "aberta"         → botão normal de compra
                   "ultimas-vagas"  → botão de compra + selo de aviso
                   "esgotada"       → botão desligado
                   "em-breve"       → botão de WhatsApp no lugar da compra

   link_checkout . o link do evento no Wix.
                   DEIXAR VAZIO ("") se o evento ainda não existe.
                   Vazio = o site mostra WhatsApp automaticamente,
                   mesmo que o status esteja como "aberta".
                   Assim nenhum cliente clica e cai em página quebrada.

   preco ......... opcional. Vazio = não aparece no card.
   lote_atual .... opcional. Vazio = não aparece.
   prazo_lote .... opcional. Vazio = não aparece.

   imagem ........ a foto do card.
   imagem_posicao  opcional. Qual pedaço da foto aparece no card,
                   já que o card é mais largo do que alto.
                   Ex: "center", "center 88%", "center top".
   especialistas_confirmados ... opcional, lista de nomes.

   ────────────────────────────────────────────────────────────────── */

window.EDICOES = [

  {
    id:            "jornada-03",
    nome:          "Jornada 03",
    data_inicio:   "2026-10-26",
    data_fim:      "2026-10-27",
    hora_inicio:   "08:00",
    horario:       "Das 8h às 20h, nos dois dias",
    local:         "São Paulo, no nosso auditório na Avenida Paulista",
    status:        "aberta",

    // TODO Guilherme: criar o evento da Jornada 03 no Wix e colar o link aqui.
    link_checkout: "",

    preco:         "",
    lote_atual:    "",
    prazo_lote:    "",
    imagem:        "assets/image-bank/2.png",
    imagem_posicao: "center 88%",
    especialistas_confirmados: []
  },

  {
    id:            "jornada-04",
    nome:          "Jornada 04",
    data_inicio:   "2026-11-30",
    data_fim:      "2026-12-01",
    hora_inicio:   "08:00",
    horario:       "Das 8h às 20h, nos dois dias",
    local:         "São Paulo, no nosso auditório na Avenida Paulista",
    status:        "aberta",

    // TODO Guilherme: criar o evento da Jornada 04 no Wix e colar o link aqui.
    link_checkout: "",

    preco:         "",
    lote_atual:    "",
    prazo_lote:    "",
    imagem:        "assets/PNG/hero-background.png",
    imagem_posicao: "center 45%",
    especialistas_confirmados: []
  }

];

/* WhatsApp usado quando uma jornada ainda não tem link de compra. */
window.WHATSAPP_URL = "https://wa.me/5511945704257";
