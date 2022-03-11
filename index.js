document.addEventListener('DOMContentLoaded', () => {

    const daysLeft = document.querySelectorAll('.days');
    const hoursLeft = document.querySelectorAll('.hours');
    const minutesLeft = document.querySelectorAll('.minutes');
    const secondsLeft = document.querySelectorAll('.seconds');

    const dateToday = new Date();

    const purim = new Date("2022-03-16T00:00:00.000Z");

    function countDowntoPurim() {
        const dateToday = new Date();

        const purim = new Date("2022-03-16T00:00:00.000Z");

        let timeLeft = purim - dateToday;


        let daysLeft = Math.floor(timeLeft / 86400000);


        let hoursLeft = Math.floor((timeLeft - 86400000 * daysLeft) / 3600000);


        let minutesLeft = Math.floor(
            (timeLeft - daysLeft * 86400000 - hoursLeft * 3600000) / 60000
        );


        let secondsLeft = Math.floor(
            (timeLeft -
                daysLeft * 86400000 -
                hoursLeft * 3600000 -
                minutesLeft * 60000) /
            1000
        );

        days.innerHTML = daysLeft;
        hours.innerHTML = hoursLeft;
        minutes.innerHTML = minutesLeft;
        seconds.innerHTML = secondsLeft;
    }
    countDowntoPurim();

    setInterval(countDowntoPurim, 1000)

})