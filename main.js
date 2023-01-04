// Get Elements
let addClass = document.querySelector(".classes-to-add");
let remClass = document.querySelector(".classes-to-remove");
let curELe = document.querySelector(`[title= "Current"]`);
let resDiv = document.querySelector(".classes-list div");


function myList(element, result){
    if(element.classList.value.length === "") {
        result.innerHtml = "No Classes To Show";
    }else{
        element.classList.value.split(" ").sort().map(function (ele){
            let mySpan = document.createElement("span");
            mySpan.innerHTML = ele;
            result.append(mySpan);
        })
    }
}
myList(curELe, resDiv)

// Add Class Using Add Field 
addClass.onblur = () => {
    let wordAdd = addClass.value.trim().toLowerCase().split(" ");
    for (let i=0; i< wordAdd.length; i++){
        curELe.classList.add(wordAdd[i]);
    }
    addClass.value = "";
    resDiv.innerHTML = "";
    myList(curELe, resDiv);
}

// Remove Class Using Add Field 
remClass.onblur = function () {
    let wordsRem = remClass.value.trim().toLowerCase().split(" ");
    for (let i=0; i< wordsRem.length; i++) {
        curELe.classList.remove(wordsRem[i]);
    }
    remClass.value = "";
    resDiv.innerHTML = "";
    myList(curELe, resDiv)
}