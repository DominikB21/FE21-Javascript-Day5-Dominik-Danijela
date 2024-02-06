/* --- JavaScript, Day 5 - Groups & Classes
------ OBJECTS BASIC, Exercise 1
Create 3 different objects for 3 different themes: car, animal and person.
The end result should be 9 objects in total.
These objects should have some properties like name, brand, model, type, color, weight, age... 
Of course inherent to its type because, for instance, an animal has no brand... 
Each object should have at least one method, that shows some properties about each theme. Feel free to expand on that.
The message from the methods must be printed on the browser too, either by manipulationg a paragraph for example or with console.log, document.write etc.

------ CLASSES BASIC, Exercise 1 // NUR FÜR ANIMAL GEMACHT
Extend from the last example and create 3 different classes to create objects from:  car, animal and person.
These classes should have some properties like name, brand, model, type, color, weight, age...
Of course inherent to its type because, for instance, an animal has no brand... 
Each class should have at least one method, that shows some properties about each theme. Feel free to expand on that.
Create, using the classes, 3 different objects for each class.
The results from the methods must be printed on the browser too like the previous example. */

//--- AUFGABE: OBJECT ANIMAL 

let animal = {
    animalName: "Panda",
    age: "20 - 30",
    weight: "70 - 120 kg",
    length: "1.2 - 1.9 m",
    height: "60 - 90 cm",
    scientificName: "Ailuropoda melanoleuca",
    origin: "China",
    color: "black and white",
    characteristics: "fluffy, rotund body",
    favouriteFood: "bamboo",

    animalIntroduction: function () {
        return `Hello, I'm a ${this.animalName}! <br> I come from ${this.origin} and I love to eat ${this.favouriteFood}.<br>`;
    }
}

console.log(animal.animalIntroduction());
document.getElementById("panda").innerHTML = animal.animalIntroduction();

//--- AUFGABE: CLASS FÜR ANIMAL

let arrAnimals = [];

class TemplateAnimals {
    animalName;
    age;
    weight; 
    height; // nicht im Constructor
    scientificName; // nicht im Constructor
    origin;
    color;
    characteristics; // nicht im Constructor
    favouriteFood;

    constructor(name, age, w, origin, color, chara, favFood){
        this.animalName = name;
        this.age = age;
        this.weight = w;
        this.origin = origin;
        this.color = color;
        this.characteristics = chara;
        this.favouriteFood = favFood;

        arrAnimals.push(this);
    }

    animalIntroduction() {
        return `<br>Hello, I'm a ${this.animalName}! <br> I come from ${this.origin} and I love to eat ${this.favouriteFood}.<br>`;
    }

    // animalApperance() {
    //     return `I can be very ${this.characteristics} and I'm sure you like my ${this.color}!`;
    // }
 }


let animal2 = new TemplateAnimals("Golden Retriever", "12 - 13", "25 - 34kg", "Scotland", "gold and cream", "playful and friendly", "meat");
let animal3 = new TemplateAnimals("Puma", "8 - 13", "29 - 100kg", "North and South America", "brown, gold, cream and silvergrey", "sneaky and wild", "small animals");

// console.table(animal2);
console.table(arrAnimals);

for(let val of arrAnimals){
    document.getElementById("panda").innerHTML += val.animalIntroduction();
}

//--- AUFGABE: OBJECT CAR 
let car = {
    carName: "Chevrolet Impala",
    generation: "4. Generation",
    manufacturer: "Chevrolet (General Motors)",
    production: "1964 - 1970",
    assembly: "United States, Canada, Australia",
    bodyStyle: "2-door, 4 door",
    length: "5395 - 5512 mm",
    width: "2028 mm",
    height: "1382 mm",

    carPresentation: function () {
        return `The ${this.carName} is a classic automobile. <br>
        It was produced in the 70s, between ${this.production}, in ${this.assembly} by ${this.manufacturer}.`;
    }

}

console.log(car.carPresentation());
document.getElementsByClassName("car")[0].innerHTML = car.carPresentation();


//--- AUFGABE: OBJECT PERSON 
let person = {
    firstName: "Mia",
    lastName: "Adams",
    age: 24,
    city: "New York",
    country: "America",
    hairColor: "brown", 
    eyeColor: "brown", 
    height: "175 cm",
    job: "Barista",
    company: "Moonbucks",
    // married: false,
    // children: 1,


    personIntroduction: function () {
        return `Hi, my Name is ${this.firstName}, ${this.firstName} ${this.lastName}. <br>
        I come from ${this.country} and I currently work as a ${this.job} in a coffee shop called ${this.company}.`;
    }

}


console.log(person.personIntroduction());
document.getElementsByClassName("people")[0].innerHTML = person.personIntroduction();