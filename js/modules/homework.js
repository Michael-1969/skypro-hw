'use strict';



// Задание 1. Скрытие и показ текста
function fn_task_1(){
   const btn = document.getElementById('button'),
         header = document.querySelector('.header__title'),
         headerWrapper = document.querySelector('.header__wrapper'),
         heightHeader = header.offsetHeight,
         widthHeader = header.offsetWidth,
         copyTextContentHeader = header.textContent,
         copyTextContentButton = btn.textContent;

   let bFlag = true;
         // bgColor = window.getComputedStyle(headerWrapper).backgroundColor;

         //console.log(heightHeader,' ',widthHeader);
         
   btn.addEventListener('click',(event) =>{
      if(bFlag){
          header.textContent = '';
          header.style.height = heightHeader + 'px';
          header.style.width = widthHeader + 'px';
          btn.textContent = 'Вернуть';
          bFlag = false;
      }else{
          header.textContent = copyTextContentHeader;
          btn.textContent = copyTextContentButton;
          bFlag = true;
      }
          
   });
   
}

// Задание 2. Изменение стиля элемента


function fn_task_2(){

   const btn = document.getElementById('button-color'),
         header = document.querySelector('.paragraph__text'),
         headerWrapper = document.querySelector('.paragraph__wrapper'),
         colorText = window.getComputedStyle(header).color;
        //   console.log(colorText);

   let bFlag = true;

   btn.addEventListener('click',(event) =>{
      if(bFlag){
          header.style.color = 'rgba(255,255,255,0.5)';
          bFlag = false;
      }else{
          header.style.color = colorText;
          bFlag = true;
      }
   });

}

// Задание 3. Динамическое изменение текста

function fn_task_3(){
    const btn = document.getElementById('button-replacing'),
         replacing = document.querySelector('.replacing__title'),
         headerWrapper = document.querySelector('.replacing__wrapper'),
         widthReplacing = replacing.offsetWidth,
         copyTextContentReplacing = replacing.textContent,
         copyTextContentButton = btn.textContent;

   let bFlag = true;

   btn.addEventListener('click',(event) =>{
      if(bFlag){
          replacing.textContent = 'Привет, мир';
          replacing.style.width = widthReplacing + 'px';
          btn.textContent = 'Изменен';
          bFlag = false;
      }else{
          replacing.textContent = copyTextContentReplacing;
          btn.textContent = copyTextContentButton;
          bFlag = true;
      }
   });
}
// Задание 4. Работа с querySelectorAll
function fn_task_4(){
     const btn = document.getElementById('button-description'),
         description = document.querySelectorAll('.description'),
         arrayDescription = new Array(),
         arrayWidth = new Array(),
         wrapper = document.querySelector('.element-description__wrapper'),
         widthWrapper = wrapper.offsetWidth,
         copyTextContentButton = btn.textContent;

        //  console.log(description);
         
          description.forEach((element,index) =>{
                 arrayDescription[index] = element.textContent;
                 arrayWidth[index] = element.offsetWidth;
          });

         let bFlag = true;
        

   btn.addEventListener('click',(event) =>{
      if(bFlag){
          description.forEach((element,index) =>{
                element.textContent = 'Измененный текст';
                element.style.width = arrayWidth[index] + 'px';
                
          });
          btn.textContent = 'Изменен';
          
          bFlag = false;
      }else{
          description.forEach((element,index) =>{
                element.textContent = arrayDescription[index];
          });
          btn.textContent = copyTextContentButton;
          bFlag = true;
      }
   });
   
}

// Задание 5. Поиск и изменение элементов по классу в параграфах
function fn_task_5(){
   const btn = document.getElementById('button-replacement-class'),
         description = document.querySelectorAll('.active'),
         arrayDescription = new Array(),
         wrapper = document.querySelector('.replacement-class__wrapper'),
         copyTextContentButton = btn.textContent;
         
          description.forEach((element,index) =>{
                 arrayDescription[index] = element.textContent;
          });

         let bFlag = true;

   btn.addEventListener('click',(event) =>{
      if(bFlag){
          description.forEach((element,index) =>{
                element.textContent = 'Измененный текст';
          });
          btn.textContent = 'Изменен';
          bFlag = false;
      }else{
          description.forEach((element,index) =>{
                element.textContent = arrayDescription[index];
          });
          btn.textContent = copyTextContentButton;
          bFlag = true;
      }
   });
         
}

// Задание 6. Добавление нового элемента в DOM
function fn_task_6(){
      const arrayWords = ['Вторник.','Среда.','Четверг.','Пятница.','Суббота.','Воскресенье.'];
      const btn = document.getElementById('add-new-element-button'),
            parent = document.querySelector('.add-new-element__wrapper');
      let count = 0;
      btn.addEventListener('click',(event) =>{
        const new_paragraph = document.createElement('p');
        new_paragraph.style.fontFamily = "\\'Franklin Gothic Medium\\', \\'Arial Narrow\\', Arial, sans-serif";
        new_paragraph.style.fontSize = Number(24) + 'px';
        new_paragraph.style.fontWeight = Number(600);
        new_paragraph.style.whiteSpace = 'nowrap';
        new_paragraph.style.color = 'blue';
        new_paragraph.textContent = arrayWords[count++];
        
        parent.appendChild(new_paragraph);
        if(count >= arrayWords.length)
        {
             btn.disabled = "disabled";
             btn.textContent = "Всё";
        }
      });
      
}

//Задание 7. Удаление элемента
function fn_task_7(){
const btn = document.getElementById('del-first-element-button'),
            firstElement = document.querySelectorAll('.del-first-element__text')[0],
            lastElement = firstElement.nextElementSibling,
            parent = document.querySelector('.del-first-element__wrapper');
            
    
      btn.addEventListener('click',(event) =>{
           parent.removeChild(firstElement);
           lastElement.classList.add('active');
            btn.disabled = "disabled";
             btn.textContent = "Всё";
      });
        
}




export {fn_task_1, fn_task_2,fn_task_3,fn_task_4,fn_task_5,
        fn_task_6,fn_task_7};