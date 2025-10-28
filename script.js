function updateClock() {
  const now = new Date();

  const timeOptions = {
    timeZone: 'Asia/Bangkok',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };

  const dateOptions = {
    timeZone: 'Asia/Bangkok',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const timeString = new Intl.DateTimeFormat('th-TH', timeOptions).format(now);
  const dateString = new Intl.DateTimeFormat('th-TH', dateOptions).format(now);

  document.getElementById('clock').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);
