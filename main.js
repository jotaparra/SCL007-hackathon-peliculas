
// window.onload= movies

// let movie=""
//  function movies () {

//    fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&with_genres=10749")
//    .then(data=>data.json())
//    .then(data=>{
//      let social= data.results;
// //    console.log(data) 
//      for (let i = 0; i <social.length; i++){
//        let title= social[i].title
//         fetch ("http://www.omdbapi.com/?s="+title+"&page1=&apikey=6e2550ac")
//           .then (data=>data.json())
//           .then (data =>{ 
//             movie=data
//         //    console.log(movie) 
//         document.getElementById("crime").addEventListener("click", () =>{
//            document.getElementById("root").innerHTML +=  `<img src=${data.Search[0].Poster}>  ${data.Search[0].Title} ${data.Search[0].Year} ${data.Search[0].Type}`
//            document.getElementById("root_one").style.display=none;
//            documen
//           })

//         })

//        }
//      });
//     };
   




 //peliculas sobre drogadicción

const dataThemes =['tt0896986', 'tt0097240', 'tt0087913', 'tt0120788', 'tt0112461', 'tt0181865', 'tt0117951']

const socialMovie = dataThemes.map( function(item) {
fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
  .then(res => res.json())
   .then(data => {

         document.getElementById('root').innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}`
   })
   
})

// const dataThemes2 = ['tt0995829', 'tt0467406', ]

// const socialMovie2 = dataThemes.map( function(item) {
//   fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
//     .then(res => res.json())
//      .then(data => {
  
//            document.getElementById('root').innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}`
//      })
     
//   })

// document.getElementById('drug').

   