const txtToAdd = document.querySelector('#txt_to_add');
const pList = document.querySelector('#myList p');
const pArray = document.querySelector('#myArray p');


function addText(){
    if(txtToAdd.value==='')
    {
    myList.innerText += txtToAdd.value+'\n';
    txtToAdd.value ='';
    }
    else{
        alert('Veuillez entrer du text')
    }
    txtToAdd.focus();
}



const myArray = ('voila','quelque chose');

function updateArray(){
myArray.innerText += txtToAdd.value+'\n';
txtToAdd.value = '';
txtToAdd.focus();
}

const x = [myArray];
for(let i= 0; i < x.length; i++)
{
    pArray.innerText += myArray[i]+'\n';
}