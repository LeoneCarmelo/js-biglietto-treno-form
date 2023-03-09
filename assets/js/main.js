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
const ticketEl = document.querySelector('p')
const ticketName = document.querySelector('span')



/* Code */
const costTotalKm = kmEl.value * priceKm;
let ticketCost

btnEl.addEventListener('click', function() {
    if (ageEl.options.selectedIndex == 0 ) {
        ticketCost = costTotalKm - (costTotalKm * youngDiscount) / 100
    } else if (ageEl.options.selectedIndex == 2) {
        ticketCost = costTotalKm - (costTotalKm * adultDiscount) / 100
    } else {
        ticketCost = costTotalKm
    }
    
    ticketName.innerHTML = nameEl.value
    ticketEl.innerHTML = `Il prezzo del biglietto è di ${ticketCost.toFixed(2)} €`
})

resetEl.addEventListener('click', function() {
    nameEl.value = ''
    kmEl.value = ''
})
