// selezioniamo il container
const container = document.querySelector(".container");

// generiamo i numeri da 1 a 100
for(let i =  1; i <= 100; i++){
    // creiamo il div generico
    const square = document.createElement("div");
    // aggiungiamo la classe "square" al div
    square.classList.add("square"); 
    // aggiungere il contenuto al div
    square.append(i);
    // aggiungere il div al container
    container.append(square)
    if (i % 3 === 0 && i % 5 === 0) {
        document.write('<p class="fizzbuzz">FizzBuzz</p>');
    } else if (i % 3 === 0) {
        document.write('<p class="fizz">Fizz</p>');
    } else if (i % 5 === 0) {
        document.write('<p class="buzz">Buzz</p>');
    } else {
        document.write('<p class="normal">' + i + '</p>');
    }
}