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
// 2. padarau input submit add.eventListiner
// 3. paspaudus jis nukreipia i functija skaiciavimo funkcija
// 4. kad suskaiciuotu patikrinu ar skaicius !== Nan
// 5. tokiu atvieju jis skaiciuoja
// 6. kad skaiciuotu kuriu kintamuosius kiekvienam paskaiciavimui
// 6a. skaiciuoja svarus
// 6b. skaiciuoja gramus
// 6c. skaiciuoja uncijas
// 7. kuriu ul ir li i kuriuos talpinu textContent paskaiciavimus
// 8. kitu atveju ismeta h2 privalote ivesti skaicius
// kuri taip pat kuriu
