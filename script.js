const wrapper = document.querySelector('.wrapper')
const question = document.querySelector('.question')
const questionTwo = document.querySelector('.questionTwo')
const questionThree = document.querySelector('.questionThree')
const questionFour = document.querySelector('.questionFour')
const yesBtn = document.querySelector('.yes-btn')
const noBtn = document.querySelector('.no-btn')
const btnGroup = document.querySelector('.btn-group')
const gifImage = document.querySelector('.gif-image')

const wrapperRect = wrapper.getBoundingClientRect()
const noBtnRect = noBtn.getBoundingClientRect()

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
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1
  const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1
  noBtn.style.left = i + 'px'
  noBtn.style.top = j + 'px'

  updateGif('https://media.giphy.com/media/yIMbgB6AmsahkY3jHH/giphy.gif')
})
