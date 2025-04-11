//console.dir(document); //shows all the properties, methods inside the <!DOCTYPE html>

/*
 * var = global variable declaration
 * let = accessible only to its function scope
 * const = fixed variable value
 * localStorage - saves data indefinitely until explicitly deleted
 */

//GLOBAL VARIABLES DECLARATION
const buttonDropdown = document.querySelector("#btn-dropdown");
const aside = document.querySelector("#aside");
/*const section = document.querySelector("#section");*/
const buttonRefill = document.querySelectorAll(".btn-refill");
const spanClose = document.querySelector(".modal-close");
const modalRefillContainer = document.querySelector(".modal-refill-container");
const formControl = document.querySelectorAll(".form-control");
const buttonSubmit = document.querySelector(".btn-submit");

//Resize event
window.addEventListener("resize",function(){
    //Checks the screen size
    if (window.innerWidth > 1013) {
        aside.style.display = "block";
        buttonDropdown.classList.add("btn-pressdown");
        buttonDropdown.classList.remove("btn-pressup");
        buttonDropdown.innerHTML = "&#x25B6; Press Me";
    }else{
        aside.style.display = "none"; 
    }
});

//On Load
window.addEventListener("DOMContentLoaded",function(){
    //Search some string on URL
    var redirectURLparam = new URLSearchParams(window.location.search);
    if(redirectURLparam.get("sent")==="true"){
        alert("Message sent. Thank you.");
        
        //Remove additional parameter/s on the URL
        if(window.history.replaceState){
            //url = https // hostname // pathname (ex:https://github.io/home)
            const defaultURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
            //Revert ton default URL
            window.history.replaceState({},document.title,defaultURL);
        }
    }
});

//Click event
buttonDropdown.addEventListener("click", function (event) {
    
    //Check buttonDropdown status
    if(buttonDropdown.classList.contains("btn-pressdown")){
        buttonDropdown.classList.add("btn-pressup");
        buttonDropdown.classList.remove("btn-pressdown");
        buttonDropdown.innerHTML = "&#x25B2; Press Me";
        aside.style.display = "block";        
    }
    else if(buttonDropdown.classList.contains("btn-pressup")){
        buttonDropdown.classList.add("btn-pressdown");
        buttonDropdown.classList.remove("btn-pressup");
        buttonDropdown.innerHTML = "&#x25B6; Press Me";
        aside.style.display = "none";        
    }
    
});

//Loop through each button
buttonRefill.forEach(function(btnRefill){
    //Click event
    btnRefill.addEventListener("click", function (event){   
        modalRefillContainer.style.display = "block";                           
    });
});

//Click event
spanClose.addEventListener("click", function (event){   
    modalRefillContainer.style.display = "none";                           
});

/*
//Click event
buttonSubmit.addEventListener("click", function () {
    let ctr = 0;
    //loop through each form field
    for(let i=0; i<formControl.length; i++){
        //Check if form has value
        if(formControl[i].value.trim()){
            ctr++;
        }else{
            ctr = 0;
        }
    } 
    if(ctr===3){
        alert("Your message is well received." + " " + ctr);
    }else{
        alert("Please leave a message." + " " + ctr);
    }    
    ctr = 0;   
});
*/
