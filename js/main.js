const navigation = document.querySelector('.navigation');
const listGroup = document.querySelector('.list-group');
const hamburger = document.querySelector('.hamburger');

function generateSmallNav() {
    let smallNav = document.createElement('ul');
    smallNav.className = "smallNav";

    smallNav.innerHTML = `
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Services</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
    `;

    return smallNav;
};

function smallNavigation() {
    changeClass();
    const smallNav = generateSmallNav();
    
    if(window.innerWidth <= 700) {
        if(!navigation.querySelector('.smallNav')) {
            navigation.insertBefore(smallNav, hamburger);
        } else {
            smallNav.className += "slide-up";
            navigation.children[2].remove();
        }
    }
}

function changeClass() {
    if(hamburger.firstElementChild.classList.contains('fa-bars')) {
        return  hamburger.firstElementChild.className = "fas fa-times";
    } else {
        return hamburger.firstElementChild.className = "fas fa-bars";
    }
}

hamburger.addEventListener("click", smallNavigation);