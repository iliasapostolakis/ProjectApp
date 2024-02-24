document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.id === 'clear') {
                display.textContent = '0';
            } else if (button.id === 'backspace') {
                display.textContent = display.textContent.slice(0, -1);
                if (display.textContent === '') display.textContent = '0';
            } else if (button.id === 'calculate') {
                try {
                    display.textContent = eval(display.textContent);
                } catch (error) {
                    display.textContent = 'Error';
                }
            } else {
                if (display.textContent === '0' || display.textContent === 'Error') {
                    display.textContent = button.textContent;
                } else {
                    display.textContent += button.textContent;
                }
            }
        });
    });
});