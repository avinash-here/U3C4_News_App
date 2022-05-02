let GetNews = async (code) => {

    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`);
        let data = await res.json();        
        appendData(data.articles);
    }catch(err){
        console.log(err);
    }
}

let GetNews2 = async (code) => {

    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${code}`);
        let data = await res.json();        
        appendData(data.articles);
    }catch(err){
        console.log(err);
    }
}

let appendData = (data) => {

    let container = document.getElementById('results');
    container.innerHTML = null;

    data.forEach((el) => {
        
        let image = document.createElement('img');
        image.src = el.urlToImage;

        let h3 = document.createElement('h3');
        h3.innerText = el.title;

        let p = document.createElement('p');
        p.innerText = el.description;


        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');

        div2.append(image);
        div3.append(h3,p);

        div1.append(div2,div3);
        div1.setAttribute('class', 'news')
        div1.addEventListener('click', function() {
            Details(el);
        })

        container.append(div1);
    })

}


let Details = (el) => {

    let news = [];

    news.push(el);
    
    localStorage.setItem('news', JSON.stringify(news));

    window.location.href= 'news.html';
}


export { GetNews, GetNews2, appendData, Details };