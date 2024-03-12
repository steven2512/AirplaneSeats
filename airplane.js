const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const cost = document.querySelector('#cost')
const price = document.querySelector('#airplane')


seats.forEach((seat) => {
    seat.addEventListener('click', function () {
        let countInt = parseInt(count.innerText)
        let newCount = countInt + 1
        count.innerText = newCount.toString()
        seat.className = 'seat selected'
        cost.innerText = (parseInt(price.value) * newCount).toString()
    })
})

