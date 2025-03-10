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
}``