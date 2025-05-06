'use strict';

// 直接请求API并打印笑话
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        console.log(data.value); // 只打印笑话内容
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
    });