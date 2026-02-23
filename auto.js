window.onload = function() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            // Seleciona os títulos e links de notícias do seu tema profissional
            const titulos = document.querySelectorAll('.td-module-title a, h1, h2, h3');
            const imagens = document.querySelectorAll('.entry-thumb, img.td-animation-stack-type0, img');

            data.forEach((noticia, index) => {
                // Atualiza o texto do título
                if (titulos[index]) {
                    titulos[index].innerText = noticia.titulo;
                    titulos[index].href = noticia.url;
                }
                // Atualiza a imagem (pulando a logo se necessário)
                if (imagens[index + 1]) { 
                    imagens[index + 1].src = noticia.imagem;
                    imagens[index + 1].srcset = noticia.imagem;
                }
            });
            console.log("Robô do Visão Anápolis: Notícias atualizadas com sucesso!");
        })
        .catch(err => console.error("Erro ao carregar dados.json:", err));
};
