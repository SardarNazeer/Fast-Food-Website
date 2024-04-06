'use strict';

// add event listener on multiple elements

const addEventOnElements = function (elements, eventType, callback){
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

// MOBILE NAV

const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const togglerNav = function (){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElements(navbarTogglers, "click", togglerNav);