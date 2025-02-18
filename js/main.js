let sandwichBase = "pollo"
let pan= "Blanco"

console.log("Por favor elija su tipo de sándwich \n > pollo \n > carne \n > veggie");

if (sandwichBase == "pollo"){
    console.log("Serián $150, Por favor elija su tipo de pan \n > Blanco \n > Negro \n > S/Gluten")
    if (pan== "Blanco"){
        console.log("Su total seriá de $200 \n En un momento le entregamos su pedido")
    } else if (pan== "Negro"){
        console.log("Su total seriá de $210 \n En un momento le entregamos su pedido")
    } else if (pan== "S/Gluten"){
        console.log("Su total seriá de $225 \n En un momento le entregamos su pedido")
    } else{
        console.log("El pan ingresado no se encuentra disponible, por favor elija otro")
    };
} else if (sandwichBase == "carne"){
    console.log("Serián $200, Por favor elija su tipo de pan \n > Blanco \n > Negro \n > S/Gluten")
    if (pan== "Blanco"){
        console.log("Su total seriá de $250 \n En un momento le entregamos su pedido")
    } else if (pan== "Negro"){
        console.log("Su total seriá de $260 \n En un momento le entregamos su pedido")
    } else if (pan== "S/Gluten"){
        console.log("Su total seriá de $275 \n En un momento le entregamos su pedido")
    } else{
        console.log("El pan ingresado no se encuentra disponible, por favor elija otro")
    };
} else if (sandwichBase == "veggie"){
    console.log("Serián $100, Por favor elija su tipo de pan \n > Blanco \n > Negro \n > S/Gluten")
    if (pan== "Blanco"){
        console.log("Su total seriá de $150 \n En un momento le entregamos su pedido")
    } else if (pan== "Negro"){
        console.log("Su total seriá de $160 \n En un momento le entregamos su pedido")
    } else if (pan== "S/Gluten"){
        console.log("Su total seriá de $175 \n En un momento le entregamos su pedido")
    } else{
        console.log("El pan ingresado no se encuentra disponible, por favor elija otro")
    };
} else{
    console.log("El sandwich ingresado no se encuentra disponible, por favor seleccione otro")
};



function sandwich(){
    if (sandwichBase == "pollo"){
        return 150
    } else if (sandwichBase == "carne"){
        return 200
    } else if (sandwichBase == "veggie"){
        return 100
    } else{
        console.log("El sandwich ingresado no se encuentra disponible, por favor seleccione otro")
        return 0
    };
};

function panSandwich(){
    if (pan == "Blanco"){
        return 50
    } else if (pan == "Negro"){
        return 60
    } else if (pan == "S/Gluten"){
        return 75
    } else{
        console.log("El pan ingresado no se encuentra disponible, por favor elija otro")
        return 0
    };
};

let queso = true;
let tomate = true;
let cebolla = false;
let mayonesa = false;
let mostaza = false;
let lechuga = true;
let totalAdicionales = 0;

function adicionales(adicional){
    if (queso == true) {
        totalAdicionales += 20
    };
    if (tomate == true) {
        totalAdicionales += 15
    };
    if (cebolla == true) {
        totalAdicionales += 15
    };
    if (mayonesa == true) {
        totalAdicionales += 5
    };
    if ( mostaza == true) {
        totalAdicionales += 5
    }if (lechuga == true) {
        totalAdicionales += 10
    };
    return totalAdicionales
};

console.log(`Su total es de $ ${sandwich() + panSandwich() + adicionales()}`);