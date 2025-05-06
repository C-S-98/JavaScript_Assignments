'use strict';

// 存储用户输入数字的数组
const numbers = [];
// 标记是否出现重复数字
let isDuplicate = false;

/**
 * 检查数字是否已存在的函数
 * @param {number} input - 要检查的数字
 * @returns {boolean} - 是否已存在
 */
function checkDuplicate(input) {
    // 使用includes方法检查数字是否已在数组中
    if (numbers.includes(input)) {
        isDuplicate = true; // 设置重复标志
        // 更新页面提示信息
        document.querySelector('#message').textContent =
            `Number ${input} has already been given!`;
        return true;
    }
    return false;
}

// 主程序循环（持续获取用户输入直到出现重复）
while (!isDuplicate) {
    // 获取用户输入
    const input = prompt('Please enter a number');
    // 将输入转换为数字（支持小数）
    const number = parseFloat(input);

    // 验证输入是否为有效数字
    if (isNaN(number)) {
        alert('Please enter a valid number!');
        continue; // 跳过本次循环，重新提示输入
    }

    // 检查是否重复
    if (checkDuplicate(number)) {
        break; // 如果重复则退出循环
    }

    // 将新数字添加到数组
    numbers.push(number);
}

// 对数组进行升序排序（使用自定义比较函数处理数字排序）
numbers.sort((a, b) => a - b);

// 在控制台输出结果
console.log('All given numbers in ascending order:');
console.log(numbers);

// 可选：在页面上也显示结果
document.body.innerHTML += `
    <hr>
    <h4>Results (check console for output)</h4>
    <p>Total numbers entered: ${numbers.length}</p>
    <p>Sorted numbers: ${numbers.join(', ')}</p>
    <hr>
`;