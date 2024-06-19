

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const container = document.querySelector(".container");

openBtn.addEventListener("click", () =>{
    container.classList.add('show-nav');
});

closeBtn.addEventListener("click", () => { container.classList.remove
('show-nav')
});





const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'MY NAME IS KATE, A BADASS WEB DESIGNER'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() { 
    textEl.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)

}
speedEl.addEventListener('input', (e) => speed = 300 / e. target.value)
