/*
Jeden lístek do divadla Pěst na oko stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného, 
přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. 
Uložte výsledek do proměnné prijem. Hodnotu proměnné prijem vypište do stránky. Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. 
Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti? Vypište do stránky i příjem divadla se započítanou slevou pro studenty.
*/

const cenaListku = 12
const priemernyPocetZakaznikov = 174
const pocetPredstaveniMesacne = 15

const prijem = cenaListku * priemernyPocetZakaznikov * pocetPredstaveniMesacne

 document.body.innerHTML += "<p>" + prijem + "</p>"

 const percentoStudentov = 0.40 
 const studentskaZlava = 0.65 
 const pocetStudentov = priemernyPocetZakaznikov * percentoStudentov
 const pocetPlatiacichPlnu = priemernyPocetZakaznikov - pocetStudentov

 const prijemSoZlavou = (pocetStudentov * cenaListku * studentskaZlava + pocetPlatiacichPlnu * cenaListku) * pocetPredstaveniMesacne;

 document.body.innerHTML += "<p>" + prijemSoZlavou + "</p>"


 /*
Vymyslete, jak použít funkci Math.random a různé zaokrouhlovací funkce probírané v této lekci k simulování hodu klasickou šestistěnnou kostkou. 
S použitím vhodných funkcí sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6.
Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou pravděpodobností. 
Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 0 (včetně) a 1 (vyjma). Je tedy malinká pravěpodobnost, že občas padne přesně číslo 0. Naopak číslo 1 padnout nemůže.
 */

const hodKockou = Math.floor(Math.random() * 6) + 1;
