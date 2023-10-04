function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById('toggleIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = 'img/olho.svg'; 
        toggleIcon.alt = 'Ocultar Senha';
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = 'img/olho2.svg '; 
        toggleIcon.alt = 'Mostrar Senha';
    }
}
