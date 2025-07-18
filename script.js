
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;
        const action = button.dataset.action;

        if (action === 'clear') {
            expression = '';
            display.value = '';
        } else if (action === 'delete') {
            expression = expression.slice(0, -1);
            display.value = expression;
        } else if (action === 'equal') {
            try {
                expression = expression.replace(/[^-()\d/*+.%]/g, '');
                const result = Function(`return (${expression})`)();
                display.value = result;
                expression = result.toString();
            } catch {
                display.value = "Error";
                expression = '';
            }
        } else {
            expression += value;
            display.value = expression;
        }
    });
});
