const inputRussia = document.querySelector('#inputRussiaWord')
const inputEnglish = document.querySelector('#inputEnglishWord')
const btnAdd = document.querySelector('#addWord')

const wordsBook = document.querySelector('.vocabulary__book')

// Error there has not words Fn
const errorNoWordsWindow = document.querySelector('#error-noword')

const errorNoWordsFn = () => {
    errorNoWordsWindow.style.top = '30px'
    setTimeout(() => {errorNoWordsWindow.style.top = '-100%'}, 8000)
}

const closeErrorNoWordBtn = document.querySelector('#error-noword')

closeErrorNoWordBtn.addEventListener('click', () => {
    errorNoWordsWindow.style.top = '-100%'
})


// Add words Function
const addWord = (event) => {
    // Check value input
    if (inputEnglish.value.length >= 1 && inputRussia.value.length >= 1) {
        // add word Fn
        const newWordCard = `<div class="item__words animate__animated  animate__fadeInUp"><p>${inputEnglish.value}</p><p>-</p><p>${inputRussia.value}</p><button type="button" id="btnRemove"></button></div>`
        wordsBook.insertAdjacentHTML('beforeend', newWordCard)
    } else {
        errorNoWordsFn()
    }

    inputEnglish.value = ''
    inputRussia.value = ''

    // Remove word Fn
    const removeBtns = document.querySelectorAll('#btnRemove')
    removeBtns.forEach(element => {
        element.addEventListener('click', event => {
            event.target.parentElement.remove()
        })
    })
}

btnAdd.addEventListener('click', addWord)


// Delete All Fn

const btnDeleteAll = document.querySelector('#removeAllWord')

btnDeleteAll.addEventListener('click', () => {
    const words = document.querySelectorAll('.item__words')

    words.forEach(element => {
        element.classList.remove('animate__fadeInUp')
        element.classList.add('animate__fadeOutLeft')
        setTimeout(() => {
            element.classList.add('animate__fadeInUp')
            element.classList.remove('animate__fadeOutLeft')
            element.remove()
        }, 2000)
    })
})