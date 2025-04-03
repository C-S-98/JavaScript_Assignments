'use strict';

// 获取骰子面数
const sides = parseInt(prompt('Enter number of sides on the dice:'));

// 验证输入
if (isNaN(sides) || sides < 2) {
    alert('Please enter a valid number (at least 2 sides)');
    throw new Error('Invalid input');
}

// 自定义骰子函数:
// 函数rollDice现在接受sides参数, 可以模拟任意面数的骰子（如21面骰子）
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let rollCount = 0;
let currentRoll;

// 持续掷骰子直到掷出最大值: 可以模拟任意面数的骰子（如21面骰子）
do {
    // 直到掷出最大值（等于面数）
    currentRoll = rollDice(sides);
    // 记录掷骰次数rollCount
    rollCount++;
    console.log(`Roll ${rollCount}: ${currentRoll}`);
} while (currentRoll !== sides);

// 显示结果
const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
    <hr>
    <h4>Results for ${sides}-sided dice</h4>
    <p>Got the maximum value after ${rollCount} rolls</p>
    <p style="color: red; font-size: small">
        <em> * All rolls logged in console!</em>
    </p>
    <hr>
`;