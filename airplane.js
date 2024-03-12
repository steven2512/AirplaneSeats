const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const cost = document.querySelector('#cost')
const classSelected = document.querySelector('#airplane')
const clearAll = document.querySelector('.clear')
savedInfo()

// Retrieve dat afrom localStorage and display all saved variables
function savedInfo() {
    const allSelectedSeats = JSON.parse(localStorage.getItem('allSelectedSeats'));
    const movieSelected = localStorage.getItem('movieSelected');
    if (allSelectedSeats !== null && allSelectedSeats.length > 0) {
        allSelectedSeats.forEach(seat => {
            seats[seat].classList.add('selected')
        });
    }
    if (movieSelected !== null) {
        classSelected.selectedIndex = movieSelected
    }

}

//Clear all current and past selections
function clearAll() {

}

// seat && cost count update function
function selectedUpdate() {
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

// Initial count and total set - avoid saving these to localStorage and save memory
selectedUpdate()