'use strict';

const target = document.getElementById('target');

// 创建三个 <li> 元素
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

// 设置 <li> 的文本内容
li1.textContent = 'First item';
li2.textContent = 'Second item';
li3.textContent = 'Third item';

// 给第二个 <li> 添加 class="my-item"
li2.classList.add('my-item');

// 将 <li> 元素添加到 <ul> 中
target.appendChild(li1);
target.appendChild(li2);
target.appendChild(li3);