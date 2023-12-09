/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama div elemente su id "output".
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

// 1. nusitaikau i btn, output, message
const btn = document.getElementById("btn");
const outputDiv = document.getElementById("output");
const messagePTag = document.getElementById("message");
// console.log("btn ===", messagePTag);

// 8. duodu btn .addListener kuris po click daro dvi funkcijas
btn.addEventListener("click", () => {
  getApiContent();
  hideTheMessage();
});

// 2. isitraukiam su fetch ir then is endpoint informacija
function getApiContent() {
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    // 3.antrame then iskvieciu funkcija kuri suks cikla forEach
    .then((data) => getUserInfo(data))
    // console.log("data ===", data);
    .catch((error) => console.log("error ===", error));
}

// 4. kuriu funkcija getUser kuri suks per data cikla forEach ir sukurs du kintamuosius login ir avatarUrl
function getUserInfo(endpointArr) {
  endpointArr.forEach((endpointObj) => {
    // 5. suku cikla ir darau du kintamuosius kuriuas pateikiu kaip argumenta i funkcija creatCard()
    const login = endpointObj.login;
    // console.log("login ===", login);
    const avatarUrl = endpointObj.avatar_url;
    // console.log("avatarUrl ===", avatarUrl);
    createACard(login, avatarUrl);
  });
}

// 5. susikuriu konteineri kur bus visos korteles
const cardContainerDiv = document.createElement("div");
cardContainerDiv.classList.add("cards-container");
outputDiv.append(cardContainerDiv);

// 6. kuriu funkcija createACard
function createACard(userLog, userAvUrl) {
  //   <!-- one card -->
  const oneCardDiv = document.createElement("div");
  oneCardDiv.classList.add("card");

  //     <img src="..." class="card-img" alt="...">
  const userAvatar = document.createElement("img");
  userAvatar.src = userAvUrl;
  userAvatar.alt = `${userLog} avatar`;
  userAvatar.classList.add("card-img");

  //     <div class="text-body">
  const oneCardTextBodyDiv = document.createElement("div");
  oneCardTextBodyDiv.classList.add("card-text-body");

  //       <h2 class="card-user-login">Some quick</h2>
  const oneCardTextH2 = document.createElement("h2");
  oneCardTextH2.classList.add("card-text");
  oneCardTextH2.textContent = userLog;
  //   <!-- end one card -->
  oneCardTextBodyDiv.append(oneCardTextH2);
  oneCardDiv.append(userAvatar, oneCardTextBodyDiv);
  cardContainerDiv.append(oneCardDiv);
}

// 7. Kuriu funkcija hideTheMessage
// 7a. kuria card ir paslepiu message p tag
function hideTheMessage() {
  messagePTag.style.display = "none";
}
