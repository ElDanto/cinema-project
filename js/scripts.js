const schermeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
let cost = 300;
let totalPrice = 0;
schermeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains("booked") && !event.target.classList.contains("light")) {
        event.target.classList.toggle("active");
        let activeSeats = schermeSvg.querySelectorAll('.active').length;
        totalPrice = activeSeats * cost;
    }
    totalPriceTag.textContent = totalPrice;
});