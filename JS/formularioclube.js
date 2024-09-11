// ---------- VALIDAÇÃO NOME ---------- //
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");
const nomeParts = /^[A-Za-zÀ-ÿ\u00f1\u00d1'`-]+(?: [A-Za-zÀ-ÿ\u00f1\u00d1'`-]+)+$/;

//validação email//
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//validação telefone//
let foneInput = document.getElementById("fone");
let foneLabel = document.querySelector('label[for="fone"]');
let foneHelper = document.getElementById("fone-helper");
const fonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;

// Mostrar popup de campo obrigatório
nomeInput.addEventListener('focus', function(){
    nomeLabel.classList.add('required-popup')
})

emailInput.addEventListener('focus', function(){
    emailLabel.classList.add('required-popup')
})

foneInput.addEventListener('focus', function(){
    foneLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório
nomeInput.addEventListener('blur', function(){
    nomeLabel.classList.remove('required-popup')
})

emailInput.addEventListener('blur', function(){
    emailLabel.classList.remove('required-popup')
})


foneInput.addEventListener('blur', function(){
    foneLabel.classList.remove('required-popup')
})

// Validar valor do input
nomeInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log('*Nome Completo:', valor)

    if (!nomeParts.test(valor)) {
        nomeInput.classList.remove('correct');
        nomeInput.classList.add('error');
        nomeHelper.innerText = "Insira seu nome completo.";
        nomeHelper.classList.add('visible');
    } else {
        nomeInput.classList.remove('error');
        nomeHelper.classList.remove('visible');
        nomeInput.classList.add("correct");
    }
})

emailInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log('*E-mail:', valor)

    if (!emailPattern.test(valor)) {
    // Estilos dinâmicos caso o valor não seja válido
    emailInput.classList.remove('correct');
    emailInput.classList.add('error');
    emailHelper.innerText = 'Por favor, insira um e-mail válido.';
    emailHelper.classList.add('visible');
    } else {
    // Caso o valor seja válido
    emailInput.classList.remove('error');
    emailHelper.classList.remove('visible');
    emailInput.classList.add('correct');
    }
})

foneInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log('*Telefone:', valor)

    if (!fonePattern.test(valor)) {
        foneInput.classList.remove('correct');
        foneInput.classList.add('error');
        foneHelper.innerText = "Telefone inválido. O formato correto é (00) 00000-0000.";
        foneHelper.classList.add('visible');
    } else {
        foneInput.classList.remove('error');
        foneHelper.classList.remove('visible');
        foneInput.classList.add("correct");
    }
})





