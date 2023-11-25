document.addEventListener('DOMContentLoaded', function() {
    const botaoAdd = document.querySelector('#add-user')
    const modal = document.querySelector('#modal')
    const inputModal = document.querySelector('#inputModal')
    const saveButton = document.querySelector('#saveButton')
    const cancelButton = document.querySelector("#cancelButton")
    const container = document.querySelector("#container")

    
   
    //EVENTOS-----------------------------------------------------------
    // botaoAdd.addEventListener("click", (e) => createNewUser(e.target))
    botaoAdd.addEventListener("click",() => abreModal())
    saveButton.addEventListener("click", () => createNewUser())
    cancelButton.addEventListener("click", () => {
        inputModal.value = '';
        document.querySelector('#modal').close();
    })

    //EVENTOS-----------------------------------------------------------
        
        function abreModal() {
            modal.showModal();
            modal.firstElementChild.innerHTML = 'Criar um usuário:';
        }
    
        function editUser() {
            const editButton = document.querySelectorAll('button[name="editButton"]')
            editButton.forEach(input => {
                input.addEventListener("click", () => {abreModal(input.parentElement.parentElement.parentElement)})
                    
            })

        }

    
        function createNewUser() {
    
            nome = inputModal.value
            const novo = document.createElement("div");
            novo.innerHTML =
            `<button id="add-user">
                <span class="add-user material-symbols-outlined prim">
                account_circle
                </span>
            </button>
            <h2 class="text-center">${nome}</h2>
            <div class="flex justify-end gap-3 mt-4">
            <button class="flex flex-col justify-center  bg-amber-50 px-1 rounded-md hover:bg-amber-100" name="editButton">
              <span class="material-symbols-outlined text-xl text-amber-400">edit</span>
            </button>
            <button class="bg-red-50 px-1 rounded-md hover:bg-red-100 mr-16" name="removeBtn">
              <span class="material-symbols-outlined  text-xl text-red-400">delete</span>
            </button>
          </div>
            `
        
            container.insertBefore(novo, container.lastElementChild)
            inputModal.value = '';
            modal.close()
        }
        
        })
