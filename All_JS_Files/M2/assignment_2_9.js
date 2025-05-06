'use strict';

// 创建了even()函数，接收一个数字数组参数
function even(numbers) {
    // 创建新数组来存储偶数（不修改原数组）
    const evenNumbers = [];
    // 遍历数组中的每个元素
    for (let i = 0; i < numbers.length; i++) {
        // 检查当前数字是否为偶数
        if (numbers[i] % 2 === 0) {
            // 如果是偶数，添加到新数组
            evenNumbers.push(numbers[i]);
        }
    }
    // 返回只包含偶数的新数组
    return evenNumbers;
}

// 获取页面结果显示元素
const resultDiv = document.querySelector('#result');

// 硬编码的测试数组
const originalArray = [2, 7, 4];

// 调用even函数获取偶数数组
const evenArray = even(originalArray);

// 在页面显示结果
resultDiv.innerHTML = `
    <hr>
    <h4>Results:</h4>
    <p>There are items ${originalArray.join(', ')}</p>
    <P>The function returns a ${evenArray.length}-item array with items ${evenArray.join(', ')}.</p>
    <hr>
`;

// 同时在控制台输出结果（用于调试）
console.log('Original array:', originalArray);
console.log('Even numbers array:', evenArray);