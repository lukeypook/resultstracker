// Exam dates
const countDownDates = {
    phy: new Date("Nov 7, 2022").getTime(),
    math: new Date("Nov 9, 2022").getTime(),
    acc: new Date("Nov 9, 2022 ").getTime(),
    eng: new Date("Nov 16, 2022").getTime(),
    bio: new Date("Nov 24, 2022").getTime(),
};

// Update the count down every 1 second
const x = setInterval(function () {
    const now = new Date().getTime();

    for (subject in countDownDates) {
        const distance = countDownDates[subject] - now;
        const days = Math.ceil(distance / (1000 * 60 * 60 * 24));

        document.querySelector(`.${subject}-h3`).innerHTML = `${days} days`;

        if (days <= 0) {
            clearInterval(x);
            delete countDownDates[subject];
            document.querySelector(`.${subject}-h3`).style.display = "none";
        }
    }
}, 1000);
