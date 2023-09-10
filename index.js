document.addEventListener("DOMContentLoaded", function () {
  // Get the current day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  currentDayElement.textContent = `Current Day: ${currentDayOfWeek}`;

  // Get the current UTC time in milliseconds
  const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
  currentUTCTimeElement.textContent = `Current UTC Time: ${currentDate.getTime()} milliseconds`;
});
