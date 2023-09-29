class Character {
    constructor(name,sanity){
        this.name = name;
        this.sanity = sanity;
    }
    trajet(playlist){
        console.log(playlist)

        let numberTaxiChange = 0
        let redLightsNumber = 0

        while(redLightsNumber < 30 && John.sanity > 0){
        
            redLightsNumber ++
            console.log("John est arrivé au feu numéro " + redLightsNumber)
    

            let rand = Math.floor(Math.random()*playlist.length)
            let randomMusic = playlist[rand]
            console.log(randomMusic + " passe à la radio")
    
            if(randomMusic == "Anissa - Wejdene") {
                John.sanity -=1 
                numberTaxiChange +=1 
                console.log("John a entendu" + " Anissa de Wejdene " + " et a changé de taxi")
            }
            if(this.sanity === 0 ){
                console.log("explosion")
                break
            }
            if(redLightsNumber === 30){
                console.log("John est arrivé à destination" + " il a " + this.sanity + " de santé mentale, et il a changé " + numberTaxiChange + "fois de taxis")
                break
            }
                
            }
        
    
    }
}

let John = new Character("John", 10)
let Musics = [" Golden Hour - JVKE", "Anissa - Wejdene", "Strangers - Kenya Grace", "Cornfield Chase - Hans Zimmer", "I never existed - Chase Atlantic"]

console.log(John.name + " à encore " + John.sanity + " de santé mentale")
console.log(Musics)

John.trajet(Musics)
