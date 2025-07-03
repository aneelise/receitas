// Criamos uma estrutura de dados com array, com categorias e subtopicos em lanche salgado e doce para separar as receitas
const categorias = {
  "Lanches Salgados": [
    {
      nome: "Toast Pāozinho",
      capa: "imagens/toastqueijo.jpeg",
      calorias: 250,
      etapas: [
        {
          titulo: "Toast Pāozinho",
          ingredientes: [ "2 Pāes", "20g mussarela", "30g creme de ricota light (ou requeijāo).", "Opcional: tomate cereja, orégano"],
          imagem: "imagens/pao2.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Passe o creme de ricota no pāo, coloque a mussarela e leve para a airfryer por 10min. a 200 graus.",
          imagem: "imagens/pao1.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "Coma com alguma proteina e frutinhas. Se gosta de agridoce adicione mel no pāo que tem apenas queijo, com mel a receita fica em torno de 265kcal.",
          imagem: "imagens/pao3.jpeg"
        }
      ]
    },
    {
      nome: "Pizza de frango",
      capa: "imagens/pizzafake.jpeg",
      calorias: 360,
      etapas: [
        {
          titulo: "Pizza de frango",
          ingredientes:[ "1 Pāo Sírio", "100g Frango desfiado", "Extrato de tomate/passata", "Oregáno", "10g Mussarela", "Brócolis", "Tomate" ],
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
          imagem: "imagens/pizza6.jpg"
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
          texto: "Finalize como preferir. Sugestāo: rechear com requeijāo light. Com isso, a receita ficará em torno de 315 kcal",
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
          ingredientes: [ "50g Pāo de hambúrguer", "120g de patinho moído cru", "20g Mussarela", "Opcionais: cebola, alface, tomate, picles", ],
          imagem: "imagens/escondidinho.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/escondidinho.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/escondidinho.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/escondidinho.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/escondidinho.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "",
          imagem: "imagens/escondidinho.jpeg"
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
          ingredientes: ["1 Rap10", "100g Frango ou Carne", "30g Creme de ricota light ou requeijāo light",],
          imagem: "imagens/pasteljpeg.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Umedeça o Rap10 com um pouco de água para deixá-lo mais maleável. Adicione a proteína de sua preferência no centro. Depois, passe creme de ricota apenas nas bordas para ajudar a fechar. Feche com um garfo para selar bem e, se quiser um toque dourado, pincele uma gema de ovo por cima antes de levar a airfryer.",
          imagem: "Misture tudo numa tigela e adicione azeite e limão."
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
            ingredientes: ["2 Ovos Cozidos","30g Requeijāo light (ou creme de ricota light)", "Sal e temperos de sua preferência",],
            imagem: "imagens/tapiocainvertida.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "Cozinhe o ovo, depois amasse com um garfo e misture com 30g de requeijão light. Adicione sal, oregáno e temperos a gosto.",
            imagem: "imagens/tapiocainvertida.jpeg"
          },
          {
            titulo: "Finalização",
            texto: "Adicione o patê onde preferir. Sugestāo: Colocar no pāo, tapioca...",
            imagem: "imagens/tapiocainvertida.jpeg"
          }
        ]
      },
      {
        nome: "Cheddar McMelti",
        capa: "imagens/croquete.jpeg",
        calorias: 395,
        etapas: [
          {
            titulo: "Cheddar McMelti",
            ingredientes: ["1 Rap 10", "120g patinho moído cru", "20g cheddar", "Opcionais: cebola, alface, tomate", ],
            imagem: "imagens/tapiocainvertida.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/tapiocainvertida.jpeg"
          },
          {
            titulo: "Finalização",
            texto: "Finalize como preferir.",
            imagem: "imagens/tapiocainvertida.jpeg"
          }
        ]
      },
      {
        nome: "Bowl de Salada",
        capa: "imagens/saladona.jpeg",
        etapas: [
          {
            titulo: "Bowl de Salada",
            ingredientes: ["Acrescente os legumes e vegetais", "Opções:", "Alface", "Tomate", "Brócolis", "Pepino", "Manga", "Carne/Frango", "Batata inglesa ou Macarrāo cozido", "Molho: De sua preferência"],
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
            ingredientes: ["Molho 1:", "30g de Creme de ricota light ou Requeijāo light", "1 colher de Ketchup", "1 colher de Mostarda", "Temperos a gosto",],
            texto: "Observação: todos esses molhos são versáteis e podem ser usados de várias formas — como em bowls de salada, lanches caseiros ou wraps. São saborosos e fazem toda a diferença na refeição! Sinta-se à vontade para adaptar os ingredientes conforme seu gosto.",
            imagem: "imagens/molhorose.webp"
          },
          {
            titulo: "Preparo",
            texto: "Para o molho, misture em um recipiente 30g de creme de ricota light ou requeijão (da pra substituir com iogurte desnatado), um pouco de ketchup, mostarda, sal. Misture bem e sirva por cima da salada. Dica: se gostar de agridoce adicione 3 gotinhas de adoçante.",
            imagem: "imagens/molhorose.webp"
          },
          {
            titulo: "Molho de mel e limāo",
            ingredientes: ["Molho 2:", "50g de iogurte desnatado ou 30g creme de ricota/requeijāo", "1 colher de Mel (ou adoçante para diminuir as kcal)", "1/2 colher de sumo de limāo", "Sal, oregáno e temperos a gosto",],
            imagem: "imagens/molholimao.webp"
          },
          {
            titulo: "Preparo",
            texto: "Para o molho, misture em um recipiente todos os ingredientes e sirva por cima da salada.",
            imagem: "imagens/molholimao.webp"
          },
          {
            titulo: "Molho de Alho",
            ingredientes: ["Molho 3:", "1 colher de alho picado e refogado", "30g Creme de ricota light ou Requeijāo light", "Sal, pimenta do reino, páprica defumada, temperos a gosto",],
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
            ingredientes: ["2 Pāes", "100g Frango desfiado", "30g Creme de ricota light (ou requeijāo)", "1 fatia de mussarela",],
            imagem: "imagens/tapiocainvertida.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "Em um recipiente, misture o frango desfiado com o requeijão. Espalhe essa mistura sobre o pão, adicione a mussarela por cima, finalize com orégano e leve à airfryer por 10 minutos ou até o queijo dourar.            ",
            imagem: "imagens/tapiocainvertida.jpeg"
          },
          {
            titulo: "Finalização",
            texto: "Finalize como preferir.",
            imagem: "imagens/tapiocainvertida.jpeg"
          }
        ]
      },
      {
        nome: "Caldo de abóbora",
        capa: "imagens/toastfrango.jpeg",
        calorias: 340,
        etapas: [
          {
            titulo: "Caldo de abóbora",
            ingredientes: ["150g de abóbora cabotia cozida", "100g Frango desfiado", "Agua aos poucos", "100g macarrāo cozido",],
            imagem: "imagens/tapiocainvertida.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "",
            imagem: "imagens/tapiocainvertida.jpeg"
          },
          {
            titulo: "Finalização",
            texto: "Essa receita também pode ser consumida sem o macarrão, resultando em um caldo delicioso, nutritivo e rico em legumes e proteínas. Aprox. 225kcal sem o macarrāo e 340kcal com macarrāo",
            imagem: "imagens/tapiocainvertida.jpeg"
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
            imagem: "imagens/mingau2.jpeg"
          },
          {
            titulo: "Finalizaçāo",
            texto: "Finalize com recheio de doce de leite e bananas em rodelas. Caso prefira evitar o agridoce, basta não adicionar o recheio.",
            imagem: "imagens/mingau3.jpeg"
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
          texto: "Finalize como preferir. Sugestāo: morangos picados e granola.",
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
          ingredientes: [ "20g Farelo de aveia", "200ml de leite desnatado", "30g Whey", "5g Cacau 100%", "Porçāo de fruta (100g banana)","Adoçante", "Opcional: 20g de chocolate"],
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
          titulo: "Finalizaçāo",
          texto: "Calorias aprox; 460kcal com chocolate/porçāo de gordura. Sem 350kcal.",
          imagem: "imagens/mingau5.jpg"
        },
        {
          titulo: "Finalizaçāo",
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
          imagem: "imagens/bolopaodemel.jpeg"
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
          ingredientes: ["20g de Chocolate", "30g de whey", "1/2 porçāo de fruta (50g uva)",],
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
          titulo: "Finalizaçāo",
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
          imagem: "imagens/mingau2.jpeg"
        },
        {
          titulo: "Finalizaçāo",
          texto: "Finalize com toppings de sua preferência. Sugestāo: granola.",
          imagem: "imagens/mingau3.jpeg"
        }
      ]
    },
    {
      nome: "Picolé Proteico",
      capa: "imagens/forminhapicole.png",
      calorias: 355,
      etapas: [
        {
          titulo: "Picolé Proteico",
          ingredientes: [ "170ml Iogurte natural (desnatado)", "30g Whey", "20g Doce de leite", "Opcional: 20g de chocolate 70%"],
          imagem: "imagens/bowliogurte.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/mingau2.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/mingau2.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/mingau2.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/mingau2.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "A porçāo toda: aprox; 355kcal com chocolate. Sem chocolate 245kcal.",
          imagem: "imagens/mingau2.jpeg"
        },
        {
          titulo: "Finalizaçāo",
          texto: "Porçāo por picolé com chocolate: 118kcal e Sem Chocolate: 82kcal",
          imagem: "imagens/mingau3.jpeg"
        }
      ]
    },
  ]
};

