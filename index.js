window.onload = () => {
    const container = document.querySelector('#board');
    const banner = document.querySelector('.dimensions');
    let dim = document.createElement('h3');
    dim.style.textAlign = 'right';

    const square = document.querySelector('div')
    square.addEventListener("mouseover", function(e) {
        e.target.classList.replace("square", "color")
    })

    create = () => {
        container.innerHTML = '';
        container.style.setProperty(
            "grid-template-columns", `repeat(16, 2fr)`);
        container.style.setProperty(
            "gird-template-rows", `repeat(16, 2fr)`);
        dim.textContent = '16 x 16';
        banner.appendChild(dim);
        for (let i=0; i<256; i++) {
            box = document.createElement('div');
            box.classList.add("square")
            // box.setAttribute('id', 'square');
            container.appendChild(box)
        }    
    }
    
    resize = (userInput) => {
        container.innerHTML = ''
        if(userInput > 16 || userInput < 2) {
            userInput = 16;
        }
        container.style.setProperty(
        "grid-template-columns", `repeat(${userInput}, 2fr)`);
        container.style.setProperty(
            "gird-template-rows", `repeat(${userInput}, 2fr)`);
        banner.removeChild(dim)
        dim.textContent = `${userInput} x ${userInput}`
        banner.appendChild(dim)
        for(let i=0; i<userInput*userInput; i++) {
            box = document.createElement('div');
            box.classList.add("square")
            // box.setAttribute('id', 'square');
            container.appendChild(box)
        }
    }

    create()

}