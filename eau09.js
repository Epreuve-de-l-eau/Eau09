#! node
//Function du tri par sélection
function my_select_sort(tab) {
  let min
  for (let a = 0; a < tab.length; a++) {
    min = a;
    for (let b = a + 1; b < tab.length; b++) {
      if (tab[b] < tab[min]) {
        min = b
      }
    }
    let small = tab[a]
    tab[a] = tab[min]
    tab[min] = small
  }
  return tab
}
//Function qui transforme les string en nombres
function num(tab) {
  for (let c = 0; c < tab.length; c++) {
    tab[c] = Number(tab[c])
  }
}

//Gestion d'erreurs
if(process.argv.length < 4) {
  console.log('Veuillez indiquer au minimum deux nombres en argument')
  return
}
process.argv.splice(0, 2)
for (i in process.argv) {
  if (process.argv[i] % 1 != 0) {
    console.log("Veuillez indiquer seulement des nombres en argument")
    return
  }
}

//Parsing
let arg = process.argv

//Résolution du problème
num(arg)
my_select_sort(arg)

//Affichage
console.log(arg)
