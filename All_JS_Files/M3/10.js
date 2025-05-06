'use strict';

document.getElementById('source').addEventListener('submit', function(event) {
    // 阻止表单默认提交行为（页面刷新）
    event.preventDefault();

    // 获取输入框的值
    const firstName = document.querySelector('[name="firstname"]').value;
    const lastName = document.querySelector('[name="lastname"]').value;

    // 将结果输出到 <p id="target">
    document.getElementById('target').textContent = `Your name is ${firstName} ${lastName}`;
});