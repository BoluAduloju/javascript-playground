function Car(make, model, year, color){
   this.make = make;
   this.model = model,
   this.year = year,
   this.color = color
   this.drive = function(){`You Drive a ${this.make} ${this.model}`}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");


car1.drive();
car2.drive();
car3.drive();




