 //Для изменения свойств CSS используются свойства
 //className и classList

/* Констукция ClassName >>>>>>>
 const element = document.querySelector('.img-red')
 
 //Получаем имена всех классов элемента
 const elementClassName = element.className;
 console.log(elementClassName)

 //переписываем имя класса
 element.className = 'red';
 //Теперь у класса другое имя и его можно изменять
 <<<<<<< Констукция ClassName*/

 /* Конструкция ClassList >>>>>>>>
 const element = document.querySelector('.img-red');
 //Добавить Класс
 element.classList.add('active');

 //Удалить
 element.classList.remove('active');

 //Добавить класс если его нет, а если есть УДАЛИТЬ
 element.classList.toggle('active');

//Проверка наличия класса
element.classList.contains('active');
<<<<< Конструкция ClassList */

//Задавать css свойства можно прямо из JS
//Примеры

//Конструкция .style.
const element = document.querySelector('.img-red');
element.style.backgroundColor = "#000";
console.log(element.style.backgroundColor)
//что бы сбросить свойство ему нужно задать пустое значение ""

//для создания множества стилей используем cssText
element.style.cssText = `
    margin-bottom: 30px;
    border-radius: 0%;
`;//Он полностью перезаписывает что было до этого в Style

