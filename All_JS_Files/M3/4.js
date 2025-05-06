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
        link.target = '_blank';
        article.appendChild(link);

        // 图片处理（使用三元运算符）
        const img = document.createElement('img');
        img.src = show.image ? show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
        img.alt = show.name;
        article.appendChild(img);

        // 剧情摘要
        const summary = document.createElement('div');
        summary.innerHTML = show.summary;
        article.appendChild(summary);

        resultsDiv.appendChild(article);
    });
}