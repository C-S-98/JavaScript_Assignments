'use strict';

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('query').value;
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function displayResults(shows) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // 清空旧结果

    shows.forEach(item => {
        const show = item.show;
        const article = document.createElement('article');

        // 剧集名称
        const title = document.createElement('h2');
        title.textContent = show.name;
        article.appendChild(title);

        // 详情链接
        const link = document.createElement('a');
        link.href = show.url;
        link.textContent = 'View Details';
        link.target = '_blank'; // 新标签页打开
        article.appendChild(link);

        // 图片（处理缺失情况）
        if (show.image?.medium) {
            const img = document.createElement('img');
            img.src = show.image.medium;
            img.alt = show.name;
            article.appendChild(img);
        }

        // 剧情摘要
        const summary = document.createElement('div');
        summary.innerHTML = show.summary; // 注意：API返回的summary包含HTML标签
        article.appendChild(summary);

        resultsDiv.appendChild(article);
    });
}