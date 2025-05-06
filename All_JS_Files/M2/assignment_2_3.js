'use strict';

// 1. 获取6个狗的名字
const dogNames = [];
for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter dog name ${i + 1}:`);
    if (name) {
        dogNames.push(name);
    }
}

// 2. 验证是否输入了6个名字
if (dogNames.length !== 6) {
    alert('Please enter exactly 6 dog names!');
    throw new Error('Invalid input: Need exactly 6 dog names');
}

// 3. 按字母顺序排序然后反转
    // 先用sort()方法按字母顺序(A-Z)排序
    // 再用reverse()方法反转数组，得到Z-A的顺序
    // 使用localeCompare()确保正确的字母顺序比较
dogNames.sort((a, b) => a.localeCompare(b)).reverse();

// 4. 创建无序列表显示结果
const dogListDiv = document.querySelector('#dogList');
// 创建<ul>无序列表元素
const ulElement = document.createElement('ul');
// 为每个狗名字创建<li>列表项
// 将列表项添加到无序列表中
dogNames.forEach(name => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
});
// 最后将整个列表添加到页面上的dogList div中
dogListDiv.appendChild(ulElement);

// 5. 控制台输出验证
console.log('Dog names in reverse alphabetical order:', dogNames);