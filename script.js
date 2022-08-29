const box = document.querySelector('.box')
const changeColour = document.querySelector('.color')



const multiColors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']




changeColour.addEventListener('click' , () =>{

    let color = '#';
    for (let index = 0; index <6; index++) {
        let element = multiColors[randomNumbers(multiColors)];
        color += element;
    }
    console.log(color);
    bodyColor(color);
    
})

const randomNumbers = (arr) =>{
    const random  = Math.floor(Math.random() * arr.length);
    return random;
}

const bodyColor = (color) =>{
    // box.style.background = color;

    box.style.background = `linear-gradient(45deg,${color}, transparent)`;
    changeColour.style.background = `linear-gradient(45deg,${color}, transparent)`;
}

// changeColour();
