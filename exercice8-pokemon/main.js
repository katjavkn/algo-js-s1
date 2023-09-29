class Pokemon {
    constructor(name, attack, def, pv) {
        this.name = name
        this.attack = attack
        this.def = def
        this.pv = pv
    }
    attackPokemon(pokemon){
        pokemon.pv -= this.attack
    }
}

let Nymphali = new Pokemon("Nymphali", 13, 12, 100)
console.log(Nymphali)

let salameche = new Pokemon("salameche", 12, 8, 85)
console.log(salameche)

while (Nymphali.pv > 0 && salameche.pv > 0){
    Nymphali.attackPokemon(salameche);
    console.log("Les pv de salameche sont a " + salameche.pv);


    if (salameche.pv <=0){
        console.log("Nymphali a gagne")
        break;
    }
    salameche.attackPokemon(Nymphali);
    console.log("Les pv de Nymphali sont a " + Nymphali.pv);

    if (Nymphali.pv <= 0){
        console.log("salameche a gagne")
        break;
}
}

