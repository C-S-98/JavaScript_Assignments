'use strict';

// 1. 获取学生姓名
const studentName = prompt('Welcome to Hogwarts!\n' +
    'Please tell me your name:');
console.log('Input name:', studentName || 'Empty');

// 2. 随机分配学院 (1-4)
const houseNumber = Math.floor(Math.random() * 4) + 1;

// 3. 确定学院名称
let houseName;
switch(houseNumber) {
    case 1:
        houseName = 'Gryffindor';
        break;
    case 2:
        houseName = 'Slytherin';
        break;
    case 3:
        houseName = 'Hufflepuff';
        break;
    case 4:
        houseName = 'Ravenclaw';
        break;
}

// 4. 输出结果到页面
document.querySelector('#result').textContent =
    `Welcome ${studentName}, you are ${houseName}!`;

// 5. 控制台输出调试信息
console.log(`Assigned: ${houseNumber} → ${houseName}`);
