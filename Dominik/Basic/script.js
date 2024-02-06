// let car = {
//   brand: "Mazda",
//   model: "MX5",
//   year: "2020",
//   color: "red",
//   fullSpec: function(){
//     return this.brand+" "+this.model+" BJ:"+this.year+" in the color: "+this.color;
//   }
// }

// //console.log(car.fullSpec());
// document.querySelector("#car").innerHTML = car.fullSpec();

// let animal = {
//   type: "cat",
//   age: 3,
//   color: "black",
//   fullInfo: function(){
//     return "The animal is a "+this.color+" "+this.type+" and is "+this.age+" years old."
//   }
// }

// //console.log(animal.fullInfo());
// document.querySelector("#animal").innerHTML = animal.fullInfo();

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 32,
//   job: "IT",

//   fullDescription: function(){
//     return this.firstName+" "+this.lastName+" is "+this.age+" years old and works in "+this.job+"."
//   }
// }

// document.querySelector("#person").innerHTML = person.fullDescription();

//------------------------------------------------------------------------

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

let car1 = new Car("Lexus", "LC500", "2022", "silver");

document.querySelector("#car").innerHTML = car1.fullSpec();

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

let animal1 = new Animal("dog", "6", "brown")

document.querySelector("#animal").innerHTML = animal1.fullInfo();

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
    return this.firstName+" "+this.lastName+" is "+this.age+" years old and works as a "+this.job+"."
  }
}

person1 = new Person("Mary", "Jane", 42, "florist")

document.querySelector("#person").innerHTML = person1.fullDescrpition();