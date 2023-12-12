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
const cardContainerDiv = document.createElement("div");
cardContainerDiv.classList.add("cards-container");
outputDiv.append(cardContainerDiv);

const ulContainerDiv = document.createElement("div");

// 6. kuriu funkcija createACard
function createACard(carsBrand, brandModels) {
  //   <!-- one card -->
  const oneCardDiv = document.createElement("div");
  oneCardDiv.classList.add("card");

  //     <div class="text-body">
  const oneCardTextBodyDiv = document.createElement("div");
  oneCardTextBodyDiv.classList.add("card-text-body");

  //       <h2 class="card-user-login">Some quick</h2>
  const oneCardTextH2 = document.createElement("h2");
  oneCardTextH2.classList.add("card-text");
  oneCardTextH2.textContent = carsBrand;
  //   <!-- end one card -->
  oneCardTextBodyDiv.append(oneCardTextH2);
  oneCardDiv.append(oneCardTextBodyDiv);
  cardContainerDiv.append(oneCardDiv);

  oneCardDiv.addEventListener("click", () => {
    createAListOfModels(brandModels);
    oneCardDiv.append(ulContainerDiv);
  });
}

// funkcuja kuri sugeneruos brando modeliu i lista
function createAListOfModels(models) {
  // sukuriu UlEl
  const ul = createHtmlEl("ul", "models-ul");
  // const ul = document.createElement("ul");
  // ul.classList.add("models-ul");

  // sukuriu jam h3
  const h3Models = createHtmlEl("h3", "h3-models", "Models:");
  // const h3Models = document.createElement("h3");
  // h3Models.classList.add("h3-models");
  // h3Models.textContent = "Models:";

  // sukuriu hr
  const hr = createHtmlEl("hr");
  // const hr = document.createElement("hr");

  // suku cikla ir dedu modelius i lista
  models.forEach((element) => {
    const li = createHtmlEl("li", "models-li", element);
    // const li = document.createElement("li");

    // li.textContent = element;
    ul.append(li);
  });

  ulContainerDiv.innerHTML = "";
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
