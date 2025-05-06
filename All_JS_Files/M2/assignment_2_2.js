'use strict';

try {
    // 1. 获取参与者数量
    const numParticipants = parseInt(prompt('Enter the number of participants:'));

    // 验证输入是否为有效正整数
    if (isNaN(numParticipants) || numParticipants <= 0) {
        throw new Error('Invalid number of participants');  // 抛出错误
    }

    // 2. 创建空数组存储参与者姓名
    const participants = [];

    // 3. 循环获取每个参与者的姓名
    for (let i = 0; i < numParticipants; i++) {
        const name = prompt(`Enter name of participant ${i + 1}:`);
        if (!name || name.trim() === '') {
            throw new Error('Name cannot be empty');  // 抛出错误
        }
        participants.push(name.trim());
    }

    // 4. 按字母顺序排序姓名
    // 使用数组的sort()方法对姓名进行字母顺序排序
    // localeCompare()确保正确的字母顺序比较
    participants.sort((a, b) => a.localeCompare(b));

    // 5. 创建有序列表并显示结果
    const listContainer = document.querySelector('#participantList');

    if (!listContainer) {
        throw new Error('Result container not found');  // 抛出错误
    }

    // 使用document.createElement动态创建<ol>有序列表
    const orderedList = document.createElement('ol');
    participants.forEach(name => {
        // 为每个姓名创建<li>列表项并添加到有序列表中
        const listItem = document.createElement('li');
        listItem.textContent = name;
        // 最后将整个列表添加到页面的指定容器中
        orderedList.appendChild(listItem);
    });

    listContainer.appendChild(orderedList);

    // 控制台输出验证
    console.log('Sorted participants:', participants);

} catch (error) {
    // 捕获所有可能的错误
    alert(`Error: ${error.message}`);  // 用户友好的错误提示
    console.error('Program failed:', error);  // 控制台详细错误

    // 可选：在页面上显示错误信息
    const errorDisplay = document.createElement('p');
    errorDisplay.style.color = 'red';
    errorDisplay.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorDisplay);
}