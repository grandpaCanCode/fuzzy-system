
let bulbPic = localStorage.getItem('Bulbasaur')
let ivyPic =  localStorage.getItem('Ivysaur')
let venuPic = localStorage.getItem('Venusaur')
let list = ['charmander', 'charmeleon','charizard', 'squirtle','caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna']

list.forEach((name) => document.querySelector('ul').innerHTML +='<li><a href="">'+(name)+'</a></li>') 

document.querySelector('#pokePic').src = bulbPic
document.querySelector('#ivysaurPic').src = ivyPic
document.querySelector('#venusaurPic').src = venuPic



 document.querySelector('nav').addEventListener('click', function(e){
    e.preventDefault()
    let target = e.target
    let name = target.textContent
  console.log(name)
  const link = `https://pokeapi.co/api/v2/pokemon/${name}`
  
  fetch(link)
  .then(res => res.json()) 
  .then(data => {
    console.log(data)
    
    document.querySelector('#inputPic').src = data.sprites.other['official-artwork'].front_default    
    document.querySelector('h3').innerText = data.name
    document.querySelector('.abilitiesHeader').innerText = 'abilities:'
    document.querySelector('.typesHeader').innerText = 'types:'

    
    for(let i = 0; i < data.abilities.length; i++){
      // document.querySelector('.abilitiesPara').innerHTML += data.abilities[i].ability['name']+', '
      data.abilities.length === 1? 
      document.querySelector('.abilitiesPara').innerHTML += data.abilities[i].ability['name'] :
      document.querySelector('.abilitiesPara').innerHTML += data.abilities[i].ability['name']+', '
      if (data.abilities.length-1){
        document.querySelector('.abilitiesPara').innerHTML += data.abilities[i].ability['name'] 
        }
    }
    for(let i = 0; i < data.types.length; i++){
      data.types.length === 1? 
      document.querySelector('.typesPara').innerHTML += data.types[i].type['name'] :
      document.querySelector('.typesPara').innerHTML += data.types[i].type['name']+', '
      if (data.types.length-1){
      document.querySelector('.typesPara').innerHTML += data.types[i].type['name'] 
      }
      
    }
    
    
    
    
    
    
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
})

form = document.querySelector('form')

addEventListener('submit', function(e){
  e.preventDefault();
  var elements = this.elements
  var choice = form.elements.search.value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
  
  fetch(url)
  .then(res => res.json()) 
  .then(data => {
    console.log(data)
    
    document.querySelector('#inputPic').src = data.sprites.other['official-artwork'].front_default    
    document.querySelector('h3').innerText = data.name
    document.querySelector('h5').innerText = 'moves:'
    
    for(let i = 0; i < data.moves.length; i++){
      document.querySelector('p').innerHTML += data.moves[i].move['name']+', '
      
    }
    
    
    
    
    
    
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
})

// random names: ['weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate']
// window.addEventListener('load', ivysaurInfo) {don't think I need these}
// window.addEventListener('load', venusaurInfo)


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
  