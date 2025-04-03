'use strict';

// 1. 通过prompt获取用户输入
const userName = prompt('Please type your name:');
// console.log('Howdy partner!');
// 注意: console.log()（是在 控制台/console 中输出，而不是 页面/HTML 中显示）

// 2. 获取页面元素
const outputElement = document.querySelector('#greetingOutput');

// 3. 根据输入更新HTML内容
if (userName) {
    outputElement.textContent = `Hello, ${userName}!`; // 使用模板字符串
} else {
    outputElement.textContent = 'Hello, stranger!';    // 默认问候
}