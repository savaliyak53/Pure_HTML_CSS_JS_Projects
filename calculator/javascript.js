
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');


buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
    });
});

equal.addEventListener('click', function (e) {
    if (screen.value === '') {
        screen.value = "please enter"
    } else {
        let answer = eval(screen.value);
        screen.value = answer
    }  
})
// solve this function proble

clear.addEventListener('click', function (e) {
    screen.value = ""
})

