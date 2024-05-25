let petSalon={
    name:"The fashion pet",
    phone:"666-6666-6666",
    hours:{
        open:"9:00 am",
        close:"9:00 pm",
    },
    

pets:[
{
    name:"Scooby",
    age:99,
    gender:"Male",
    service:"Grooming"
},
{
    name:"Scrappy",
    age:99,
    gender:"Male",
    service:"Grooming"
},
{
    name:"Tweety",
    age:89,
    gender:"Female",
    service:"Nails cut",
}
]
}

function displayNames(){
    let names="";
    for(let i=0; i<3; i++){
names+=`<p> ${petSalon.pets[i].name} </p>`;
console.log(names);
    }
document.getElementById("petNames").innerHTML=names;
}

function countPets(){
    console.log(petSalon.pets.length);
}