const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const cost = document.querySelector('#cost')
const classSelected = document.querySelector('#airplane')


seats.forEach((seat) => {
    seat.addEventListener('click', function () {
        if (seat.className !== 'seat selected') {
            let ticketPrice = +(classSelected.value)
            let seatTotal = +count.innerText + 1
            count.innerText = seatTotal.toString()
            seat.className = 'seat selected'
            cost.innerText = (ticketPrice * seatTotal).toString()
        }

    })
})

