document.body.firstElementChild.firstElementChild.style.backgroundColor = "pink";
document.body.firstElementChild.lastElementChild.style.backgroundColor = "green";
document.body.firstElementChild.lastElementChild.previousElementSibling.style.backgroundColor = "black";
document.body.firstElementChild.firstElementChild.nextElementSibling.style.backgroundColor = "red";
document.body.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.style.backgroundColor = "blue";

document.querySelectorAll(".box").forEach(element => {
    element.style.color = "white";
    element.style.textAlign = "center";
});