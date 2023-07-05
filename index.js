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

let post_button = document.querySelector("#post");
post_button.addEventListener("click", function(){
    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        body: JSON.stringify({
            "model":"text-davinci-003",
            "prompt": "Say hello to me.",
            "temperature": 0.2,
            "max_tokens": 20,

        }),
        headers: {
            'Content-type': 'application/json',
            Authorization: "Bearer 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"
        }
    })
    .then(response => {
        return response.json();
    }).then(data =>{
        console.log(data.choices[0].text.replaceAll("\n", ""));
    })
    
})
