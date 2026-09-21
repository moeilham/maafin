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
  if (!gifImage) return
  gifImage.src = src
}

yesBtn.addEventListener('click', () => {
  question.innerHTML = 'yeeeey'
  questionTwo.innerHTML = 'tiimaacii yaa my love'
  questionThree.innerHTML = 'yaa my love'
  questionFour.innerHTML = '😍'
  btnGroup.style.display = 'none'
  updateGif('https://media.giphy.com/media/euW6JDwrMn0BqyNC8t/giphy.gif')
})

noBtn.addEventListener('click', () => {
  // Move the button within the card, rather than letting it disappear off-screen.
  noBtn.classList.add('escaping')

  const cardRect = wrapper.getBoundingClientRect()
  const buttonRect = noBtn.getBoundingClientRect()
  const padding = 12
  const maxLeft = Math.max(padding, cardRect.width - buttonRect.width - padding)
  const maxTop = Math.max(padding, cardRect.height - buttonRect.height - padding)

  const left = Math.floor(Math.random() * (maxLeft - padding + 1)) + padding
  const top = Math.floor(Math.random() * (maxTop - padding + 1)) + padding

  noBtn.style.left = `${cardRect.left + left}px`
  noBtn.style.top = `${cardRect.top + top}px`

  updateGif('https://media.giphy.com/media/yIMbgB6AmsahkY3jHH/giphy.gif')
})
