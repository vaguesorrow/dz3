document.addEventListener("DOMContentLoaded", function() {
    let box = document.querySelectorAll(".buttoon");
    box.forEach(function(buttoon){
        buttoon.addEventListener("click", function(){
            if(buttoon.style.backgroundColor === "darkorchid"){
                buttoon.style.backgroundColor = "yellow";
                buttoon.style.margin = '2vw';
                console.log("change color");
            }
            else{
                buttoon.style.backgroundColor = "darkorchid";
                buttoon.style.margin = '5vw';
            }
        });
    });
});