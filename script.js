window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
});

function elemekElerese1() {
  const ELEM = document.getElementById("f1");
  console.log(ELEM.innerHTML);
}

function elemekElerese2() {
  const ELEM = document.querySelectorAll("#ide")[0];
  console.log(ELEM);
  ELEM.innerHTML += "<p>Jó reggelt!</p>";
}

function elemekElerese3() {
  const ELEM = document.getElementsByClassName("ide")[0];
  ELEM.innerHTML += "<p>Jó reggelt!</p>";
}

function elemekElerese4() {
  var velSzamok = new Array();
  for (let i = 0; i < 5; i++) {
    let velSzam = Math.floor(Math.random() * 21) + 10;
    console.log(velSzam);
    velSzamok[i] = velSzam;
  }
  const LISTA = document.getElementsByClassName("lista")[0];
  for (let i = 0; i < velSzamok.length; i++) {
    LISTA.innerHTML += `<p>${velSzamok[i]}</p>`;
  }
}

