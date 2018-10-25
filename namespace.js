/********************************
Filename: namespace.js
Author: @Joyce
Description: 
Date: Oct 32, 2018
*********************************/

var JIAN0084 = {
    init: function () {

        let div = document.createElement("div");
        div.textContent = "jian0084";
        div.className = "box";
        document.querySelector("#boxes").appendChild(div);
        
        div.addEventListener("mouseOver", function () {
            div.classList.toggle("highlight");
        })
        div.addEventListener("mouseOut", function () {
            div.classList.toggle("highlight");
        })
        div.addEventListener("click", function () {
            div.style.borderColor = "blue";
            div.style.backgroundColor = "black";
        })
    }
};
