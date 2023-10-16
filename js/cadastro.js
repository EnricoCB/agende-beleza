const formulario = document.getElementById("formulario");
const nome = document.getElementById('nome')
const telefone = document.getElementById('telefone')
const email = document.getElementById('email')
const cnpj = document.getElementById('cnpj')
const senha = document.getElementById('senha')
const confirmarSenha = document.getElementById('confirmarSenha')

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    
    validaNome(nome);
    validaTelefone(telefone);
    validaEmail(email);

    if (cnpj != null && cnpj != undefined){
        validaCnpj(cnpj);
    }

    validaSenha(senha);
    validaConfirmarSenha(confirmarSenha);

    const formItems = formulario.querySelectorAll(".input-box")

    const formularioValido = [...formItems].every( (item) => {
        return item.className === "input-box"
    });

    if(formularioValido){
        alert("CADASTRADO COM SUCESSO!")
    }
    
})

nome.addEventListener("blur",() => {
    validaNome(nome);
})
telefone.addEventListener("blur",() => {
    validaTelefone(telefone);
})
email.addEventListener("blur",() => {
    validaEmail(email);
})
if (cnpj != null && cnpj != undefined){
    cnpj.addEventListener("blur",() => {
        validaCnpj(cnpj);
    })

    /*cnpj.addEventListener("input", function (e) {
        
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
        e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
      });*/
}
senha.addEventListener("blur",() => {
    validaSenha(senha);
})
confirmarSenha.addEventListener("blur",() => {
    validaConfirmarSenha(confirmarSenha);
})

function exibeErro(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")
    textMessage.innerText = message;
    formItem.className = "input-box error"
}

function validaNome(nome) {
    const nomeValue = nome.value.trim();
    if (nomeValue === "") {
        exibeErro(nome, 'Por favor, preencha o campo Nome!')
    } else {
        const formItem = nome.parentElement
        formItem.classList = "input-box"
    }
}

function validaTelefone(telefone) {
    const telefoneValue = telefone.value.trim()
    if (telefoneValue === "") {
        exibeErro(telefone, 'Por favor, preencha o campo Telefone!')
    } else {
        const formItem = telefone.parentElement
        formItem.classList = "input-box"
    }
}

function validaEmail(email) {
    const emailValue = email.value.trim()
    emailInicio = emailValue.substring(0, emailValue.indexOf("@"));
    dominio = emailValue.substring(emailValue.indexOf("@")+ 1, emailValue.length);
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

function validaCnpj(cnpj) {
    const cnpjValue = cnpj.value.trim();
    if (cnpjValue === "") {
        exibeErro(cnpj, 'Por favor, preencha o campo CNPJ!')
    } else if (!validaNumeroCNPJ(cnpjValue)){
        exibeErro(cnpj, 'Por favor, preencha um CNPJ válido!')
    } else {
        const formItem = cnpj.parentElement
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

function validaConfirmarSenha(confirmarSenha) {
    const senhaValue = senha.value;
    const confirmarSenhaValue = confirmarSenha.value.trim()
    if (confirmarSenhaValue === "") {
        exibeErro(confirmarSenha, 'Por favor, preencha o campo Confirmar Senha!')
    }else if(confirmarSenhaValue !== senhaValue){
        exibeErro(confirmarSenha, 'As senhas não são iguais.')
    } else {
        const formItem = confirmarSenha.parentElement
        formItem.classList = "input-box"
    }
}

function validaNumeroCNPJ(cnpjValue) {
    var b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ];
    var c = String(cnpjValue).replace(/[^\d]/g, '');
    if(c.length !== 14)
        return false
    if(/0{14}/.test(c))
        return false
    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
    if(c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false
    for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
    if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false
    return true
}

const trataTelefone = (event) => {
    let input = event.target
    input.value = mascaraTelefone(input.value)
}

const mascaraTelefone = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}


const trataCnpj = (event) => {
    let input = event.target
    input.value = mascaraCnpj(input.value)
}

const mascaraCnpj = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5");
    return value
}
