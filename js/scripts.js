import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { calculateIMC, notAnumber } from "./utils.js"
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')



form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotAnumber = notAnumber(weight) || notAnumber(height)

  if (weightOrHeightIsNotAnumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  console.log(notAnumber(weight))
  console.log(notAnumber(height))


  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()