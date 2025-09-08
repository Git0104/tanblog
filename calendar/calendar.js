const calendarBody = document.getElementById("calendar-body");
const monthAndYear = document.getElementById("monthAndYear");

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

document.getElementById("prev").addEventListener("click", () => {
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
  showCalendar(currentMonth, currentYear);
});

document.getElementById("next").addEventListener("click", () => {
  currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
  currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
  showCalendar(currentMonth, currentYear);
});

function showCalendar(month, year) {
  calendarBody.innerHTML = "";
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  monthAndYear.innerText = `${year}年 ${month + 1}月`;

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      let cell = document.createElement("td");
      if (i === 0 && j < firstDay) {
        cell.innerText = "";
      } else if (date > daysInMonth) {
        break;
      } else {
        cell.innerText = date;
        if (date === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()) {
          cell.style.background = "#aee";
        }
        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

showCalendar(currentMonth, currentYear);
