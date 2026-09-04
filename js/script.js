// Seleciona todas as fotos do cartão
document.querySelectorAll('.card__xl-card img').forEach(img => {
  img.style.cursor = 'pointer'; // Deixa o cursor com formato de clique
  img.addEventListener('click', () => {
    const modal = document.getElementById('modalZoom');
    const imgAmpliada = document.getElementById('imgAmpliada');
    
    imgAmpliada.src = img.src; // Pega o link da foto clicada
    modal.style.display = 'flex'; // Mostra a tela cheia
  });
});

// Função para fechar a foto ao clicar nela
function fecharZoom() {
  document.getElementById('modalZoom').style.display = 'none';
}