document.addEventListener('DOMContentLoaded', function() {

    

const ipNome = document.querySelector('#ipNome')
const ipSobrenome = document.querySelector('#ipSobrenome')
const ipEmail = document.querySelector('#ipEmail')
const ipConfirmEmail = document.querySelector('#ipConfirmEmail')
const ipSenha = document.querySelector('#ipSenha')
const ipConfirmSenha = document.querySelector('#ipConfirmSenha')


allInput = document.getElementsByTagName("input")
const botaoCreate = document.querySelector('#btnCreate')






// Eventos ------------------------------------------------

botaoCreate.addEventListener("click", () => {
    createAccount()
    oin = createAccount()
    validaInputs(oin) 
    limpaInputs()
})
// Eventos ------------------------------------------------

// botaoCreate.addEventListener("click", () => {
//     allInput.forEach(input => {
//         if(input.value != ""){
//             ipNome.classList.remove('hover:border-green-500 focus:ring')
//             ipNome.classList.add('border-red-400','focus:ring','focus:ring-red-200')
//         } else {
//             limpaInputs()
//         }
//     })
// })



function createAccount() {

    const novaConta = {
        "nome": ipNome.value,
        "sobrenome": ipSobrenome.value,
        "email": ipEmail.value,
        "confirmaEmail": ipConfirmEmail.value,
        "senha":ipSenha.value,
        "confirmaSenha": ipConfirmSenha.value
    }

    return novaConta 
}

function limpaInputs() {
    
    // ipNome.style.visibility = "hidden"; para fazer o placeholder subir para a label

        ipNome.value = '';
        ipSobrenome.value = '';
        ipEmail.value = '';
        ipConfirmEmail.value = '';
        ipSenha.value = '';
        ipConfirmSenha.value = '';

    }

function validaInputs(novaConta) {

    if(novaConta.nome == "" || novaConta.sobrenome == "" || novaConta.email == "" || novaConta.confirmaEmail == "" 
    || novaConta.senha || novaConta.confirmaSenha ) {
    
    if(novaConta.nome == "") {
        ipNome.classList.remove('hover:border-green-500', 'focus:ring')
        ipNome.classList.add('border-red-400','focus:ring','focus:ring-red-200')
        ipNome.nextElementSibling.classList.remove('hidden')
    }
    if(novaConta.sobrenome == "") {
        ipSobrenome.classList.remove('hover:border-green-500', 'focus:ring')
        ipSobrenome.classList.add('border-red-400','focus:ring','focus:ring-red-200')
        ipSobrenome.nextElementSibling.classList.remove('hidden')
    }
    if(novaConta.email == "") {
        ipEmail.classList.remove('hover:border-green-500', 'focus:ring')
        ipEmail.classList.add('border-red-400','focus:ring','focus:ring-red-200')
        ipEmail.nextElementSibling.classList.remove('hidden')
    }
    if(novaConta.confirmaEmail == "") {
        ipConfirmEmail.classList.remove('hover:border-green-500', 'focus:ring')
        ipConfirmEmail.classList.add('border-red-400','focus:ring','focus:ring-red-200')
        ipConfirmEmail.nextElementSibling.classList.remove('hidden')
    }
    if(novaConta.senha == "") {
        ipSenha.classList.remove('hover:border-green-500', 'focus:ring')
        ipSenha.classList.add('border-red-400','focus:ring','focus:ring-red-200')
        ipSenha.nextElementSibling.classList.remove('hidden')
    }
    
    if(novaConta.confirmaSenha == "") {
        ipConfirmSenha.classList.remove('hover:border-green-500', 'focus:ring')
        ipConfirmSenha.classList.add('border-red-400','focus:ring','focus:ring-red-200')
        ipConfirmSenha.nextElementSibling.classList.remove('hidden')
    }
    
    }}

})