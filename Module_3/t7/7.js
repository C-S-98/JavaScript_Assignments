'use strict';

// 获取触发元素和目标图片元素
const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

// 鼠标悬停时切换图片为picB.jpg
trigger.addEventListener('mouseover', function() {
    target.src = 'img/picB.jpg';
});

// 鼠标移出时恢复图片为picA.jpg
trigger.addEventListener('mouseout', function() {
    target.src = 'img/picA.jpg';
});