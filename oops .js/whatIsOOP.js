class Vehicle {
    constructor(name, companyName, type){
        this.name = name;
        this.company = companyName;
        this.type = type;
        this.wheelsCount = 4;
    }
    
    run() {
        console.log( `${this.name} is running`);
    }
    
    refillPetrol() {
        console.log(`${this.name} is refilling petrol `);
    }


    getName(){
           console.log(`${this.name}`);
    }
}
class Bike extends Vehicle{
    constructor(name, companyName, type){
            super(name, companyName, type);
            this.backGear = false;
            this.kickStart = true;
    }
        
    isHelmetRequired () {
        
        return false;
    }

}


class Truck extends Vehicle{

    constructor(name, companyName, type, ){
            super(name, companyName);
            this.backGear = true;
            this.kickStart = false;
    }
        
    transportGoods(weight){
        return `this truck transports goods of ${weight} kg`
    }
}

class Car extends Vehicle{
        
        travel(){
            console.log("travelling via car");
        }
  
}

let myTruck = new Truck("ACE", "Tata", "Heavy");
console.log(myTruck);
console.log(myTruck.transportGoods(50));