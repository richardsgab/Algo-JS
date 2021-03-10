/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstname, lastname){
            this.firstname= firstname;
            this.lastname= lastname;
        }
        sayHello() {
            console.log("Hola " + this.firstname + " " + this.lastname);
        }
        
    }

    var mulher= new Person ("Iemanja", "Orixa");
    document.getElementById("run").addEventListener("click", ()=> {
        mulher.sayHello();
    })
})();
