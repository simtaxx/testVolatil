const header = document.querySelector("header")
document.addEventListener('scroll', () =>{
  header.classList.add('header--scroll')
  if(window.scrollY === 0) header.classList.remove('header--scroll')
})