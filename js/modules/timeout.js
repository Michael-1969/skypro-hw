'use strict';



const liveCountdown = (deadline) => {
   // Используем setInterval, чтобы функция выполнялась каждую секунду
   const interval = setInterval(() => {
   // Выводим полученный параметр "deadline" в консоль
      console.log(deadline);
   }, 3000); // Функция будет выполняться каждую 3 секунды (3000 миллисекунд)

   setTimeout(() => {
        clearInterval(interval);
            console.log('Время истекло!')
   }, deadline * 1000)
};

const countdown = (deadline) => {
    if (isNaN(+deadline)) { // + − приводим значение к number, если это NaN,
      console.log('Передано некорректное число'); // выводим сообщение
      return; // Выходим из функции
   }

   let time = deadline;
   const interval = setInterval(() => {
      time -= 1;
      console.log(time);
   }, 1000);

setTimeout(() => {
      clearInterval(interval);
      console.log('Время истекло!')
   }, deadline * 1000)

};


export{liveCountdown,countdown}

