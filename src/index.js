import './style.css';
import Hamburger from './hamburger.png';
import RadBarrel from './radioactive.png';

function buildNavBar() {
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

function buildRadBlocks() {
    const radContent = document.getElementById("radContent");

    const titleDiv = document.createElement("div");
    titleDiv.classList = "radBlock title";

    const myFirstRadBarrel= new Image();
    myFirstRadBarrel.src = RadBarrel;
    myFirstRadBarrel.setAttribute("width", "50px");
    myFirstRadBarrel.textContent = "MENU";
    
    const mySecondRadBarrel = new Image();
    mySecondRadBarrel.src = RadBarrel;
    mySecondRadBarrel.setAttribute("width", "50px");
    mySecondRadBarrel.textContent = "MENU";

    const titleText = document.createElement("h1");
    titleText.textContent = "Harrisburgers";

    titleDiv.appendChild(myFirstRadBarrel);
    titleDiv.appendChild(titleText);
    titleDiv.appendChild(mySecondRadBarrel);


    const quoteDiv = document.createElement("div");
    quoteDiv.classList = "radBlock";

    const quote = document.createElement("em");
    quote.classList = "quote";
    quote.textContent = "Harrisburgers are lit. I eat one, and I immediately want another. It's like they burn a whole inside your stomach!";

    const customer = document.createElement("div");
    customer.classList = "customer";
    customer.textContent = "--Fermi Radworth";

    quoteDiv.appendChild(quote);
    quoteDiv.appendChild(customer);


    const hoursDiv = document.createElement("div");
    hoursDiv.classList = "radBlock";

    const hours = document.createElement("div");
    hours.classList = "hours";
    hours.textContent = "OPEN 24/7";

    hoursDiv.appendChild(hours);


    const addressDiv = document.createElement("div");
    addressDiv.classList = "radBlock";

    const address = document.createElement("div");
    address.classList = "address";
    address.textContent = "Three Mile Island Historical Marker, 3140 River Rd, Middletown, PA 17057";

    addressDiv.appendChild(address);


    radContent.appendChild(titleDiv);
    radContent.appendChild(quoteDiv);
    radContent.appendChild(hoursDiv);
    radContent.appendChild(addressDiv);
}

buildNavBar();
buildRadBlocks();