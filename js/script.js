const notice = document.querySelector('.notice')
const stepperEls = document.querySelectorAll('.stepper')
const burger = document.querySelector('.burger')
const header = document.querySelector('.header__list')

if (header) {
new TransferElements(
    {
      sourceElement: header,
      breakpoints: {
        767.98: {
          targetElement: document.querySelector('.header__bottom'),
          targetPosition: 1
        }
      }
    }
  )
}

if (burger) {
  const body = document.body
  const menu = document.querySelector('.header__bottom')
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active')
    menu.classList.toggle('header__bottom--active')
    body.classList.toggle('stop-scroll')
  })
}

if (notice) {
  const noticeClose = document.querySelector('.notice__close')
  noticeClose.addEventListener('click', () => {
    notice.classList.add('notice--hidden')
  })
}

if (stepperEls) {
  stepperEls.forEach(stepperEl => {
    const stepperInput = stepperEl.querySelector('.stepper__input')
    const stepperInputMinus = stepperEl.querySelector('.stepper__btn--minus')
    const stepperInputPlus = stepperEl.querySelector('.stepper__btn--plus')
    let stepperMin = Number(stepperInput.getAttribute('min'))
    let stepperMax = Number(stepperInput.getAttribute('max'))
    let count = Number(stepperInput.value)
  
    stepperInput.addEventListener('change', () => {
      stepperInputMinus.disabled = false
      stepperInputPlus.disabled = false
      
      if (stepperInput.value < stepperMin) {
        stepperInput.value = stepperMin
        stepperInputMinus.disabled = true
        stepperInputPlus.disabled = false
      }
      if (stepperInput.value > stepperMax) {
        stepperInput.value = stepperMax
        stepperInputPlus.disabled = true
        stepperInputMinus.disabled = false
      }
    })
    
    stepperInputPlus.addEventListener('click', () => {
      let count = Number(stepperInput.value)
      if (count < stepperMax) {
        stepperInputPlus.disabled = false
        stepperInputMinus.disabled = false
        count++
        stepperInput.value = count
      } 
      if (count === stepperMax) {
        stepperInputPlus.disabled = true
      }
    })
    
    stepperInputMinus.addEventListener('click', () => {
      let count = Number(stepperInput.value)
      if (count > stepperMin) {
        stepperInputPlus.disabled = false
        stepperInputMinus.disabled = false
        count--
        stepperInput.value = count
      } 
      if (count === stepperMin) {
        stepperInputMinus.disabled = true
      }
    })
  })
}
