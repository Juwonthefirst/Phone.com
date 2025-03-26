console.log('Hello World!');

const grid = document.querySelector('.grid')
const display = document.querySelector('.input')
display.textContent = ''

for (let i = 0; i<10; i++){
    const div = document.createElement('button');
    div.textContent = i;
    if (i == 0){div.style.cssText = 'order: 1; grid-column-start: 2; grid-column-end: 3;'};
    div.addEventListener('click', () => {
        console.log(`Button ${i} was clicked`)
        display.textContent += i
    })
    grid.appendChild(div)
}

const call = document.createElement('button')
call.textContent = 'CALL';
call.style.cssText ='grid-area: 4/3/5/4;order:2;'
call.addEventListener('click', () => {
    const anchor = document.createElement('a')
    anchor.href = 'tel:' + display.textContent
    anchor.click()
    console.log(anchor)
})
grid.appendChild(call)