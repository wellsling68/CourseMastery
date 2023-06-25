//input
let textInput = document.querySelector("#text-input");
let log = document.querySelector("#consoleLog");
log.addEventListener("click", function(){
    textInput.value = 20;
    console.log(textInput.value);
    sum = textInput.value;
})

let hide = document.querySelector("#hide");
hide.addEventListener("click", function(){
    hideable.style.display = "none";
})

let show = document.querySelector("#show");
show.addEventListener("click", function(){
    hideable.style.display = "block";
})


