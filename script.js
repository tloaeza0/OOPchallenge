class Pokemon{
    constructor(name,type,attack){
        this.name = name,
        this.type=type,
        this.attack = attack
    }
    attackType = () =>{
        return (`${this.name} used ${this.attack}!`);
    }
}

const gengar = new Pokemon ("Gengar", "Ghost Poision", "Lick");
console.log(gengar.attackType());

const squirtle = new Pokemon ("Squirtle", "Water", "Aqua Jet");
console.log(squirtle.attackType());