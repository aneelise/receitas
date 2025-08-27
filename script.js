// Criamos uma estrutura de dados com array, com categorias e subtopicos em lanche salgado e doce para separar as receitas
const categorias = {
  "Lanches Salgados": [
    {
      nome: "Toast Pãozinho",
      capa: "imagens/toastqueijo.jpeg",
      calorias: 250,
      etapas: [
        {
          titulo: "Toast Pãozinho",
          ingredientes: [ "2 Pães", "20g mussarela", "30g creme de ricota light (ou requeijão).", "Opcional: tomate cereja, orégano"],
          imagem: "imagens/pao2.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Passe o creme de ricota no pão, coloque a mussarela e leve para a airfryer por 10min. a 200 graus.",
          imagem: "imagens/pao1.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "Coma com alguma proteina e frutinhas. Se gosta de agridoce adicione mel no pão que tem apenas queijo, com mel a receita fica em torno de 265kcal.",
          imagem: "imagens/pao3.jpeg"
        }
      ]
    },
    {
      nome: "Pizza diet",
      capa: "imagens/pizzafake.webp",
      calorias: 360,
      etapas: [
        {
          titulo: "Pizza diet",
          ingredientes:[ "1 Pão Sírio", "100g Frango desfiado", "Extrato de tomate/passata", "Oregáno", "10g Mussarela", "Brócolis", "Tomate" ],
          imagem: "imagens/pizza1.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pizza2.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pizza3.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pizza4.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pizza5.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pizza6.webp"
        },
         {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pizza7.webp"
        },
           {
          titulo: "Finalização",
          texto: "Finalize como preferir de acordo com as quantidades da sua dieta",
          imagem: "imagens/pizza8.webp"
        }
      ]
    },
    {
      nome: "Tapioca Invertida",
      capa: "imagens/tapiocainvertida.webp",
      calorias: 270,
      etapas: [
        {
          titulo: "Tapioca Invertida",
          ingredientes: ["20g tapioca", "2 ovos","20g mussarela"],
          imagem: "imagens/tapiocainvertida.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida1.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida2.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida3.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida4.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida5.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida6.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida7.webp"
        },
        {
          titulo: "Finalização",
          texto: "Finalize como preferir. Sugestão: rechear com requeijão light. Com isso, a receita ficará em torno de 315 kcal",
          imagem: "imagens/tapiocainvertida8.webp"
        }
      ]
    },
    {
      nome: "Hambúrguer",
      capa: "imagens/lanche.jpeg",
      calorias: 300,
      etapas: [
        {
          titulo: "Hambúrguer",
          ingredientes: [ "50g Pão de hambúrguer", "120g de patinho moído cru", "20g Mussarela ou Queijo Cheddar (Opcional)", "Cebola, alface, tomate, picles", ],
          imagem: "imagens/lanche.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/lanche1.png"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/lanche2.png"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/lanche3.png"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/lanche4.png"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/lanche5.png"
        },
        {
          titulo: "Finalização",
          texto: "",
          imagem: "imagens/lanche6.png"
        }
      ]
    },
    {
      nome: "Pastel",
      capa: "imagens/pastelcapa.webp",
      calorias: 250,
      etapas: [
        {
          titulo: "Pastel de rap10",
          ingredientes: ["1 Rap10", "80g Frango ou Carne", "Requeijāo Light",],
          imagem: "imagens/pastel1.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pastel2.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pastel3.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pastel4.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pastel5.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pastel6.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pastel7.webp"
        },
        {
          titulo: "Finalização",
          texto: "",
          imagem: "imagens/pastel8.webp"
        }
      ]
      },
      {
        nome: "Patê de ovos",
        capa: "imagens/pateovos.jpeg",
        calorias: 275,
        etapas: [
          {
            titulo: "Patê de ovos",
            ingredientes: ["2 Ovos Cozidos","30g Requeijão light", "Sal e temperos de sua preferência", "25g de pāo integral (opcional)"],
            imagem: "imagens/pate1.jpg"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/pate2.jpg"
          },
             {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/pate3.jpg"
          },
             {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/pate4.jpg"
          },
             {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/pate5.jpg"
          },
             {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/pate6.jpg"
          },
          {
            titulo: "Finalização",
            texto: "",
            imagem: "imagens/pate7.jpg"
          }
        ]
      },
      {
        nome: "Rap10 Cheddar",
        capa: "imagens/rapcapa.webp",
        calorias: 395,
        etapas: [
          {
            titulo: "Rap10 Cheddar",
            ingredientes: ["1 Rap 10", "120g patinho moído cru", "20g cheddar", "Opcionais: cebola, alface, tomate", ],
            imagem: "imagens/rapcapa2.webp"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/rap1.webp"
          },
            {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/rap2.webp"
          },
            {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/rap3.webp"
          },
            {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/rap4.webp"
          },
                {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/rap5.webp"
          },
          {
            titulo: "Finalização",
            texto: "Finalize como preferir.",
            imagem: "imagens/rap6.webp"
          }
        ]
      },
      {
        nome: "Bowl de Salada",
        capa: "imagens/saladona.jpeg",
        etapas: [
          {
            titulo: "Bowl de Salada",
            ingredientes: ["Acrescente os legumes e vegetais", "Opções:", "Alface", "Tomate", "Brócolis", "Pepino", "Manga", "Carne/Frango", "Batata inglesa ou Macarrão cozido", "Molho: De sua preferência"],
            imagem: "imagens/saladona.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/salada2.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/salada2.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/salada2.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/salada2.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/salada2.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/salada2.jpeg"
          },
        ]
      },
      {
        nome: "Molhos para salada/lanches",
        capa: "imagens/molhosalada.jpg",
        calorias: 70,
        etapas: [
          {
            titulo: "Molho Rosê:",
            ingredientes: ["Molho 1:", "30g de Creme de ricota light ou Requeijão light", "1 colher de Ketchup", "1 colher de Mostarda", "Temperos a gosto",],
            texto: "Observação: todos esses molhos são versáteis e podem ser usados de várias formas — como em bowls de salada, lanches caseiros ou wraps. São saborosos e fazem toda a diferença na refeição! Sinta-se à vontade para adaptar os ingredientes conforme seu gosto.",
            imagem: "imagens/molhorose.webp"
          },
          {
            titulo: "Preparo",
            texto: "Para o molho, misture em um recipiente 30g de creme de ricota light ou requeijão (da pra substituir com iogurte desnatado), um pouco de ketchup, mostarda, sal. Misture bem e sirva por cima da salada. Dica: se gostar de agridoce adicione 3 gotinhas de adoçante.",
            imagem: "imagens/molhorose.webp"
          },
          {
            titulo: "Molho de mel e limão",
            ingredientes: ["Molho 2:", "50g de iogurte desnatado ou 30g creme de ricota/requeijão", "1 colher de Mel (ou adoçante para diminuir as kcal)", "1/2 colher de sumo de limão", "Sal, oregáno e temperos a gosto",],
            imagem: "imagens/molholimao.webp"
          },
          {
            titulo: "Preparo",
            texto: "Para o molho, misture em um recipiente todos os ingredientes e sirva por cima da salada.",
            imagem: "imagens/molholimao.webp"
          },
          {
            titulo: "Molho de Alho",
            ingredientes: ["Molho 3:", "1 colher de alho picado e refogado", "30g Creme de ricota light ou Requeijão light", "Sal, pimenta do reino, páprica defumada, temperos a gosto",],
            imagem: "imagens/molhoalho.jpg"
          },
          {
            titulo: "Preparo",
            texto: "Para o molho, misture em um recipiente todos os ingredientes e sirva por cima da salada.",
            imagem: "imagens/molhoalho2.png"
          },
        ]
      },
      {
        nome: "Toast de frango",
        capa: "imagens/toastfrango.jpeg",
        calorias: 430,
        etapas: [
          {
            titulo: "Toast de frango",
            ingredientes: ["2 Pães", "100g Frango desfiado", "30g Creme de ricota light (ou requeijão)", "1 fatia de mussarela",],
            imagem: "imagens/toastfrango.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "Em um recipiente, misture o frango desfiado com o requeijão. Espalhe essa mistura sobre o pão, adicione a mussarela por cima, finalize com orégano e leve à airfryer por 10 minutos ou até o queijo dourar.",
            imagem: "imagens/toastfrango.jpeg"
          },
          {
            titulo: "Finalização",
            texto: "Finalize como preferir.",
            imagem: "imagens/toastfrango.jpeg"
          }
        ]
      },
      {
        nome: "Caldo de legumes",
        capa: "imagens/caldocapa.jpg",
        calorias: 340,
        etapas: [
          {
            titulo: "Caldo de abóbora",
            ingredientes: ["150g de abóbora cabotia cozida", "100g Frango desfiado", "100g macarrão cozido",],
            imagem: "imagens/caldo1.jpg"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/caldo2.jpg"
          },
               {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/caldo3.jpg"
          },
               {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/caldo4.jpg"
          },
               {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/caldo5.jpg"
          },
          {
            titulo: "Finalização",
            texto: "",
            imagem: "imagens/caldo6.jpg"
          }
        ]
      },
      {
        nome: "Torta de frigideira",
        capa: "imagens/torta.png",
        calorias: 305,
        etapas: [
          {
            titulo: "Torta de frigideira",
            ingredientes: [ "1 Ovo", "10g tapioca", "10g farinha de aveia", "20g requeijāo light", "80g de frango desfiado", "Fermento", "Sal e temperos a gosto", "Opcional: Queijo mussarela",],
            imagem: "imagens/torta.png"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/torta.png"
          },
          {
            titulo: "Finalização",
            texto: "Se quiser adicionar queijo mussarela, uma fatia tem em torno de 20g, o que adiciona cerca de 70 kcal à receita. Assim, a receita totaliza aproximadamente 370 kcal.",
            imagem: "imagens/crepiocadoce.jpeg"
          }
        ]
      },
    ],
  

  "Lanches Doces": [

    {
      nome: "Muffin de paçoca",
      capa: "imagens/pacocacapa.jpeg",
      calorias: 380,
      etapas: [
        {
          titulo: "Muffin de paçoca",
          ingredientes: ["1 ovo", "20g farelo de aveia", "1 banana", "Fermento", "Adoçante", "20g whey", "1 paçoca rolha"],
          imagem: "imagens/pacocacapa.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/smoothie.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "",
          imagem: "imagens/smoothie.jpeg"
        }
      ]
    },
    {
      nome: "Mingau de aveia",
      capa: "imagens/mingau.jpeg",
      calorias: 460,
      etapas: [
        {
          titulo: "Mingau de aveia",
          ingredientes: [ "20g Farelo de aveia", "200ml de leite desnatado", "30g Whey", "5g Cacau 100%", "Porção de fruta (100g banana)","Adoçante", "Opcional: 20g de chocolate"],
          imagem: "imagens/mingau1.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/mingau1.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/mingau2.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/mingau3.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/mingau4.jpg"
        },
        {
          titulo: "Finalização",
          texto: "Calorias aprox; 460kcal com chocolate/porção de gordura. Sem 350kcal.",
          imagem: "imagens/mingau5.jpg"
        },
        {
          titulo: "Finalização",
          texto: "",
          imagem: "imagens/mingau6.jpg"
        },
      ]
    },
    {
      nome: "Bolo de Chocolate",
      capa: "imagens/bolocapa.webp",
      calorias: 330,
      etapas: [
        {
          titulo: "Bolo de chocolate",
          ingredientes: ["1 Ovo", "20g Farinha de aveia", "30g Whey", "Fermento","Adoçante", "10g Cacau em pó", "10g de Chocolate",],
          imagem: "imagens/bolo1.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bolo2.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bolo3.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bolo4.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bolo5.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bolo6.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bolo7.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bolo8.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bolo9.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bolo10.webp"
        },
          {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bolo11.webp"
        },
             {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bolo12.webp"
        },
        {
          titulo: "Finalização",
          texto: "Calorias aprox; com chocolate: 330kcal. Sem o chocolate 280kcal",
          imagem: "imagens/bolo13.webp"
        }
      ]
    },
    {
      nome: "Bombom de Whey",
      capa: "imagens/bombom.jpeg",
      calorias: 270,
      etapas: [
        {
          titulo: "Bombom de whey",
          ingredientes: ["20g de Chocolate", "30g de whey", "1/2 porção de fruta (50g uva)",],
          imagem: "imagens/bombom.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bombom.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bombom.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bombom.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bombom.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/bombom.jpeg"
        }
      ]
    },
    {
      nome: "Panqueca Americana",
      capa: "imagens/panqueca.webp",
      calorias: 350,
      etapas: [
        {
          titulo: "Panqueca Americana",
          ingredientes: ["20g Farelo de aveia", "1 Ovo", "30g Whey", "1 Banana", "Adoçante"],
          imagem: "imagens/panqueca1.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/panqueca2.webp"
        },
           {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/panqueca3.webp"
        },
           {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/panqueca4.webp"
        },
           {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/panqueca5.webp"
        },
           {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/panqueca6.webp"
        },
           {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/panqueca7.webp"
        },
           {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/panqueca8.webp"
        },
           {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/panqueca9.webp"
        },
           {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/panqueca10.webp"
        },
           {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/panqueca11.webp"
        },
        {
          titulo: "Finalização",
          texto: "",
          imagem: "imagens/panqueca12.webp"
        }
      ]
    },
    {
      nome: "Brownie",
      capa: "imagens/brownie.webp",
      calorias: 270,
      etapas: [
        {
          titulo: "Brownie",
          ingredientes: [ "30g de Whey", "70ml de leite desnatado", "10g Cacau 100%", "Fermento", "Adoçante", "20g de chocolate",],
          imagem: "imagens/brownie1.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/brownie2.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/brownie3.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/brownie4.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/brownie5.webp"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/brownie6.webp"
        },
        {
          titulo: "Finalização",
          texto: "Calorias aprox; com chocolate: 270 kcal. Sem o chocolate: 160kcal",
          imagem: "imagens/brownie7.webp"
        }
      ]
    },
    {
      nome: "Bowl de iogurte",
      capa: "imagens/bowliogurte.jpeg",
      calorias: 330,
      etapas: [
        {
          titulo: "Bowl de iogurte",
          ingredientes: [ "170ml Iogurte natural (desnatado)", "30g Whey", "Frutas (100g uva)", "20g de Granola",],
          imagem: "imagens/bowliogurte.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Em um recipiente, adicione o iogurte natural e o whey, misture bem até ficar homogêneo. Em seguida, acrescente a fruta picada de sua preferência.",
          imagem: "imagens/bowliogurte.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "Finalize com toppings de sua preferência. Sugestão: granola.",
          imagem: "imagens/bowliogurte.jpeg"
        }
      ]
    },
    {
      nome: "Picolé Proteico",
      capa: "imagens/picole.jpeg",
      calorias: 123,
      etapas: [
        {
          titulo: "Picolé Proteico",
          ingredientes: [ "170ml Iogurte natural (desnatado)", "30g Whey", "Doce de leite",],
          imagem: "imagens/picole1.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/picole2.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/picole3.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/picole4.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/picole5.jpg"
        },
        {
          titulo: "Preparo",
          texto: "A porção toda: aprox; 368kcal.",
          imagem: "imagens/picole6.jpg"
        },
        {
          titulo: "Finalização",
          texto: "Porção por picolé: 123kcal.",
          imagem: "imagens/picole7.jpg"
        }
      ]
    },
  ]
};

