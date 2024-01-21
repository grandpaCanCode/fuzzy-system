//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${poke1}`
  let pokeStore = []
  let pokeImg = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        const notSureWhatIamDoingYet = new Poke (data.name, data.height, data.weight, data.types, data.sprites.other['official-artwork'].front_default)
        notSureWhatIamDoingYet.getTypes()


              pokeStore.push(data.types[0].type.name)
              pokeImg.push(data.sprites.other['official-artwork'].front_default)
              document.querySelector('#pokeImg1').src = pokeImg[0]
              document.querySelector('#pokeStore1').innerText = pokeStore[0]
              document.querySelector('h2').innerText = data.name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
        
class Poke {
    constructor(name, height, weight, types, image){
      this.name = name
      this.height = height
      this.types = types
      this.image = image
      this.weight = weight
      this.undecidedPurpose = true
      this.reason = []
      this.typeList = []
}
      getTypes(){
        for(const property of this.types) {
            this.typeList.push(property.type.name)
            }
            console.log(this.typeList)
          }
      }
      
      
      