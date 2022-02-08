const flashcardContainer = document.querySelector("#flashcardContainer");

const framsidaInput = document.querySelector('#framsidaInput')
const baksidaInput = document.querySelector('#baksidaInput')
const sparaBtn = document.querySelector('#sparaBtn')

let flashcardArray = [];
const storedCards = JSON.parse(localStorage.getItem("flashcards"));
if (storedCards) {
  flashcardArray = [...storedCards];
};

const displayLocalStorage = () => {
  const flashcards = JSON.parse(localStorage.getItem("flashcards"));
  flashcards.forEach((flashcard) => {
    const newCard = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardFront = document.createElement("div");
    const cardBack = document.createElement("div");
    const cardBtn = document.createElement("button");
    cardBtn.classList.add("flip-btn");

    cardTitle.innerText = "Framsida";
    cardFront.innerText = flashcard.framsida;
    cardBack.innerText = flashcard.baksida;
    cardBtn.innerText = "Flip";

    flashcardContainer.classList.add("flashcardBox");
    newCard.classList.add("flashcard");
    cardTitle.classList.add("flashCardTitle");
    cardFront.classList.add("infoBox");
    cardBack.classList.add("infoBox");
    cardBack.classList.add("hidden");

    newCard.appendChild(cardTitle);
    newCard.appendChild(cardFront);
    newCard.appendChild(cardBack);
    newCard.appendChild(cardBtn);
    flashcardContainer.appendChild(newCard);

    let flipButtons = document.querySelectorAll(".flip-btn");

    let frontOpen = true;

    flipButtons.forEach((btn) => {
      btn.addEventListener("click", (x)=>{
        let parent = x.target.parentElement;
        let title = parent.firstElementChild;
        let frontSide = parent.children[1];
        let backSide = parent.children[2];

        if (frontOpen){
          console.log(flashcard)
          title.innerText = "Baksida";
          frontSide.classList.add("hidden");
          backSide.classList.remove("hidden");
          frontOpen = false;
          parent.style.backgroundColor = "red";
        } else {
          title.innerText = "Framsida";
          frontSide.classList.remove("hidden");
          backSide.classList.add("hidden");
          frontOpen = true;
          parent.style.backgroundColor = "rgb(71, 110, 136)";
        }
      })
    })


  })
};

sparaBtn.addEventListener('click', (x) => {
  x.preventDefault();
  flashcardContainer.innerHTML = "";
  if (framsidaInput.value == '' || baksidaInput.value == ''){
    alert('fylla i fält')
    return
  }

  const flashcardObject = {
    framsida: framsidaInput.value, 
    baksida: baksidaInput.value
  }

  flashcardArray.push(flashcardObject)

  localStorage.setItem('flashcards', JSON.stringify(flashcardArray))
  displayLocalStorage();
})


displayLocalStorage();