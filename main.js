const navigation = document.querySelector('.navigation');
const listGroup = document.querySelector('.list-group');
const hamburger = document.querySelector('.hamburger');

function smallNavigation() {
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

    
}

function changeClass() {
    if(hamburger.firstElementChild.classList.contains('fa-bars')) {
        return hamburger.firstElementChild.className = "fas fa-times";
    } else {
        return hamburger.firstElementChild.classList = "fas fa-bars";
    }
}

hamburger.addEventListener("click", changeClass);