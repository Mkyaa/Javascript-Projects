const modalOpen =document.querySelector('.open-model-btn')
const modal =document.querySelector('.modal')
const modalClose =document.querySelector('.icon-cancel')

modalOpen.addEventListener('click',()=>{
    modal.classList.add('modal-open')
})
modalClose.addEventListener('click',()=>{
    modal.classList.remove('modal-open')
})