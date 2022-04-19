"use strict";
const dom = {
  result: document.getElementById("result"),
  winner: {
    name: document.getElementById("name"),
    nickname: document.getElementById("nickname"),
  },
  btn: document.getElementById("btn"),
};

let filterusers = users;
console.log(filterusers);

//Click event
dom.btn.onclick = () => {
  const winner = getRandomUser(filterusers);
  if (winner) {
    filterusers = getFilteredusers(filterusers, winner);
    renderWinner(winner);
    console.log(filterusers);
  } else {
    alert("Участники закончились!");
  }
};

// random function
function getRandomUser(users) {
  const maxIndex = users.length - 1;
  const winnerInd = Math.floor(Math.random() * maxIndex);
  return users[winnerInd];
}

//function block winner hidden
function renderWinner(winner) {
  dom.btn.style.display = "none";
  dom.result.style.display = "block";
  dom.winner.name.innerHTML = winner.name;
  dom.winner.nickname.innerHTML = winner.nickname;
}

function getFilteredusers(users, winner) {
  const filterusers = users.filter((user) => user.id !== winner.id);
  return filterusers;
}
