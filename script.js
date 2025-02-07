function transitionTo(url) {
    // Adiciona a classe de animação ao body ou container
    document.body.classList.add('fade-out');

    // Aguarda o tempo da animação antes de redirecionar
    setTimeout(() => {
        window.location.href = url; // Redireciona para a nova URL
    }, 500); // Tempo deve ser igual à duração da animação em CSS
}