// IDs para pegar os valores das categorias dos containers no HTML
const categoriasIDs = {
  "Lanches Salgados": "lanches-salgados",
  "Lanches Doces": "lanches-doces"
};

// Referências para elementos HTML que serão usados para mostrar o modal da receita e suas etapas
const modal = document.getElementById("modal");
const imagemEtapa = document.getElementById("imagem-etapa");
const tituloEtapa = document.getElementById("titulo-etapa");
const textoEtapa = document.getElementById("texto-etapa");

// Variáveis para controlar a receita e etapa atualmente visualizadas
let receitaAtual = null;
let etapaAtual = 0;

// Initialize particles
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#2D5A27', '#8B4513', '#FF6B35']
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.3,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#2D5A27',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
}

// Navbar scroll effect
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // Close mobile menu if open
      navMenu.classList.remove('active');
    });
  });
}

// Intersection Observer for animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.cartao-receita, .feature, .link-card').forEach(el => {
    observer.observe(el);
  });
}

// Função chamada inicialmente para criar os cards das receitas na tela
function typeCards() {
  Object.entries(categorias).forEach(([categoria, receitas]) => {
    const container = document.getElementById(categoriasIDs[categoria]);
    if (!container) return;
    
    container.innerHTML = "";

    receitas.forEach((receita, index) => {
      const cartao = document.createElement("div");
      cartao.className = "cartao-receita";
      cartao.style.animationDelay = `${index * 0.1}s`;
      cartao.innerHTML = `
        <img src="${receita.capa}" alt="${receita.nome}" loading="lazy">
        <p>${receita.nome}</p>
          <div class="kcal-card">${receita.calorias ? `${receita.calorias} kcal` : ''}</div>
      `;
      cartao.onclick = () => abrirReceita(receita);
      container.appendChild(cartao);
    });
  });
}

