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
 