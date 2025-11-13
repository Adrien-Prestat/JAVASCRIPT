let Vampire = {
    name: "Seigneur Vampire",
    pv: 100,
    damage: 5,
    accuracy: 0.7
}

let Lizardman = {
    name: "Vétéran Saurien",
    pv: 90,
    damage: 13,
    accuracy: 0.4
}

function precision(character){
    return Math.random() < character.accuracy
}

function Attack(char1, char2){
    if (precision(char1))
        char2.pv = char2.pv - char1.damage
}

while(Vampire.pv > 0 && Lizardman.pv > 0){
    let pvVamp = Vampire.pv
    let pvLiz = Lizardman.pv
    Attack(Vampire, Lizardman)
    if(pvLiz != Lizardman.pv){
        console.log(Vampire.name, "a infligé", Vampire.damage, "dégats à ", Lizardman.name)
    }else{
        console.log(Vampire.name, "rate son coup !")
    }
    if(Lizardman.pv > 0)
        Attack(Lizardman, Vampire)
    if(pvVamp != Vampire.pv){
        console.log(Lizardman.name, "a infligé", Lizardman.damage, "dégats à ", Vampire.name)
    }else{
        console.log(Lizardman.name, "n'arrive pas à toucher !")
    }
    console.log(Vampire.name, "est rendu à ", Vampire.pv, "pvs, ", Lizardman.name, "en est à ", Lizardman.pv, "pvs.")
}

if (Vampire.pv > 0) {
    console.log(Vampire.name, "est victorieux !")
} else {
    console.log(Lizardman.name, "triomphe !")
}