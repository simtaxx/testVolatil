document.addEventListener('scroll', (event) =>{
  let header = document.querySelector("header")
  header.classList.add('header--scroll')
  if(window.scrollY === 0) {
    header.classList.remove('header--scroll')
  }
})