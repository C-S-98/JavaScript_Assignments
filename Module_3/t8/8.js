'use strict';

document.getElementById('start').addEventListener('click', function() {
    // 获取输入的数字和操作类型
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    // 根据操作类型计算结果
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }

    // 显示结果
    document.getElementById('result').textContent = 'Result: ' + result;
});