const timer = (selector, deadline) => {
    function addZero(num) {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    } 

    function getTimeRemaining(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date()),
            days = Math.floor(time / (1000 * 60 * 60 * 24)),
            hours = Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((time / (1000 * 60)) % 60),
            seconds = Math.floor((time / 1000) % 60);

        return {
            'time': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setTimer(selector, deadline) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timerInterval = setInterval(updateInterval, 1000);

        updateInterval();    

        function updateInterval() {
            const time = getTimeRemaining(deadline);
                
            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            if (time.time <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timerInterval);    
            }
        }    
    }
    setTimer(selector, deadline);
};

export default timer;
