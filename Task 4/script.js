/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const outputDiv = document.getElementById("output");

// A. sukurti korteles visu automobiliu gamintoju

// 2. isitraukiam su fetch ir then is endpoint informacija
function getCarsJsonContent() {
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    // 3.antrame then iskvieciu funkcija kuri suks cikla forEach
    .then((data) => getCars(data))
    // console.log("data ===", data);
    .catch((error) => console.log("error ===", error));
}
getCarsJsonContent();

// 4. kuriu funkcija getBrands kuri suks per data cikla forEach ir sukurs du kintamaji brand
function getCars(endpointArr) {
  endpointArr.forEach((endpointObj) => {
    // 5. suku cikla ir darau du kintamuosius kuriuas pateikiu kaip argumenta i funkcija creatCard()
    const brand = endpointObj.brand;
    const models = endpointObj.models;

    console.log("brand ===", brand, models);

    createACard(brand, models);
    createAListOfModels(models);
  });
}

// B. ant kiek vieno automobilio gamintojo korteles paspaudus atsidaro ul kuriame matosi automobilio gamintojo modelis

// 5. susikuriu konteineri kur bus visos korteles
const cardContainerDiv = createHtmlEl("div", "cards-container");
outputDiv.append(cardContainerDiv);

// sukuriu div i kuri bus talpinami ul is funcijos cread a card
const ulContainerDiv = document.createElement("div");

// 6. kuriu funkcija createACard kuri kurs elementus ir des i ju konteineri
function createACard(carsBrand, brandModels) {
  //   <!-- one card -->
  const oneCardDiv = createHtmlEl("div", "card");

  //     <div class="text-body">
  const oneCardTextBodyDiv = createHtmlEl("div", "card-text-body");

  //       <h2 class="card-user-login">Some quick</h2>
  const oneCardTextH2 = createHtmlEl("h2", "card-text", carsBrand);

  //  vienoje korteleje kas turi buti viska suapendinu i savo vietas
  oneCardTextBodyDiv.append(oneCardTextH2);
  oneCardDiv.append(oneCardTextBodyDiv);
  cardContainerDiv.append(oneCardDiv);

  // padarau eventListeneri kortelei kad ja paspaudus utsidaro jo modeliu ul
  oneCardDiv.addEventListener("click", () => {
    // iskvieciu modeliu ul gaminimo funkcija
    createAListOfModels(brandModels);

    // ul appendinu i vienos korteles containeri
    oneCardDiv.append(ulContainerDiv);
  });
}

// funkcuja kuri sugeneruos brando modeliu i lista
function createAListOfModels(models) {
  // sukuriu UlEl
  const ul = createHtmlEl("ul", "models-ul");

  // sukuriu jam h3
  const h3Models = createHtmlEl("h3", "h3-models", "Models:");

  // sukuriu hr kad atskirtu models nuo brands
  const hr = createHtmlEl("hr");

  // suku cikla ir dedu modelius i lista
  models.forEach((element) => {
    const li = createHtmlEl("li", "models-li", element);

    ul.append(li);
  });

  // issivalau ul konteineri nes kai click du kartus jis dadeda is naujo sarasa
  ulContainerDiv.innerHTML = "";

  // i ul su apendinu jo sarase esamus elementus
  ulContainerDiv.append(hr, h3Models, ul);
}

// Funkcija kuri sukuria nprimus elementus
function createHtmlEl(tagName, className, text = undefined) {
  // sukuriu element
  const newEl = document.createElement(tagName);
  // uzdedu jam klase
  newEl.className = className;
  // ikelem text jei yra paduotas
  newEl.textContent = text;
  return newEl;
}
