let car = {
  brand: "Mazda",
  model: "MX5",
  year: "2020",
  color: "red",
  fullSpec: function(){
    return this.brand+" "+this.model+" BJ:"+this.year+" in the color: "+this.color;
  }
}

console.log(car.fullSpec());

let animal = {
  type: "Cat",
  age: 3,
  color: "black",
}