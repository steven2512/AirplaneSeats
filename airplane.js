const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const cost = document.querySelector('#cost')
const classSelected = document.querySelector('#airplane')



// seat && cost count update function
function selectedUpdateCount() {
    const ticketPrice = +(classSelected.value)
    let allSelectedSeats = document.querySelectorAll('.row .seat.selected')
    const seatsIndex = [...allSelectedSeats].map((seat) => [...seats].indexOf(seat)
    )
    localStorage.setItem('allSelectedSeats', JSON.stringify(seatsIndex))
    let totalSeats = allSelectedSeats.length
    count.innerText = totalSeats.toString()
    cost.innerText = (ticketPrice * totalSeats).toString()
}

// movie select event
classSelected.addEventListener('change', (e) => {
    localStorage.setItem('movieSelected', e.target.selectedIndex);
    selectedUpdateCount();
})

// Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat')) {
        if (!e.target.classList.contains('occupied')) {
            e.target.classList.toggle('selected')
            selectedUpdateCount()
        }
    }

})