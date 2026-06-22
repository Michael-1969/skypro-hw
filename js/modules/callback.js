'use strict';

/*
function functionWithCallback(callback) {
   // Передаем в колбэк-функцию 2 аргумента: "Глеб" и "Фокин"
   callback("Артём", "Потёмкин");
}

functionWithCallback((name, surname) => {
   // Внутри колбэк-функции мы можем использовать данные,
   // которые передает в него код, который его вызывает
   console.log(`Привет, ${name} ${surname}!`);
   // Выведет в консоль «Привет, Глеб Фокин!»
});

//Без колбэков можно написать код так:

const greet = (name, surname) => {
   console.log(`Привет, ${name} ${surname}!`);
};

function functionWithoutCallback() {
   greet("Михаил", "Пугачёв");
}

functionWithoutCallback(); //Выведет в консоль «Привет, Глеб Фокин!»

*/

/////////////////////////////////////////////////////////////////////
/////    О Т В Е Т Ы     Н А    З А Д А Н И Я

function callbackWithArrayLength(arr, callback) {
	         if (Array.isArray(arr)) {
            callback(arr.length);
          }
      }

function log(arrItem) {
	console.log("Элемент массива:", arrItem);
}

function each(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}

///////////////////////////////////////////////////////////////////////////
/////////     зачем нужен callback?
///  Реализация функции map
function square(number) {
   return number * number;
}

function squareRoot(number) {
   return Math.sqrt(number);
}

function map(arr, ruleFunction) {
   const output = [];

   for (let i = 0; i < arr.length; i++) {
      output.push(ruleFunction(arr[i]));
   }
   return output;
}

//// Реализация функции filter
function isPositive(element) {
       if(element > 0)return true;
       else return false;
}
function isMale(element) {
   
     if(element.gender === 'male')return true;
     else return false;

}
function filter(arr,ruleFunction) {
   const output = [];
   for (let i = 0; i < arr.length; i++)
      if(Boolean(ruleFunction(arr[i]))) output.push(arr[i]);
      else continue;
      
   return output;
}
 

export {callbackWithArrayLength, each, log, square, squareRoot, map,
      isPositive,isMale,filter }