const catalogBtns = [].slice.call(document.querySelectorAll('.js-catalog'))
const overflow = [].slice.call(document.querySelectorAll('.js-overflow'))
const catalogItems = [].slice.call(document.querySelectorAll('.js-catalog-item'))
const closeBtns = [].slice.call(document.querySelectorAll('.js-close-catalog'))
const backBtns = [].slice.call(document.querySelectorAll('.js-back-catalog'))

const html = document.querySelector('html')
const body = document.body

const closeCatalog = () => {
  body.classList.remove('show-catalog')
  html.removeAttribute('style')
  catalogItems.forEach(item => item.classList.remove('is-active'))
}

catalogBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    body.classList.remove('show-menu')

    if (body.classList.contains('show-catalog')) {
      closeCatalog()
    } else {
      body.classList.add('show-catalog')

      if (window.innerWidth <= 900) {
        html.style.overflow = 'hidden'
      }
    }
  })
})

overflow.forEach(item => {
  item.addEventListener('click', () => {
    closeCatalog()
  })
})

catalogItems.forEach(item => {
  item.addEventListener('click', () => {
    catalogItems.forEach(item => item.classList.remove('is-active'))

    item.classList.add('is-active')
  })
})

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    closeCatalog()
  })
})

backBtns.forEach(btn => {
  btn.addEventListener('click', evt => {
    evt.stopPropagation()

    catalogItems.forEach(item => item.classList.remove('is-active'))
  })
})
