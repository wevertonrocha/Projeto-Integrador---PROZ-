<script>
    document.addEventListener('DOMContentLoaded', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarItems = document.querySelector('#navbar-items');

        // Abre o menu ocupando toda a tela
        navbarToggler.addEventListener('click', () => {
            navbarItems.classList.toggle('show');
        });

        // Fecha o menu ao clicar fora dele
        document.addEventListener('click', (event) => {
            const isClickInside = navbarItems.contains(event.target) || navbarToggler.contains(event.target);
            if (!isClickInside) {
                navbarItems.classList.remove('show');
            }
        });
    });
</script>
