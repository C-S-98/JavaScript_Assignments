'use strict';

// 获取结果显示区域
const resultsDiv = document.querySelector('#diceResults');

// 创建无序列表元素
const resultList = document.createElement('ul');
resultsDiv.appendChild(resultList);

/**
 * 模拟掷骰子函数
 * @returns {number} 返回1-6的随机整数:
     *  rollDice()函数使用Math.random()生成1-6的随机整数
     *  Math.floor()确保结果为整数
     *  +1将范围从0-5调整为1-6
 */
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// 主程序
let currentRoll;
let rollCount = 0;
// 使用do...while循环确保至少执行一次掷骰
do {
    currentRoll = rollDice();  // 调用rollDice()获取随机点数
    rollCount++;  // 增加掷骰次数计数器

    // 创建<li>元素显示当前结果
    const listItem = document.createElement('li');
    listItem.textContent = `Roll ${rollCount}: ${currentRoll}`;
    // 将结果添加到无序列表中
    resultList.appendChild(listItem);

} while (currentRoll !== 6);  // 直到掷出6为止

// 添加最终结果信息
const finalResult = document.createElement('p');
finalResult.textContent = `Got a 6 in ${rollCount} rolls!`;
resultsDiv.appendChild(finalResult);