import './styles.css'
import {LoadHomePage} from './homePage.js'

const content = document.querySelector('#content')
const header = document.querySelector('header')

function clearPage(){
    content.innerHTML = ''
}

function LoadNavBar() {
    const navBar = document.createElement('nav')
    const homeBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const aboutBtn = document.createElement('button')

    navBar.classList.add('navBar')
    homeBtn.classList.add('menu-btn', 'home')
    menuBtn.classList.add('menu-btn', 'menu')
    aboutBtn.classList.add('menu-btn', 'about')

    homeBtn.textContent = 'Home'
    menuBtn.textContent = 'Menu'
    aboutBtn.textContent = 'About'

    menuBtn.onclick = clearPage
    homeBtn.onclick = ()=> content.appendChild(LoadHomePage())

    navBar.append(homeBtn, menuBtn, aboutBtn)

    return navBar
}

header.append(LoadNavBar())
content.appendChild(LoadHomePage())