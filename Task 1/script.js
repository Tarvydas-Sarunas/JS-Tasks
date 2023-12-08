/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
div elemente su id "output" viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

// 1. nusitaikau i form ir input
const form = document.getElementById("form");
const searchInput = document.getElementById("search");
const outputDiv = document.getElementById("output");

// 2. padarau input submit add.eventListiner
form.addEventListener("submit", (event) => {
  event.preventDefault();
  outputDiv.innerHTML = "";
  // 3. paspaudus jis nukreipia i functija skaiciavimo funkcija
  calculateWeight();
});

function calculateWeight() {
  // 4. kad skaiciuotu kuriu kg kintamaji
  const kg = Number(searchInput.value);

  // 4. kad suskaiciuotu patikrinu ar skaicius !isNaN
  if (!isNaN(kg)) {
    // 5. tokiu atvieju jis skaiciuoja
    // dabar kuriu kintamuosius kiekvienam ir skaiciuoju
    const svaras = (kg * 2.2046).toFixed(2);
    const gramas = (kg / 0.001).toFixed(2);
    const uncijos = (kg * 35.274).toFixed(2);
    rezToUl(kg, svaras, gramas, uncijos);
  } else {
    const h2El = "Privalote ivesti skaicius";
    rezToH2(h2El);
  }
}

// 7. kuriu ul ir li i kuriuos talpinu textContent paskaiciavimus
function rezToUl(kg, lb, g, oz) {
  const ul = document.createElement("ul");
  ul.classList.add("rezultats");
  const li1 = document.createElement("li");

  li1.textContent = `${kg} kg yra ${lb} lb`;
  const li2 = document.createElement("li");
  li2.textContent = ` ${kg} kg yra ${g} g`;
  const li3 = document.createElement("li");
  li3.textContent = `${kg} kg yra ${oz} oz`;
  ul.append(li1, li2, li3);
  outputDiv.append(ul);
}

// 8. kitu atveju ismeta h2 privalote ivesti skaicius
// kuri taip pat kuriu
function rezToH2(text) {
  const h2 = document.createElement("h2");
  h2.classList.add("rezultats");
  h2.textContent = text;
  outputDiv.append(h2);
}
