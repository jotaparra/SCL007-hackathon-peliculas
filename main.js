

 //peliculas sobre adiccion

 document.getElementById("drug").addEventListener("click", () => {
 socialMovie ()
 document.getElementById("cover_page").style.display = "none";
 document.getElementById("root2").style.display = "none";
 document.getElementById("drogadiccion").style.display = "block";
})


const dataThemes =['tt0896986', 'tt0097240', 'tt0120788', 'tt0112461', 'tt0181865', 'tt0117951', 'tt0082176', 'tt0350258', 'tt2626962', 'tt0111693', 'tt0113540', 'tt0180093', 'tt0113627', 'tt2205401', 'tt0099685', 'tt0221027', 'tt0120669', 'tt0390221', 'tt0080360']  


    function socialMovie () {dataThemes.map( function(item) {
    fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
      .then(res => res.json())
      .then(data => {


        document.getElementById('root').innerHTML += 
        `<div class="card text-center">
             <div class="card-header">
                 <ul class="nav nav-tabs card-header-tabs">
                     <li class="nav-item">
                         <a class="nav-link active" href="#">Ficha</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Ver comentarios</a>
                     </li>
                 </ul>
             </div>
             <div class="card-body">
                 <div class="container">
                     <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                     <div class="row">
                         <div class="col-4"><img src="${data.Poster}" alt="" class="img-thumbnail"></div>
                         <div class="col-8">
                             <div class="col-12">
                                 <h5>${data.Title}</h5>
                             </div>
                             <p><span class="bold">País:</span> ${data.Country}</p>
                             <p><span class="bold">Año:</span> ${data.Year}</p>
                             <p><span class="bold">Género:</span> ${data.Genre}</p>
                             <p><span class="bold">Duración:</span> ${data.Runtime}</p>
                             <p><span class="bold">Sinopsis:</span>${data.Plot}</p>
                             <div class="row">
                             <div class="col-4">
                                     <p class="bold">Ingresa un comentario:</p>
                                 </div>
                             <div class="col-8 form-group">
                                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe tu opinión para que el resto de los usuarios la pueda leer."></textarea>
                                 <button class="btn btn-warning mt-3">Agregar</button>
                             </div>
                             <p><span class="bold">Tags: <span class="badge badge-primary">Drogadicción</span> </span>
                             
                         </div> `  
      
   })
   
})
};

//sexualidad

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
     
  })

}

                          
//aqui se muestra las peliculas sobre bullying

document.getElementById("bullying").addEventListener("click", () =>{
  socialMovie3()
  document.getElementById("cover_page").style.display = "none";
  document.getElementById("root3").style.display = "block";
 })

const dataThemes3 = ['tt0114906', 'tt2543472', 'tt0929632', 'tt0429589', 'tt1288635', 'tt5323662', 'tt0377092', 'tt1666801', 'tt0398808', 'tt1282140', 'tt0363589', 'tt2368749', 'tt0087538', 'tt1930315', 'tt1670474', 'tt2523832', 'tt0953318', 'tt1340418', 'tt0377091', 'tt0242193', 'tt1959347', 'tt1330205', 'tt0081207']


      function socialMovie3 () {dataThemes3.map( function(item) {
        fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
          .then(res => res.json())
          .then(data => {
        
                document.getElementById("root3").innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}, ${data.imdbRating}`
          })
        })
      }



//aqui se muestran las peliculas sobre migracion

document.getElementById("migration").addEventListener("click", () =>{
  socialMovie4()
  document.getElementById("cover_page").style.display = "none";
  document.getElementById("root4").style.display = "block";
 })


const dataThemes4 = ['tt0414413', 'tt0857191', 'tt1508675', 'tt6776106', 'tt5222918', 'tt3147312', 'tt1127715', 'tt0362227', 'tt0796307', 'tt0211815', 'tt0286499', 'tt3399024', 'tt2510028', 'tt4082068', 'tt0212826', 'tt0488798', 'tt1630027', 'tt0221799', 'tt0193167', 'The Immigrant']

        function socialMovie4 () {dataThemes4.map( function(item) {
          fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
            .then(res => res.json())
            .then(data => {
          
                  document.getElementById("root4").innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}, ${data.imdbRating}`
            })
          })

        }
        

  
   