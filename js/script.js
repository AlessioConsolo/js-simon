let randomNumbers = [];
const numbersList = document.getElementById("randomNumbers");

while (randomNumbers.length < 5) {
  let num = Math.floor(Math.random() * 100 + 1);
  if (!randomNumbers.includes(num)) {
    randomNumbers.push(num);
  }
}

numbersList.innerHTML = `<h1>Ricorda questi 5 numeri: <span>${randomNumbers.join(
  ", "
)}</span></h1><br>`;

setTimeout(function () {
  numbersList.querySelector("span").innerHTML = "";
}, 30000);

setTimeout(function () {
  for (i = 0; i < 5; i++) {
    let input = prompt("Inserisci un numero");
    if (randomNumbers.includes(parseInt(input))) {
      numbersList.innerHTML += `<h2>Bravo! Hai indovinato il numero ${input}`;
    } else {
      numbersList.innerHTML += `<h2>Peccato! Il numero ${input} non è stato
              indovinato</h2>`;
    }
  }
}, 30000);
