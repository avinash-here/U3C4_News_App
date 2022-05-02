// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



import {navbar} from "../components/navbar.js";

document.getElementById('navbar').innerHTML = navbar();


import { GetNews2, appendData } from './fetch.js';



let search_value = localStorage.getItem('search_value');
GetNews2(search_value);


function Details(el){

    let news = [];

    news.push(el);
    
    localStorage.setItem('news', JSON.stringify(news));

    window.location.href= 'news.html';
}