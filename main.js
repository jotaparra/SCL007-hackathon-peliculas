
window.onload= movies

 function movies () {

   fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&with_genres=80")
   .then(data=>data.json())
   .then(data=>{
     let social= data.results;
//    console.log(data) 
     for (let i = 0; i <social.length; i++){
       let title= social[i].title
        fetch ("http://www.omdbapi.com/?s="+title+"&page1=&apikey=6e2550ac")
          .then (data=>data.json())
          .then (data =>{ 
        //    console.log(data) 
        document.getElementById("crime").addEventListener("click", () =>{
           document.getElementById("root").innerHTML +=  `<img src=${data.Search[0].Poster}>  ${data.Search[0].Title} ${data.Search[0].Year} ${data.Search[0].Type}`
           document.getElementById("root_one").style.display=none;
           documen
          })

        })

       }
     });
   

   fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&with_genres=10749")
   .then(data=>data.json())
   .then(data=>{
     let social= data.results;

     for (let i = 0; i <social.length; i++){
       let title= social[i].title
        fetch ("http://www.omdbapi.com/?s="+title+"&page1=&apikey=6e2550ac")
          .then (data=>data.json())
          .then (data =>{ 
        //    console.log(data) 
        document.getElementById("romantic").addEventListener("click", () =>{
           document.getElementById("root_one").innerHTML +=  `<img src=${data.Search[0].Poster}>  ${data.Search[0].Title} ${data.Search[0].Year} ${data.Search[0].Type}`
           document.getElementById("root").style.display=none;
          })

        })

       }
     });
   }
  


//    const reset=document.getElementById("reset");
// document.getElementById("resetText").addEventListener("click", () => {

//     document.getElementById("IngresaTexto").value = "";
//     document.getElementById("cifrado").innerHTML= "";
//     document.getElementById("descifrado").innerHTML= "";

// }); 
 
   