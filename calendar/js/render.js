export async function loadCalendar(ev, year, monthEngName) {
  if (ev) {
    year = Number(ev.target.parentElement[0].value);
    monthEngName = ev.target.parentElement[1].value;
  }

  updateYearAndMonthHeadings(year, monthEngName);

  mainElem.replaceChildren(
    elementCreate(
      'p',
      { style: 'color:rgb(192, 0, 0);' },
      'Данните се зареждат ...'
    )
  );

  const calendar = await getCalendarRequest(year);

  if (calendar === null) {
    return;
  }

  renderCalendarData(year, monthEngName, calendar);
}

function renderCalendarData(year, monthEngName, calendar) {
  const monthObj = calendar[year][monthEngName];
  const sorted = Object.entries(monthObj).sort((a, b) => {
    return Number(a[0]) - Number(b[0]);
  });

  const fragment = document.createDocumentFragment();
  sorted.forEach((el) => {
    const date = el[0];
    const monthBgName = getMonthBgName(monthEngName);

    const dayObj = el[1];
    const dayName = weekDayNamesObj[dayObj.day];
    const fullDate = `${date} ${monthBgName} ${year}, ${dayName}`;
    const description = dayObj.memoryOf;
    const state = dayObj.color;

    const card = createDateCard(fullDate, description, state, isCurrDay());
    fragment.appendChild(card);

    // Validation
    function isCurrDay() {
      const isCurrentYear = year === currYear;
      const isCurrentMonth = monthEngName === currMonthEngName;
      const isCurrDate = Number(date) === currDate;
      return isCurrDate && isCurrentMonth && isCurrentYear;
    }
  });

  mainElem.replaceChildren(fragment);

  setTimeout(smoothRedirectToCurrDay, 700);
}

// Imports
import { weekDayNamesObj } from './constants.js';
import { currYear, currDate, currMonthEngName } from './date.js';
import { mainElem } from './refs.js';
import { createDateCard, elementCreate } from './dom.js';
import { getCalendarRequest } from './requests.js';
import {
  updateYearAndMonthHeadings,
  smoothRedirectToCurrDay,
  getMonthBgName,
} from './helpers.js';
