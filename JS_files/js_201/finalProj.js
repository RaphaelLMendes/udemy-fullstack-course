function chosePoke(){
    const randNumber = Math.ceil(Math.random()*898) 
    
    const name = document.getElementById('name')
    const image = document.getElementById('image')

    name.innerHTML = "<em>Loading</em>"
    image.src = 'https://imagensemoldes.com.br/wp-content/uploads/2020/07/Loading-PNG.png'

    
    //console.log(randNumber)

    fetch('https://pokeapi.co/api/v2/pokemon/'+randNumber.toString())
        .then( Request => Request.json())
        .then( data => {
            //console.log()
            name.innerHTML = data['name']
            image.src = data['sprites']['front_default']
        } )

    
    

}

