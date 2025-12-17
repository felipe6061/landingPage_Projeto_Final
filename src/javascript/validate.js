
// valida dados de entrda no formulario 
// emite poup na tela 
const form = document.querySelector("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let valido = true;


  // valida nome com pelo menos 3 caracteres
    if (nome.value.trim().length < 3) {
        erroCampo(nome, "Nome deve ter pelo menos 3 letras");
        valido = false;
    } else {
        sucessoCampo(nome);
  }


  // valida email 
    if (!email.value.includes("@")) {
        erroCampo(email, "Email inválido");
        valido = false;
    } else {
        sucessoCampo(email);
  }


  // valida mensagem com pelo menos 5 caracteres
    if (mensagem.value.trim().length < 5) {
        erroCampo(mensagem, "Mensagem deve ter pelo menos 5 caracteres");
        valido = false;
    } else {
        sucessoCampo(mensagem);
    }

    if (valido) {
        alert("Formulário enviado com sucesso!");
        form.reset();
    }
    });


    function erroCampo(campo, mensagem) {
    campo.classList.add("erro");
    campo.classList.remove("sucesso");
    }

    function sucessoCampo(campo) {
    campo.classList.add("sucesso");
    campo.classList.remove("erro");

    }




