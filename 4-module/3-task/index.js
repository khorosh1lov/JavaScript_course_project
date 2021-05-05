function highlight(table) {
  // Get all tbody rows to apply styles/changes
  const rows = table.querySelectorAll('tbody tr');
  // Get all last cells with Status
  const status = table.querySelectorAll('tbody tr > td:last-child');

  for (let i = 0; i < rows.length; i++) {
    const currentUser = rows[i];
    const cells = [...rows[i].cells];

    for (let j = 0; j < cells.length; j++) {
      const data = cells[j];

      if (+data.textContent < 18) { currentUser.style.textDecoration = 'line-through'; }
      if (data.textContent === 'm') { currentUser.classList.add('male'); }
      if (data.textContent === 'f') { currentUser.classList.add('female'); }
      if (data.dataset.available === 'true') { currentUser.classList.add('available'); }
      if (data.dataset.available === 'false') { currentUser.classList.add('unavailable'); }
    }

    if (!status[i].hasAttribute('data-available')) { currentUser.setAttribute('hidden', ''); }
  }
}
