const deadline = new Date("2023-9-25");
const diff = deadline.getTime() - Date.now();

const daysLeft = diff / 86400000;
document.getElementById("days").innerHTML = Math.floor(daysLeft);

const progress = (daysLeft / 45) * 100;
document.getElementById("indicator").style.height = `${progress}%`;
