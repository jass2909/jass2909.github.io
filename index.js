let heading = document.getElementById("heading")
let menu = document.getElementById("menu")
let links = document.querySelectorAll(".link")
let home = document.getElementById("navBack")
let About = document.getElementById('About')
let Contact = document.getElementById('Contact')
let Projects = document.getElementById('Projects')
let main = document.getElementById('main')
let menuButton = document.getElementById('menuButton')




heading.addEventListener('click', function ()
 {
    menu.className = 'show'
    
})

home.addEventListener("click", function ()
 {
    

        menu.className = "zoomOut"
        heading.className = 'show'
        document.getElementById('heading1').className = 'show'
        main.className = 'show'
    

    
    
})


menuButton.addEventListener('click', function (params) {
    menu.className = 'show'
    About.className = 'zoomOut'
    Projects.className = 'zoomOut'
    Contact.className = 'zoomOut'
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



