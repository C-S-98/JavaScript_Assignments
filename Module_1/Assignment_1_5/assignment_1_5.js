'use strict';

// 获取用户输入的年份
const inputYear = prompt('Please enter a year to check: ');

// 将输入转换为数字
const year = parseInt(inputYear);

// 验证输入是否为有效数字
if (isNaN(year)) {
    alert('Error: Please enter a valid year!');
    throw new Error('Invalid input: Non-numeric value');
}

// 闰年判断逻辑
    /*闰年判断逻辑:
        1. 使用嵌套的条件判断实现闰年规则
        2. 先检查能否被400整除（满足则是闰年）
        3. 然后检查能否被100整除（满足则不是闰年）
        4. 最后检查能否被4整除（满足则是闰年）*/
let isLeapYear = false;

if (year % 400 === 0) {
    isLeapYear = true;
} else if (year % 100 === 0) {
    isLeapYear = false;
} else if (year % 4 === 0) {
    isLeapYear = true;
}

// 准备结果显示文本
const resultText = isLeapYear
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;

// 在页面显示结果
document.querySelector('#result').innerHTML = `
    <hr>
    <h4>Result</h4>
    <p>${resultText}</p>
    <br>
    <hr>
<!--    <p>Leap year rules: </p>
    <ul>
        <li>Divisible by 4 but not by 100</li>
        <li>Or divisible by 400</li>
    </ul>-->
`;

// 控制台输出用于调试
console.log(`Input year: ${year}`);
console.log(`Is leap year:  ${isLeapYear}`);