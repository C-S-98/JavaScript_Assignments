'use strict';

document.getElementById('start').addEventListener('click', function() {
    // 获取用户输入的表达式
    const input = document.getElementById('calculation').value;
    const resultElement = document.getElementById('result');

    // 检查输入是否包含运算符
    if (input.includes('+')) {
        const numbers = input.split('+');
        const result = parseInt(numbers[0]) + parseInt(numbers[1]);
        resultElement.textContent = result;
    }
    else if (input.includes('-')) {
        const numbers = input.split('-');
        const result = parseInt(numbers[0]) - parseInt(numbers[1]);
        resultElement.textContent = result;
    }
    else if (input.includes('*')) {
        const numbers = input.split('*');
        const result = parseInt(numbers[0]) * parseInt(numbers[1]);
        resultElement.textContent = result;
    }
    else if (input.includes('/')) {
        const numbers = input.split('/');
        const result = parseInt(numbers[0]) / parseInt(numbers[1]);
        resultElement.textContent = result;
    }
    else {
        resultElement.textContent = '请输入有效的计算式 (如: 3+5)';
    }
});