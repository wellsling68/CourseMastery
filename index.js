//input
let userInput = document.querySelector("#userInput");
let inputStorage = [];
let count = 0;
let pageno = 0;
let prompt = "";

userInput.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        console.log(userInput.value);
        fetch("https://api.openai.com/v1/completions", {
            method: 'POST',
            body: JSON.stringify({
                "model":"text-davinci-003",
                "prompt": `Please provide a short description of the course ` + userInput.value + `, including a short description of the course and topics covered. Each topic should be formatted with a dash at the beginning and placed on a separate line.`,
                "temperature": 0.,
                "max_tokens": 4027,
    
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
            count = 0;
            nextButton.setAttribute("class", "disabled");
            previousButton.setAttribute("class", "disabled");
        })

        fetch("https://api.openai.com/v1/completions", {
            method: 'POST',
            body: JSON.stringify({
                "model":"text-davinci-003",
                "prompt": `Please provide the topics included in the course ` + userInput.value + `. Each topic should be formatted with a dash at the beginning and placed on a separate line.`,
                "temperature": 0,
                "max_tokens": 4027,
    
            }),
            headers: {
                'Content-type': 'application/json',
                Authorization: "Bearer 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"
            }
        })
        .then(response => {
            return response.json();
        }).then(data =>{
            console.log(data.choices[0].text.replaceAll("\n", " "));
            prompt = data.choices[0].text.replaceAll("\n", " ");
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
            "prompt": "Given this list " + prompt + ", explain topic " + count + " in great detail, providing supplemental information (i.e. formulas, equations, etc) when applicable.",
            "temperature": 0,
            "max_tokens": 3500,
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
        nextButton.setAttribute("class", "disabled");
        previousButton.removeAttribute("class", "disabled");
    })
    
})

let previousButton = document.querySelector("#previous");
previousButton.addEventListener("click", function(){
    if(pageno-1>=0){
        pageno--;
        output.innerHTML = inputStorage[pageno];
        nextButton.removeAttribute("class", "disabled");
        if(pageno==0){
            previousButton.setAttribute("class", "disabled");
        }
    }

})
let nextButton = document.querySelector("#next");
nextButton.addEventListener("click", function(){
    if(pageno+1<=count){
        pageno++;
        output.innerHTML = inputStorage[pageno];
        previousButton.removeAttribute("class", "disabled");
        if(pageno==count){
            nextButton.setAttribute("class", "disabled");
        }
    }
})

let test1 = document.querySelector(".test1");
test1.addEventListener("click", function(){
    userInput.value = "Algebra 1";
    console.log("Algebra 1");
    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        body: JSON.stringify({
            "model":"text-davinci-003",
            "prompt": `Please provide a short description of the course Algebra 1, including a short description of the course and topics covered. Each topic should be formatted with a dash at the beginning and placed on a separate line.`,
            "temperature": 0.,
            "max_tokens": 4027,

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
        count = 0;
        nextButton.setAttribute("class", "disabled");
        previousButton.setAttribute("class", "disabled");
    })

    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        body: JSON.stringify({
            "model":"text-davinci-003",
            "prompt": `Please provide the topics included in the course Algebra 1. Each topic should be formatted with a dash at the beginning and placed on a separate line.`,
            "temperature": 0,
            "max_tokens": 4027,

        }),
        headers: {
            'Content-type': 'application/json',
            Authorization: "Bearer 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"
        }
    })
    .then(response => {
        return response.json();
    }).then(data =>{
        console.log(data.choices[0].text.replaceAll("\n", " "));
        prompt = data.choices[0].text.replaceAll("\n", " ");
    })
})

let test2 = document.querySelector(".test2");
test2.addEventListener("click", function(){
    userInput.value = "Biology";
    console.log("Biology");
    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        body: JSON.stringify({
            "model":"text-davinci-003",
            "prompt": `Please provide a short description of the course Biology, including a short description of the course and topics covered. Each topic should be formatted with a dash at the beginning and placed on a separate line.`,
            "temperature": 0.,
            "max_tokens": 4027,

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
        count = 0;
        nextButton.setAttribute("class", "disabled");
        previousButton.setAttribute("class", "disabled");
    })

    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        body: JSON.stringify({
            "model":"text-davinci-003",
            "prompt": `Please provide the topics included in the course Biology. Each topic should be formatted with a dash at the beginning and placed on a separate line.`,
            "temperature": 0,
            "max_tokens": 4027,

        }),
        headers: {
            'Content-type': 'application/json',
            Authorization: "Bearer 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"
        }
    })
    .then(response => {
        return response.json();
    }).then(data =>{
        console.log(data.choices[0].text.replaceAll("\n", " "));
        prompt = data.choices[0].text.replaceAll("\n", " ");
    })
})

let test3 = document.querySelector(".test3");
test3.addEventListener("click", function(){
    userInput.value = "AP Stats";
    console.log("AP Stats");
    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        body: JSON.stringify({
            "model":"text-davinci-003",
            "prompt": `Please provide a short description of the course AP Stats, including a short description of the course and topics covered. Each topic should be formatted with a dash at the beginning and placed on a separate line.`,
            "temperature": 0.,
            "max_tokens": 4027,

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
        count = 0;
        nextButton.setAttribute("class", "disabled");
        previousButton.setAttribute("class", "disabled");
    })

    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        body: JSON.stringify({
            "model":"text-davinci-003",
            "prompt": `Please provide the topics included in the course AP Stats. Each topic should be formatted with a dash at the beginning and placed on a separate line.`,
            "temperature": 0,
            "max_tokens": 4027,

        }),
        headers: {
            'Content-type': 'application/json',
            Authorization: "Bearer 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"
        }
    })
    .then(response => {
        return response.json();
    }).then(data =>{
        console.log(data.choices[0].text.replaceAll("\n", " "));
        prompt = data.choices[0].text.replaceAll("\n", " ");
    })
})
