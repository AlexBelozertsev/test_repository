// Что такое DOM - объектная модель документа
// представление тэгов из html в объекты javascript

// Что мы можем с этим делать?
// ПОЛУЧИТЬ СОЗДАТЬ ОБНОВЛЕНИЕ УДАЛИТЬ

// итак GET - получаем доступ к элементам:
// объект
// .querySelector ()
// .getElementById ()

// коллекция
// .querySelectorAll ()
// .getElementsByClassName ()


// CREATE - создаем новые элементы с нуля или конируем

// .createElement (тег)
// `<div> </div>`

// .cloneNode (истина)
// .cloneNode (ложь)


// ОБНОВЛЕНИЕ - изменяем сопутствующие элементы

// .textContent
// .стиль
// .classList

// .hasAttribute (имя)
// .getAttribute (имя)
// .setAttribute (имя, значение)
// .removeAttribute (имя)
// атрибуты

// УДАЛИТЬ - удаляем элементы
// .removeChild (elem)
// .удалять()

// Встраивание элементов в html
// объекты

// .insertBefore (elem, nextSibling)
// .appendChild (элемент)

// .append (elem1, elem2, ...)
// .prepend (elem1, elem2, ...)
// .after (elem1, elem2, ...)
// .before (elem1, elem2, ...)
// .replaceWith (elem1, elem2, ...)

// .insertAdjacentElement (позиция; ``)
// перед
// после
// после начала
// перед началом

// `<div> </div>`
// .innerHTML - тяжелый для

// вот полегче)
// .insertAdjacentHTML (позиция; ``)
// перед
// после
// после начала
// перед началом