//criou um ID para pegar os valores das categorias dos contaneirs no HTML e da array
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

// Função chamada inicialmente para criar os cards das receitas na tela
typeCards();

function typeCards() {
  Object.entries(categorias).forEach(([categoria, receitas]) => {              //Object.entries(categorias) transforma o objeto categorias em uma lista com pares [categoria, receitas]. EXEMPLO; ["Lanches Salgados", [array de receitas]],["Lanches Doces", [array de receitas]]

    
   const container = document.getElementById(categoriasIDs[categoria]);         //Aqui pegamos a <div> HTML correspondente àquela categoria. Aqui pegamos a <div> HTML correspondente àquela categoria. Assim a gente sabe onde colocar os cards dessa categoria.
    container.innerHTML = "";                                                  // Limpa o container (caso rode mais de uma vez)

    receitas.forEach((receita) => {                                                                   //👉 Agora percorremos cada receita da categoria atual.
      const cartao = document.createElement("div");                                                  //Criamos um novo elemento <div> e damos a ele uma classe CSS chamada cartao-receita, que deve ter estilo definido no CSS
      cartao.className = "cartao-receita";
      cartao.innerHTML = `<img src="${receita.capa}" alt="${receita.nome}"><p>${receita.nome}</p>`;    //Aqui colocamos o conteúdo visual da receita dentro do card: (imagem de capa, nome)
      cartao.onclick = () => abrirReceita(receita);                                                      // Adicionamos uma função para quando o usuário clicar nesse card. Essa função abre o modal com os detalhes da receita clicada.
      container.appendChild(cartao);                                                                 //Por fim, adicionamos o card que criamos dentro do container HTML da categoria. Ou seja: ele aparece visualmente na página.
    });
  });
}

