'use strict'
const textArea = document.querySelector("#grootTranslator");
const btnTranslate = document.querySelector("#translate");
const container = document.querySelector(".container");
function tranlateUrl(text)
{
    let currUrl = "https://api.funtranslations.com/translate/groot.json";
    return currUrl+"?"+"text="+text;
}
function click()
{   let text = textArea.value;
    fetch(tranlateUrl(text)).then(option=>option.json()).then(value=>{
        container.textContent = value.contents.translated;
    });
}

btnTranslate.addEventListener("click",click);
