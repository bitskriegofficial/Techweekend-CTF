import "./main.css";
function uaCheck(){
    var uaCheck = navigator.userAgent.toLowerCase();
    if (uaCheck == "samsung smart fridge") {
        window.location.replace("./flag.html");
    } 
    else{
        window.location.replace("./notFlag.html")
    }
}

const button = document.querySelector("#button");
button.addEventListener('click', uaCheck);