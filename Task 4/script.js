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

// B. ant kiek vieno automobilio gamintojo korteles paspaudus atsidaro dar puslapis luriame matosi kiek vienas automobilio gamintojo modelis

// 5. susikuriu konteineri kur bus visos korteles
const cardContainerDiv = document.createElement("div");
cardContainerDiv.classList.add("cards-container");
outputDiv.append(cardContainerDiv);

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
    // const ulContainerDiv = document.createElement("div");

    oneCardDiv.append(ulContainerDiv);
    createAListOfModels(brandModels);
  });
}

function createAListOfModels(brandModels) {
  brandModels.forEach((element) => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.textContent = element;
    ul.append(li);
  });
  // containerUl.innerHTML = "";
  // containerUl.append(ul);
}
