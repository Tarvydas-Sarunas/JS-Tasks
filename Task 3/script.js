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
// 2. isitraukiam su fetch ir then endpoint informacija
// 3.antrame then iskvieciu funkcija kuri suks cikla forEach
// 4. suku cikla ir darau du kintamuosius kuriuas pateikiu kaip argumenta i funkcija creatCard()
// 5. duodu btn .addListener kuris po click daro dvi funkcijas
// 5a. kuria card ir paslepiu message p tag

// 6. kuriu funkcija createACard
// 7. Kuriu funkcija hideTheMessage
