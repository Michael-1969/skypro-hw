'use strict';

// Задание 1
function fn_task_1(){
   const srcArray = [1, 5, 4, 10, 0, 3];
   let count = 0;

   //1. способ
   for(let i = 0; i < srcArray.length; ++i)
   {
      if(srcArray[i] === Number(10)) {
          console.log(srcArray[i]); break;
      }
      else  console.log(srcArray[i]);
   }
    console.log('\n');

   //2. способ
   count = 0;
   do {
      console.log(srcArray[count]);
      
   } while (srcArray[count++] != Number(10));
   
   console.log('\n');
   //3. способ
   for (const item of srcArray) {
      if (item === Number(10)) {
            console.log(item); break; // Завершаем цикл после значения 3
      }
       console.log(item);
   }
   
}

// Задание 2
function fn_task_2(){

   const srcArray = [1, 5, 4, 10, 0, 3];
   let count = 0;
   let i = 0;

   //1. способ
   for(i = 0; i < srcArray.length; ++i)
   {
      if(srcArray[i] === Number(4)) break;
   }
    console.log(`Index of number ${srcArray[i]} equal ${i}`);

   //2. способ
   while(srcArray[count] != Number(4))
   {
      console.log(srcArray[count]);
      count++;
   }
   console.log(`Index of number ${srcArray[count]} equal ${count}`);
}

// Задание 3
function fn_task_3(){

   const srcArray = [1, 3, 5, 10, 20];
   const arr_whitespace = srcArray.join(' ');
   console.log(arr_whitespace);

   const arr_empty = srcArray.join('');
   console.log(arr_empty);
}

// Задание 4
function fn_task_4(){

   const num = Number(3);
   const arr_three_dimensional = [];
  
    for(let i = 0; i < num; ++i){
       arr_three_dimensional[i] = [];
          for(let j = 0; j < num; ++j)
            arr_three_dimensional[i][j] = 1;
    }

   console.log(arr_three_dimensional);
}

// Задание 5
function fn_task_5(){
     const arr_push = [1,1,1];
     const num = Number(3);

     for(let i = 0; i < num; ++i)
           arr_push.push(Number(2));

     console.log(arr_push);
     // можно так.
     arr_push.push(3,3,3);
     console.log(arr_push);
}

// Задание 6
function fn_task_6(){
     const arr_sort = [9, 8, 7, 'a', 6, 5];

     console.log('Before sorting:\n',arr_sort);

     arr_sort.sort();

     console.log('After sorting:\n',arr_sort);


    const new_arr_result =  arr_sort.filter((elem) => typeof(elem) === 'number');

    console.log('Delete element:\n',new_arr_result);
     
}

// Задание 7
function fn_task_7(){
     const arr = [9, 8, 7, 6, 5];

     console.log('Before sorting:\n',arr);

     let user_number = prompt('Угадай число: ');

     const foundUser = arr.find((elem => elem === Number(user_number)));
     if(typeof(foundUser) === 'number')
        alert('Угадал '+ foundUser);
      else alert('Не угадал');   
}

// Задание 8
function fn_task_8(){

     // строки type = String не изменны
     // строка должна быть переменной let
     let str = "abcdef";

     //1.вариант
     const arr = [...str];
     for(let i = 0; i < arr.length / 2; i++)
     {
        let tmp = arr[i];
        arr[i] = arr[arr.length-(1 + i)];
        arr[arr.length-(1 + i)] = tmp;
     }
      str = arr.join('');
      console.log("в стиле С++: ",str);
     
      //2.Вариант
      // переприсваивание
      // split('') преобразует строку в массив символов. 
      // reverse() меняет порядок элементов в массиве на обратный. 
      // join('') объединяет элементы массива обратно в строку
      // так как str переменная, то переприсваиваем 
      str = "abcdef";
      str = str.split('').reverse().join('');

      console.log("через js: ",str);
}

// Задание 9
function fn_task_9(){

   //1.вариант
     const arr = [[1, 2, 3],[4, 5, 6]];
     const arr_flat = arr.flat();
     console.log(arr_flat); 

   //2.вариант
   const arr_1 = [[11, 12, 13],[14, 15, 16],[17, 18, 19]];
   const new_big = [];
   let count = 0;
   for(let i = 0; i < arr_1.length; ++i)
      for(let j = 0; j < arr_1[i].length; ++j)
            new_big[count++] = arr_1[i][j];

   console.log(new_big);
   
   //3.вариант
   const arr_2 = [[10, 20, 30],[40, 50, 60],[70, 80, 90]];
   const copy_big = [...arr_2[0],...arr_2[1],...arr_2[2]];

   console.log(copy_big);
         
}
// Задание 10
function fn_task_10(){

   const min = +1;
   const max = +10;
   
   //2.вариант
   const new_arr = [];
   const count_elem = +10;
   let summa = 0;

   for (let i = 0; i < count_elem; i++) {
        new_arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
   }    
    console.log("Random array: ",new_arr);

    //Количество элементов в массиве 10, значит, количество иттераций будет на 1 меньше (звенья и  узлы) = 9
   
    for (let i = 0; i < new_arr.length - 1; i++) {
         console.log(`Сумма чисел ${new_arr[i]} + ${new_arr[i+1]} = `,new_arr[i] + new_arr[i+1]);
   } 

   // console.log("Итого:",summa);         
}

// К заданию 11
function squareArray(array){
   return array.map(num => num ** 2);
}

// Задание 11
function fn_task_11(){
      const min = +1;
      const max = +10;
      const arr = [];
      const count_elem = +3;

      for (let i = 0; i < count_elem; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
      } 

   console.log('Создали исходный массив :\n',arr);
   console.log('Итоговый массив :\n',squareArray(arr));
           
}

//к заданию 12
function getAllWordLengths(array){
      return array.map(str => str.length);
}

// Задание 12
function fn_task_12(){
   const arr_words = ["JavaScript","SkyPro","greeting","welcom","word","string"];
   const len_words = getAllWordLengths(arr_words);
   console.log(len_words);
}

// Задание 13
function fn_task_13(){
   const min = Number(-10);
   const max = Number(10);

   const arr = [];
      const count_elem = +10;

      for (let i = 0; i < count_elem; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
      } 
      console.log("Исходный массив: \n",arr);

      const arr_negative = arr.filter(num => num < Number(0));
      console.log("Отрицательные: \n",arr_negative);
     
}

// Задание 14
function fn_task_14(){
   const min = Number(0);
   const max = Number(10);

   const arr = [];
      const count_elem = +10;

      for (let i = 0; i < count_elem; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
      } 
      console.log("Исходный массив: \n",arr);

      const arr_even = arr.filter(num => num % 2 === 0);
      console.log("Все четные: \n",arr_even);
       
   
}

// Задание 15
function fn_task_15(){
   const min = Number(0);
   const max = Number(10);

   const arr = [];
      const count_elem = +6;

      for (let i = 0; i < count_elem; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
      } 
      console.log("Исходный массив: \n",arr);
 
   const summa = arr.reduce((current, next) => {return current + next;},0);
   const fixed_number = (summa / arr.length).toFixed(2);
     console.log("Среднее арифметическое = ",fixed_number);
}


export {fn_task_1, fn_task_2,fn_task_3,fn_task_4,fn_task_5,
        fn_task_6,fn_task_7,fn_task_8,fn_task_9,fn_task_10,
        fn_task_11,fn_task_12,fn_task_13,fn_task_14,fn_task_15};