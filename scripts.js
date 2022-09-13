const options = document.querySelectorAll('[role="option"]')
const submitBtn = document.querySelector('#submit')
const cardFront = document.querySelector('.card--front')
const cardBack = document.querySelector('.card--back')
const result = document.querySelector('#result')
const error = document.querySelector('[role="error"]')

let value = 0

options.forEach(option => {
    option.addEventListener('click', chooseValueOption)

})

submitBtn.addEventListener('click', handleChooseValue)

function chooseValueOption(e) {
    const targetOption = e.target
    value = targetOption.dataset.value

    const tabContainer = targetOption.parentNode
    const mainContainer = tabContainer.parentNode

    if (mainContainer.querySelector('[aria-selected="true"]')) {
        mainContainer.querySelector('[aria-selected="true"]')
            .setAttribute('aria-selected', false)
    }

    targetOption.setAttribute('aria-selected', true)

}

function handleChooseValue() {
    if (value) {
        cardFront.setAttribute('aria-selected', false)
        cardBack.setAttribute('aria-selected', true)
        result.textContent = value
        return
    }

    error.setAttribute('aria-checked', true)

}

