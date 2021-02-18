const burger = document.querySelector('#burger');
const menuContainer = document.querySelector('#menu-container');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
});

for(menuItem of menu.children) {
    menuItem.addEventListener('mousedown', function() {
        this.classList.toggle('active');
    });
    menuItem.addEventListener('mouseup', function() {
        this.classList.toggle('active');
    });
}