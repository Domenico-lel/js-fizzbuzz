// selezioniamo il container
const container = document.querySelector(".container");


for(let i =  1; i <= 100; i++){

    // creiamo il div generico
    const square = document.createElement("div");
    // aggiungiamo la classe "square" al div
    square.classList.add("square");
    // aggiungere il contenuto al div
    square.append(i);
    // aggiungere il div al container
    container.append(square)
    
}