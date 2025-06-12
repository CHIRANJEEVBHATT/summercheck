const p = document.getElementById("display").innerHTML = "hello guys";
const p1 = document.getElementById("display1").innerHTML="hello"+ " " + "bhai";
let x = myFunction(5,6);
    document.getElementById("demo").innerHTML = "x";

function myFunction(a,b){
    return a * b;
}
let text = "The value of x  is " + myFunction(7,9) ;
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};