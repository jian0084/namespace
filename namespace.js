/********************************
Filename: namespace.js
Author: @Joyce
Description: 
Date: Oct 25, 2018
*********************************/

var JIAN0084 = {
    init: function () {

        let div = document.createElement("div");
        div.textContent = "jian0084";
        div.className = "box";
        document.querySelector("#boxes").appendChild(div);


        div.addEventListener("click", function () {
            div.style.borderColor = "yellow";
            div.style.backgroundColor = "darkgray";
        });

        div.addEventListener("mouseover", function() {
            div.classList.toggle("highlight");
        })
        div.addEventListener("mouseout", function() {
            div.classList.toggle("highlight");
            div.removeAttribute("style");
        })

    }
};
