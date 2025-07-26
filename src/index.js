import './styles.css'
import {LoadHomePage} from './homePage.js'

const content = document.querySelector('#content')

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

    navBar.append(homeBtn, menuBtn, aboutBtn)

    return navBar
}

content.append(LoadNavBar())
content.appendChild(LoadHomePage())