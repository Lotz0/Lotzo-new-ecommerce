let key = "243e022a054d4b42925d8276d67d9759";
let pais = "ar"
let url = `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${key}`;
let show_News = document.getElementById("noticias");

fetch(url).then((resp) => resp.json()).then(dato =>{
    console.log(dato)
    let noticias = (dato.articles);
    noticias.map(function(numero){
        let div = document.createElement("noticias");
        div.innerHTML= `<br>
                        <img style="max-width:800px" src=${numero.urlToImage}><br>
                        <h1>${numero.title}</h1> 
                        <h2>${numero.description}</h2>
                        <h3>${numero.url}</h3>
                        `;
        show_News.appendChild(div);
    })
});