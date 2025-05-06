'use strict';

// 获取用户输入
const numDice = parseInt(prompt('Enter number of dice:'));
const targetSum = parseInt(prompt('Enter target sum of eyes:'));

// 验证输入
if (isNaN(numDice) || isNaN(targetSum) || numDice < 1) {
    alert('Please enter valid positive integers!');
    throw new Error('Invalid input');
}

// 模拟参数
    // totalTrials设置模拟次数为10,000次
    // successCount记录成功次数
const totalTrials = 10000;
let successCount = 0;

// 模拟掷骰子
    // 外层循环执行指定次数的试验
    // 内层循环模拟掷指定数量的骰子
    // Math.random()生成1-6的随机整数模拟骰子点数
for (let i = 0; i < totalTrials; i++) {
    let currentSum = 0;

    // 掷指定数量的骰子
    for (let j = 0; j < numDice; j++) {
        currentSum += Math.floor(Math.random() * 6) + 1; // 1-6的随机数
    }

    // 检查是否达到目标总和
    if (currentSum === targetSum) {
        successCount++;
    }
}

// 计算概率: 计算成功次数占总试验次数的比例,乘以100转换为百分比
const probability = (successCount / totalTrials) * 100;

// 显示结果
const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
    <hr>
    <h4>Results</h4>
    <hr>
    <p>${numDice} dice, sum ${targetSum}, probability is about ${probability.toFixed(2)}%</p>
    <br>
    <em>Based on ${totalTrials} trials</em>
    <hr>
`;

// 控制台输出
console.log(`Probability: ${probability.toFixed(2)}%`);