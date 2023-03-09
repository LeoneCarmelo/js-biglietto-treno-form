/* Descrizione:
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere

Età del passeggero Sulla base di queste 

informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, 
secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65. */

/* Data */
const priceKm = 0.21;
const youngDiscount = 20;
const adultDiscount = 40;
const maxAge = 18;
const minAge = 65;
const nameEl = document.getElementById('name')
const kmEl = document.getElementById('km')
const ageEl = document.getElementById('age')
const btnEl = document.querySelector('input[type="button"]')
const resetEl = document.querySelector('input[type="reset"]')
const ticketEl = document.getElementById('ticket_cost')
const ticketName = document.getElementById('nome_passeggero')
const offertaEl = document.getElementById('offerta')
const carrozzaEl = document.getElementById('carrozza')
const capEl = document.getElementById('cap')




/* Code */
const costTotalKm = kmEl.value * priceKm;
let ticketCost
let ticketType

btnEl.addEventListener('click', function() {
 
    if (ageEl.options.selectedIndex == 0 ) {
        ticketCost = costTotalKm - (costTotalKm * youngDiscount) / 100
        ticketType = 'Tariffa giovani'
    } else if (ageEl.options.selectedIndex == 2) {
        ticketCost = costTotalKm - (costTotalKm * adultDiscount) / 100
        ticketType = 'Tariffa over 65'
    } else {
        ticketCost = costTotalKm
        ticketType = 'Tariffa standard'
    }
    
    ticketName.innerHTML = nameEl.value
    offertaEl.innerHTML = ticketType
    carrozzaEl.innerHTML = Math.floor(Math.random() * 50)
    capEl.innerHTML = Math.floor(Math.random() * 100000)
    ticketEl.innerHTML = `${ticketCost.toFixed(2)} €`
})

resetEl.addEventListener('click', function() {
    nameEl.value = ''
    kmEl.value = ''
    ticketEl.innerHTML = ''
    ticketName.innerHTML = ''
    offertaEl.innerHTML = ''
    carrozzaEl.innerHTML = ''
    capEl.innerHTML = ''
})
