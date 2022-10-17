import './style.css';
import Hamburger from './hamburger.png';

function content() {
    const navBar = document.querySelector('.navBar');

    const NavItems = ['Home', 'Menu', 'Contact'];
    NavItems.forEach((item => {
        const navItem = document.createElement('div');
        navItem.classList = "navItem";

        const myHamburger = new Image();
        myHamburger.src = Hamburger;
        myHamburger.setAttribute("width", "50px");
        myHamburger.textContent = "MENU";
    
        
        navItem.appendChild(myHamburger);

        const navText = document.createElement('div');
        navText.classList = "navText";
        navText.textContent = item;
        
        navItem.appendChild(navText);
        navBar.appendChild(navItem);
    }))

}
content()