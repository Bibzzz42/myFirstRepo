var  _ = require('lodash')

let x=[1,2,3,3,3,3,4];
console.log(_.without(x,3));

let b=document.querySelector(`body`);

b.classList.add(`container`);

function addButton(daddy){
    let newElem=document.createElement(`button`);
    newElem.textContent=`newButton`;
    daddy.appendChild(newElem);
    return newElem;
}

newB=addButton(b);

newB.classList.toggle(`testB`);

function signOfLife(){
    alert('hello!');
}
newB.addEventListener(`click`,signOfLife);
