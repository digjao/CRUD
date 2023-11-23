document.addEventListener('DOMContentLoaded', function() {
const botaoAdd = document.querySelector('#add-user')
const modal = document.querySelector('#modal')
const inputModal = document.querySelector('#inputModal')
const saveButton = document.querySelector('#saveButton')

//EVENTOS-----------------------------------------------------------
// botaoAdd.addEventListener("click", (e) => createNewUser(e.target))
botaoAdd.addEventListener("click",() => abreModal())
saveButton.addEventListener("click", (e) => createNewUser(e.target))

//EVENTOS-----------------------------------------------------------
    
    function abreModal() {
        modal.showModal()
        modal.firstElementChild.innerHTML = 'Criar um usuário:'
        
    }


    function createNewUser(e) {

        nome = inputModal.value
        const pai = e.parentElement.parentElement.parentElement;
        const novo = document.createElement("div");
        novo.innerHTML =
        `<button id="add-user">
            <span class="add-user material-symbols-outlined prim">
            account_circle
            </span>
        </button>
        <h2 class="text-center">${nome}</h2>
        `
    
        pai.insertBefore(novo, pai.lastElementChild)
        
    }
    
    })
    
    