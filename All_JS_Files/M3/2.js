'use strict';

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const searchTerm = document.getElementById('query').value;
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`;

    // 使用fetch请求API
    fetch(apiUrl)
        .then(response => response.json()) // 解析JSON响应
        .then(data => {
            console.log(data); // 打印结果到控制台
        })
        .catch(error => {
            console.error('Error fetching data:', error); // 错误处理
        });
});