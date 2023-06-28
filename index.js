//input
let textInput = document.querySelector("#text-input");
let log = document.querySelector("#consoleLog");
log.addEventListener("click", function(){
    console.log(textInput.value);
})

let hide = document.querySelector("#hide");
hide.addEventListener("click", function(){
    hideable.style.display = "none";
})

let show = document.querySelector("#show");
show.addEventListener("click", function(){
    hideable.style.display = "block";
})

let input = document.querySelector("textarea");
let checkbox = document.querySelector("#checkbox");
let consolelog = document.querySelector("#checked");
consolelog.addEventListener("click", function(){
    if(checkbox.checked == true)
    {

        console.log(input.value);
    }
})



let car = { brand: "honda", model: "civic", year: "2024", fuel: "gas"};

for(prop in car)
{
    console.log(prop);
    console.log(car[prop]);
}


let fetch_button = document.querySelector("#fetch");
fetch_button.addEventListener("click", function() {
    fetch('https://reqres.in/api/users')
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    })

});