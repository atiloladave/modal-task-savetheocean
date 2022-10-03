const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')
const pledgeForm = document.getElementById('pledge-form')
const modalText = document.getElementById('modal-text')


setTimeout(function() {
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function() {
    modalChoiceBtns.classList.toggle('modal-btns-reverse')
})

pledgeForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const pledgeFormData  = new FormData(pledgeForm)
    const fullName = pledgeFormData.get('fullName')
    

    modalText.innerHTML = `
                <div class="modal-inner-loading">
                <img src="img/loading.svg" class="loading">
                <p id="upload-text">Making your pledge...</p>
                </div>`

                setTimeout(function(){
                    document.getElementById('upload-text').innerText = `Uploading your pledge. You are part of the 10% changing the world...
                    `

                }, 1500)

                setTimeout(function(){
                    document.getElementById('modal-inner').innerHTML = `
                    <h2>Thanks <span class="modal-display-name">${fullName}</span>, You're Amazing! </h2>
                    <p>We have recorded your pledge 🥳.</p>
                    <div class="pledge-gif">
                        <img src="img/done.gif" class="success-img">
                    </div>
                `
                }, 3000)
})
