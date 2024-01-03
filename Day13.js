// Ստեղծեք Calendar class, որը կստեղծի մի ամսվա աղյուսակ
// constructor-ը որպես արգումենտ պետք է ստանա տարին և ամիսը
// constructor-ի սկզբնական արժեքներն են events, year և month
//        մեթոդներն են՝
// addEvent - որպես արգումենտ կստանա date, time, description և կստեղծի նոր event ու կավելացնի աղյուսակ
// removeEvent - որպես արգումենտ կստանա date, time և կհանի համապատասխան event-ը աղյուսակից
// getEvent - որպես արգումենտ կստանա date և կվերադարձնի այդ օրվա բոլոր event-ները
// getAllEvents - կվերադարձնի բոլոր event-ները սորտավորված ըստ օրերի
// getFreeDays - կվերադարձնի բոլոր ազատ օրերը



// let date = new Date() 
// function Calendar (year, currentMonth) {
//     this.year = year;
//     this.currentMonth = currentMonth;
//     this.month = [];
//     this.events= []

//     for(let i = 1; i <= 30; ++i){
//       this.month.push(i)
//     }
// }

// Calendar.prototype.addEvent = function(date, time,description) {
//   this.events.push({
//     date,
//     time, 
//     description
//   })
// }

// Calendar.prototype.removeEvent = function(date, time) {
//   this.events = this.events.filter((item) => !(item.date === date && item.time === time))
// }

// Calendar.prototype.getEvent = function(date) {
//   let filtered = this.events.filter((item) => item.date === date)
//   return filtered
// }

// Calendar.prototype.getAllEvents = function(){
//   this.events.forEach((item) => console.log(item))
// }


// let calendar = new Calendar(2023,12)
// calendar.addEvent("2023-11-29", "17:00", "Meeting");
// calendar.addEvent("2023-11-28", "14:30", "Lunch");
// calendar.addEvent("2023-11-29", "18:00", "Level 0");
// //console.log(calendar.getEvent("2023-11-28"))
// //calendar.removeEvent("2023-11-29", "18:00", "Level 0")
// //console.log(calendar.events)
// //calendar.getAllEvents()
// console.log(calendar.getFreeDays())