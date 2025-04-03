'use strict';

// 创建一个空数组来存储数字
const numbers = [];

// 获取用户输入的5个数字
for (let i = 0; i < 5; i++) {
    const input = prompt(`Enter number ${i + 1}:`);
    // 使用parseFloat()将输入转换为数字
    const number = parseFloat(input);

    // 验证输入是否为有效数字
    if (isNaN(number)) {
        alert('Please enter a valid number!');
        // i--和continue确保只计数有效输入
        i--;
        continue;
    }
    /*
    反向输出：
        使用for循环从数组末尾(numbers.length - 1)开始遍历
        递减索引(i--)直到达到数组开头(i >= 0)
        使用console.log()输出每个数字
*/
    numbers.push(number);
}


// 在控制台打印原始数组
console.log('Original numbers:', numbers);

// 反向打印数字（不使用reverse()方法）
console.log('Numbers in reverse order:');
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}