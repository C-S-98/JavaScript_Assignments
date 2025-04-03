'use strict';

// 获取用户输入的数字
const number = parseInt(prompt('Please enter an integer to check if it is a prime number:'));

// 验证输入是否为有效正整数
if (isNaN(number) || number < 2) {
    document.querySelector('#result').innerHTML =
        `<p>${number} is not a valid input. Please enter an integer greater than 1.</p>`;
} else {
    // 调用质数检查函数
    const isPrime = checkPrime(number);

    // 显示结果
    document.querySelector('#result').innerHTML =
        `
    <hr>
    <h4>Results</h4>
    <hr>
    <p>The number ${number} is ${isPrime ? '' : 'not '}a prime number.</p>
    <hr>
`;
}

/**
 * 检查一个数字是否为质数
 * @param {number} num - 要检查的数字
 * @returns {boolean} - 如果是质数返回true，否则返回false
 */
function checkPrime(num) {
    // 2是最小的质数
    if (num === 2) return true;

    // 偶数（除了2）都不是质数
    if (num % 2 === 0) return false;

    // 检查从3到sqrt(num)的所有奇数
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}