

//create the constructor
function Service(description,price){
    this.description=description;
    this.price=price;
}
function register() {
    console.log("Adding a new service");
    //getting the values
    let inputDscription=$("#txtDescription").val();
    let inputPrice=$("#txtPrice").val();

    let newService= new Service(inputDscription,inputPrice);
if(isValid(newService)){
    saveItem(newService);
    $("input").val("");
}
}
//
function isValid(service){
    let validation=true;
     if (service.description==""){
        
        $("#txtDescription").addClass("alert-error");
     }
     return validation;
}
// Assuming services are stored in an array
var services = ["Bath", "Haircut", "Grooming"];

// Function to save services to local storage
function saveServices() {
    localStorage.setItem("services", JSON.stringify(services));
}
// Clearing input fields
document.getElementById("serviceInput").value = "";
// Fetch services from local storage
var savedServices = JSON.parse(localStorage.getItem("services"));

// Display services on HTML
var servicesList = document.getElementById("servicesList");
servicesList.innerHTML = "";
savedServices.forEach(function(service) {
    var listItem = document.createElement("li");
    listItem.textContent = service;
    servicesList.appendChild(listItem);
});
