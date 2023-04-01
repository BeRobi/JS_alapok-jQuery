$(function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenyKezeles1();
  esemenyKezeles2();

});

function elemekElerese1() {
  const ELEM = $("#f1");
  console.log(ELEM.text());
}

function elemekElerese2() {
  const ELEM = $("#ide");
  console.log(ELEM);
  ELEM.append("<p>Jó reggelt!</p>");
}

function elemekElerese3() {
  const ELEM = $(".ide");
  ELEM.append("<p>Jó reggelt!</p>");
}

function elemekElerese4() {
  var velSzamok = new Array();
  for (let i = 0; i < 5; i++) {
    let velSzam = Math.floor(Math.random() * 21) + 10;
    console.log(velSzam);
    velSzamok[i] = velSzam;
  }
  const listaELEM = $(".lista");
  for (let i = 0; i < velSzamok.length; i++) {
    listaELEM.eq(0).append(`<p>${velSzamok[i]}</p>`);
  }
}

function elemekFormazasa1() {
  const listaELEM = $(".lista");
  listaELEM.addClass("formazott");
}

function esemenyKezeles1() {
    const listaELEM = $(".lista");
    listaELEM.on("click", beletesz);
}

function beletesz() {
    const listaELEM = $(".lista");
    const divELEM = $(".kattintasutan");
    divELEM.append(listaELEM);
}

function esemenyKezeles2() {
    const feladatDIV = $(".feladat");
    feladatDIV.append("<button>Gomb</button>");
    let GOMB = $(".feladat button")
    GOMB.on("click", function(){
        feladatDIV.append("<div><img>asd</div>")
    });
}


