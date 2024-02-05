/* Úkol - Vymyslete, jak použít funkci Math.random a různé zaokrouhlovací funkce probírané v této lekci k simulování hodu klasickou šestistěnnou kostkou. S použitím vhodných funkcí sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6.

Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou pravděpodobností. Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 0 (včetně) a 1 (vyjma). Je tedy malinká pravěpodobnost, že občas padne přesně číslo 0. Naopak číslo 1 padnout nemůže.
 */


/* let nahodneCislo = Math.random()
let vysledekHodu = Math.floor(nahodneCislo * 6) + 1

let vysledek = vysledekHodu
console.log("Hod kostkou: " + vysledek) */

let nahodneCislo = Math.random()
let vysledekHodu = Math.floor(nahodneCislo * 6) + 1
let vysledek = vysledekHodu

console.log("Hod kostkou: " + vysledek)
document.body.innerHTML = <h1>("Hod kostkou: " + vysledek)</h1>
document.body.innerHTML = "Hod kostkou: " + vysledek