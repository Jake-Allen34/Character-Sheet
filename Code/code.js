function classSelected(){
    console,console.log("Selection Changed");
    let selectedClass = document.querySelector("#classSelector").value
    if(selectedClass == "Barbarian"){
        document.querySelector("#Barbarian-Start-Weapon").classList.remove("hide");
    }
    else{
        document.querySelector("#Barbarian-Start-Weapon").classList.add("hide");
    }
    if(selectedClass == "Druid"){
        document.querySelector("#Druid-Start-Weapon").classList.remove("hide");
    }
    else{
        document.querySelector("#Druid-Start-Weapon").classList.add("hide");
    }
    if(selectedClass == "Warlock"){
        document.querySelector("#Warlock-Start-Spell").classList.remove("hide");
    }
    else{
        document.querySelector("#Warlock-Start-Spell").classList.add("hide");
    }
    if(selectedClass == "Bard"){
        document.querySelector("#Bard-Start-Weapon").classList.remove("hide");
    }
    else{
        document.querySelector("#Bard-Start-Weapon").classList.add("hide");
    }
    if(selectedClass == "Sorcerer"){
        document.querySelector("#Sorcerer-Start-Spell").classList.remove("hide");
    }
    else{
        document.querySelector("#Sorcerer-Start-Spell").classList.add("hide");
    }
    if(selectedClass == "Rouge"){
        document.querySelector("#Rouge-Start-Weapon").classList.remove("hide");
    }
    else{
        document.querySelector("#Rouge-Start-Weapon").classList.add("hide");
    }
}

let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){ 
    x = Math.floor(Math.random() * 20) + 1;
    y = Math.floor(Math.random() * 20) + 1;
    z = Math.floor(Math.random() * 20) + 1;
    a = Math.floor(Math.random() * 20) + 1;
    b = Math.floor(Math.random() * 20) + 1;
    c = Math.floor(Math.random() * 20) + 1;

    document.getElementById("Strength").innerHTML = x;
    document.getElementById("Dexterity").innerHTML = y;
    document.getElementById("Wisdom").innerHTML = z;
    document.getElementById("Intelligence").innerHTML = a;
    document.getElementById("Charisma").innerHTML = b;
    document.getElementById("Constitution").innerHTML = c;
}

function handleSubmit(e){
    e.preventDefault();
    let choosenName =document.querySelector("#name-input").value;
    document.querySelector("#name-output").innerHTML=choosenName;
    document.querySelector("#sheet").classList.remove("hide");

    let choosenSex =document.querySelector("#sex-input").value;
    document.querySelector("#sex-output").innerHTML=choosenSex;
    document.querySelector("#sheet").classList.remove("hide");

    let choosenHP =document.querySelector("#hp-input").value;
    document.querySelector("#hp-output").innerHTML=choosenHP;
    document.querySelector("#sheet").classList.remove("hide");

    let choosenLevel =document.querySelector("#level-input").value;
    document.querySelector("#level-output").innerHTML=choosenLevel;
    document.querySelector("#sheet").classList.remove("hide");

   let choosenAlignment =document.querySelector("#alingment-input").value;
    document.querySelector("#alingment-output").innerHTML=choosenAlignment;
    document.querySelector("#sheet").classList.remove("hide");

}
