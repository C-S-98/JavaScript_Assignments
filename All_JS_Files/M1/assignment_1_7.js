'use strict';

// 1. 获取用户输入的骰子投掷次数
const rollCount = parseInt(prompt('How many times do you want to roll the dice?'));

// 2. 验证输入是否有效: 输入是否为有效正数
if (isNaN(rollCount) || rollCount <= 0) {
    alert('Please enter a valid positive number!');
    throw new Error('Invalid input: Must be a positive number');
}

// 3. 初始化总和变量
    // totalSum用于累加所有骰子点数
    // rollResults数组存储每次投掷的结果
let totalSum = 0;
let rollResults = [];

// 4. 执行指定次数的骰子投掷
    // 使用for循环执行指定次数的投掷
    // Math.random()生成0-1的随机数
    // Math.floor()向下取整，确保结果为1-6的整数
for (let i = 0; i < rollCount; i++) {
    // 生成1-6的随机整数(模拟骰子)
    const currentRoll = Math.floor(Math.random() * 6) + 1;
    rollResults.push(currentRoll);
    totalSum += currentRoll;
}

// 5. 在HTML页面显示结果
const resultsDiv = document.querySelector('#results');
resultsDiv.innerHTML = `
    <hr>
    <h4>Results</h4>
    <hr>
    <p><strong>Number of rolls:</strong> ${rollCount}</p>
    <hr>
    <p><strong>Individual rolls:</strong> ${rollResults.join(', ')}</p>
    <p><strong>Total sum:</strong> ${totalSum}</p>
    <hr>
`;

// 6. 同时在控制台输出结果
console.log(`Rolled ${rollCount} times:`, rollResults);
console.log('Total sum:', totalSum);