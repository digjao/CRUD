document.addEventListener('DOMContentLoaded', function () {
    const botaoAdd = document.querySelector('#add-user')
    const container = document.querySelector('#container')
    const modal = document.querySelector('#modal')
    const inputModal = document.querySelector('#inputModal')
    const saveButton = document.querySelector('#saveButton')
    const cancelButton = document.querySelector("#cancelButton")
    const editModalButton = document.querySelector("#edit-Modal-Button")

    let uuid = 1;

    const cores = [
        'prim',
        'second',
        'third'
    ]

    //EVENTOS-----------------------------------------------------------
    botaoAdd.addEventListener("click", () => abreModal());
    saveButton.addEventListener("click", () => createNewUser());
    editModalButton.addEventListener("click", () => editItem());
    cancelButton.addEventListener("click", () => {
        inputModal.value = '';
        document.querySelector('#modal').close();
        saveButton.classList.add('hidden')
        editModalButton.classList.add('hidden')
    })

    //EVENTOS-----------------------------------------------------------

    function abreModal() {
        modal.showModal()
        modal.firstElementChild.innerHTML = 'Criar um usuário:'
        saveButton.classList.remove('hidden')
    }

    // function configEditModal() {
    //     const editButtons = document.querySelectorAll('button[name="editButton"]')
    //     editButtons.forEach(button => {
    //         button.addEventListener("click", () => editModal(button.parentElement.previousElementSibling))
    //     })
    // }

    function editModal(oin) {
        modal.showModal()
        console.log('cheguei aqui');
        modal.firstElementChild.innerHTML = 'Editar um usuário:'
        inputModal.value = oin.innerHTML
        saveButton.classList.add('hidden')
        editModalButton.classList.remove('hidden');

        inputModal.setAttribute('data-key', oin.parentElement.getAttribute('data-key'));
    }

    function createNewUser() {

        nome = inputModal.value
        const novo = document.createElement("div");
        novo.innerHTML =
        `<div data-key="user-${uuid}">
            <span class="add-user material-symbols-outlined ${cores[(uuid%cores.length)]}">
                account_circle
            </span>

            <h2 class="text-center">${nome}</h2>
            <div class="flex justify-end gap-3 mt-4">
                <button class="flex flex-col justify-center  bg-amber-50 px-1 rounded-md hover:bg-amber-100" name="editButton" >
                    <span class="material-symbols-outlined text-xl text-amber-400" >edit</span>
                </button>
                <button class="bg-red-50 px-1 rounded-md hover:bg-red-100 mr-16" name="removeBtn">
                    <span class="material-symbols-outlined  text-xl text-red-400">delete</span>
                </button>
            </div>
        </div>
        `

        // configEditModal();
        container.insertBefore(novo, container.lastElementChild);


        novo.firstElementChild.lastElementChild.firstElementChild.addEventListener('click', () => editModal(novo.firstElementChild.children[1]))
        console.log(novo.lastElementChild);
        novo.firstElementChild.lastElementChild.lastElementChild.addEventListener('click', () => removeItem(novo.firstElementChild))


        inputModal.value = '';
        modal.close();
        uuid += 1;
        // uuid++;
    }

    function editItem() {
        const oin = document.querySelector(`[data-key=${inputModal.getAttribute('data-key')}`).children[1];
        oin.innerHTML = inputModal.value;

        inputModal.removeAttribute('data-key');
        inputModal.value = '';
        modal.close();
    }


    function removeItem(div) {
        div.remove()
    }

})
