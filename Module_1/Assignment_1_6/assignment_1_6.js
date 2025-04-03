'use strict';

// 1. 显示确认对话框询问是否计算平方根
/*使用confirm()显示确认窗口，返回值(true/false)存储在shouldCalculate变量中
    用户选择处理:
        1. 如果选择OK(shouldCalculate为true)：
            - 用prompt()获取用户输入的数字
            - 用parseFloat()将输入转为浮点数
        2. 如果选择Cancel，直接显示未计算信息*/
const shouldCalculate = confirm('Should I calculate the square root?');

// 2. 根据用户选择执行不同操作
const resultDiv = document.getElementById('result');

if (shouldCalculate) {
    // 用户选择OK
    const number = parseFloat(prompt('Please enter a number:'));

    // 3. 检查是否为负数
    if (number < 0) {
        // 输出负数错误信息到页面
        resultDiv.textContent = 'The square root of a negative number is not defined';
    } else {
        // 4. 计算并显示平方根
        /*使用Math.sqrt()计算平方根
        使用innerHTML将结果插入到HTML文档的<div id="result">中
        用toFixed(2)保留两位小数*/
        resultDiv.innerHTML = `
            <hr>
            <h4>Result</h4>
            <p>The square root of <strong>${number}</strong> is 
            <strong>${Math.sqrt(number).toFixed(2)}</strong></p>
            <hr>
`;
    }
} else {
    // 用户选择Cancel
    // 使用innerHTML将结果插入到HTML文档的<div id="result">中
    resultDiv.textContent = 'The square root is not calculated.';
}