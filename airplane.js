const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const cost = document.querySelector('#cost')
const classSelected = document.querySelector('#airplane')
const classB = document.querySelector('#airplane-container')
const classA = document.querySelector('.text')


function selectedUpdateCount() {
    const ticketPrice = +(classSelected.value)
    let allSelectedSeats = document.querySelectorAll('.row .seat.selected')
    let totalSeats = allSelectedSeats.length
    count.innerText = totalSeats.toString()
    cost.innerText = (ticketPrice * totalSeats).toString()
}

classSelected.addEventListener('change', () => {
    selectedUpdateCount()
})

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat')) {
        if (!e.target.classList.contains('occupied')) {
            e.target.classList.toggle('selected')
            selectedUpdateCount()
        }
    }
})