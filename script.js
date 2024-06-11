const targetDate = new Date("2024-06-20T07:30:00");
const timerElement = document.getElementById("timer");

function updateCountdown() {
    	const now = new Date().getTime();
    	const timeLeft = targetDate - now;

    	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    	const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	const adays = days.toString().padStart(2, '0');
	const ahours = hours.toString().padStart(2, '0');
	const aminutes = minutes.toString().padStart(2, '0');
	const aseconds = seconds.toString().padStart(2, '0');

    	timerElement.innerHTML = `${adays} : ${ahours} : ${aminutes} : ${aseconds} `;
}

setInterval(updateCountdown, 1000);
