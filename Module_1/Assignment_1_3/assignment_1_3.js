'use strict';

// 获取用户输入的三个整数
// 通过parseInt()将字符串转为数字
const num1 = parseInt(prompt('Enter the first integer:'));
const num2 = parseInt(prompt('Enter the second integer:'));
const num3 = parseInt(prompt('Enter the third integer:'));

// 输入验证
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert('Please enter valid integers only!');
    throw new Error('Invalid input: Non-integer values entered');
}

// 计算和、积和平均值
const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

// 在HTML页面显示结果
const resultsDiv = document.querySelector('#results');
resultsDiv.innerHTML = `
    <hr>
    <h4>Results</h4>
    <hr>
    <p>You entered: ${num1}, ${num2}, ${num3}</p>
    <hr>
    <p>Sum: ${sum}</p>
    <p>Product: ${product}</p>
    <p>Average: ${average.toFixed(2)}</p>
    <hr>
`;

// 在控制台输出用于调试
console.log('Numbers:', num1, num2, num3);
console.log('Sum:', sum);
console.log('Product:', product);
console.log('Average:', average);
