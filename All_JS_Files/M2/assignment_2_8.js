'use strict';

// 定义concat函数，接收字符串数组参数stringArray
function concat(stringArray) {
    // 初始化空字符串作为结果容器
    let result = '';
    // 使用for循环遍历数组
    for (let i = 0; i < stringArray.length; i++) {
        // 将每个数组元素拼接到结果字符串
        result += stringArray[i];
    }
    // 返回拼接后的字符串
    return result;
}

// 硬编码的测试数组
const testArray = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

// 调用concat函数并获取结果
const concatenatedString = concat(testArray);

// 获取DOM元素并显示结果
const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
    <hr>
    <h4>Result: </h4>
    <p>Original array: [${testArray.join(', ')}]</p>
    <p>Concatenated result: <strong>${concatenatedString}</strong></p>
    <hr>
`;

// 控制台输出验证
console.log('Concatenated string:', concatenatedString);
