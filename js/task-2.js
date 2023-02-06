import data from './data.json';

console.log(data);

let asc = false;

document.querySelectorAll('th').forEach((th) =>
  th.addEventListener('click', () => {
    const table = th.closest('table');

    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
      .sort(
        comparer(Array.from(th.parentNode.children).indexOf(th), (asc = !asc))
      )
      .forEach((tr) => table.appendChild(tr));
  })
);

const createTable = () => {};

const getCellValue = (tr, idx) =>
  tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = function (idx, asc) {
  return function (a, b) {
    return (function (v1, v2) {
      return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2);
    })(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
  };
};

/* 
Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
*/

// 1. Створити таблицю за допомогою JS;

// 2. Данні мають сортуватися по кліку на заголовок:
// 2.1. Взяти для перевірки кожен елемент, окрім заголовку;
// 2.2. Кожен елемент має перевірятися з попереднім і відповідно змінювати своє положення;
// 2.3. Числа сортуються не як рядки;
