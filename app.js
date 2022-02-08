const framsidaInput = document.querySelector('#framsidaInput')
const baksidaInput = document.querySelector('#baksidaInput')
const sparaBtn = document.querySelector('#sparaBtn')
const flashcardArray = []


sparaBtn.addEventListener('click', () => {
  if (framsidaInput.value == '' || baksidaInput.value == ''){
    alert('fylla i fält')
    return
  }

  const flashcardObject = {
    framsida: framsidaInput.value, 
    baksida: baksidaInput.value
  }

  flashcardArray.push(flashcardObject)

  console.log(flashcardArray)

  localStorage.setItem('flashcards', JSON.stringify(flashcardArray))
})
