document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: "Botox",
            image: "src/imagens/forAll - Serviços 1 - Botox.webp",
            content: `
                <strong>Procedimento</strong><br>
                O Botox é um tratamento estético não cirúrgico que utiliza a toxina botulínica para suavizar rugas e linhas de expressão. É indicado para áreas como testa, entre sobrancelhas, ao redor dos olhos (pés de galinha) e linhas ao redor da boca. O procedimento é rápido, praticamente indolor e os resultados podem ser observados dentro de poucos dias, durando de 3 a 6 meses.<br><br>
                
                <strong>Resultado</strong><br>
                O Botox suaviza as rugas e linhas de expressão dando uma aparência mais jovem. Ele também realça o formato das sobrancelhas, trata os "pés de galinha" e olheiras, e previne a flacidez do terço inferior da face e mandíbula.
            `
        },
        {
            title: "Preenchimento com Ácido Hialurônico",
            image: "src/imagens/forAll - Serviços 2 - Preenchimento com Ácido Hialurônico.webp",
            content: `
                <strong>Procedimento</strong><br>
                Este tratamento consiste na aplicação de ácido hialurônico, uma substância naturalmente presente no corpo, para preencher sulcos, rugas e restaurar o volume perdido em áreas como maçãs do rosto, lábios, olheiras e queixo. O procedimento oferece resultados imediatos, com duração média de 9 a 12 meses, proporcionando uma aparência mais jovem e harmoniosa.<br><br>
                
                <strong>Resultado</strong><br>
                O Preenchimento com Ácido Hialurônico promove o rejuvenescimento da pele, redução dos efeitos da idade e da gravidade sob a pele, reduz a flacidez local, estimula a produção de colágeno ao longo do tempo, entre outros.
            `
        },
        {
            title: "Bioestimuladores de Colágeno",
            image: "src/imagens/forAll - Serviços 3 - Bioestimuladores de Colágeno.webp",
            content: `
                <strong>Procedimento</strong><br>
                Bioestimuladores são substâncias injetáveis que estimulam a produção de colágeno na pele, melhorando sua firmeza e elasticidade ao longo do tempo. Indicado para áreas como rosto, pescoço, colo e mãos, os resultados são progressivos, com melhora visível após algumas semanas e duração de até 2 anos.<br><br>
                
                <strong>Resultado</strong><br>
                Os Bioestimuladores de Colágeno promovem uma pele mais firme, suavizam rugas e linhas de expressão, melhoram a textura da pele e preenchem sulcos e áreas profundas causadas pela flacidez facial.
            `
        },
        {
            title: "HidraGloss",
            image: "src/imagens/forAll - Serviços 4 - HidraGloss.webp",
            content: `
                <strong>Procedimento</strong><br>
                Tratamento exclusivo para hidratação e volumização dos lábios, proporcionando uma aparência natural e saudável. Utiliza técnicas avançadas de preenchimento com ácido hialurônico para realçar o contorno e a textura dos lábios, garantindo um resultado suave e duradouro.<br><br>
                
                <strong>Resultado</strong><br>
                O HidraGloss proporciona hidratação profunda dos lábios, aumento temporário de volume, remoção do excesso de pele e ressecamento nos lábios.
            `
        },
        {
            title: "Perfect Glúteos",
            image: "src/imagens/forAll - Serviços 5 - Perfect Glúteos.webp",
            content: `
                <strong>Procedimento</strong><br>
                Procedimento para melhorar a forma, volume e firmeza dos glúteos. Utiliza técnicas como bioestimuladores de colágeno e preenchedores específicos para a área, garantindo um contorno mais definido e estético. Ideal para quem deseja realçar a região glútea sem cirurgia.<br><br>
                
                <strong>Resultado</strong><br>
                O Perfect Glúteos melhora a firmeza e o contorno da região glútea, aumenta o volume e a projeção dos glúteos, criando um aspecto mais arredondado e harmonioso, além de melhorar a elasticidade da pele.
            `
        },
        {
            title: "Skinbooster",
            image: "src/imagens/forAll - Serviços 6 - Skinbooster.webp",
            content: `
                <strong>Procedimento</strong><br>
                Tratamento de hidratação profunda que utiliza ácido hialurônico para melhorar a textura, elasticidade e luminosidade da pele. Indicado para áreas como rosto, pescoço, colo e mãos, o Skinbooster promove uma hidratação intensa, resultando em uma pele mais jovem e revitalizada.<br><br>
                
                <strong>Resultado</strong><br>
                O Skinbooster deixa a pele com brilho e maciez, melhora o aspecto das olheiras e das marcas de acne, suaviza linhas finas e áreas especiais como pescoço e pálpebras, além de melhorar o contorno facial.
            `
        },
        {
            title: "Microagulhamento",
            image: "src/imagens/forAll - Serviços 7 - Microagulhamento.webp",
            content: `
                <strong>Procedimento</strong><br>
                Técnica que utiliza um dispositivo com microagulhas para criar pequenas perfurações na pele, estimulando a produção de colágeno e elastina. É eficaz no tratamento de cicatrizes de acne, linhas finas, poros dilatados e melhora geral da textura da pele. Os resultados aparecem progressivamente, com várias sessões recomendadas para melhores resultados.<br><br>
                
                <strong>Resultado</strong><br>
                O Microagulhamento melhora a textura da pele, tornando-a mais macia, lisa e viçosa, reduz rugas, linhas de expressão, estrias e manchas, além de melhorar a absorção de produtos pela pele.
            `
        },
        {
            title: "Peeling",
            image: "src/imagens/forAll - Serviços 8 - Peeling.webp",
            content: `
                <strong>Procedimento</strong><br>
                Procedimento que utiliza agentes químicos para remover camadas superficiais da pele, promovendo a renovação celular. Indicado para tratar manchas, acne, rugas finas e melhorar a textura da pele. Existem diferentes tipos de peeling (superficial, médio e profundo) dependendo da necessidade do paciente.<br><br>
                
                <strong>Resultado</strong><br>
                O Peeling reduz rugas e linhas de expressão, melhora cicatrizes de acne e de acidentes, diminui a oleosidade da pele e a deixa mais homogênea.
            `
        },
        {
            title: "Fios de PDO",
            image: "src/imagens/forAll - Serviços 9 - Fios-de-PDO.webp",
            content: `
                <strong>Procedimento</strong><br>
                Procedimento minimamente invasivo que utiliza fios absorvíveis de polidioxanona (PDO) para realizar um lifting facial sem cirurgia. Os fios são introduzidos sob a pele, proporcionando um efeito de sustentação e estímulo da produção de colágeno. Ideal para levantar e firmar áreas como rosto, pescoço e mandíbula, com resultados que duram até 18 meses.<br><br>
                
                <strong>Resultado</strong><br>
                Os Fios de PDO melhoram o contorno facial, ampliam o olhar e reduzem a flacidez da pele.
            `
        },
        {
            title: "Ultraformer",
            image: "src/imagens/forAll - Serviços 10 - Ultraformer.webp",
            content: `
                <strong>Procedimento</strong><br>
                Tratamento de lifting não cirúrgico que utiliza ultrassom microfocado para estimular a produção de colágeno nas camadas mais profundas da pele. Indicado para levantar e firmar áreas como rosto, pescoço, colo e braços, proporcionando um efeito de rejuvenescimento com resultados visíveis a partir de 2 a 3 meses.<br><br>
                
                <strong>Resultado</strong><br>
                O Ultraformer reduz linhas de expressão e rugas, melhora a textura e a espessura da pele, reduz a gordura localizada e melhora cicatrizes de acne.
            `
        },
        {
            title: "Lavieen",
            image: "src/imagens/forAll - Serviços 11 - Lavieen.webp",
            content: `
                <strong>Procedimento</strong><br>
                Procedimento a laser que promove o rejuvenescimento da pele através da estimulação da renovação celular. É eficaz para tratar hiperpigmentações, poros dilatados, rugas finas e melhorar a textura da pele. O Lavieen é conhecido por sua eficácia e baixa necessidade de recuperação.<br><br>
                
                <strong>Resultado</strong><br>
                O Lavieen promove a uniformização geral da pele, clareia manchas, reduz os poros e remove pigmentações excessivas.
            `
        },
        {
            title: "Tratamento de Estrias",
            image: "src/imagens/forAll - Serviços 12 - Tratamento-de-Estrias.webp",
            content: `
                <strong>Procedimento</strong><br>
                Técnicas combinadas de microagulhamento, laser e bioestimuladores para reduzir a aparência de estrias, melhorando a textura e a cor da pele. Os tratamentos são personalizados de acordo com o tipo e a severidade das estrias, proporcionando uma melhora significativa com várias sessões.<br><br>
                
                <strong>Resultado</strong><br>
                O Tratamento de Estrias pode ajudar a suavizar a textura das estrias, diminuir a sua aparência e até eliminar até 80% do seu aspecto.
            `
        },
        {
            title: "Gordura Localizada",
            image: "src/imagens/forAll - Serviços 13 - Gordura-Localizada.webp",
            content: `
                <strong>Procedimento</strong><br>
                Procedimentos não invasivos como criolipólise e lipocavitação para reduzir a gordura localizada em áreas como abdômen, flancos, coxas e braços. Essas técnicas utilizam frio ou ultrassom para destruir as células de gordura, que são eliminadas pelo organismo de forma natural.<br><br>
                
                <strong>Resultado</strong><br>
                O tratamento da Gordura Localizada reduz o tecido adiposo e a celulite do corpo, removendo o excesso de gordura das células.
            `
        },
        {
            title: "Celulites",
            image: "src/imagens/forAll - Serviços 14 - Celulites.webp",
            content: `
                <strong>Procedimento</strong><br>
                Tratamentos variados que combinam radiofrequência, drenagem linfática e bioestimuladores para reduzir a aparência da celulite, melhorar a circulação e firmar a pele. A abordagem é personalizada, visando a melhora do aspecto "casca de laranja" com resultados progressivos.<br><br>
                
                <strong>Resultado</strong><br>
                O tratamento de Celulites promove a redução da aparência da celulite, redução da circunferência da coxa, eliminação da gordura local e melhora a circulação sanguínea.
            `
        },
        {
            title: "Micropigmentação",
            image: "src/imagens/forAll - Serviços 15 - Micropigmentação.webp",
            content: `
                <strong>Procedimento</strong><br>
                Técnica de pigmentação semipermanente para definir sobrancelhas, lábios e olhos. Utiliza pigmentos específicos para criar um efeito natural e duradouro, corrigindo falhas e realçando a beleza natural. O procedimento é feito por profissionais especializados, garantindo um resultado preciso e harmonioso.<br><br>
                
                <strong>Resultado</strong><br>
                A micropigmentação pode preencher as sobrancelhas de forma natural e dar ao olhar um aspecto mais forte e marcante. A micropigmentação labial pode aumentar a cor e a definição dos lábios, tornando-os mais atraentes e simétricos. A micropigmentação pode ser usada para camuflar cicatrizes, manchas de vitiligo e outras imperfeições da pele.
            `
        },
        {
            title: "Remoção de Tatuagem",
            image: "src/imagens/forAll - Serviços 16 - Remoção de Tatuagem.webp",
            content: `
                <strong>Procedimento</strong><br>
                Tratamento a laser para remover tatuagens indesejadas de forma segura e eficaz. Utilizando tecnologia avançada, o laser fragmenta os pigmentos da tatuagem, que são gradualmente eliminados pelo sistema imunológico do corpo. Várias sessões são necessárias, dependendo do tamanho, cor e profundidade da tatuagem.<br><br>
                
                <strong>Resultado</strong><br>
                O tratamento de Remoção de Tatuagem pode clarear a tatuagem, deixar os traços mais finos e claros, até desaparecerem. É possível remover 100% da tatuagem sem deixar manchas ou cicatrizes.
            `
        }
    ];

    const mainContent = document.getElementById('main-content');
    const sidebar = document.getElementById('sidebar');
    const serviceTitleInput = document.getElementById('service-title');

    function displayPost(post) {
        mainContent.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h1>${post.title}</h1>
            <p>${post.content}</p>
            <button type="button" class="btn btn-cta" data-bs-toggle="modal" data-bs-target="#contactModal">
                Contrate Agora
            </button>
        `;
        serviceTitleInput.value = post.title; // Define o título do serviço no formulário
    }

    function loadSidebar(posts) {
        posts.forEach((post) => {
            const postItem = document.createElement('div');
            postItem.classList.add('post-sidebar');
            postItem.innerHTML = `
                <img src="${post.image}" class="post-thumbnail" alt="${post.title}">
                <h2>${post.title}</h2>
            `;
            postItem.addEventListener('click', () => displayPost(post));
            sidebar.appendChild(postItem);
        });
    }

    // Inicialização
    displayPost(posts[0]); // Exibe o primeiro post na tela principal
    loadSidebar(posts); // Carrega os posts na sidebar

    // Gerenciamento do envio do formulário
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const contact = document.getElementById('contact').value.trim();

        if (name === "" || contact === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Lógica para enviar a mensagem aqui...
        alert(`Mensagem enviada para o serviço: ${serviceTitleInput.value}`);

        // Exibir a mensagem de confirmação
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('confirmationMessage').style.display = 'block';
    });

    // Reseta o formulário quando o modal é fechado para permitir novos envios
    const contactModal = document.getElementById('contactModal');
    contactModal.addEventListener('hidden.bs.modal', () => {
        document.getElementById('contactForm').reset();
        document.getElementById('confirmationMessage').style.display = 'none';
        document.getElementById('contactForm').style.display = 'block';
    });
});
