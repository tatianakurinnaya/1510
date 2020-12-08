// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
let yandexInput = document.getElementsByName("text")[0];
let btnY = document.getElementsByClassName("button mini-suggest__button button_theme_websearch")[0];
let words = ["Гобой","Флейта","Как звучит флейта","Балалайка","Фагот","Скрипка","Саксофон"];
let word = words[getRandom(0,words.length)];
if (btnY!=undefined){
    let i = 0;
    let timerId = setInterval(function(){
        yandexInput.value = yandexInput.value + word[i];
        i++;
        if(i == word.length){
            clearInterval(timerId);
            btnY.click();
        }
    },1000);

}else{
    let linkIsFound = false;
    let links = document.links;
    for (let i=0; i<links.length; i++){
        let link = links[i];
        if(link.href.includes("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")){
            link.removeAttribute("target");
            setTimeout(()=>{link.click();},1000);
            linkIsFound = true;
            break;
        }
    }

  setTimeout(()=>{
        let pageNum = document.querySelector("span.pager__item").innerText;
        let nextPage = document.getElementsByClassName("pager__item_kind_next")[0];
        if(!linkIsFound && pageNum<10){
            setTimeout(()=>{nextPage.click();},1000);
        }else{
            location.href = "https://yandex.ru/";
        }
    },1000);
}
