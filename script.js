const menuIcon = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
    let isMenuVisible = navbar.style.display === "block";
    if(isMenuVisible){
        navbar.style.display = 'none';
    } else{
        navbar.style.display = 'block'
    }
});