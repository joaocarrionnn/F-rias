function toggleContent(contentId) {
    // Seleciona todos os conteúdos
    const contents = document.querySelectorAll('.content');

    // Esconde todos os conteúdos
    contents.forEach((content) => {
        if (content.id !== contentId) {
            content.classList.remove('show'); // Remove a classe 'show' para esconder
        }
    });

    // Seleciona o conteúdo específico que deve ser mostrado/oculto
    const selectedContent = document.getElementById(contentId);

    // Alterna a visibilidade do conteúdo selecionado
    if (selectedContent.classList.contains('show')) {
        selectedContent.classList.remove('show'); // Esconde se já estiver visível
    } else {
        selectedContent.classList.add('show'); // Mostra se estiver oculto
    }
}

