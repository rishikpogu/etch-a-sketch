let container = document.querySelector('#container');
let n = 16;
for (let i = 0; i<n*n; i++) {
    let div = document.createElement('div');
    let hw = 600/n
    div.setAttribute("style", `border: 1px solid black; width: ${hw}px; height: ${hw}px;`);
    container.appendChild(div);

    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'red';
    })
}