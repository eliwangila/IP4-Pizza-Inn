// pizza object use of this keyword
function Pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.price = 0;
}


//fuction to call the totalCost of pizza onces selected 
Pizza.prototype.totalCost = function () {
    switch (this.size) {
        case "small":
            this.price = 800;
            break;
        case "medium":
            this.price = 1000;
            break;
        case "large":
            this.price = 1200;
            break;
        default:
            break;
    }
    switch (this.crust) {
        case "crust-crispy":
            this.price += 80;
            break;
        case "crust-stuffed":
            this.price += 80;
            break;
        case "sugar-free":
            this.price += 80;
            break;
        default:
            break;
    }
};


var cartItems = [];
var cartTotal = 0;

$(document).ready((e) => {
    $("#print").click(function (event) {
        event.preventDefault();
        alert("Thank you for choosing Plantas Plate . Your order will be delivered shortly");
        resetForm();
    });

    $("#close").click(function (event) {
        event.preventDefault();
        document.getElementById("delivery-form").style.display = "none";
    });

    $("#inhouse").click(function (event) {
        event.preventDefault();
        alert("Thank you for choosing Platas Plate . Your order will be delivered shortly");
        resetForm();
    });

    $("#homeDelivery").click(function (event) {
        event.preventDefault();
        document.getElementById("delivery-form").style.display = "block";
        resetForm();

    });

        // checked  
    $("#submit-btn").click(function (event) {
        event.preventDefault();
        var size = $("input[name='pizzaSize']:checked").val();
        var crust = $("input[name='pizzaCrust']:checked").val();
        var topping = $("#topping").children("option:selected").val();
