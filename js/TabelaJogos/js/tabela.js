function createGame(player1, hour, player2){
    return `
    <li>
    <img src=".times/icon-${player1}.png" alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src=".times/icon-${player2}.png" alt="Bandeira do ${player2}"/>
    `
}

let delay = -0.4;
function createCard(date, day, games){
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML = createCard("05/07", "Quarta-feira", createGame("corinthians", "21:00", "palmeiras"));