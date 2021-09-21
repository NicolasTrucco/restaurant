import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'
//import _ from 'lodash';
import './style.css';

console.log('prueba index');

const $title = document.createElement("h1");
const $header = document.createElement("header");
const $content = document.getElementById("content");
const $nav = document.createElement("nav");
const $footer = document.createElement("footer");

$content.appendChild($header);
$header.appendChild($title);
$title.textContent = "Don Trucco";

document.body.style.backgroundImage = "url('images/background.jpg')";

$content.appendChild($nav);

home() 
menu()
contact() 

$content.appendChild($footer);
$footer.classList.add("footer");

const $copyright = document.createElement("p");
$copyright.textContent = "Copyright © 2021 Nicolas Trucco";

const $githubLink = document.createElement("a");
$githubLink.href = "https://github.com/NicolasTrucco";

const $githubIcon = document.createElement("i");
$githubIcon.classList.add("fab");
$githubIcon.classList.add("fa-github");


$footer.appendChild($copyright);
$footer.appendChild($githubLink);
$githubLink.appendChild($githubIcon);

let text = ['Home', 'Menu', 'Contact'];
let id = ['homeBtn','menuBtn','contactBtn']

text.forEach(function(el,index,id){
    const $btn  = document.createElement("button");
    $btn.className = 'btn'
    $btn.textContent = el;

    $nav.appendChild($btn);

})
const els = document.querySelectorAll('.btn');
for (var i=0; i < els.length; i++) {
els[i].setAttribute("id", id[i]);
}

let $homeDiv = document.getElementById("homeDiv");
let $menuDiv = document.getElementById("menuDiv");
let $contactDiv = document.getElementById("contactDiv");

const $menuBtn = document.getElementById('menuBtn');
const $homeBtn = document.getElementById('homeBtn');
const $contactBtn = document.getElementById('contactBtn');
const $buttons = document.querySelectorAll(".btn");


function functionHome () {
    menuDiv.style.display = 'none';
    contactDiv.style.display = 'none';
    homeDiv.style.display = 'flex'
    
    $menuBtn.setAttribute("class", 'btn');
    $contactBtn.setAttribute("class", 'btn');
    $homeBtn.setAttribute("class", 'btn-active');

}

function functionMenu () {
    menuDiv.style.display = 'grid';
    contactDiv.style.display = 'none';
    homeDiv.style.display = 'none'
    
    $homeBtn.setAttribute("class", 'btn');
    $contactBtn.setAttribute("class", 'btn');
    $menuBtn.setAttribute("class", 'btn-active');

}

function functionContact () {
    menuDiv.style.display = 'none';
    contactDiv.style.display = 'flex';
    homeDiv.style.display = 'none'

    $menuBtn.setAttribute("class", 'btn');
    $contactBtn.setAttribute("class", 'btn-active');
    $homeBtn.setAttribute("class", 'btn');
}
$homeBtn.addEventListener('click', functionHome)

function averga () {
    console.log('funca')
}
$menuBtn.addEventListener('click', functionMenu)

function averga3 () {
    console.log('funca3')
}
$contactBtn.addEventListener('click', functionContact)

