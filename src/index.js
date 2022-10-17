import './style.css';
import Hamburger from './hamburger.png';
import RadBarrel from './radioactive.png';
import MoltenSkins from './potato-peeled.jpg';
import RadFries from './rad-fries.jpg';
import BlueSoda from './blue-soda.jpg';

const contacts = [{
        name: "Mr. Harris Burger, Sr",
        title: "Co-Owner and Chef",
        phone: "555-555-5554",
        email: "totallyRealEmail@notFake.com",
        img: "",
        attribution: '',
    },
    {
        name: "Mrs. Harris Burger",
        title: "Co-Owner and Chef",
        phone: "555-555-5555",
        email: "perfectlyRealEmail@notFake.com",
        img: "",
        attribution: '',
    },
    {
        name: "Mr. Harris Burger, Jr",
        title: "Itern",
        phone: "555-555-5556",
        email: "totallyRealEmail@notFake.com",
        img: "",
        attribution: '',

    }
]

function buildContactUs(contacts) {

    const radContent = document.getElementById("radContent");
    radContent.innerHTML = "";

    const titleDiv = document.createElement("div");
    titleDiv.classList = "radBlock title";

    const myFirstRadBarrel = new Image();
    myFirstRadBarrel.src = RadBarrel;
    myFirstRadBarrel.setAttribute("width", "50px");

    const mySecondRadBarrel = new Image();
    mySecondRadBarrel.src = RadBarrel;
    mySecondRadBarrel.setAttribute("width", "50px");

    const titleText = document.createElement("h1");
    titleText.textContent = "Contact Us";

    titleDiv.appendChild(myFirstRadBarrel);
    titleDiv.appendChild(titleText);
    titleDiv.appendChild(mySecondRadBarrel);

    radContent.appendChild(titleDiv);
    console.log(contacts);
    contacts.forEach((contact) => {
        console.log(contact);

        const contactDiv = document.createElement('div');
        contactDiv.classList = "radBlock";

        const contactName = document.createElement('h3');
        contactName.classList = "contactName";
        contactName.textContent = contact.name;
        contactDiv.appendChild(contactName);

        const contactTitle = document.createElement('p');
        contactTitle.classList = "title";
        contactTitle.textContent = contact.title;
        contactDiv.appendChild(contactTitle);

        const contactPhone = document.createElement('p');
        contactPhone.classList = "phone";
        contactPhone.textContent = contact.phone;
        contactDiv.appendChild(contactPhone);

        const contactEmail = document.createElement('p');
        contactEmail.classList = "email";
        contactEmail.textContent = contact.email;
        contactDiv.appendChild(contactEmail);

        const contactImg = document.createElement('img');
        contactImg.classList = "contactImage";
        contactImg.src = contact.img;
        contactImg.width = "100";
        contactImg.height = "100";
        contactImg.alt = "A picture of a person";
        contactDiv.appendChild(contactImg);

        radContent.appendChild(contactDiv);

    })
}

