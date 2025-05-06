'use strict';

// 存储用户输入的数字
const numbers = [];

// 持续获取用户输入直到输入0
let input;
do {
    input = parseFloat(prompt('Enter a number (0 to stop):'));

    // 验证输入是否为有效数字
    if (!isNaN(input)) {
        // 如果不是0就添加到数组
        if (input !== 0) {
            // 使用push()方法将有效数字添加到数组
            numbers.push(input);
        }
    } else {
        alert('Please enter a valid number!');
    }
} while (input !== 0);

// 从大到小排序数组: 使用sort()方法排序数组，b - a实现降序排列
numbers.sort((a, b) => b - a);

// 在控制台输出排序结果
console.log('Numbers in descending order:');
console.log(numbers.join(', '));

// 可选：在页面上也显示结果
document.body.innerHTML += `
    <hr>
    <h4>Results (check console for output)</h4>
    <p>Total numbers entered: ${numbers.length}</p>
    <p>Sorted numbers: ${numbers.join(', ')}</p>
    <hr>
`;
