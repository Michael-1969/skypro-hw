'use strict';

// Задание LowerCase
function fn_task_LowerCase(){
   
   const answerUser = prompt('Без рук, а рисует. Без зубов, а кусает');
   const answer = 'мороз';

   if (answerUser.toLowerCase() === answer.toLowerCase()) {
      alert('Это правильный ответ!');
   } else {
      alert(`Не угадал, правильный ответ: ${answer}`);
   }
}

// Задание indexOf
function fn_task_indexOf(){
   const str = 'Поезд едет далеко'; // Строка, в которой будем осуществлять поиск
    str.indexOf('едет');
    if(str === Number(-1))
        alert(`слово не найднено`);
    else alert(`Позиция или индекс ${str.indexOf('едет')}`);
   
}

// Задание includes
function fn_task_includes(){
   const arr_str = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
   const search_str = 'молоко';

   console.log(arr_str);

   arr_str.forEach((product) => {
   
      if (product.toLowerCase().includes(search_str.toLowerCase())) {
         console.log(product);
      }
   });
}
// Задание startsWith
function fn_task_startsWith(){
   const arr_str = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
   const search_str = 'груша';

   console.log(arr_str);

   arr_str.forEach((product) => {
   
      if (product.toLowerCase().startsWith(search_str.toLowerCase())) {
          console.log(product);
      }
   });
}
// Полидром (слово читается одинаково слева на право и справо на лево)
function palindrom(word) {
  // сначало превращаем split в массив, затем переворачиваем и превращаем обратно в строку
  return word.toUpperCase().split('').join('') === word.toUpperCase().split('').reverse().join('');
}

export {fn_task_LowerCase,fn_task_indexOf,fn_task_includes,
        fn_task_startsWith,palindrom };
