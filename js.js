    // Selecionando o botão e o texto
    const toggleButton = document.getElementById('toggleButton');
    const text = document.getElementById('text');

    // Adicionando um evento de clique ao botão
    toggleButton.addEventListener('click', function() {
        // Gerando uma cor aleatória para o texto
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Alterando a cor do texto
        text.style.color = randomColor;
    });
