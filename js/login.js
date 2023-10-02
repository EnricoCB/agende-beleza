const formulario = document.getElementById("formulario");
const email = document.getElementById('email')
const senha = document.getElementById('senha')

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    validaEmail(email);
    validaSenha(senha);

    const formItems = formulario.querySelectorAll(".input-box")
    const formularioValido = [...formItems].every( (item) => {
        return item.className === "input-box"
    });

    if(formularioValido){
        alert("CADASTRADO COM SUCESSO!")
    }
    
})

email.addEventListener("blur",() => {
    validaEmail(email);
})
senha.addEventListener("blur",() => {
    validaSenha(senha);
})

function exibeErro(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "input-box error"
}

function validaEmail(email) {
    const emailValue = email.value.trim()
    emailInicio = emailValue.substring(0, emailValue.indexOf("@"));
    dominio = emailValue.substring(emailValue.indexOf("@")+ 1, emailValue.length);
    debugger;
    if (emailValue === "") {
        exibeErro(email, 'Por favor, preencha o campo E-mail!')
    } else if (!((emailInicio.length >=1) &&
    (dominio.length >=3) &&
    (emailInicio.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (emailInicio.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1))) {
        exibeErro(email, 'Por favor, preencha com um e-mail válido!')
    } else {
        const formItem = email.parentElement
        formItem.classList = "input-box"
    }
}

function validaSenha(senha) {
    const senhaValue = senha.value.trim()
    if (senhaValue === "") {
        exibeErro(senha, 'Por favor, preencha o campo Senha!')
    } else {
        const formItem = senha.parentElement
        formItem.classList = "input-box"
    }
}

