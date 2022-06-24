// Emphasizing Navbar:

const navBar = document.querySelector('.nav-bar')

// Step 2: Create Interactive Hire ME button:


let interval =""

const giveWork = document.getElementById('give-work')
let originalText = giveWork.innerText

const randomInt = max => Math.floor(Math.random() * max)
const randomFromArray = array => array[randomInt(array.length)]

const scrambleText = text => {
  const chars = '*?[]&@#)(.%$-_:/;?!'.split('')
  return text
    .split('')
    .map(x => randomInt(3) > 1 ? randomFromArray(chars) : x)
    .join('')
}
  
giveWork.addEventListener('mouseover', () => {
    giveWork.style.transition = "all 0.5s"
    giveWork.style.boxShadow = " -.7em .5em .4em rgba(255, 166, 0, 0.554)" 
    giveWork.style.position = "relative" 
    giveWork.style.left = "10px"
    giveWork.style.top = "-5px"
    interval = setInterval(() =>
        giveWork.innerText = scrambleText(originalText)
    , 150)
})
  
giveWork.addEventListener('mouseout', () => {
    
    clearInterval(interval) 
    giveWork.innerText = "Let's Interact"
    giveWork.style.boxShadow = "none" 
    giveWork.style.left = "-10px"
    giveWork.style.top = "5px"
})


// Expanding CV & Portfolio details:

const getCV = document.getElementById("expand-cv")
const cvSection = document.getElementById("cv-section")
let cvVisibility = "none"

const getPortfolio = document.getElementById("expand-portfolio")
const portSection = document.getElementById("portfolio-section")
let portVisibility = "none"


getCV.addEventListener('click', () => {
    cvSection.style.transition = "all 1s"
    if (cvVisibility == "none") {
        cvVisibility = "flex";
        portVisibility = "none"
    }
    else {cvVisibility = "none"}
    cvSection.style.display = cvVisibility
    portSection.style.display = portVisibility

    
})

getPortfolio.addEventListener('click', () => {

    if (portVisibility == "none") {
        portVisibility = "flex";
        cvVisibility = "none"
    }
    else {
        portVisibility = "none"

    }
    portSection.style.display = portVisibility
    cvSection.style.display = cvVisibility


    
})


