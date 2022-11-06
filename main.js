function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icons/icon-${player1}.svg" alt="Bandeira do ${player1}" tittle="Bandeira do ${player1}"/>
      <strong>${hour}</strong>
      <img src="./assets/icons/icon-${player2}.svg" alt="Bandeira da ${player2}" 
      tittle="Bandeira do ${player1}"/>
    </li>
  `
}

let delay = -0.45
function createCard(date, day, games) {
  delay = delay + 0.45
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard("28/11", "segunda", createGame("switzerland", "13:00", "brazil")) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
