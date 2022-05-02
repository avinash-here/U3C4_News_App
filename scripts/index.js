// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import {navbar, sidebar} from "../components/navbar.js";

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('sidebar').innerHTML = sidebar();


//url1 = 'https://masai-mock-api.herokuapp.com/news/top-headlines?country=';
//url2 = 'https://masai-mock-api.herokuapp.com/news?q=';


import { GetNews, appendData, Details } from './fetch.js';

GetNews('in');  



let categories = document.getElementById('countries').children;

function count_News () {    
    console.log(this.id);
    GetNews(this.id);
}

for(let el of categories){
    el.addEventListener('click',count_News);
}



let FindIt = (e) => {    
    if(e.key === 'Enter')
    { 
        let value = document.getElementById('search_input').value;
        localStorage.setItem('search_value', value);
        window.location.href = 'search.html';
    }
}


document.getElementById('search_input').addEventListener('keydown',FindIt);





