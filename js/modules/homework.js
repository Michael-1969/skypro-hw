'use strict';



// Задание 1
function fn_task_1(){
   
   const people = [
      { name: 'Глеб', age: 29 },
      { name: 'Анна', age: 17 },
      { name: 'Олег', age: 7 },
      { name: 'Оксана', age: 47 }
   ];
   
   // сортировка по возрасту
   const sortAge = people.sort((a,b) => {
      return a.age - b.age;
   });

   console.log("Сортировка по возрасту: \n");
   sortAge.forEach((one) =>{
      console.log(`${one.name} -> ${one.age}`);
   });

   // сортировка по именам
   const sortName = people.sort((a,b) => {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
   });

   console.log("Сортировка по имени: \n");
    sortAge.forEach((one) =>{
      console.log(`${one.name} -> ${one.age}`);
   });
}



// Задание 2

//// Реализация функции filter
function isPositive(element) {
       if(element > 0)return true;
       else return false;
}
function isMale(element) {
   
     if(element.gender === 'male')return true;
     else return false;

}

function fn_task_2(){

   function filter(arr,ruleFunction) {
         const output = [];
         for (let i = 0; i < arr.length; i++)
            if(Boolean(ruleFunction(arr[i]))) output.push(arr[i]);
            else continue;
      
         return output;
   }

   console.log(filter([3, -4, 1, 9], isPositive)); 

    const people = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale));

}



// Задание 3
function printDate() {
         console.log(new Date());
}


function fn_task_3(deadline){
    const delay = deadline * 1000;
    const interval = setInterval(() => {
   // Выводим полученный параметр "deadline" в консоль
      printDate();
   }, 3000); // Функция будет выполняться каждую 3 секунды (3000 миллисекунд)

   setTimeout(() => {
        clearInterval(interval);
            console.log(`Прошло ${delay}`)
   }, delay)
}

// Задание 4

function delayForSecond(callback) {
   setTimeout(() => {
      callback();
   },2000);  
}
function fn_task_4(){
   delayForSecond(function () { console.log('Привет, Глеб!');});
}

// Задание 5
function sayHi (name,fullname) {
    console.log(`Привет, ${name} ${fullname}!`);
}

function fn_task_5(cb,param_1,param_2){
     setTimeout(() => {
         console.log('Прошло три секунды');
         if(cb) {  cb(param_1,param_2); }
     }, 3000);
}

// Задание 6
function fn_task_6(single_number){
      
}

// Задание 7
function fn_task_7(first,second){
        
}

// Задание 8
function fn_task_8(){
  
     
}

// Задание 9
function fn_task_9(){
     
}
// Задание 10
function fn_task_10(){
        
}



// Задание 11
function fn_task_11(){
             
}



// Задание 12
function fn_task_12(){
   
}

// Задание 13
function fn_task_13(){
   
     
}

// Задание 14
function fn_task_14(){
   
}

// Задание 15
function fn_task_15(){
   
}


export {fn_task_1, fn_task_2,fn_task_3,fn_task_4,fn_task_5,
        fn_task_6,fn_task_7,fn_task_8,fn_task_9,fn_task_10,
        fn_task_11,fn_task_12,fn_task_13,fn_task_14,fn_task_15,
        sayHi};