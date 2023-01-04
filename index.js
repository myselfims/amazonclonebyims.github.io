
function addBorder(){
    document.getElementById("searchbar").style.border = "0.2vw solid rgb(249, 216, 84)";
    document.getElementById("focus").style.visibility = "visible";
}
function Focus(){
    document.getElementById("searchbar").style.border = "0.2vw solid black";
    document.getElementById("focus").style.visibility = "hidden";
}
function ChangeImage(){
    document.getElementsByClassName("backgroundimage").source="Images/ac.jpg"
}