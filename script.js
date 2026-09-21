const wrapper = document.querySelector('.wrapper')
const question = document.querySelector('.question')
const questionTwo = document.querySelector('.questionTwo')
const questionThree = document.querySelector('.questionThree')
const yesBtn = document.querySelector('.yes-btn')
const noBtn = document.querySelector('.no-btn')
const btnGroup = document.querySelector('.btn-group')


const wrapperRect = wrapper.getBoundingClientRect()
const noBtnRect = noBtn.getBoundingClientRect()

yesBtn.addEventListener('click', () => {
  question.innerHTML = 'yeeeey'
  questionTwo.innerHTML = 'tiimaacii yaa my love'
  questionThree.innerHTML = 'yaa my love'
  questionFour.innerHTML = '😍'
  btnGroup.style.display = 'none'
  const iframe = document.querySelector('.gif iframe')
  iframe.src = 'https://giphy.com/embed/euW6JDwrMn0BqyNC8t'
})

noBtn.addEventListener('click', () => {
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';

  const iframe = document.querySelector('.gif iframe');
  iframe.src = 'https://giphy.com/embed/yIMbgB6AmsahkY3jHH';
});

