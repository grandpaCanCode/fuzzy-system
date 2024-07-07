
window.addEventListener('load', listOfPoke)
window.addEventListener('load', bulbasaurInfo)
window.addEventListener('load', ivysaurInfo)
window.addEventListener('load', venusaurInfo)



function listOfPoke(){
   
  const link = "https://pokeapi.co/api/v2/pokemon"

  fetch(link)
    .then(res => res.json()) 
    .then(data => {
      
       for(let i = 0; i < data.results.length; i++){
         document.querySelector('h3').innerHTML += data.results[i].name+' '
        }
       
      
})
}
function bulbasaurInfo(){
   
  const link = "https://pokeapi.co/api/v2/pokemon/bulbasaur"

  fetch(link)
    .then(res => res.json()) 
    .then(data => {
      
       
        document.querySelector('#pokePic').src = data.sprites.other['official-artwork'].front_default
               
        console.log(data)
})
}
function ivysaurInfo(){
   
  const link = "https://pokeapi.co/api/v2/pokemon/ivysaur"

  fetch(link)
    .then(res => res.json()) 
    .then(data => {
      
        document.querySelector('#ivysaurPic').src = data.sprites.other['official-artwork'].front_default
        console.log(data)
})
}
function venusaurInfo(){
   
  const link = "https://pokeapi.co/api/v2/pokemon/venusaur"

  fetch(link)
    .then(res => res.json()) 
    .then(data => {
      
        document.querySelector('#venusaurPic').src = data.sprites.other['official-artwork'].front_default
        console.log(data)
})
}

   





   


   