function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 6 + 's';
    snowflake.style.opacity = Math.random() * 0.5 + 0.5;
    snowflake.style.fontSize = Math.random() * 15 + 20 + 'px';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

setInterval(createSnowflake, 300);

function shakeSnow() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createSnowflake();
        }, i * 30);
    }
}