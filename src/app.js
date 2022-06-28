const navbar = document.querySelector('.navbar-color');
window.onscroll = () => {
    if (window.scrollY > 180) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};