/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  title;
  director;
  budget;

  constructor(argTitle, argDirector, argBudget) {
    if (typeof argTitle !== "string" || typeof argDirector !== "string") {
      console.log("Title ir Director turi buti String");
      return;
    } else if (typeof argBudget !== "number") {
      console.log("Budget turi buti Number");
      return;
    }

    this.title = argTitle;
    this.director = argDirector;
    this.budget = argBudget;
  }

  wasExpensive() {
    if (this.budget > 100000000) {
      return true;
    } else {
      return false;
    }
  }
}
const mowies = new Movie("Rauginti kopustai", "Juazas Rugis", 10000000000);
const filmas = mowies.wasExpensive();
console.log("filmas ===", filmas);
