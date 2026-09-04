// Seleciona todas as divs que contêm as imagens (grandes e pequenas)
const imagens = document.querySelectorAll('.img__xl-card, .img__sl-card');

imagens.forEach(div => {
  div.style.cursor = 'pointer'; // Muda o cursor do mouse para a "mãozinha"
  
  div.addEventListener('click', () => {
    const modal = document.getElementById('modalZoom');
    const imgAmpliada = document.getElementById('imgAmpliada');
    
    // Pega a imagem de fundo (background-image) lá do seu arquivo CSS
    const estilo = window.getComputedStyle(div);
    const bgImage = estilo.backgroundImage;
    
    // Verifica se a imagem existe e limpa o formato url("...") para pegar só o link
    if (bgImage && bgImage !== 'none') {
      const url = bgImage.slice(4, -1).replace(/["']/g, "");
      imgAmpliada.src = url;
      modal.style.display = 'flex';
    }
  });
});

// Função para fechar a foto ao clicar na tela
function fecharZoom() {
  document.getElementById('modalZoom').style.display = 'none';
}

