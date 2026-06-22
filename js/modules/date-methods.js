'use strict';

// Задание текущая дата
function fn_task_CurrentDate(){
    let currentDate = new Date();
     console.log(currentDate);
     console.log("Миллисекунды" ,+currentDate);
}

function fn_task_LastDate(day){
    let my_date = new Date(); 
    let last_date = Number(day) * 24 * 60 * 60 * 1000;
    let search_date = my_date - last_date;

    let prev_date = new Date(search_date); 

    console.log(prev_date); 
}

function fn_task_Desired_format(){

    const days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];

    const months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

    let myDate = new Date();

    let fullDate = "Сегодня: "+myDate.getDate()+" "+months[myDate.getMonth()]+" "+myDate.getFullYear()+", "+days[myDate.getDay()];

    //let hours = myDate.getHours();  
    // hours = hours <= 9 ? '0' + hours : hours;
    // формат времени с учётом UTC
    //let hours = myDate.getUTCHours().
    let hours = String(myDate.getHours()).padStart(2, '0');

    let minutes = myDate.getMinutes();

    let seconds = myDate.getSeconds();

    let timeString = `Время: ${hours}:${minutes}:${seconds}`;

    console.log(fullDate);
    console.log(timeString);
}

function fn_task_Formating(){
    const currentDate = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = currentDate.toLocaleDateString('ru-RU', options);
    console.log(formattedDate);
}

function fn_task_Current_Time_Formating(){
    let currentDate = new Date();
    console.log(currentDate.toLocaleTimeString('ru-RU'));

    let current_date = new Date();
    const options = {
          hour: '2-digit', 
          minute:'2-digit', 
          second:'2-digit'
        };
    console.log(current_date.toLocaleTimeString('ru-RU', options)); // "18:30"
}

export {fn_task_CurrentDate, fn_task_LastDate,fn_task_Desired_format,
        fn_task_Formating, fn_task_Current_Time_Formating};