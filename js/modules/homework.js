'use strict';



// Задание 1
function fn_task_1(){
   const str = 'js';
   // создается новая строка без преобразования текущей
   const new_str = str.toUpperCase();
   console.log("Up -> ",new_str,'Lower -> ',str);
   
}

// Задание 2
function fn_task_2(arr_str,single_str){
   
   arr_str.forEach((str) => {
        if (str.toLowerCase().startsWith(single_str.toLowerCase()))
            console.log(str);
        
   });
   
}

// Задание 3
function fn_task_3(){
   const float_number = +32.58884;
   console.log("До меньшего целого -> floor : ",Math.floor(float_number));
   console.log("До большего целого -> ceil : ",Math.ceil(float_number));
   console.log("До ближайшего целого -> round : ",Math.round(float_number));
   
}

// Задание 4
function fn_task_4(){
  const arr_number = ['52', '53', '49', '77', '21', '32'];
  // 1 вариант 
  let min_number = arr_number[0];
  for (let i = 1; i < arr_number.length; i++)
        if(min_number > arr_number[i]) 
                min_number = arr_number[i];
                
      console.log(`Мин.число через цикл = ${min_number}`)

  console.log(`Мин.число через spred = ${Math.min(...arr_number)}`);
}

// Задание 5
function fn_task_5(){
     console.log(Math.floor(Math.random() * 10 + 1));
}

// Задание 6
function fn_task_6(single_number){
      const arr_random = new Array();
     for(let i = 0; i < Math.floor(single_number) / 2; i++)
        arr_random.push(Math.floor(Math.random() * single_number));

     console.log(arr_random);
}

// Задание 7
function fn_task_7(first,second){
        if(second < first)[first,second] = [second,first];
                

      let random = Math.floor(Math.random() * (second - first)) + first;
    console.log(first,'<- ',random,' ->',second);
}

// Задание 8
function fn_task_8(){
  let currentDate = new Date();
     console.log(currentDate);
     
}

// Задание 9
function fn_task_9(){
     const current_date = new Date();
     const offset_date = Number(73);

     const calculate = current_date.getDate() * 24 * 3600 * 1000;
     const next_date = new Date(calculate + current_date.setDate(offset_date));
    console.log(next_date);
}
// Задание 10
function fn_task_10(){
        const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

        const current_date = new Date();
        const full_date = "Дата: " + current_date.getDate() + " " + months[current_date.getMonth()] + " " + current_date.getFullYear() + " год " + " - это " + days[current_date.getDay()];
        const full_time = "Время: " + current_date.toLocaleTimeString('ru-RU');
        
        console.log(full_date);
        console.log(full_time);
       
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
        fn_task_11,fn_task_12,fn_task_13,fn_task_14,fn_task_15};