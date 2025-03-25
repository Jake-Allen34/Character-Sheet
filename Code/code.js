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

function raceSelected(){
    let selectedRace = document.querySelector("#raceSelector").value
    if(selectedRace == "Tiefling"){
        document.querySelector("#Tiefling").classList.remove("hide");
    }
    else{
        document.querySelector("#Tiefling").classList.add("hide");
    }
    if(selectedRace == "Human"){
        document.querySelector("#Human").classList.remove("hide");
    }
    else{
        document.querySelector("#Human").classList.add("hide");
    }
    if(selectedRace == "Elf"){
        document.querySelector("#Elf").classList.remove("hide");
    }
    else{
        document.querySelector("#Elf").classList.add("hide");
    }
    if(selectedRace == "Half-Elf"){
        document.querySelector("#Half-Elf").classList.remove("hide");
    }
    else{
        document.querySelector("#Half-Elf").classList.add("hide");
    }
    if(selectedRace == "Dragonborne"){
        document.querySelector("#Dragonborne").classList.remove("hide");
    }
    else{
        document.querySelector("#Dragonborne").classList.add("hide");
    }
    if(selectedRace == "Gnome"){
        document.querySelector("#Gnome").classList.remove("hide");
    }
    else{
        document.querySelector("#Gnome").classList.add("hide");
    }
 
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

    let choosenClass =document.querySelector("#classSelector").value;
    document.querySelector("#class-output").innerHTML=choosenClass;
    document.querySelector("#sheet").classList.remove("hide");

    let choosenRace =document.querySelector("#raceSelector").value;
    document.querySelector("#race-output").innerHTML=choosenRace;
    document.querySelector("#sheet").classList.remove("hide");

    let choosenAlignment =document.querySelector("#alingment-input").value;
    document.querySelector("#alingment-output").innerHTML=choosenAlignment;
    document.querySelector("#sheet").classList.remove("hide");

    let choosenStrength =document.querySelector("#strength-input").value;
    document.querySelector("#strength-output").innerHTML=choosenStrength;
    document.querySelector("#sheet").classList.remove("hide");

    let choosenDexterity =document.querySelector("#dexterity-input").value;
    document.querySelector("#dexterity-output").innerHTML=choosenDexterity;
    document.querySelector("#sheet").classList.remove("hide");

    let choosenWisdom =document.querySelector("#wisdom-input").value;
    document.querySelector("#wisdom-output").innerHTML=choosenWisdom;
    document.querySelector("#sheet").classList.remove("hide");

    let choosenIntelligence =document.querySelector('#intelligence-input').value;
    document.querySelector("#intelligence-output").innerHTML=choosenIntelligence;
    document.querySelector("#sheet").classList.remove("hide");

    let choosenCharisma =document.querySelector('#charisma-input').value;
    document.querySelector("#charisma-output").innerHTML=choosenCharisma;
    document.querySelector("#sheet").classList.remove("hide")

    let choosenConstitution =document.querySelector('#constitution-input').value;
    document.querySelector("#constitution-output").innerHTML=choosenConstitution;
    document.querySelector("#sheet").classList.remove("hide")
}
