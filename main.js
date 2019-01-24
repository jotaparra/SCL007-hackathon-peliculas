
 //peliculas sobre drogadicción

 document.getElementById("drug").addEventListener("click", () => {
 socialMovie ()
 document.getElementById("cover_page").style.display = "none";
 document.getElementById("root2").style.display = "none";
 document.getElementById("drogadiccion").style.display = "block";
})


const dataThemes =['tt0097240', 'tt0087913', 'tt0120788', 'tt0112461', 'tt0181865', 'tt0117951', 'tt0896986']

function socialMovie () {dataThemes.map( function(item) {
fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
  .then(res => res.json())
   .then(data => {

         document.getElementById('root').innerHTML += /* `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}` */
       
        ` <div class="col s12 m4 card medium hoverable">
          <div class="card-image waves-effect waves-block waves-light">  
            <img class="activator caja-pokemon" src="${data.Poster}">
          </div>
          <div class="card-content">
          
          <span class="card-title activator grey-text text-darken-4"><span class="bold">${data.Title}</span><i class="material-icons right">add</i></span>
          <p><span class="bold">País:</span> ${data.Country}</p>
          <p><span class="bold">Año:</span> ${data.Year}</p>
          <p><span class="bold">Género:</span> ${data.Genre}</p>
          <p><span class="bold">Duración:</span> ${data.Runtime}</p>
          </div>
          <div class="card-reveal grey lighten-2">
            <span class="card-title grey-text text-darken-4"><span class="bold grey-text">Sinopsis</span><i class="material-icons right">close</i></span>
            <p>${data.Plot}</p>
          </div>
        </div>`  
      
   })
   
})
}
/* const dataThemes2 = ['tt0995829', 'tt0467406', ]

// aqui se muestran las peliculas sobre sexualidad

  document.getElementById("sexuality").addEventListener("click", () =>{
  socialMovie2();
  document.getElementById("cover_page").style.display = "none";
  document.getElementById("root2").style.display = "block";
 })


const dataThemes2 = ['tt0995829', 'tt0467406', 'tt1847731', 'tt1659337', 'tt0159097']

function socialMovie2 () {dataThemes2.map( function(item) {
  fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
    .then(res => res.json())
     .then(data => {
  
           document.getElementById("root2").innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}`
     })
     
  }) */


  
/*   document.getElementById('drug').addEventListener("click", () =>{
    socialMovie ()
    document.getElementById("cover_page").style.display = "none";
    document.getElementById("root").style.display = "block";
  })



document.getElementById("bullying").addEventListener("click", () =>{
  socialMovie3
  document.getElementById("cover_page").style.display = "none";
  document.getElementById("root3").style.display = "block";
 })

const dataThemes3 = []

function socialMovie3 () {dataThemes.map( function(item) {
  fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
    .then(res => res.json())
     .then(data => {
  
           document.getElementById("root3").innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}`
     })
  })
} */


  
   