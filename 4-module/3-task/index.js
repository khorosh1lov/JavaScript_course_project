function highlight(table) {
  // Get all tbody rows to apply styles/changes
  const rows = table.querySelectorAll('tbody tr');

  const AGE = 1;
  const GENDER = 2;
  const STATUS = 3;

  for (const row of rows) {
    const cells = [...row.cells];

    cells.forEach((cell, index) => {
      /*switch (index) {

      case AGE:
        if (+td.textContent < 18) { row.style.textDecoration = 'line-through'; }
        break;

      case GENDER:
        if (td.textContent === 'm') { row.classList.add('male'); }
        if (td.textContent === 'f') { row.classList.add('female'); }
        break;

      case STATUS:
        if (td.dataset.available === 'true') { row.classList.add('available'); }
        if (td.dataset.available === 'false') { row.classList.add('unavailable'); }
        if (!td.hasAttribute('data-available')) { row.setAttribute('hidden', ''); }
        break;
      }*/

      function checkCell (index) {
        let column = {
          [AGE]: function () {
            if (+cell.textContent < 18) {
              return row.style.textDecoration = 'line-through';
            }
          },
          [GENDER]: function () {
            if (cell.textContent === 'm') {
              return row.classList.add('male');
            }
            if (cell.textContent === 'f') {
              return row.classList.add('female');
            }
          },
          [STATUS]: function () {
            if (cell.dataset.available === 'true') {
              return row.classList.add('available');
            }
            if (cell.dataset.available === 'false') {
              return row.classList.add('unavailable');
            }
            if (!cell.hasAttribute('data-available')) {
              return row.setAttribute('hidden', '');
            }
          },

          'default': function () {
            return;
          }
        };

        return (column[index] || column['default'])();
      }

      checkCell(index);
    });
  }

}
