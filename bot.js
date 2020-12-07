// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let yandexInput = document.getElementsByName("text")[0];
let btnY = document.getElementsByClassName("button mini-suggest__button button_theme_websearch button_size_ws-head i-bem button_js_inited")[0];
yandexInput.value = "Гобой";
btnY.click();

let links = document.links;
for (let i=0; i<links.length; i++){
    let link = links[i];
    if(link.href.includes("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")){
        link.click();
        break;
    }
}
