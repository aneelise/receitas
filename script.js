// Criamos uma estrutura de dados com array, com categorias e subtopicos em lanche salgado e doce para separar as receitas
const categorias = {
  "Lanches Salgados": [
    {
      nome: "Toast Pāozinho",
      capa: "imagens/toastqueijo.jpeg",
      etapas: [
        {
          titulo: "Toast Pāozinho",
          ingredientes: [ "Pāo", "Mussarela", "Creme de ricota light (ou requeijāo).", "Opcional: tomate cereja, orégano"],
          imagem: "imagens/pao2.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Passe o creme de ricota no pāo, coloque a mussarela e leve para a airfryer por 10min. a 200 graus.",
          imagem: "imagens/pao1.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "Coma com alguma proteina e frutinhas. Se gosta de agridoce adicione mel no pāo que tem apenas queijo :)",
          imagem: "imagens/pao3.jpeg"
        }
      ]
    },
    {
      nome: "Pizza de frango",
      capa: "imagens/pizzafake.jpeg",
      etapas: [
        {
          titulo: "Pizza de frango",
          ingredientes:[ "Pāo Sírio (ou rap10)", "100g Frango desfiado", "Tomate cereja", "Extrato de tomate", "Oregáno", "Mussarela" ],
          imagem: "imagens/pizzafake.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "No pão sírio, espalhe o extrato de tomate (ou ketchup), adicione o frango desfiado e, por cima, distribua os tomates, queijo e orégano. Depois de montar, leve à airfryer por 10 minutos.",
          imagem: "imagens/pizzafake.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "Finalize como preferir, use a criatividade!",
          imagem: "imagens/pizzafake.jpeg"
        }
      ]
    },
    {
      nome: "Tapioca Invertida",
      capa: "imagens/tapiocainvertida.jpeg",
      etapas: [
        {
          titulo: "Tapioca Invertida",
          ingredientes: ["20g Tapioca", "Ovos","20g Mussarela"],
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
          titulo: "Preparo",
          texto: "",
          imagem: "imagens/tapiocainvertida8.png"
        },
        {
          titulo: "Finalização",
          texto: "Finalize como preferir. Sugestāo: rechear com creme de ricota light ou requeijāo light.",
          imagem: "imagens/tapiocainvertida.jpeg"
        }
      ]
    },
    {
      nome: "Hambúrguer",
      capa: "imagens/lanche.jpeg",
      etapas: [
        {
          titulo: "Escondidinho de batata inglesa",
          ingredientes: [ "Batata inglesa","Carne/Frango", "Leite desnatado ou agua", "Mussarela", ],
          imagem: "imagens/escondidinho.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Cozinhe a batata até que fique bem macia. Em seguida, acrescente 50ml de leite desnatado, sal e os temperos de sua preferência. Faça a montagem em um bowl, uma camada de batata, uma de proteina, sucessivamente até finalizar.",
          imagem: "imagens/escondidinho.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "Finalize com mussarela e orégano. E leve a airfryer por 10min para derreter o queijo.",
          imagem: "imagens/escondidinho.jpeg"
        }
      ]
    },
    {
      nome: "Pastel",
      capa: "imagens/pasteljpeg.jpeg",
      etapas: [
        {
          titulo: "Pastel de rap10",
          ingredientes: ["Rap10", "100g Frango ou Carne", "30g Creme de ricota light ou requeijāo light",],
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
        nome: "Croquete de frango",
        capa: "imagens/croquete.jpeg",
        etapas: [
          {
            titulo: "Croquete de frango",
            ingredientes: ["100g Frango desfiado", "Batata cozida", "Azeite",],
            imagem: "imagens/tapiocainvertida.jpeg"
          },
          {
            titulo: "Preparo",
            texto: "Cozinhe a batata até que fique bem macia. Em seguida, misture com o frango desfiado usando as mãos até formar uma massa homogênea. Modele em formato de bolinhas, pincele azeite por cima e leve à airfryer por cerca de 30 minutos ou até ficarem douradas.",
            imagem: "imagens/tapiocainvertida.jpeg"
          },
          {
            titulo: "Finalização",
            texto: "Finalize como preferir. Sugestāo: Salada.",
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
            ingredientes: ["Molho 2:", "50g de iogurte desnatado ou 30g creme de ricota/requeijāo", "2 colheres de Mel", "1/2 colher de sumo de limāo", "Sal, oregáno e temperos a gosto",],
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
        etapas: [
          {
            titulo: "Toast de frango",
            ingredientes: ["Pāes", "100g Frango desfiado", "30g Creme de ricota light (ou requeijāo)", "1 fatia de mussarela",],
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
    ],
  

  "Lanches Doces": [

    {
      nome: "Smoothie",
      capa: "imagens/smoothie.jpeg",
      etapas: [
        {
          titulo: "Smoothie de Morango",
          ingredientes: ["Morangos Congelados", "60ml Leite desnatado", "30g de Whey",],
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
      etapas: [
        {
          titulo: "Mingau de aveia",
          ingredientes: [ "Farelo de aveia", "200ml de leite", "Whey", "Cacau 100%", "Porçāo de fruta","Adoçante", "Opcional: 20g de chocolate"],
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
          texto: "",
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
      nome: "Bolo de banana com nozes",
      capa: "imagens/bolobanana.jpeg",
      etapas: [
        {
          titulo: "Bolo de banana com nozes",
          ingredientes: ["20g Farelo de aveia", "Banana", "1 Ovo", "30g Whey", "20g de Mix de Nuts (nozes)", "Fermento", "Opcional: Canela e Mel"],
          imagem: "imagens/bolopaodemel.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Amasse a banana e adicione 1 ovo, farelo de aveia e whey, misturando bem. Em seguida, acrescente o fermento e a canela, e misture novamente até ficar homogêneo. Transfira a massa para um recipiente, salpique as nozes por cima e leve a airfryer para assar por cerca de 15 minutos.",
          imagem: "imagens/bolobanana.jpeg"
        },
        {
          titulo: "Finalização",
          texto: "Finalize como preferir. Sugestāo: Mel",
          imagem: "imagens/bolobanana.jpeg"
        }
      ]
    },
    {
      nome: "Bombom de Whey",
      capa: "imagens/bombom.jpeg",
      etapas: [
        {
          titulo: "Bombom de uva e morango",
          ingredientes: ["20g de Chocolate", "30g de whey", "1/2 porçāo de fruta",],
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
      nome: "Panqueca com morangos",
      capa: "imagens/panqueca.jpeg",
      etapas: [
        {
          titulo: "Panqueca com morangos",
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
      nome: "Pizza doce",
      capa: "imagens/mingau.jpeg",
      etapas: [
        {
          titulo: "Mingau de aveia",
          ingredientes: [ "Farelo de aveia", "150/200ml de leite", "Whey", "Cacau 100%", "Banana", "Opcional: Adoçante e 20g de chocolate"],
          imagem: "imagens/mingau1.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Adicione a aveia, cacau, leite, misture e leve ao fogo até pegar consistência de mingau, após, retire e adicione 30g de whey com o fogo já desligado.",
          imagem: "imagens/mingau2.jpeg"
        },
        {
          titulo: "Finalizaçāo",
          texto: "Finalize com toppings de sua preferência. Sugestāo: banana e chocolate.",
          imagem: "imagens/mingau3.jpeg"
        }
      ]
    },
    {
      nome: "Bowl de iogurte",
      capa: "imagens/bowliogurte.jpeg",
      etapas: [
        {
          titulo: "Bowl de iogurte",
          ingredientes: [ "170ml Iogurte natural", "30g Whey", "Frutas", "20g de Granola",],
          imagem: "imagens/mingau1.jpeg"
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
      nome: "Crepioca Agridoce",
      capa: "imagens/crepiocadoce.jpeg",
      etapas: [
        {
          titulo: "Crepioca AgriDoce",
          ingredientes: [ "20g Tapioca", "Ovos", "15g de Doce de leite", "Banana", "20g Mussarela",],
          imagem: "imagens/mingau1.jpeg"
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
    {
      nome: "Mousse de maracujá",
      capa: "imagens/moussemaracuja.jpeg",
      etapas: [
        {
          titulo: "Mousse de maracujá",
          ingredientes: ["170ml de Iogurte natural", "1 Maracujá", "30g Whey", "Adoçante",],
          imagem: "imagens/mingau1.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Adicione a aveia, cacau, leite, misture e leve ao fogo até pegar consistência de mingau, após, retire e adicione 30g de whey com o fogo já desligado.",
          imagem: "imagens/mingau2.jpeg"
        },
        {
          titulo: "Finalizaçāo",
          texto: "Finalize com toppings de sua preferência. Sugestāo: banana e chocolate.",
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
  imagemEtapa.src = etapa.imagem;
  tituloEtapa.textContent = etapa.titulo;
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
  etapaAtual = (etapaAtual + 1) % receitaAtual.etapas.length;   // Incrementa o índice da etapa atual, voltando para 0 se passar da última etapa
  exibirEtapa();                                             // Atualiza o modal com a nova etapa
}

// Função para voltar para a etapa anterior da receita
function etapaAnterior() {
  etapaAtual = (etapaAtual - 1 + receitaAtual.etapas.length) % receitaAtual.etapas.length;    // Decrementa o índice da etapa atual, voltando para a última etapa se estiver na primeira
  exibirEtapa();                                        // Atualiza o modal com a etapa anterior
}

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

