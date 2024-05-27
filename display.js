function displayCards(){
    let card="";
    const petDiv=document,getElementById("petDiv");
    for(let i=0; i<petSalon.pets.length; i++){
        let prt=petSalon.pets[i];

        card+=`
        <div class="petCard">
        <h4>${pet.name}</h4>
        <p>${pet.age}</p>
        <p>${pet.gender}</p>
        <p>${pet.service}<p>
        </div>
        `;
    }
    petDiv.innerHTML=card;
}

function displayRows(){

}

function