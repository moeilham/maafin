const wrapper = document.querySelector('.wrapper')
const question = document.querySelector('.question')
const questionTwo = document.querySelector('.questionTwo')
const questionThree = document.querySelector('.questionThree')
const questionFour = document.querySelector('.questionFour')
const yesBtn = document.querySelector('.yes-btn')
const noBtn = document.querySelector('.no-btn')
const btnGroup = document.querySelector('.btn-group')
const gifImage = document.querySelector('.gif-image')

const updateGif = (src) => {
  if (gifImage) gifImage.src = src
}

yesBtn.addEventListener('click', () => {
  question.textContent = 'yeeeey'
  questionTwo.textContent = 'tiimaacii yaa my love'
  questionThree.textContent = 'yaa my love'
  questionFour.textContent = '😍'
  btnGroup.style.display = 'none'
  updateGif('https://media.giphy.com/media/euW6JDwrMn0BqyNC8t/giphy.gif')
})

const escapeNoButton = () => {
  const cardRect = wrapper.getBoundingClientRect()
  const buttonRect = noBtn.getBoundingClientRect()
  const padding = 14
  const minDistanceFromCenter = Math.min(cardRect.width, cardRect.height) * 0.2
  const cardCenterX = cardRect.left + cardRect.width / 2
  const cardCenterY = cardRect.top + cardRect.height / 2
  let left
  let top
  let attempts = 0

  noBtn.classList.add('escaping')

  do {
    left = cardRect.left + padding + Math.random() * Math.max(1, cardRect.width - buttonRect.width - padding * 2)
    top = cardRect.top + padding + Math.random() * Math.max(1, cardRect.height - buttonRect.height - padding * 2)
    attempts += 1
  } while (
    Math.hypot(left + buttonRect.width / 2 - cardCenterX, top + buttonRect.height / 2 - cardCenterY) < minDistanceFromCenter &&
    attempts < 20
  )

  noBtn.style.left = `${left}px`
  noBtn.style.top = `${top}px`
  noBtn.classList.remove('dodging')
  void noBtn.offsetWidth
  noBtn.classList.add('dodging')
  updateGif('https://media.giphy.com/media/yIMbgB6AmsahkY3jHH/giphy.gif')
}

// On desktop, escape as soon as the pointer gets close. Touch devices use click.
noBtn.addEventListener('pointerenter', (event) => {
  if (event.pointerType === 'mouse') escapeNoButton()
})
noBtn.addEventListener('click', escapeNoButton)
