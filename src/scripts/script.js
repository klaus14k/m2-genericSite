function handleModal() {
    const button = document.querySelector('.join_button')
    const modalController = document.querySelector('.modal__controller')

    button.addEventListener('click', () => {
        modalController.showModal()
    })
    function closeModal() {
        const button = document.querySelector('.modal__close')
        const modalController = document.querySelector('.modal__controller')
        
        button.addEventListener('click', () => {
            modalController.close()
        })
    }
    closeModal()
}
handleModal()