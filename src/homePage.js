import pizza from './assets/face.jpg'
import otherPizza from './assets/anotherimg.jpg'

function LoadHomePage() {
    const page = document.createElement('div')

    const mainImg = document.createElement('div')
    const secondImg = document.createElement('div')
    const textWrap = document.createElement('div')
    const overlapCard = document.createElement('div')
    const orderBtn = document.createElement('button')

    const h2 = document.createElement('h2')
    const p = document.createElement('p')

    const h1one = document.createElement('h1')
    const h1two = document.createElement('h1')

    h1one.textContent = 'EAT WITH CAUTION!'
    h1two.textContent = 'Might get addicted!'

    orderBtn.textContent = 'Order Now'

    h2.textContent = 'get a Pizza eating disorder!'
    p.textContent = 'What are you waiting for?'

    const pizzaImg = document.createElement('img')
    const otherPizzaImg = document.createElement('img')

    pizzaImg.src = pizza
    otherPizzaImg.src = otherPizza

    mainImg.append(overlapCard,pizzaImg)
    overlapCard.append(h2, p, orderBtn)
    textWrap.append(h1one, h1two)

    secondImg.append(otherPizzaImg, textWrap)


    mainImg.classList.add('main-img')
    overlapCard.classList.add('overlap-card')
    orderBtn.classList.add('order-btn')
    pizzaImg.classList.add('pizza-img')
    secondImg.classList.add('second-img')
    otherPizzaImg.classList.add('other-pizza-img')
    textWrap.classList.add('text-wrap')

    page.append(mainImg, secondImg)

    return page
}

export{ LoadHomePage}