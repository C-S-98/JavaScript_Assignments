'use strict';

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交
    const searchTerm = document.getElementById('query').value.trim();
    if (!searchTerm) return; // 如果输入为空则退出

    fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(searchTerm)}`)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            displayResults(data.result); // 注意：API返回的数据在result字段中
        })
        .catch(error => {
            console.error('Error fetching jokes:', error);
            document.getElementById('results').innerHTML = '<p>Failed to load jokes. Try again later.</p>';
        });
});

function displayResults(jokes) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // 清空旧结果

    if (jokes.length === 0) {
        resultsDiv.innerHTML = '<p>No jokes found. Try another keyword!</p>';
        return;
    }

    jokes.forEach(joke => {
        const article = document.createElement('article');
        const paragraph = document.createElement('p');
        paragraph.textContent = joke.value; // 笑话内容在value字段
        article.appendChild(paragraph);
        resultsDiv.appendChild(article);
    });
}