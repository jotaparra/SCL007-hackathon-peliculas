
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
   




 //peliculas sobre adicción

 document.getElementById("addiction").addEventListener("click", () => {
 socialMovie ()
 document.getElementById("cover_page").style.display = "none";
 document.getElementById("root2").style.display = "none";
 document.getElementById("root").style.display = "block";
})


const dataThemes =['tt0896986', 'tt0097240', 'tt0087913', 'tt0120788', 'tt0112461', 'tt0181865', 'tt0117951', 'tt0082176', 'tt0350258', 'tt2626962', 'tt0111693', 'tt0113540', 'tt0180093', 'tt0113627', 'tt2205401', 'tt0099685', 'tt0221027', 'tt0120669', 'tt0390221', 'tt0080360']  //agregue más peliculas

    function socialMovie () {dataThemes.map( function(item) {
    fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
      .then(res => res.json())
      .then(data => {

            document.getElementById("root").innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.imdbRating}`
        })
   
      })
    }

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
      
              document.getElementById("root2").innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}, ${data.imdbRating}`
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

  
   