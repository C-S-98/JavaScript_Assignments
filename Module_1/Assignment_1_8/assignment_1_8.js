'use strict';

// 获取用户输入的起始年和结束年
const startYear = parseInt(prompt('Please enter the start year:'));
const endYear = parseInt(prompt('Please enter the end year:'));

// 验证输入有效性
    // 检查输入是否为有效数字
    // 确保起始年不大于结束年 startYear > endYear
if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
    alert('Invalid input! Please enter valid years.');
    throw new Error('Invalid year range');
}

// 获取结果容器
const resultDiv = document.querySelector('#result');

// 清空容器（确保开始是干净的）
resultDiv.innerHTML = '';

// 添加标题和分隔线（只需添加一次）
resultDiv.insertAdjacentHTML('beforeend', `
    <hr>
    <h4>Results</h4>
    <hr>
`);

// 创建<ul>元素作为容器
const ul = document.createElement('ul');

// 遍历年份区间
for (let year = startYear; year <= endYear; year++) {
    // 闰年判断逻辑
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        // 对每个闰年创建<li>元素并添加到列表中
        const li = document.createElement('li');
        li.textContent = year;
        ul.appendChild(li);
    }
}

// 将列表添加到结果容器
resultDiv.appendChild(ul);

// 添加结尾分隔线（使用appendChild确保不覆盖已有内容）
const endHr = document.createElement('hr');
resultDiv.appendChild(endHr);
/*注意！！
    这里如果使用“resultDiv.innerHTML = '<hr>';” 则会错误地使用了 innerHTML 覆盖了之前的内容。
错误原因：
    第一次使用 resultDiv.innerHTML = ... 添加了开头的 <hr> 和 <h4>
    第二次使用 resultDiv.innerHTML = '<hr>' 直接覆盖了之前的所有内容（包括您创建的 <ul>）
DOM操作原则：
    innerHTML 会完全替换元素内的所有内容
    要追加内容应该使用 appendChild() 或 insertAdjacentHTML()
正确做法是：
    避免内容覆盖：
        appendChild() 和 insertAdjacentHTML() 是追加操作
        不会像 innerHTML 那样覆盖已有内容
    更好的性能：
        减少不必要的DOM重绘
    更清晰的代码结构：
        明确展示每个元素的添加顺序*/

// 控制台输出验证
console.log(`Leap years between ${startYear} and ${endYear}:`);
console.log(ul.innerHTML);