let car = {
  brand: "Mazda",
  model: "MX5",
  year: "2020",
  color: "red",
  fullSpec: function(){
    return this.brand+" "+this.model+" BJ:"+this.year+" in the color: "+this.color;
  }
}

//console.log(car.fullSpec());
document.querySelector("#car").innerHTML = car.fullSpec();

let animal = {
  type: "cat",
  age: 3,
  color: "black",
  fullInfo: function(){
    return "The animal is a "+this.color+" "+this.type+" and is "+this.age+" years old."
  }
}

//console.log(animal.fullInfo());
document.querySelector("#animal").innerHTML = animal.fullInfo();

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  job: "IT",

  fullDescription: function(){
    return this.firstName+" "+this.lastName+" is "+this.age+" years old and works in "+this.job+"."
  }
}

document.querySelector("#person").innerHTML = person.fullDescription();