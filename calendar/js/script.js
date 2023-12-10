initialPageLoad(currYear, currMonthEngName);

// FUNCTIONS
function initialPageLoad(year, monthEngName) {
  window.location.href = '#page-start';

  menuYears.value = year;
  menuMonths.value = monthEngName;

  loadCalendar(null, year, monthEngName);

  // Event listeners
  selectCalendarBtn.addEventListener('click', (ev) => loadCalendar(ev));
}

// Imports
import { currYear, currMonthEngName } from './date.js';
import { menuYears, menuMonths, selectCalendarBtn } from './refs.js';
import { loadCalendar } from './render.js';
