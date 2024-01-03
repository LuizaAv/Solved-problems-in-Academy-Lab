// Ստեղծեք առաջադրանքների կառավարման պարզ համակարգ, որը թույլ է տալիս օգտվողներին ավելացնել, դիտել և նշել առաջադրանքները որպես ավարտված: Ձեր ծրագիրը պետք է բաղկացած լինի երկու հիմնական function constructor-ներից՝ «Task» և «TaskManager»:
// Ստեղծեք «Task» function constructor-ը, որն ունի հետևյալ հատկությունները.
// «id» (յուրաքանչյուր առաջադրանքի համար եզակի նույնացուցիչ)
// «վերնագիր» (առաջադրանքի անվանումը)
// «նկարագրություն» (առաջադրանքի նկարագրություն)
// «ավարտված» (բուլյան, որը ցույց է տալիս առաջադրանքն ավարտված է, թե ոչ)
// 2.
// Ավելացրեք նոր առաջադրանք առաջադրանքների ցանկում:
// Նշեք առաջադրանքը որպես ավարտված՝ տրամադրելով դրա «id»-ը:
// Թվարկեք բոլոր առաջադրանքները, ներառյալ դրանց վերնագրերը, նկարագրությունները և ավարտի կարգավիճակը:
// Նշեք միայն կատարված առաջադրանքները:
// Թվարկեք միայն թերի առաջադրանքները:
// Ձեր ծրագիրը պետք է ապահովի առաջադրանքների կառավարման համակարգի հետ փոխգործակցելու հարմար եղանակ՝ թույլ տալով օգտվողներին ավելացնել, դիտել և կառավարել առաջադրանքները:



// let id = 0;
// function TaskManager() {
//     this.tasks = [];
// }

// TaskManager.prototype.add = function (obj) {
//   this.tasks.push(obj)
// }

// TaskManager.prototype.completed = function (obj) {
//     this.tasks.forEach((item) => {
//       if(item.id === obj.id){
//         item.completed = true
//       }
//     })
// }

// TaskManager.prototype.listAll = function(){
//   for(let item in this.tasks){
//     console.log(this.tasks[item])
//   }
// }

// TaskManager.prototype.filterCompleted = function(){
//   let filteredArr = this.tasks.filter((item) => item.completed === true)
//   return filteredArr
// }

// TaskManager.prototype.filterNotCompleted = function(){
//   let filteredArr = this.tasks.filter((item) => item.completed !== true)
//   return filteredArr
// }

// function Task(title, description) {
//     this.id = ++id
//     this.title = title;
//     this.description = description;
//     this.completed = false;
    
    
// }

// let task1 = new Task("runing", "morning run");
// let task2 = new Task("reading", "Flanagan")
// let taskamanager = new TaskManager;
// taskamanager.add(task1);
// taskamanager.add(task2);
// taskamanager.completed(task1);
// console.log(taskamanager.filterNotCompleted());