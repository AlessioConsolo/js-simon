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
