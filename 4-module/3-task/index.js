const AGE = 1;
const GENDER = 2;
const STATUS = 3;

const ACTIONS_BY_COLUMN = {
  [AGE]: (row, cell) => { if (+cell.textContent < 18) { return row.style.textDecoration = 'line-through'; } },
  [GENDER]: (row, cell) => {
    if (cell.textContent === 'm') { return row.classList.add('male'); }
    if (cell.textContent === 'f') { return row.classList.add('female'); }
  },
  [STATUS]: (row, cell) => {
    if (cell.dataset.available === 'true') { return row.classList.add('available'); }
    if (cell.dataset.available === 'false') { return row.classList.add('unavailable'); }
    if (!cell.hasAttribute('data-available')) { return row.setAttribute('hidden', ''); }
  },
  'default': () => { return; }
};


function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');

  for (const row of rows) {
    const cells = [...row.cells];

    cells.forEach((cell, index) => { return (ACTIONS_BY_COLUMN[index] || ACTIONS_BY_COLUMN['default'])(row, cell); });
  }

}
