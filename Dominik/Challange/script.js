let carList = [];

class Cars{
  constructor(imageLink, carName, description){
    this.imageLink = imageLink;
    this.carName = carName;
    this.description = description;

    carList.push(this);
  }

  fullInfo(){
    return `<div class="card p-1">
           <img src="${this.imageLink}" class="rounded card-img-top">
           <div class="card-body">
             <h5 class="card-title">${this.carName}</h5>
             <p class="card-text">${this.description}</p>
             <a href="#" class="btn btn-primary">Show more</a>
           </div>
         </div>`
  }
}

let car1 = new Cars("/Dominik/Challange/pics/corvette-4535949_640.jpg", "Chevrolet Corvette C7", "A sports car manufactured by American automobile manufacturer Chevrolet from 2014 until 2019.");

let car2 = new Cars("/Dominik/Challange/pics/ford-64041_640.jpg", "Ford Mustang", "The Ford Mustang is a series of American automobiles manufactured by Ford.")

let car3 = new Cars("https://live.staticflickr.com/4527/27180567849_49dd8635bf_b.jpg", "Lexus LC500", "The Lexus LC is a grand tourer manufactured by Lexus, a luxury division of Toyota.")

let car4 = new Cars("https://live.staticflickr.com/4200/35181144841_b3d1cf9789_b.jpg", "Honda NSX", "Marketed in North America and Hong Kong as the Acura NSX is a 2-seater, mid-engine sports car that was manufactured by Honda in Japan from 1990 until 2005.")

let car5 = new Cars("/Dominik/Challange/pics/ford-64041_640.jpg", "Ford Mustang", "The Ford Mustang is a series of American automobiles manufactured by Ford.")

let car6 = new Cars("/Dominik/Challange/pics/ford-64041_640.jpg", "Ford Mustang", "The Ford Mustang is a series of American automobiles manufactured by Ford.")

let car7 = new Cars("/Dominik/Challange/pics/ford-64041_640.jpg", "Ford Mustang", "The Ford Mustang is a series of American automobiles manufactured by Ford.")

let car8 = new Cars("/Dominik/Challange/pics/ford-64041_640.jpg", "Ford Mustang", "The Ford Mustang is a series of American automobiles manufactured by Ford.")

// document.querySelector("#result").innerHTML = car1.fullInfo();
console.table(carList);

for (let val of carList){
  document.getElementById("result").innerHTML += val.fullInfo();
}