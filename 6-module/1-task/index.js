/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

function usersDataTemplate(rows) {
  return rows.map(({ name, age, salary, city }) => tableRowTemplate({ name, age, salary, city })).join('');
}

function tableRowTemplate({ name, age, salary, city }) {
  return `
  <tr>
    <td>${name}</td>
    <td>${age}</td>
    <td>${salary}</td>
    <td>${city}</td>
    <td>${removeButtonTemplate()}</td>
  </tr>`;
}

function removeButtonTemplate() {
  return '<button data-action="remove">X</button>';
}

function tableContainerTemplate(users) {
  return `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th>Х</th>
      </tr>
    </thead>
    <tbody>
      ${users}
    </tbody>`;
}

export default class UserTable {
  constructor(rows) {
    this._users = usersDataTemplate(rows);

    this.elem = document.createElement('table');
    this.elem.setAttribute('data-component', 'tableOfUsers');
    this.elem.innerHTML = tableContainerTemplate(this._users);

    this.elem.addEventListener('click', this._onUserTableContainerClick);
  }

  set elem(elem) {
    return this._elem = elem;
  }

  get elem() {
    return this._elem;
  }

  _onUserTableContainerClick = (e) => {
    const target = e.target;
    if (target.dataset.action !== 'remove') {
      return;
    }

    const user = target.closest(`tr`);
    user.remove();
  }
}
