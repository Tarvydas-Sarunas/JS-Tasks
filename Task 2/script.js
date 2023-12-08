/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

// 1. nusitaikau i btn__element ir i btn__state
const btn = document.getElementById("btn__element");
const counter = document.getElementById("btn__state");

// 3. pries ji sukurti kintamaji count = 0
let count = 0;

// 2. padaryti jam eventListineri su click
btn.addEventListener("click", (event) => {
  event.preventDefault();
  // 4. skaiciuoti click skaiciu count += count
  count++;

  // 5. i click__staste apendinti count
  counter.textContent = count;
});
