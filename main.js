const form = document.getElementById('form-check')

function validaForm (numberOne, numberTwo) {
    return numberOne < numberTwo
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const numberOne = document.getElementById('number-one')
    const numberTwo = document.getElementById('number-two')
    const mensagemSucesso = 'Validação concluida! O segundo número é maior que o primerio.'
    const mensagemError = 'O primeiro valor é maior ou igual ao segundo. Tente novamente.'

    if (validaForm) {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'

        numberOne.value = ''
        numberTwo.value = ''

    }else {
        const containerMensagemErro = document.querySelector('.error-message')
        containerMensagemErro.innerHTML = mensagemError
        containerMensagemErro.style.display = 'block'

        numberOne.value = ''
        numberTwo.value = ''
    }
})

console.log(form)