// Ude Import export (MANDATORY)


import {navbar} from "../components/navbar.js";

document.getElementById('navbar').innerHTML = navbar();


let news = JSON.parse(localStorage.getItem('news'));


function appendData(data){

    console.log(data);
    let container = document.getElementById('detailed_news');
    container.innerHTML = null;    
   
    let image = document.createElement('img');
    image.src = data[0].urlToImage;

    let h3 = document.createElement('h3');
    h3.innerText = data[0].title;

    let p = document.createElement('p');
    p.innerText = data[0].description;


    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
        

    div1.append(image);
    div2.append(h3,p);  
        

    container.append(div1,div2);    

}

appendData(news);