// Função que abre o modal da receita, iniciando pela primeira etapa
function abrirReceita(receita) {
  receitaAtual = receita;
  etapaAtual = 0;
  exibirEtapa();
  modal.classList.add("ativo");
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

// Função que atualiza o modal com as informações da etapa atual da receita
function exibirEtapa() {
  const etapa = receitaAtual.etapas[etapaAtual];
  const infoCalorias = document.getElementById('info-calorias');
  
  imagemEtapa.src = etapa.imagem;
  imagemEtapa.alt = etapa.titulo;
  tituloEtapa.textContent = etapa.titulo;
  
  if (etapaAtual === 0 && receitaAtual.calorias) {
    infoCalorias.innerHTML = `<i class="fas fa-fire"></i> ${receitaAtual.calorias} kcal`;
    infoCalorias.style.display = 'inline-flex';
  } else {
    infoCalorias.style.display = 'none';
  }

  textoEtapa.textContent = etapa.texto || "";

  // Mostrar ingredientes somente se a etapa atual tiver ingredientes
  const ingredientesLista = document.getElementById("ingredientes-lista");
  if (etapa.ingredientes) {
    ingredientesLista.innerHTML = `
      <h3><i class="fas fa-list"></i> Ingredientes:</h3>
      <ul>
        ${etapa.ingredientes.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
  } else {
    ingredientesLista.innerHTML = "";
  }
}

// Função para avançar para a próxima etapa da receita
function proximaEtapa() {
  etapaAtual = (etapaAtual + 1) % receitaAtual.etapas.length;
  exibirEtapa();
}

// Função para voltar para a etapa anterior da receita
function etapaAnterior() {
  etapaAtual = (etapaAtual - 1 + receitaAtual.etapas.length) % receitaAtual.etapas.length;
  exibirEtapa();
}

// Função para fechar o modal, removendo a classe "ativo"
function fecharModal() {
  modal.classList.remove("ativo");
  document.body.style.overflow = ''; // Restore background scroll
}

// Lista de compras
const listaDeCompras = [
  "Pães (pão de forma, pão sírio, pão para hambúrguer)",
  "Rap10", 
  "Whey Protein", 
  "Mussarela", 
  "Creme de ricota light / requeijão light", 
  "Queijo cheddar", 
  "Iogurte natural desnatado", 
  "Leite desnatado", 
  "Frango desfiado", 
  "Carnes Magras", 
  "Ovos", 
  "Farelo de aveia", 
  "Granola", 
  "Doce de leite", 
  "Chocolate", 
  "Cacau 100%", 
  "Fermento", 
  "Adoçante", 
  "Extrato de tomate", 
  "Ketchup e mostarda", 
  "Temperos", 
  "Alface e tomate", 
  "Frutas variadas", 
  "Mel"
];

function mostrarLista() {
  const modal = document.getElementById("modal-compras");
  const lista = document.getElementById("lista-compras");

  lista.innerHTML = "";
  listaDeCompras.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.style.animationDelay = `${index * 0.05}s`;
    li.classList.add('fade-in-up');
    lista.appendChild(li);
  });

  modal.classList.add("ativo");
  document.body.style.overflow = 'hidden';
}

function fecharModalCompras() {
  document.getElementById("modal-compras").classList.remove("ativo");
  document.body.style.overflow = '';
}

// Keyboard navigation
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    const modalAtivo = document.querySelector(".modal.ativo");
    if (modalAtivo) {
      modalAtivo.classList.remove("ativo");
      document.body.style.overflow = '';
    }
  }
  
  // Arrow key navigation in recipe modal
  if (modal.classList.contains("ativo")) {
    if (event.key === "ArrowLeft") {
      etapaAnterior();
    } else if (event.key === "ArrowRight") {
      proximaEtapa();
    }
  }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initParticles();
  initNavbar();
  initAnimations();
  typeCards();

   // Pré-carrega todas as imagens de capa e etapas
  Object.values(categorias).flat().forEach(receita => {
    receita.etapas.forEach(etapa => {
      const img = new Image();
      img.src = etapa.imagem;
    });

    const capa = new Image();
    capa.src = receita.capa;
  });
  
  // Add loading animation to images
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
  });
});

// Smooth scroll for hero scroll indicator
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({
    behavior: 'smooth'
  });
});

  const toggleBtn = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('ativo');
  });