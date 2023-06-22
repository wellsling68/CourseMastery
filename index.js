let title = document.querySelector("h1").innerHTML;
let unordered = document.querySelector("ul").innerHTML;
let ordered = document.querySelector("ol").innerHTML;
let intro = document.querySelector("p").innerHTML;

let newArray = [title, unordered, ordered, intro];
for (let i = 0; i<newArray.length; i++)
{
    if(newArray[i].length >=10)
        console.log(newArray[i]);
}