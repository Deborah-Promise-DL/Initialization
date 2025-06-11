

window.alert("Javascript");

// variables, operators
let a, b, c;
  a = 5; b = 6; c = a + b;
  a++;
  let d = a;
  document.write(c +"," + d);
  document.write("<br>");

  //objects
  const person = {firstName:"John", lastName: "Doe",id: 123,};
  document.write(person.firstName + " " + person.lastName);
  document.write("<br>");
  
  //arrays
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi", "Altroz");
document.write("The cars are " + cars);

//console
console.log(1 + 5); 

//Boolean datatype
let x = 5;
let y = 6;
document.write("<br>" + (x == y));
  
//Function
  function myFunction(p1, p2) {
    return p1 * p2;
  }
  let result = myFunction(4, 3);
  document.write("4 * 3 = " + result);
  document.write("<br>");

  //Object methods
  const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  document.write(person1.fullName());
  document.write("<br>");
  
//Nested objects
  const myObj = {
    name: "John",
    age: 30,
    myCars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }
  
  let p1 = "myCars";
  let p2 = "car3";
  document.write(myObj[p1][p2]);

  