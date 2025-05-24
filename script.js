//criamos uma array de lista para guardar todas as receitas que iremos adicionar no projeto
const receitas = [
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
    nome: "Smoothie",
    capa: "imagens/smoothie.jpeg",
    etapas: [
      {
        titulo: "imagens/salada1.jpg",
        texto: "Preparar Ingredientes",
        imagem: "Corte tomate, pepino, alface, cenoura ralada."
      },
      {
        titulo: "imagens/salada2.jpg",
        texto: "Montar",
        imagem: "Misture tudo numa tigela e adicione azeite e limão."
      },
      {
        tituli: "imagens/salada3.jpg",
        texto: "Servir",
        imagem: "Sirva gelada com sementes por cima."
      }
    ]
  },
  {
    nome: "Pizza",
    capa: "imagens/pizzafake.jpeg",
    etapas: [
      {
        titulo: "imagens/salada1.jpg",
        texto: "Preparar Ingredientes",
        imagem: "Corte tomate, pepino, alface, cenoura ralada."
      },
      {
        titulo: "imagens/salada2.jpg",
        texto: "Montar",
        imagem: "Misture tudo numa tigela e adicione azeite e limão."
      },
      {
        tituli: "imagens/salada3.jpg",
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
        titulo: "imagens/salada1.jpg",
        texto: "Preparar Ingredientes",
        imagem: "Corte tomate, pepino, alface, cenoura ralada."
      },
      {
        titulo: "imagens/salada2.jpg",
        texto: "Montar",
        imagem: "Misture tudo numa tigela e adicione azeite e limão."
      },
      {
        tituli: "imagens/salada3.jpg",
        texto: "Servir",
        imagem: "Sirva gelada com sementes por cima.`
      }
    ]
  }
];


//criamos uma variavel para os itens da array (imagem,titulo,texto) e grade e modal do html
const grade = document.getElementById("grade-receitas");
const modal = document.getElementById("modal");
const imagemEtapa = document.getElementById("imagem-etapa");
const tituloEtapa = document.getElementById("titulo-etapa");
const textoEtapa = document.getElementById("texto-etapa");

let receitaAtual = null;
let etapaAtual = 0;

//cria os cards que mostra a capa/nome de cada receita

receitas.forEach((receita, index) => {                        //receita é nossa lista de receitas (da array), forEach repete o codigo para cada receita da lista (receita atual e indexx é a posicao que esta a receita (0,1,2,3...))
  const cartao = document.createElement("div");                 //cria uma nova div no html, e essa div sera o card da receita
  cartao.className = "cartao-receita";                       //da o nome de classe para a div, e essa classe sera usada no css dps
  cartao.innerHTML = `<img src="${receita.capa}" alt="${receita.nome}"><p>${receita.nome}</p>`;        //coloca dentro do card uma imagem recita.capa, um texto receita.nome, e a crase permite usar ${...} para inserir valores da receita no meio do texto
  cartao.onclick = () => abrirReceita(index);       //chama a funcao, quando clicar no card daquela receita especifica, vai abrirReceita
  grade.appendChild(cartao);                                  //coloca o card dentro do ID grade-receitas, esse é o espaço no HTML onde os cards vão aparecer
});


//funçao que abre o passo a passo da receita quando clica no card

function abrirReceita(index) {           //a gente define a funcao abrirReceita e ela recebe um valor index (posicao da receita na lista 0,1,2,3....)
  receitaAtual = receitas[index];       //pega a receita q foi clicada usando index e guarda ela na variavel receitaAtual (exemplo; se vc clicar na segunda receita index = 1, elee pega receita[1])
  etapaAtual = 0;                       //comeca a receita sempre na primeira etapa (passo 0), variavel q controla em que passo a pessoa esta
  exibirEtapa();                           //chama outra funcao exibirEtapa, q vai mostrar o conteudo do passo atual (imagem,texto,titulo)
  modal.style.display = "flex";           //mostraa o modal (janela do passo a passo) na tela, o css que estava com display;none (escondido) antes disso, agora muda para flex , e ele aparece.
}

// funçāo que preenche a imagem, o texto e o título do passo atual no modal.
function exibirEtapa() {
  const etapa = receitaAtual.etapas[etapaAtual]; //pega o passo atual da receita, receitaAtual é a receita q foi clicada, .etapas é a lista de passos dessa receitas, e etapaAtual é o numero do passo tual [0,1,2...]
  imagemEtapa.src = etapa.imagem;                 //coloca a imagem do passo atual dentro da tag img do modal
  tituloEtapa.textContent = etapa.titulo;           //prenche o titulo do passo (ex; passo1)
  textoEtapa.textContent = etapa.texto;            //preenche o texto explicativo do passo
}

//funções que sao chamadas quando a pessoa clica nos botoes de navegacao do modal
function proximaEtapa() {
  etapaAtual = (etapaAtual + 1) % receitaAtual.etapas.length;          //etapaAtual + 1: vai para o próximo passo. % receitaAtual.etapas.length: garante que, se você estiver no último passo, ele volte pro primeiro (loop infinito).
  exibirEtapa();
}

function etapaAnterior() {
  etapaAtual = (etapaAtual - 1 + receitaAtual.etapas.length) % receitaAtual.etapas.length;         //etapaAtual - 1: vai para o passo anterior. o + receitaAtual.etapas.length: garante que o número nunca fique negativo. % receitaAtual.etapas.length: faz o looping caso esteja no primeiro passo e queira voltar — ele te leva pro último passo.


  exibirEtapa();
}

function fecharModal() {
  modal.style.display = "none";   //Altera o estilo do elemento modal, mudando o display para "none". o que remove o modal da tela


}