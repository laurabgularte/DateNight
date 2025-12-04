// 1. Array com os motivos
const reasons = [
    "O seu sorriso ilumina meu dia",
    "Você me apoia em tudo",
    "Você me faz querer ser uma pessoa melhor",
    "O seu abraço é o meu lugar favorito no mundo",
    "Você consegue fazer qualquer coisa parecer divertida",
    "Posso ser eu mesma ao seu lado",
    "Você me inspira a correr atrás dos meus sonhos",
    "A sua risada é contagiante",
    "Cada momento com você é especial"
];

let reasonIndex = 0;

// Exibir o próximo motivo ao clicar
document.getElementById('surpriseButton').addEventListener('click', function() {
    const reasonDisplay = document.getElementById('reasonDisplay');
    
    reasonDisplay.textContent = reasons[reasonIndex];
    reasonIndex = (reasonIndex + 1) % reasons.length; 
});

// 2. Contador de dias juntas
function calculateDaysTogether() {
    // 🛑 ATENÇÃO: Mude esta data para a data de início do namoro!
    const startDate = new Date('2025-05-10'); 
    const today = new Date();
    
    const differenceInTime = today.getTime() - startDate.getTime();
    
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    
    document.getElementById('days-together').textContent = `${differenceInDays} dias! ❤️`;
}

// Inicialização ao carregar a página
window.onload = function() {
    calculateDaysTogether();
};