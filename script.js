const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultados = document.querySelector(".texto-resultado");
const imagemPergunta = document.querySelector(".imagem-pergunta");

const perguntas = [
    {
        enunciado: "1. Qual é uma das principais festas que celebra a cultura rural no Paraná?",
        imagem: "img/3.jpg", // Exemplo de mudança no caminho da imagem
        alternativas: [
            {
                texto: "Festa do Pinhão",
                afirmacao: "afirmacao"
            },
            {
                texto: "Carnaval de Curitiba",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "2. Qual é um dos produtos típicos da gastronomia paranaense que reflete a conexão entre o campo e a cidade?",
        imagem: "img/1.webp", // Exemplo de mudança no caminho da imagem
        alternativas: [
            {
                texto: "Feijão tropeiro",
                afirmacao: "afirmacao"
            },
            {
                texto: "Sushi",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "3. Em que cidade do Paraná se realiza a famosa Festa da Polenta?",
        imagem: "img/2.jpg", // Exemplo de mudança no caminho da imagem
        alternativas: [
            {
                texto: "Palmas",
                afirmacao: "afirmacao"
            },
            {
                texto: "Curitiba",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "4. Qual dessas atividades é típica das festas rurais no Paraná?",
        imagem: "img/5.jpeg", // Exemplo de mudança no caminho da imagem
        alternativas: [
            {
                texto: "Rodeio",
                afirmacao: "afirmacao"
            },
            {
                texto: "Desfile de Moda",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "5. A Festa de Nossa Senhora do Rocio, celebrada em Paranaguá, é uma festa de qual natureza?",
        imagem: "img/4.jpg", // Exemplo de mudança no caminho da imagem
        alternativas: [
            {
                texto: "Religiosa e cultural",
                afirmacao: "afirmacao"
            },
            {
                texto: "Esportiva e comercial",
                afirmacao: "negacao"
            }
        ]
    }
];
