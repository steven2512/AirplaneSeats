const container = document.querySelector('.container')
const seats = document.querySelectorAll('.seat')
const count = document.querySelector('#count')
const cost = document.querySelector('#cost')


seats.forEach((seat) => {
    seat.addEventListener('click', function () {
        let countInt = parseInt(count.innerText)
        let newValue = countInt + 1
        count.innerText = newValue.toString()
        debugger;
    })
})