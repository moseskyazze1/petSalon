let petSalon={
    name:"The fashion pet",
    phone:"666-6666-6666",
    hours:{
        open:"9:00 am",
        close:"9:00 pm",
    },
    

pets:[]
}

function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}
function isValid(aPet){
    let validation=true;

    if(aPet.name==""){
        validation=false;
        document.getElementById("txtName").classList.add("alert-error");
    }
    if(aPet.service==""){
        validation=false;
        document.getElementById("txtService").classList.add("alert-error");
    }

    return validation;
}

 function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;

    let newPet= new Pet(inputName,inputAge,inputGender,inputBreed,inputService);
    if(isValid(newPet)){
        petSalon.pets.push(newPet);
        displayCards();
        displayRows();
        displayTotalPets();
        displayServiceCount();
    }
    }

function deletePet(index){
    petSalon.pets.splice(index,1);
    displayCards();
    displayRows();
    displayServiceCount();
    displayTotalPets();
}

 function init(){
    let pet1=new Pet("Scooby",79,"Male","Dog","Grooming");
    let pet2=new Pet("Scrappy",79,"Male","Dog","Grooming");
    let pet3=new Pet("Davis",79,"Male","Dog","Grooming");
    petSalon.pets.push(pet1);
    petSalon.pets.push(pet2);
    petSalon.pets.push(pet3);
   displayCards();
   displayRows();
   displayTotalPets();
   displayServiceCount();
 }

 window.onload=init;