

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

    console.log(newService);
}
//
function isValid(service){
    let validation=true;
     if (service.description==""){
        
        $("#txtDescription").addClass("alert-error");
     }
}