

// window.addEventListener('load', ivysaurInfo)
// window.addEventListener('load', venusaurInfo)

window.addEventListener('load', () => {
  
  // let list = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon','charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate']
  let list = ['charmander', 'charmeleon','charizard', 'squirtle','caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna']
 
    list.forEach((name) => document.querySelector('ul').innerHTML +='<li>'+(name)+'</li>') 

})

window.addEventListener('load', () =>{
    let bulbPic = localStorage.getItem('Bulbasaur')
    let ivyPic =  localStorage.getItem('Ivysaur')
    let venuPic = localStorage.getItem('Venusaur')

    document.querySelector('#pokePic').src = bulbPic
    document.querySelector('#ivysaurPic').src = ivyPic
    document.querySelector('#venusaurPic').src = venuPic
})

// window.addEventListener('load', () => {
   
//   const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur"

//   fetch(url)
//     .then(res => res.json()) 
//     .then(data => {
      
       
//         document.querySelector('#pokePic').src = data.sprites.other['official-artwork'].front_default
//         localStorage.setItem('Bulbasaur', data.sprites.other['official-artwork'].front_default)       
//         console.info(data)
//    })
// })
// function ivysaurInfo(){
   
//   const ivylink = "https://pokeapi.co/api/v2/pokemon/ivysaur"

//   fetch(ivylink)
//     .then(res => res.json()) 
//     .then(data => {
      
//         document.querySelector('#ivysaurPic').src = data.sprites.other['official-artwork'].front_default
//         localStorage.setItem('Ivysaur', data.sprites.other['official-artwork'].front_default)
//         console.log(data)
// })
// }
// function venusaurInfo(){
   
//   const venulink = "https://pokeapi.co/api/v2/pokemon/venusaur"

//   fetch(venulink)
//     .then(res => res.json()) 
//     .then(data => {
//         document.querySelector('#venusaurPic').src = data.sprites.other['official-artwork'].front_default
//          localStorage.setItem('Venusaur', data.sprites.other['official-artwork'].front_default)
//         console.log(data)
// })
// }

   





   


   