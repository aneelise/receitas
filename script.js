// Criamos uma estrutura de dados com array, com categorias e subtopicos em lanche salgado e doce para separar as receitas
const categorias = {
  "Lanches Salgados": [
    {
      nome: "Toast Pāozinho",
      capa: "imagens/toastqueijo.jpeg",
      etapas: [
        {
          titulo: "Ingredientes",
          texto: "Pāo, mussarela, creme de ricota light (ou requeijāo). Opcional: tomate cereja, orégano",
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
          titulo: "Ingredientes",
          texto: "Preparar Ingredientes",
          imagem: "Corte tomate, pepino, alface, cenoura ralada."
        },
        {
          titulo: "Preparo",
          texto: "Montar",
          imagem: "Misture tudo numa tigela e adicione azeite e limão."
        },
        {
          titulo: "Finalização",
          texto: "Servir",
          imagem: "Sirva gelada com sementes por cima."
        }
      ]
    },
    {
      nome: "Tapioca Invertida",
      capa: "imagens/tapiocainvertida.jpeg",
      etapas: [
        {
          titulo: "Ingredientes",
          texto: "Banana amassada, ovo, aveia.",
          imagem: "images/panqueca1.jpg"
        },
        {
          titulo: "Preparo",
          texto: "Misture tudo e frite em fogo baixo.",
          imagem: "images/panqueca2.jpg"
        },
        {
          titulo: "Finalização",
          texto: "Sirva com mel e frutas.",
          imagem: "images/panqueca3.jpg"
        }
      ]
    },
    {
      nome: "Poke",
      capa: "imagens/poke.jpeg",
      etapas: [
        {
          titulo: "Ingredientes",
          texto: "Preparar Ingredientes",
          imagem: "Corte tomate, pepino, alface, cenoura ralada."
        },
        {
          titulo: "Preparo",
          texto: "Montar",
          imagem: "Misture tudo numa tigela e adicione azeite e limão."
        },
        {
          titulo: "Finalização",
          texto: "Servir",
          imagem: "Sirva gelada com sementes por cima."
        }
      ]
    },
    {
      nome: "Pastel",
      capa: "imagens/pasteljpeg.jpeg",
      etapas: [
        {
          titulo: "Ingredientes",
          texto: "Preparar Ingredientes",
          imagem: "Corte tomate, pepino, alface, cenoura ralada."
        },
        {
          titulo: "Preparo",
          texto: "Montar",
          imagem: "Misture tudo numa tigela e adicione azeite e limão."
        },
        {
          titulo: "Finalização",
          texto: "Servir",
          imagem: "Sirva gelada com sementes por cima."
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
          titulo: "Ingredientes",
          texto: "Preparar Ingredientes",
          imagem: "Corte tomate, pepino, alface, cenoura ralada."
        },
        {
          titulo: "Preparo",
          texto: "Montar",
          imagem: "Misture tudo numa tigela e adicione azeite e limão."
        },
        {
          titulo: "Finalização",
          texto: "Servir",
          imagem: "Sirva gelada com sementes por cima."
        }
      ]
    },
    {
      nome: "Mingau de aveia",
      capa: "imagens/mingau.jpeg",
      etapas: [
        {
          titulo: "Ingredientes",
          texto: "20g de aveia, 150 ml de leite, 5g cacau em pó, 30g de whey, 20g de chocolate, adoçante e banana",
          imagem: "imagens/mingau1.jpeg"
        },
        {
          titulo: "Preparo",
          texto: "Adicione a aveia, cacau, leite, adoçante, misture e leve ao fogo até pegar consistência de mingau, após, retire e adicione 30g de whey com o fogo já desligado.",
          imagem: "imagens/mingau2.jpeg"
        },
        {
          titulo: "Finalizaçāo",
          texto: "Finalize com toppings de sua preferência, gosto de colocar banana e chocolate.",
          imagem: "imagens/mingau3.jpeg"
        }
      ]
    },
    {
      nome: "Bolo de banana com nozes",
      capa: "imagens/bolobanana.jpeg",
      etapas: [
        {
          titulo: "Ingredientes",
          texto: "Preparar Ingredientes",
          imagem: "Corte tomate, pepino, alface, cenoura ralada."
        },
        {
          titulo: "Preparo",
          texto: "Montar",
          imagem: "Misture tudo numa tigela e adicione azeite e limão."
        },
        {
          titulo: "Finalização",
          texto: "Servir",
          imagem: "Sirva gelada com sementes por cima."
        }
      ]
    },
    {
      nome: "Bombom de uva",
      capa: "imagens/bombom.jpeg",
      etapas: [
        {
          titulo: "Ingredientes",
          texto: "Preparar Ingredientes",
          imagem: "Corte tomate, pepino, alface, cenoura ralada."
        },
        {
          titulo: "Preparo",
          texto: "Montar",
          imagem: "Misture tudo numa tigela e adicione azeite e limão."
        },
        {
          titulo: "Finalização",
          texto: "Servir",
          imagem: "Sirva gelada com sementes por cima."
        }
      ]
    },
    {
      nome: "Panqueca com morangos",
      capa: "imagens/panqueca.jpeg",
      etapas: [
        {
          titulo: "Ingredientes",
          texto: "Preparar Ingredientes",
          imagem: "Corte tomate, pepino, alface, cenoura ralada."
        },
        {
          titulo: "Preparo",
          texto: "Montar",
          imagem: "Misture tudo numa tigela e adicione azeite e limão."
        },
        {
          titulo: "Finalização",
          texto: "Servir",
          imagem: "Sirva gelada com sementes por cima."
        }
      ]
    }
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

}

// Função que atualiza o modal com as informações da etapa atual da receita
function exibirEtapa() {
  const etapa = receitaAtual.etapas[etapaAtual];             // Pega o objeto da etapa atual (ingredientes, preparo, etc.)
  imagemEtapa.src = etapa.imagem;                          // Atualiza a imagem da etapa
  tituloEtapa.textContent = etapa.titulo;                 // Atualiza o título (ex: "Ingredientes")
  textoEtapa.textContent = etapa.texto;                   // Atualiza o texto explicativo da etapa
  
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

