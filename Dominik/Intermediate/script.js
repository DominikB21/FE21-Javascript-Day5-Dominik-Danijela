class Car {
  brand;
  model;
  year;
  color;

  constructor(brand, model, year, color){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  fullSpec() {
    return this.brand+" "+this.model+" BJ:"+this.year+" in the color: "+this.color;
  }
}

class Motorcycle extends Car {
  licenseType;
  form;

  constructor(brand, model, year, color, licenseType, form){
    super(brand, model, year, color)
    this.licenseType = licenseType;
    this.form = form;
  }

  fullSpec(){
    return super.fullSpec() + " can be driven with "+this.licenseType+" and is a "+this.form+".";
  }
}

let car1 = new Car("Lexus", "LC500", "2022", "silver");
let motorcycle = new Motorcycle("Kawasaki", "Z300", 2016, "black", "A2", "nakedbike")

document.querySelector("#car").innerHTML = car1.fullSpec();
document.querySelector("#bike").innerHTML = motorcycle.fullSpec();

class Animal {
  type;
  age;
  color;

  constructor(type, age, color){
    this.type = type;
    this.age = age;
    this.color = color;
  }

  fullInfo(){
    return "The animal is a "+this.color+" "+this.type+" and is "+this.age+" years old.";
  }
}

class Fish extends Animal {
  typeOfWater;
  size;

  constructor(type, age, color, typeOfWater, size){
    super(type, age, color);
    this.typeOfWater = typeOfWater;
    this.size = size;
  }

  fullInfo(){
    return super.fullInfo()+" It lives in "+this.typeOfWater+" and is "+this.size+".";
  }
}

let animal1 = new Animal("dog", "6", "brown");
let fish = new Fish("fish", 1, "orange", "sweetwater", "small");

document.querySelector("#animal").innerHTML = animal1.fullInfo();
document.querySelector("#fish").innerHTML = fish.fullInfo();

class Person {
  firstName;
  lastName;
  age;
  job;

  constructor(firstName, lastName, age, job){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.job = job;
  }

  fullDescrpition(){
    return this.firstName+" "+this.lastName+" is "+this.age+" years old and works as a "+this.job;
  }


}

class PersonLoc extends Person {
  location;

  constructor(firstName, lastName, age, job, location){
    super(firstName, lastName, age, job);
    this.location = location;
  }

  fullDescrpition(){
    return super.fullDescrpition()+"  in "+this.location+".";
  }
}

person1 = new Person("Mary", "Jane", 42, "florist");
person2 = new PersonLoc("Jeremy", "Williams", 25, "singer", "ibiza");

document.querySelector("#person").innerHTML = person1.fullDescrpition();
document.querySelector("#personLoc").innerHTML = person2.fullDescrpition();