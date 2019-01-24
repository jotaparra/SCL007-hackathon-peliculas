 //peliculas sobre drogadicción

 document.getElementById("drug").addEventListener("click", () => {
 socialMovie ()
 document.getElementById("cover_page").style.display = "none";
 document.getElementById("root2").style.display = "none";
 document.getElementById("drogadiccion").style.display = "block";
})


const dataThemes =['tt0097240', 'tt0180093' , 'tt0120788', 'tt0112461', 'tt0181865', 'tt0117951', 'tt0896986', 'tt0390221']

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
}


  
   