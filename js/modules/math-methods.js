'use strict';

// Задание random
function fn_task_Random(min,max){
    let first = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(first);
}

export {fn_task_Random, };