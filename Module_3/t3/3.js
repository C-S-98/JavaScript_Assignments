'use strict';
const names = ['John', 'Paul', 'Jones'];

// 获取目标元素：
const target = document.getElementById('target');

// 构建 HTML 字符串：
let htmlContent = '';
for (let i = 0; i < names.length; i++) {
    htmlContent += `<li>${names[i]}</li>`;
}

// 插入 HTML：
target.innerHTML = htmlContent;