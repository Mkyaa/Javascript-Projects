const navToggle = document.querySelector('.nav-toggle')
const menuLinks = document.querySelector('.links')
const navCenter = document.querySelector('.nav-center')

navToggle.addEventListener('click',()=>{    
    if(menuLinks.classList.contains('active')){
        menuLinks.classList.remove('active')
        
    }
    else{
        menuLinks.classList.add('active')
    }
})
