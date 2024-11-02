const menuBtn = document.querySelector('.js-menu')
const html = document.querySelector('html')
const body = document.body

const footerBtns = [].slice.call(document.querySelectorAll('.js-footer-btn'))

menuBtn.addEventListener('click', () => {
  body.classList.remove('show-catalog')

  if (body.classList.contains('show-menu')) {
    body.classList.remove('show-menu')
    html.removeAttribute('style')
  } else {
    body.classList.add('show-menu')
    html.style.overflow = 'hidden'
  }
})

footerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('is-active')
  })
})
