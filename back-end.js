const userInput = document.querySelector('#user-input')
const biggifyButton = document.querySelector('.biggify')
const nasafyButton = document.querySelector('.nasafy')
const crazyfyButton = document.querySelector('.crazify')
const reverseButton = document.querySelector('.reversify')
const titleCaseButton = document.querySelector('.titleify')
const resulting = document.querySelector('.result')
let newLi = document.createElement('li')

const setResultFree = () =>{
    resulting.innerHTML = '';
}

const setInputFree = () =>{
    userInput.value = ''
}

const plusNineThousand = ()=>{
    setResultFree()
    let result = biggify(Number(userInput.value))
    newLi.innerText = result
    resulting.appendChild(newLi)
    setInputFree()
}

const blastOff = () =>{
    setResultFree()
    let result = nasafy(Number(userInput.value))
    for(let i = 0; i<result.length; i++){
        let newLi = document.createElement('li')
        newLi.innerText = result[i]
        resulting.appendChild(newLi)
    }
    setInputFree()
}

const crazyCase = () =>{
    setResultFree()
    let result = crazify(userInput.value)
    newLi.innerText = result
    resulting.appendChild(newLi)
    setInputFree()
}

const reverseIt = () =>{
    setResultFree()
    let result = reversify(userInput.value)
    newLi.innerText = result
    resulting.appendChild(newLi)
    setInputFree()
}

const titleIt = () =>{
    setResultFree()
    let result = titleify(userInput.value)
    newLi.innerText = result
    resulting.appendChild(newLi)
    setInputFree()
}



biggifyButton.addEventListener('click', plusNineThousand)
nasafyButton.addEventListener('click', blastOff)
crazyfyButton.addEventListener('click', crazyCase)
reverseButton.addEventListener('click', reverseIt)
titleCaseButton.addEventListener('click', titleIt)