document.addEventListener('DOMContentLoaded', function() {
    const personalizeForm = document.getElementById('personalizeForm');
    const errorMessage = document.getElementById('errorMessage');
    const confirmationMessage = document.getElementById('confirmationMessage');

    personalizeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Limpar mensagens anteriores
        errorMessage.style.display = 'none';
        confirmationMessage.style.display = 'none';

        const name = document.getElementById('name').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const selectedServices = document.querySelectorAll('#services input[type="checkbox"]:checked');

        if (!name || !contact || selectedServices.length < 3) {
            errorMessage.textContent = "Por favor, preencha todos os campos e selecione ao menos 3 serviços.";
            errorMessage.style.display = 'block';
            return;
        }

        // Simular envio de formulário e exibir mensagem de confirmação
        confirmationMessage.style.display = 'block';
    });
});