const menu = [{
        name: "Appetizers",
        content: [{
                name: "Molten Skins",
                description: "Hot, savory, melty, crispy potato skins",
                price: "$3.50",
                img: MoltenSkins,
                alt: "A picture of molten skins",
                attribution: '<a href="https://www.freepik.com/free-vector/potato-peeled-3d-isolated-realistic-potato-vegetable-whole-half-peeled_2238454.htm#query=potato%20skins&position=0&from_view=search&track=sph">Image by vectorpouch</a> on Freepik'
            },
            {
                name: "Rad Fries",
                description: "French fries but they're a little bitey",
                price: "$1.25",
                img: RadFries,
                alt: "A picture of rad fries",
                attribution: '<a href="https://www.freepik.com/free-vector/angry-french-fries-cartoon-character-monochrome-fast-food-ad-menu-card-design_31299746.htm#query=radioactive%20fries&position=10&from_view=search&track=ais">Image by Rochak Shukla</a> on Freepik'
            }
        ]
    },
    {
        name: "Drinks",
        content: [{
            name: "Blue Barrel",
            description: "A slurp as good as anything else on this menu",
            price: "$2.00",
            img: BlueSoda,
            alt: "A picture of soda",
            attribution: '<a href="https://www.freepik.com/free-vector/realistic-soda-with-ice-advertisement_4398928.htm#query=soda&position=17&from_view=search&track=sph">Image by pikisuperstar</a> on Freepik'
        }]
    },
    {
        name: "Main Dishes",
        content: [{
                name: "Radburger",
                description: "Our classic burger with moderate amounts of radiation",
                price: "$1.50",
                img: "",
                alt: "A picture of radburger",
                attribution: ''
            },
            {
                name: "Radburger with Cheese",
                description: "Our classic burger with cheese",
                price: "$2.00",
                img: "",
                alt: "A picture of radburger with cheese",
                attribution: ''
            },
            {
                name: "Radburger Deluxe",
                description: "Our classic burger with cheese AND bacon",
                price: "$4.00",
                img: "",
                alt: "A picture of radburger with cheese AND backon",
                attribution: ''
            }
        ]
    },
    {
        name: "Desserts",
        content: [{
            name: "Susquehanna River Milkshake",
            description: "Made with fresh milk from the surrounding river",
            price: "$5.00",
            img: "",
            alt: "A picture of a milkshake",
            attribution: ''
        }]
    }
];

function buildMenu(menu) {

    const radContent = document.getElementById("radContent");
    radContent.innerHTML = "";

    const titleDiv = document.createElement("div");
    titleDiv.classList = "radBlock title";

    const myFirstRadBarrel = new Image();
    myFirstRadBarrel.src = RadBarrel;
    myFirstRadBarrel.setAttribute("width", "50px");

    const mySecondRadBarrel = new Image();
    mySecondRadBarrel.src = RadBarrel;
    mySecondRadBarrel.setAttribute("width", "50px");

    const titleText = document.createElement("h1");
    titleText.textContent = "Harrisburgers Menu";

    titleDiv.appendChild(myFirstRadBarrel);
    titleDiv.appendChild(titleText);
    titleDiv.appendChild(mySecondRadBarrel);

    radContent.appendChild(titleDiv);

    menu.forEach((section) => {

        const newTitleBlock = document.createElement("div");
        newTitleBlock.classList = "radBlock menuTitle";

        const titleText = document.createElement("h2");
        titleText.textContent = section.name;

        newTitleBlock.appendChild(titleText);
        radContent.appendChild(newTitleBlock);

        section.content.forEach((item) => {

            const contactDiv = document.createElement('div');
            contactDiv.classList = "radBlock";

            const itemTitle = document.createElement('h3');
            itemTitle.classList = "itemTitle";
            itemTitle.textContent = item.name;
            contactDiv.appendChild(itemTitle);

            const itemDescription = document.createElement('p');
            itemDescription.classList = "description";
            itemDescription.textContent = item.description;
            contactDiv.appendChild(itemDescription);

            const itemPrice = document.createElement('h4');
            itemPrice.classList = "price";
            itemPrice.textContent = item.price;
            contactDiv.appendChild(itemPrice);

            const itemImg = document.createElement('img');
            itemImg.classList = "itemImage";
            itemImg.src = item.img;
            itemImg.width = "100";
            itemImg.height = "100";
            itemImg.alt = item.alt;
            contactDiv.appendChild(itemImg);

            radContent.appendChild(contactDiv);

        })
    })

}

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
        navItem.addEventListener('click', (e) => {
            if (item === "Home") {
                buildRadBlocks();
            } else if (item === "Menu") {
                buildMenu(menu);
            } else if (item === "Contact") {
                buildContactUs(contacts);
            }
        });
        navBar.appendChild(navItem);
    }))

}

function buildRadBlocks() {
    const radContent = document.getElementById("radContent");
    radContent.innerHTML = "";

    const titleDiv = document.createElement("div");
    titleDiv.classList = "radBlock title";

    const myFirstRadBarrel = new Image();
    myFirstRadBarrel.src = RadBarrel;
    myFirstRadBarrel.setAttribute("width", "50px");

    const mySecondRadBarrel = new Image();
    mySecondRadBarrel.src = RadBarrel;
    mySecondRadBarrel.setAttribute("width", "50px");

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