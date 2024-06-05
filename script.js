let container = document.querySelector('#container');

function build (n) {
    for (let i = 0; i<n*n; i++) {
        let div = document.createElement('div');
        let hw = 690/n
        div.setAttribute("style", `border: 1px solid black; width: ${hw}px; height: ${hw}px;`);
        container.appendChild(div);
    
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'red';
        })
    }
}
build(16)

let p = document.querySelector('p');
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    p.textContent = ''
    let x;
    x = prompt("Enter a number from 1 to 100", '16 (default)');
    if (x == null) {
        return
    }
    else if (x == '' || x == '16 (default)') {
        x = 16;
    }
    else if (x < 1 || x > 100 || !parseInt(x)) {
        p.textContent = "You've entered an invalid input. (Resetting to default)"
        x = 16;
    }
    container.innerHTML = '';
    build(x);
})