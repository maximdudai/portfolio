(function() {
    const menuButton = document.querySelector("[data-menu='button']");
    const menuList = document.querySelector("[data-menu='list']");

    menuButton.addEventListener('click', openMenu);

    function openMenu() 
    {
        menuList.classList.toggle('active')
        menuButton.classList.toggle('active')
    }  
})();
const arrowUp = document.querySelector('.up-arrow');
window.onscroll = () => arrowUp.style.visibility = window.scrollY >= 125 ? 'visible' : 'hidden';
arrowUp.addEventListener("click", () => window.scroll(0, 0));
const checkDefault = (e) => {
    if(window.scrollY === 0.0) {
        e.preventDefault();
    }
};
const resetUrl = () => {
    window.location.href = '#';
};