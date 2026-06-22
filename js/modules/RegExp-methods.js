'use strict';

// Задание 1
function fn_task_name_verification(){
   
   let regexp = /^[а-яА-Я]*$/;
   let name = prompt('Введите ваше имя. Используйте только кириллические символы');

   regexp.test(name) ? alert('Ваше имя сохранено') : alert('Введены некорректные символы');

}

// Задание 2
function fn_task_selection(){
   
   const arrText = [
   'Пункт1. Описание пункта',
   'Заголовок1. Описание',
   'Пункт2. Описание пункта',
   'Заголовок2. Описание',
];
    let title = prompt('Вы хотите прочитать заголовки или пункты?');

    console.log(title);

    let regexp = new RegExp(`${title}`);
   
    console.log(regexp);

    arrText.forEach((el) => {
        if (regexp.test(el)) {
           
            console.log(el);
        }
    });
}

export {fn_task_name_verification,fn_task_selection};