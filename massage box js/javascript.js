const form = document.querySelector('#massage-form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const massage = document.querySelector('#massage');
    const feedback = document.querySelector('.feedback');
    const massageContent = document.querySelector('.massage-content');

    if (massage.value === '') {
        feedback.classList.add('show');
        setTimeout(function () {
            feedback.classList.remove('show')
        }, 4000)
    } else {
        massageContent.textContent = massage.value
        massage.value = ''
    }

})