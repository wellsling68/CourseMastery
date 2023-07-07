//input
let userInput = document.querySelector("#userInput");
let inputStorage = [];
let count = 0;
let pageno = 0;

userInput.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        console.log(userInput.value);
        fetch("https://api.openai.com/v1/completions", {
            method: 'POST',
            body: JSON.stringify({
                "model":"text-davinci-003",
                "prompt": `Please provide a short description of the course ` + userInput.value + `, including a short description of the course and topics covered. Each topic should be formatted with a dash at the beginning and placed on a separate line.`,
                "temperature": 0,
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
            output.innerHTML = data.choices[0].text.replaceAll("\n", "<br>");
            inputStorage[count] =  data.choices[0].text.replaceAll("\n", "<br>");
            continueButton.style.display = "block";
            previousButton.style.display = "block";
            nextButton.style.display = "block";
        })
        
    }
    
});

let continueButton = document.querySelector("#continue");
continueButton.addEventListener("click", function(){
    count++;
    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        body: JSON.stringify({
            "model":"text-davinci-003",
            "prompt": "Continue explaining topic " + count + "in " + userInput.value + ". Make sure to go into detail on each of the topics and provide necessary supplemental information such as formulas.",
            "temperature": 0,
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
        output.innerHTML = data.choices[0].text.replaceAll("\n", "<br>");
        console.log(count);
        inputStorage[count] =  data.choices[0].text.replaceAll("\n", "<br>");
        pageno=count;
    })
    
})

let previousButton = document.querySelector("#previous");
previousButton.addEventListener("click", function(){
    if(pageno-1>=0){
        pageno--;
        output.innerHTML = inputStorage[pageno];
    }
})
let nextButton = document.querySelector("#next");
nextButton.addEventListener("click", function(){
    if(pageno+1<=count){
        pageno++;
        output.innerHTML = inputStorage[pageno];
    }
})