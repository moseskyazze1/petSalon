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

 function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;

    let newPet= new Pet(inputName,inputAge,inputGender,inputBreed,inputService);
        petSalon.pets.push(newPet);
        console.log(petSalon.pets);
    
    }
 function init(){
    let pet1=new Pet("Scooby",79,"Male","Grooming");
    let pet2=new Pet("Scrappy",79,"Male","Grooming");
    let pet3=new Pet("",79,"Male","Grooming");
    petSalon.pets.push(pet1);
    petSalon.pets.push(pet2);
    petSalon.pets.push(pet3);
    console.table(petSalon.pets);
 }

 window.onload=init;