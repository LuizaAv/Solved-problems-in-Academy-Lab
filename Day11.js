//1. Ստեղծեք «person» կոչվող օբյեկտ՝ «name», «age» և «email» հատկություններով: Տպեք այս հատկությունների արժեքները:

// let person = {
//     name: "Luiza",
//     age: 31,
//     email: "l.avetisyan7777@gmail.com"
// }

// console.log(person.name);
// console.log(person.age);
// console.log(person.email);

//2. Ստեղծեք «car» կոչվող օբյեկտ՝ «make», «model» և «year» հատկություններով: Ավելացրեք «startEngine» կոչվող 
// մեթոդը, որը գրանցում է հաղորդագրություն՝ ասելով, որ շարժիչը միացել է:

// let car = {
//     mark: "Toyota",
//     model: "Camry",
//     year: 2007,
    
//     startEngine () {
//         return `The engine has started`;
//     }
// }

// console.log(car.startEngine());

//3. Ստեղծեք «restaurant» կոչվող օբյեկտ՝ «name», «cuisine» և «rating» հատկություններով: 
//Գործարկեք մեթոդ օբյեկտի ներսում, որը տպում է restaurant օբյեկտի հատկությունները:

// let restaurant = {
//     name: "Tsirani",
//     cuisine: "Armenian",
//     rating: "5 start",
//     objValues() {
//         return `${this.name}, ${this.cuisine}, ${this.rating}`
//     }
// }

// console.log(restaurant.objValues())

//4. Ստեղծեք «team» օբյեկտ, որը ներկայացնում է սպորտային թիմ: Օբյեկտը պետք է ունենա այնպիսի հատկություններ, 
//ինչպիսիք են «name», «sport» և «players» (խաղացողների անունների ցուցակ, որը կազմված կլինի ներդրված օբյեկտից): 
//Օբյեկտում ներդրեք մեթոդներ՝ թիմին խաղացող ավելացնելու, խաղացողին թիմից հեռացնելու և թիմի խաղացողների 
//ցուցակը ցուցադրելու համար:

// let team = {
//     name: "Barcelona",
//     sport: "Footbol",
//     players: [
//         {
//             name: "Messi",
//             age: 31
//         }
//     ],

//     add (arg) {
//         this.players = [... this.players, {name: arg.name, age: arg.age}];
//     },

//     deleteMeth (name) {
//         this.players = this.players.filter((item) => item.name !== name)
//     },

//     mapMeth () {
//         let i = 0;
//         while(i < this.players.length) {
//             console.log(this.players[i]);
//             ++i
//         }
//     }
// }

// team.add({
//     name: "Luiza",
//     age: 31
// })
// team.add({
//     name: "Lusine",
//     age: 25
// })
// console.log(team.players);

// team.deleteMeth("Luiza");
// console.log(team.players);

// team.mapMeth();

//5. Ստեղծեք ֆունկցիա, որը կոչվում է greet, որն ընդունում է երկու պարամետր՝ անուն և տարիք: Օգտագործեք call 
//մեթոդը՝ ֆունկցիան կանչելու և որպես արգումենտ փոխանցելու «John» և 25 արժեքները։

// function greet(name, age) {
//     return `${name} is ${age}`
// }

// console.log(greet.call(null, "John", 25))

//6. Ստեղծեք person կոչվող օբյեկտ՝ name հատկությամբ: Գրեք sayHello անունով ֆունկցիա, որը գրանցում է person-ի 
// name-ով ողջույնը: Օգտագործեք bind մեթոդը՝ sayHello ֆունկցիան person օբյեկտին կապելու և այն փոփոխականում
// պահելու համար: Ողջույնը գրանցելու համար կանչեք կապված ֆունկցիան;

// let person = {
//     name: "Mike"
// }

// function sayHello () {
//     return `Hello from ${this.name}`;
// }

// const getHello = sayHello.bind(person);
// console.log(getHello())

//7. Իրականացնել Person function constructor-ը, որը կունենա name, age հատկությունները: Person-ի prototype-ում 
//ավելացնել fullname ֆունկցիան, որը կվերադարձնի Person function-ի հատկությունները: Այնուհետև ստեղծել
// օբյեկտ, որը հասանելիություն կապահովի function-ի անդամներին:

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.fullName = function () {
//         return `${this.name} is ${this.age}`
//     }
// }

// let obj = new Person("Mike", 25);
// console.log(obj.fullName())

//8. Գրեք ծրագիր, որը մոդելավորում է movie-rental-system (ֆիլմերի վարձույթի համակարգը)։ Ծրագիրը պետք է 
//իրականացնի movies, customers և rentals function constructor-ները: Movies-ը պետք է ունենա այնպիսի հատկանիշներ, 
//ինչպիսիք են title, genre և rating: Customer-ը պետք է ունենա այնպիսի հատկություններ, ինչպիսիք են name
// և contact-information: Rentals-ը պետք է ունենա այնպիսի հատկանիշներ, ինչպիսք են
// customer-renting-movie(ֆիլմը վարձակալող հաճախորդը), movie-rented, rental-duration: Ծրագիրը պետք է 
//հնարավորություն տա հաճախորդներին փնտրել և վարձել ֆիլմեր, դիտել իրենց վարձույթի պատմությունը և 
//վերադարձնել ֆիլմերը:

// function Movies() {
//     this.title = ["Matrica", "Leon"];
//     this.genre = ["comedy", "tragedy", "melodrama"];
//     this.rating = [{name: "Matrica", rate: 4.9}, {name: "Leon", rate: 5}];

//     this.movie_range = function() {
//         this.title.forEach(item => console.log(item));
//     }
// }

// function Customer(name, contact_information) {
//     this.name = name;
//     this.contact_information = contact_information;
//     this.history = [];

//     this.find = function (movies, filmName) {
//         return movies.title.includes(filmName);
//     }

//     this.rent = function (movies, filmName, rentals, duration) {
//         if(this.find(movies, filmName)) {
//             rentals.movie_rented.push(filmName);
//             rentals.rental_duration.push({ name: filmName, duration: duration });
//             this.history.push({ name: filmName, duration: duration });
//         }
//     }

//     this.watch_history = function() {
//         return this.history.map(item => `${item.name} for ${item.duration}`);
//     }
// }

// function Rentals() {
//     this.movie_rented = [];
//     this.rental_duration = [];
// }

// let movie = new Movies();
// let customer = new Customer("Mike", "098550027");
// let rentals = new Rentals();

// console.log(customer.find(movie, "Leon"));
// customer.rent(movie, "Leon", rentals, "3 months");
// console.log(rentals.movie_rented);
// console.log(rentals.rental_duration);
// console.log(customer.watch_history());
// movie.movie_range();