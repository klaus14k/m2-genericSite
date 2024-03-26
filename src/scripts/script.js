function handleModal() {
    const buttons = document.querySelectorAll(".join_button")
    const modalController = document.querySelector(".modal__controller")

    buttons.forEach((button) => button.addEventListener("click", () => {
        modalController.showModal()
    }))
    function closeModal() {
        const button = document.querySelector(".modal__close")
        const modalController = document.querySelector(".modal__controller")

        button.addEventListener("click", () => {
            modalController.close()
        })
    }
    closeModal()
}
handleModal()

function scrollTo() {
    const section = document.getElementById("second_section")
    const button = document.getElementById("button_aboutUs")

    button.addEventListener("click", () => {
        section.scrollIntoView()
    })
}
scrollTo()