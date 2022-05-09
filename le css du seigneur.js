document.getElementById('num1').style.color = 'red';/selectionne l'id/
/*document.querySelector('body>p') choisi les elements par rapport au selecteur/ 
/document.querySelectorAll('body>p')/
/* jquery $('#num1')/
/alert ('Bonjour tout le monde) affiche une pop up /
/ prompt('entrez un chiffre) affiche une pop up qui retourne quelque chose*/


/*let listeP = document.getElementsByTagName('P');
for (i=0; i<listeP.length; i++){
    listeP[i].style.backgroundColor ='blue';
    listeP[i].style.color ='white';
}
let couleur = prompt(' Entrez une couleur (red,blue,green)');


if ( couleur === 'red') {document.body.style.backgroundColor ='red';}

else if(couleur === 'blue') {document.body.style.backgroundColor= 'blue';}

else if(couleur === 'green') {document.body.style.backgroundColor= 'green';}
    let message = prompt('dit quelque chose ou je te goume').toLowerCase().rep1
    let nombre = parseFloat(message, 10);
    if (!isNaN(nombre))
    {
        if (nombre === 6.6){
            alert('Bravo ! '+nombre,toString());
        }
        else{
            alert('pas similaire');
        }
    }
    else{
        alert('valeur incorrect');
}*/
const myT =["eliott","Romain","Matteo","Mathilde"];
printArray(myT);
function printArray(theArray) {
    // Boucle for basique avec une initialisation, une limite et
    for(int i=0; i<theArray.length; i++){
        document.write(theArray[i]+"cbr");
    }

    for(int i of theArray){
        document.write(i+"cbr");
    }
    for(int in theArray){
        document.write(theArray[i]+"cbr");
    }
}