// Função que abre o modal da receita, iniciando pela primeira etapa
function abrirReceita(receita) {
  receitaAtual = receita;                    // Define a receita atual para exibição
  etapaAtual = 0;                             // Começa sempre na primeira etapa (ingredientes)
  exibirEtapa();                              // Exibe os dados da etapa atual no modal
  modal.classList.add("ativo");               // Mostra o modal adicionando a classe "ativo"
  const etapaIngredientes = receita.etapas.find(etapa => etapa.ingredientes);
  if (etapaIngredientes) {
    document.getElementById("ingredientes-lista").innerHTML = `
      <h3>Ingredientes:</h3>
      <ul>
        ${etapaIngredientes.ingredientes.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
  } else {
    document.getElementById("ingredientes-lista").innerHTML = ""; // Se não tiver ingredientes, limpa a lista
  }
  

}

// Função que atualiza o modal com as informações da etapa atual da receita
function exibirEtapa() {
  const etapa = receitaAtual.etapas[etapaAtual];
  const infoCalorias = document.getElementById('info-calorias');
  imagemEtapa.src = etapa.imagem;
  tituloEtapa.textContent = etapa.titulo;
  if (etapaAtual === 0 && receitaAtual.calorias) {
    document.getElementById("info-calorias").textContent = `Em média: ${receitaAtual.calorias} kcal`;
    infoCalorias.style.display = 'block';  // Mostra

  } else {
    document.getElementById("info-calorias").textContent = "";
    infoCalorias.style.display = 'none';   // Esconde

  }
  

  textoEtapa.textContent = etapa.texto || ""; // para evitar undefined


  // Mostrar ingredientes somente se a etapa atual tiver ingredientes
  const ingredientesLista = document.getElementById("ingredientes-lista");
  if (etapa.ingredientes) {
    ingredientesLista.innerHTML = `
      <h3>Ingredientes:</h3>
      <ul>
        ${etapa.ingredientes.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
  } else {
    ingredientesLista.innerHTML = ""; // Limpa a lista quando não tem ingredientes
  }
}

// Função para avançar para a próxima etapa da receita
function proximaEtapa() {
    etapaAtual = (etapaAtual + 1) % receitaAtual.etapas.length;
    exibirEtapa();
  };

// Função para voltar para a etapa anterior da receita
function etapaAnterior() {
    etapaAtual = (etapaAtual - 1 + receitaAtual.etapas.length) % receitaAtual.etapas.length;
    exibirEtapa();
   
  };

// Função para fechar o modal, removendo a classe "ativo"
function fecharModal() {
  modal.classList.remove("ativo");

}

//Funçāo para fechar o modal quando apertar o Esc no teclado
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    const modalAtivo = document.querySelector(".modal.ativo");
    if (modalAtivo) {
      modalAtivo.classList.remove("ativo");
    }
  }
});

const listaDeCompras = [
  "Pães (pão de forma, pão sírio, pão para hambúrguer)","Rap10", "Whey Protein", "Mussarela", "Creme de ricota light / requeijão light", "Queijo cheddar", "Iogurte natural desnatado", "Leite desnatado", "Frango desfiado", "Carnes Magras", "Ovos", "Farelo de aveia", "Granola", "Doce de leite", "Chocolate", "Cacau 100%", "Fermento", "Adoçante", "Extrato de tomate", "Ketchup e mostarda", "Temperos", "Alface e tomate", "Frutas variadas", "Mel",
];

function mostrarLista() {
  const modal = document.getElementById("modal-compras");
  const lista = document.getElementById("lista-compras");

  lista.innerHTML = ""; // limpa antes de adicionar
  listaDeCompras.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });

  modal.classList.add("ativo");
}

function fecharModalCompras() {
  document.getElementById("modal-compras").classList.remove("ativo");
}
