let heading = document.getElementById("heading")
let heading1 = document.getElementById("heading1")
let menu = document.getElementById("menu")
let links = document.querySelectorAll(".link")
let home = document.getElementById("navBack")
let About = document.getElementById('About')
let Contact = document.getElementById('Contact')
let Projects = document.getElementById('Projects')
let main = document.getElementById('main')
let menuButton = document.getElementById('menuButton')

let r = document.querySelector(":root")

let lightMode = document.getElementById('lightMode')
let darkMode = document.getElementById('darkMode')

 




lightMode.addEventListener('click', function (params) {
    r.style.setProperty('--bgColor', 'white')
    r.style.setProperty('--txtColor', 'black')
    lightMode.style.display = 'none'
    darkMode.style.display = 'block'
    darkMode.style.pointerEvents = 'all'
    lightMode.style.pointerEvents = 'none'
    
    
    
  
})
darkMode.addEventListener('click', function (params) {
    r.style.setProperty('--bgColor', 'black')
    r.style.setProperty('--txtColor', 'white')
    lightMode.style.display = 'block'
    darkMode.style.display = 'none'
    darkMode.style.pointerEvents = 'none'
    lightMode.style.pointerEvents = 'all'
})




heading.addEventListener('click', function showMenu()
 {
    menu.className = 'show'
    
})

heading1.addEventListener('click', function showMenu(){

    menu.className = 'show'

})


    


home.addEventListener("click", function ()
 {
    

        menu.className = "zoomOut"
        heading.className =  'heading'
        document.getElementById('heading1').className = 'show'
        main.className = 'show'
    

    
    
})


menuButton.addEventListener('click', function (params) {
    menu.className = 'show'
    if (About.className === 'show') {
        About.className = 'zoomOut'
    }
    if (Projects.className === 'show') {
        Projects.className = 'zoomOut'
    }
    if (Contact.className === 'show') {
        Contact.className = 'zoomOut'
    }
    
    
    
    menuButton.className = 'zoomOut'
    
    
})

links.forEach(links => {
    links.addEventListener("click", function (params) {
        
        menu.className = 'zoomOut'
        main.className = 'zoomOut'
        document.getElementById(`${links.innerText}`).className = 'show'
        menuButton.className = 'show'
    })
})



