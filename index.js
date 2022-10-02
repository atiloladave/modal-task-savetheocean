const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')


setTimeout(function() {
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function() {
    modalChoiceBtns.classList.toggle('modal-btns-reverse')
})


