// 1. Array com os motivos
const reasons = [
    "O seu sorriso ilumina meu dia.",
    "A forma como você me apoia em tudo.",
    "Você me faz querer ser uma pessoa melhor.",
    "O seu abraço, que é o meu lugar favorito no mundo.",
    "O jeito que você consegue fazer qualquer coisa parecer divertida.",
    
];

let reasonIndex = 0;

// exibir o próximo motivo
document.getElementById('surpriseButton').addEventListener('click', function() {
    const reasonDisplay = document.getElementById('reasonDisplay');
    
    
    reasonDisplay.textContent = reasons[reasonIndex];
    reasonIndex = (reasonIndex + 1) % reasons.length; 
});

// contador de dias juntas
function calculateDaysTogether() {
    
    const startDate = new Date('2025-05-10'); 
    const today = new Date();
    
   
    const differenceInTime = today.getTime() - startDate.getTime();
    
    
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    
    // atualiza html
    document.getElementById('days-together').textContent = `${differenceInDays} dias! ❤️`;
}

// função do contador ao carregar a página
calculateDaysTogether();