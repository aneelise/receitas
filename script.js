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
      capa: "imagens/pizzafake.jpeg",
      calorias: 360,
      etapas: [
        {
          titulo: "Pizza diet",
          ingredientes:[ "1 Pão Sírio", "100g Frango desfiado", "Extrato de tomate/passata", "Oregáno", "10g Mussarela", "Brócolis", "Tomate" ],
          imagem: "imagens/pizza1.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pizza2.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pizza3.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pizza4.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/pizza5.jpg"
        },
        {
          titulo: "Finalização",
          texto: "Finalize como preferir de acordo com as quantidades da sua dieta",
          imagem: "imagens/pizza7.jpg"
        },
           {
          titulo: "Finalização",
          texto: "Finalize como preferir de acordo com as quantidades da sua dieta",
          imagem: "imagens/pizza8.jpg"
        }
      ]
    },
    {
      nome: "Tapioca Invertida",
      capa: "imagens/tapiocainvertida.jpeg",
      calorias: 270,
      etapas: [
        {
          titulo: "Tapioca Invertida",
          ingredientes: ["20g tapioca", "2 ovos","20g mussarela"],
          imagem: "imagens/tapiocainvertida.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida1.png"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida2.png"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida3.png"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida4.png"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida5.png"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida6.png"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida7.png"
        },
        {
          titulo: "Finalização",
          texto: "Finalize como preferir. Sugestão: rechear com requeijão light. Com isso, a receita ficará em torno de 315 kcal",
          imagem: "imagens/tapiocainvertida.jpeg"
        }
      ]
    },
    {
      nome: "Hambúrguer",
      capa: "imagens/lanche.jpeg",
      calorias: 375,
      etapas: [
        {
          titulo: "Hambúrguer",
          ingredientes: [ "50g Pão de hambúrguer", "120g de patinho moído cru", "20g Mussarela", "Opcionais: cebola, alface, tomate, picles", ],
          imagem: "imagens/lanche.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/lanche.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/lanche.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/lanche.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/lanche.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "",
          imagem: "imagens/lanche.jpeg"
        }
      ]
    },
    {
      nome: "Pastel",
      capa: "imagens/pasteljpeg.jpeg",
      calorias: 355,
      etapas: [
        {
          titulo: "Pastel de rap10",
          ingredientes: ["1 Rap10", "100g Frango ou Carne", "30g Creme de ricota light ou requeijão light",],
          imagem: "imagens/pasteljpeg.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Umedeça o Rap10 com um pouco de água para deixá-lo mais maleável. Adicione a proteína de sua preferência no centro. Depois, passe creme de ricota apenas nas bordas para ajudar a fechar. Feche com um garfo para selar bem e, se quiser um toque dourado, pincele uma gema de ovo por cima antes de levar a airfryer.",
          imagem: "imagens/pasteljpeg.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "Servir com uma saladinha.",
          imagem: "imagens/pasteljpeg.jpeg"
        }
      ]
      },
      {
        nome: "Patê de ovos",
        capa: "imagens/pateovos.jpeg",
        calorias: 200,
        etapas: [
          {
            titulo: "Patê de ovos",
            ingredientes: ["2 Ovos Cozidos","30g Requeijão light (ou creme de ricota light)", "Sal e temperos de sua preferência",],
            imagem: "imagens/pateovos.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "Cozinhe o ovo, depois amasse com um garfo e misture com 30g de requeijão light. Adicione sal, oregáno e temperos a gosto.",
            imagem: "imagens/pateovos.jpeg"
          },
          {
            titulo: "Finalização",
            texto: "Adicione o patê onde preferir. Sugestão: Colocar no pão, tapioca...",
            imagem: "imagens/pateovos.jpeg"
          }
        ]
      },
      {
        nome: "Rap10 Cheddar",
        capa: "imagens/rapcapa.jpeg",
        calorias: 395,
        etapas: [
          {
            titulo: "Rap10 Cheddar",
            ingredientes: ["1 Rap 10", "120g patinho moído cru", "20g cheddar", "Opcionais: cebola, alface, tomate", ],
            imagem: "imagens/rap1.jpg"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/rap2.jpg"
          },
            {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/rap3.jpg"
          },
            {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/rap4.jpg"
          },
            {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/rap5.jpg"
          },
          {
            titulo: "Finalização",
            texto: "Finalize como preferir. Você pode usar picles, palmito, frango... ",
            imagem: "imagens/rap6.jpg"
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
        nome: "Caldo de abóbora",
        capa: "imagens/caldo.png",
        calorias: 340,
        etapas: [
          {
            titulo: "Caldo de abóbora",
            ingredientes: ["150g de abóbora cabotia cozida", "100g Frango desfiado", "Agua aos poucos", "100g macarrão cozido",],
            imagem: "imagens/toastfrango.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/toastfrango.jpeg"
          },
          {
            titulo: "Finalização",
            texto: "Essa receita também pode ser consumida sem o macarrão, resultando em um caldo delicioso, nutritivo e rico em legumes e proteínas. Aprox. 225kcal sem o macarrão e 340kcal com macarrão",
            imagem: "imagens/toastfrango.jpeg"
          }
        ]
      },
      {
        nome: "Crepioca Agridoce",
        capa: "imagens/crepiocadoce.jpeg",
        calorias: 305,
        etapas: [
          {
            titulo: "Crepioca AgriDoce",
            ingredientes: [ "20g Tapioca", "1 ovo", "15g de Doce de leite", "Banana (50g)", "20g Mussarela",],
            imagem: "imagens/crepiocadoce.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "Em um recipiente, misture a tapioca, os ovos e o sal. Em uma frigideira, coloque uma fatia de mussarela e, por cima, despeje a mistura. Tampe a frigideira e deixe cozinhar até firmar.",
            imagem: "imagens/crepiocadoce.jpeg"
          },
          {
            titulo: "Finalização",
            texto: "Finalize com recheio de doce de leite e bananas em rodelas. Caso prefira evitar o agridoce, basta não adicionar o recheio.",
            imagem: "imagens/crepiocadoce.jpeg"
          }
        ]
      },
    ],
  

  "Lanches Doces": [

    {
      nome: "Smoothie",
      capa: "imagens/smoothie.jpeg",
      calorias: 200,
      etapas: [
        {
          titulo: "Smoothie de Morango",
          ingredientes: ["200g Morangos Congelados", "60ml Leite desnatado", "30g de Whey",],
          imagem: "imagens/smoothie.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "No processador, bata os morangos congelados e vá adicionando o leite aos poucos, após adicione o whey até obter uma consistência cremosa, similar à de um sorvete.",
          imagem: "imagens/smoothie.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "Finalize como preferir. Sugestão: morangos picados e granola.",
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
      capa: "imagens/bolobanana.jpeg",
      calorias: 400,
      etapas: [
        {
          titulo: "Bolo de chocolate",
          ingredientes: ["20g Farelo de aveia", "Banana (50g)", "1 Ovo", "30g Whey", "20g de Chocolate", "Fermento", "Opcional: Adoçante, essência de baunilha",],
          imagem: "imagens/bolobanana.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Amasse a banana e adicione 1 ovo, farelo de aveia e whey, misturando bem. Em seguida, acrescente o fermento e a canela, e misture novamente até ficar homogêneo. Transfira a massa para um recipiente, salpique as nozes por cima e leve a airfryer para assar por cerca de 15 minutos.",
          imagem: "imagens/bolobanana.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "Calorias aprox; com chocolate: 400kcal. Sem o chocolate 295kcal",
          imagem: "imagens/bolobanana.jpeg"
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
      capa: "imagens/panqueca.jpeg",
      calorias: 300,
      etapas: [
        {
          titulo: "Panqueca Americana",
          ingredientes: ["20g Farelo de aveia", "1 Ovo", "5g Cacau 100%", "30g Whey", "Morangos", "Adoçante"],
          imagem: "imagens/panqueca.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Para a massa, misture o ovo, o farelo de aveia, o cacau e o adoçante até obter uma mistura homogênea. Despeje em uma frigideira tampada e leve ao fogo baixo até que a massa cozinhe e fique com textura de panqueca.",
          imagem: "imagens/panqueca.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "Para o recheio, prepare um creminho misturando o whey com água aos poucos até obter uma textura cremosa. Em seguida, adicione morangos picados",
          imagem: "imagens/panqueca.jpeg"
        }
      ]
    },
    {
      nome: "Brownie",
      capa: "imagens/brownie.png",
      calorias: 270,
      etapas: [
        {
          titulo: "Brownie",
          ingredientes: [ "30g de Whey", "70ml de leite desnatado", "10g Cacau 100%", "Fermento", "Adoçante", "20g de chocolate",],
          imagem: "imagens/brownie1.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/brownie2.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/brownie3.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/brownie4.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/brownie5.jpg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/brownie6.jpg"
        },
        {
          titulo: "Finalização",
          texto: "Calorias aprox; com chocolate: 270 kcal. Sem o chocolate: 160kcal",
          imagem: "imagens/brownie7.jpg"
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
      calorias: 355,
      etapas: [
        {
          titulo: "Picolé Proteico",
          ingredientes: [ "170ml Iogurte natural (desnatado)", "30g Whey", "20g Doce de leite", "Opcional: 20g de chocolate"],
          imagem: "imagens/picole.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/forminhapicole.png"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/forminhapicole.png"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/forminhapicole.png"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/forminhapicole.png"
        },
        {
          titulo: "Preparo",
          texto: "A porção toda: aprox; 355kcal com chocolate. Sem chocolate 245kcal.",
          imagem: "imagens/forminhapicole.png"
        },
        {
          titulo: "Finalização",
          texto: "Porção por picolé com chocolate: 118kcal e Sem Chocolate: 82kcal",
          imagem: "imagens/forminhapicole.png"
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