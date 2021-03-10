/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Dog extends Animal{
        constructor(name) {
            super();
            this.name= name;
        }
        static greeting= "Gwauuuuuww!"
    }
    
    class Cat extends Animal{
        constructor(name) {
            super();
            this.name= name;
        }
        static greeting= "Miiaoouwwwh!"
    }

    document.getElementById("run").addEventListener("click", () => {
        let lan = new Dog("Lanuit");
        let neg = new Cat("Negativa");
        console.log(lan.sayHello() , neg.sayHello());
    })

})();
